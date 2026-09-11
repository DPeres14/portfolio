# Meu Portfólio

Portfólio profissional de Diogo Peres, desenvolvido com React, Material UI,
Framer Motion e Vite.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Este comando inicia apenas o frontend. A função `api/contact.js` precisa de
ser executada através da Vercel localmente ou em produção. Para testar a API
localmente, instala a CLI da Vercel e usa:

```bash
npm install --global vercel
vercel dev
```

Depois configura `RESEND_API_KEY` no ambiente local da Vercel quando for
testar o envio real.

No desenvolvimento local, cria ou edita `.env.local` e adiciona a chave
manualmente, sem a partilhar nem a colocar no Git:

```env
RESEND_API_KEY=re_a_tua_chave_do_resend
```

Para validar a versão de produção:

```bash
npm run build
npm run preview
```

## Formulário de contacto

O endpoint de contacto usa o Resend. Copia `.env.example` para `.env` e
preenche a chave da API:

```env
RESEND_API_KEY=re_example
```

Em produção, configura `RESEND_API_KEY` nas variáveis de ambiente da
plataforma de alojamento. Para enviar emails a partir de um domínio próprio,
valida primeiro esse domínio no Resend e atualiza o endereço `from` em
`api/contact.js`.

Antes de publicar, testa:

- envio com dados válidos;
- validação de campos vazios e email inválido;
- rejeição do campo honeypot;
- limite de novas submissões durante dez minutos.

## Tecnologias

- React 18
- Material UI 5
- Framer Motion
- React Router
- Vite
- React Markdown
- Resend