import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Método não permitido.',
    });
  }

  try {
    const { name, email, message } = req.body;

    // Validação básica
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Preenche todos os campos.',
      });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portefólio <contacto@diogoperes.vercel.app>',
      to: ['contacto.diogoperes@gmail.com'],
      replyTo: email,
      subject: `Novo contacto do portefólio: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
          <h2>Novo contacto através do portefólio</h2>

          <p>
            Recebeste uma nova mensagem através do teu portefólio.
          </p>

          <hr />

          <p>
            <strong>Nome:</strong><br />
            ${name}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${email}
          </p>

          <p>
            <strong>Mensagem:</strong><br />
            ${message.replace(/\n/g, '<br />')}
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
        message: 'Erro ao enviar o email.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Mensagem enviada com sucesso.',
      id: data?.id,
    });
  } catch (error) {
    console.error('Erro API:', error);

    return res.status(500).json({
      success: false,
      message: 'Ocorreu um erro inesperado.',
    });
  }
}