import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  TextField,
  Paper,
  Divider,
} from '@mui/material';

import { motion } from 'framer-motion';
import { useState } from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SendIcon from '@mui/icons-material/Send';

export const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const website = formData.get('website');

    setIsSending(true);
    setStatus({
      type: '',
      message: '',
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          website,
        }),
      });

      const responseText = await response.text();
      let data = {};

      if (responseText) {
        try {
          data = JSON.parse(responseText);
        } catch {
          data = {};
        }
      }

      if (!response.ok) {
        throw new Error(
          data.message ||
            `Serviço de contacto indisponível (${response.status}).`
        );
      }

      setStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Obrigado pelo contacto.',
      });

      form.reset();
    } catch (error) {
      console.error(error);

      setStatus({
        type: 'error',
        message:
          'Não foi possível enviar a mensagem. Tenta novamente mais tarde.',
      });
    } finally {
      setIsSending(false);
    }
  };

  const inputStyles = {
    '& .MuiInputLabel-root': {
      color: '#77778d',
    },

    '& .MuiInputLabel-root.Mui-focused': {
      color: '#9b8ff5',
    },

    '& .MuiOutlinedInput-root': {
      color: '#f0f0f5',
      backgroundColor:
        'rgba(255,255,255,0.02)',

      '& fieldset': {
        borderColor:
          'rgba(255,255,255,0.08)',
      },

      '&:hover fieldset': {
        borderColor:
          'rgba(255,255,255,0.15)',
      },

      '&.Mui-focused fieldset': {
        borderColor: '#7c6df0',
      },
    },
  };

  return (
    <Box
      component="section"
      id="contacto"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 7 },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: '#8b7cf6',
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            Vamos conversar
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 1,
              mb: 2,
              fontWeight: 800,
              fontSize: { xs: '2.2rem', md: '3rem' },
              color: '#f5f5f7',
            }}
          >
            Contacto
          </Typography>

          <Typography
            sx={{
              maxWidth: 550,
              mx: 'auto',
              color: '#858599',
              lineHeight: 1.7,
            }}
          >
            Tens um projeto, uma oportunidade ou simplesmente queres
            trocar algumas ideias? Envia-me uma mensagem.
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            maxWidth: 1000,
            mx: 'auto',
            p: { xs: 2.5, md: 4 },

            background:
              'linear-gradient(145deg, rgba(28,28,42,0.96), rgba(18,18,28,0.98))',

            border:
              '1px solid rgba(255,255,255,0.07)',

            borderRadius: 3,
          }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 4, md: 6 }}
          >
            {/* Contact information */}
            <Box
              sx={{
                width: { xs: '100%', md: '35%' },
              }}
            >
              <Typography
                sx={{
                  color: '#f0f0f5',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  mb: 1,
                }}
              >
                Vamos criar algo?
              </Typography>

              <Typography
                sx={{
                  color: '#858599',
                  fontSize: '0.85rem',
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                Estou interessado em projetos, oportunidades e
                colaborações relacionadas com desenvolvimento de software.
              </Typography>

              <Stack spacing={2.5}>
                <Divider
                  sx={{
                    borderColor:
                      'rgba(255,255,255,0.06)',
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      color: '#66667b',
                      fontSize: '0.68rem',
                      mb: 1,
                    }}
                  >
                    Redes sociais
                  </Typography>

                  <Stack direction="row" spacing={1}>
                    <IconButton
                      href="https://github.com/DPeres14"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#858599',
                        backgroundColor:
                          'rgba(255,255,255,0.04)',

                        '&:hover': {
                          color: '#fff',
                          backgroundColor:
                            'rgba(124,109,240,0.12)',
                        },
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>

                    <IconButton
                      href="https://www.linkedin.com/in/diogo-peres-bb6820206/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#858599',
                        backgroundColor:
                          'rgba(255,255,255,0.04)',

                        '&:hover': {
                          color: '#fff',
                          backgroundColor:
                            'rgba(124,109,240,0.12)',
                        },
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton
                      href="https://www.instagram.com/dperes28/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#858599',
                        backgroundColor:
                          'rgba(255,255,255,0.04)',

                        '&:hover': {
                          color: '#fff',
                          backgroundColor:
                            'rgba(124,109,240,0.12)',
                        },
                      }}
                    >
                      <InstagramIcon />
                    </IconButton>
                  </Stack>
                </Box>
              </Stack>
            </Box>

            {/* Form */}
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                flex: 1,
              }}
            >
              <Stack spacing={2}>
                <Box
                  component="input"
                  type="text"
                  name="website"
                  autoComplete="off"
                  tabIndex={-1}
                  aria-hidden="true"
                  sx={{
                    position: 'absolute',
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: '-1px',
                    overflow: 'hidden',
                    clip: 'rect(0, 0, 0, 0)',
                    whiteSpace: 'nowrap',
                    border: 0,
                  }}
                />

                <TextField
                  label="Nome"
                  name="name"
                  fullWidth
                  required
                  sx={inputStyles}
                />

                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  required
                  sx={inputStyles}
                />

                <TextField
                  label="Mensagem"
                  name="message"
                  fullWidth
                  required
                  multiline
                  rows={5}
                  sx={inputStyles}
                />

                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  size="large"
                  disabled={isSending}
                  sx={{
                    alignSelf: 'flex-start',
                    px: 3,
                    py: 1.2,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 700,
                  }}
                >
                  {isSending ? 'A enviar...' : 'Enviar mensagem'}
                </Button>

                {status.message && (
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color:
                        status.type === 'success'
                          ? '#7dd3a8'
                          : '#f28b8b',
                    }}
                  >
                    {status.message}
                  </Typography>
                )}
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </motion.div>
    </Box>
  );
};