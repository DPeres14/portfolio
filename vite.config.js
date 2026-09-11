import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function contactApiPlugin() {
  return {
    name: 'contact-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res, next) => {
        if (req.method === 'POST') {
          let rawBody = ''

          for await (const chunk of req) {
            rawBody += chunk
          }

          try {
            req.body = rawBody ? JSON.parse(rawBody) : {}
          } catch {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(
              JSON.stringify({
                success: false,
                message: 'JSON inválido.',
              })
            )
            return
          }
        }

        const apiResponse = {
          status(code) {
            res.statusCode = code
            return apiResponse
          },
          json(payload) {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(payload))
          },
        }

        try {
          const { default: contactHandler } = await import(
            './api/contact.js'
          )
          await contactHandler(req, apiResponse)
        } catch (error) {
          next(error)
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  if (env.RESEND_API_KEY) {
    process.env.RESEND_API_KEY = env.RESEND_API_KEY
  }

  return {
    plugins: [contactApiPlugin(), react()],
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
    },
    // Configuração para importar ficheiros .md como raw
    assetsInclude: ['**/*.md'],
  }
})