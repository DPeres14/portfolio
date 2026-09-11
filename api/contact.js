import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;
const recentSubmissions = new Map();
const rateLimitWindowMs = 10 * 60 * 1000;

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Método não permitido.',
        });
    }

    try {
        const { name, email, message, website } = req.body || {};

        if (website) {
          return res.status(400).json({
            success: false,
            message: 'Não foi possível enviar a mensagem.',
          });
        }

        // Validação básica
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Preenche todos os campos.',
            });
        }

          if (
            typeof name !== 'string' ||
            typeof email !== 'string' ||
            typeof message !== 'string' ||
            name.length > 120 ||
            email.length > 254 ||
            message.length > 5000 ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
          ) {
            return res.status(400).json({
              success: false,
              message: 'Verifica os dados enviados.',
            });
          }

          const clientAddress =
            req.headers['x-forwarded-for']?.split(',')[0].trim() ||
            req.socket?.remoteAddress ||
            'unknown';
          const lastSubmission = recentSubmissions.get(clientAddress);

          if (
            lastSubmission &&
            Date.now() - lastSubmission < rateLimitWindowMs
          ) {
            return res.status(429).json({
              success: false,
              message:
                'Já recebemos uma mensagem tua. Tenta novamente mais tarde.',
            });
          }

          const safeName = escapeHtml(name.trim());
          const safeEmail = escapeHtml(email.trim());
          const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br />');

        if (!resend) {
            return res.status(500).json({
                success: false,
                message: 'Serviço de email não configurado.',
            });
        }

        const { data, error } = await resend.emails.send({
            from: 'Portefólio <onboarding@resend.dev>',
            to: ['peres.diogor@gmail.com'],
            replyTo: email,
            subject: `Novo contacto do portefólio: ${name.trim()}`,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
          <h2>Novo contacto através do portefólio</h2>

          <p>
            Recebeste uma nova mensagem através do teu portefólio.
          </p>

          <hr />

          <p>
            <strong>Nome:</strong><br />
            ${safeName}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${safeEmail}
          </p>

          <p>
            <strong>Mensagem:</strong><br />
            ${safeMessage}
          </p>

          <hr />

          <p style="color: #777; font-size: 12px;">
            Esta mensagem foi enviada através do formulário de contacto
            do portefólio de Diogo Peres.
          </p>
        </div>
      `,
        });

        if (error) {
            console.error('Erro Resend:', error);

            return res.status(500).json({
                success: false,
                message: error.message || 'Erro ao enviar o email.',
            });
        }

          recentSubmissions.set(clientAddress, Date.now());

        return res.status(200).json({
            success: true,
            message: 'Mensagem enviada com sucesso.',
            id: data?.id,
        });
    } catch (error) {
        console.error('Erro API:', error);

        return res.status(500).json({
            success: false,
            message: error.message || 'Ocorreu um erro inesperado.',
        });
    }
}