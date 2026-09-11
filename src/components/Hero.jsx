
// ======================================================
// Hero.jsx
// ======================================================

import {
  Box,
  Typography,
  Button,
  Avatar,
  Container,
  Stack,
  Chip,
} from '@mui/material';

import { motion } from 'framer-motion';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Hero = () => {
  const scrollToProjects = () => {
    document
      .getElementById('projetos')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document
      .getElementById('sobre')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      id="inicio"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 8 },
      }}
    >
      {/* Glow */}
      <Box
        sx={{
          position: 'absolute',
          width: 500,
          height: 500,
          right: { xs: '-50%', md: '-10%' },
          top: '10%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(124,109,240,0.12), transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          spacing={{ xs: 5, md: 10 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            style={{ width: '100%' }}
          >
            <Box sx={{ maxWidth: 680 }}>
              <Chip
                label="Disponível para novos desafios"
                size="small"
                sx={{
                  mb: 2.5,
                  color: '#aaa2f5',
                  backgroundColor:
                    'rgba(124, 109, 240, 0.08)',
                  border:
                    '1px solid rgba(124, 109, 240, 0.16)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                }}
              />

              <Typography
                sx={{
                  color: '#8b7cf6',
                  fontWeight: 600,
                  fontSize: '1rem',
                  mb: 1,
                }}
              >
                Olá, sou o
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: '3rem',
                    sm: '4rem',
                    md: '5rem',
                  },
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: '-0.05em',
                  mb: 2,

                  background:
                    'linear-gradient(135deg, #ffffff 20%, #aaa2f5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Diogo Peres
              </Typography>

              <Typography
                sx={{
                  color: '#b0b0bf',
                  fontSize: {
                    xs: '1.4rem',
                    md: '1.8rem',
                  },
                  fontWeight: 500,
                  mb: 3,
                }}
              >
                 Desenvolvedor fullstack de aplicações web e mobile
              </Typography>

              <Typography
                sx={{
                  maxWidth: 590,
                  color: '#858599',
                  fontSize: {
                    xs: '0.95rem',
                    md: '1.05rem',
                  },
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                 Crio produtos digitais com React, Node.js e PostgreSQL,
                 ligando interfaces claras a APIs robustas e dados bem
                 estruturados. Gosto de transformar problemas reais em
                 soluções simples e úteis.
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1.5}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={scrollToProjects}
                  sx={{
                    px: 3,
                    py: 1.3,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 700,
                  }}
                >
                  Ver projetos
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<DownloadIcon />}
                  component="a"
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    px: 3,
                    py: 1.3,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 600,
                    color: '#b0b0bf',
                    borderColor:
                      'rgba(255,255,255,0.1)',

                    '&:hover': {
                      color: '#fff',
                      borderColor: '#7c6df0',
                      backgroundColor:
                        'rgba(124,109,240,0.06)',
                    },
                  }}
                >
                  Download CV
                </Button>
              </Stack>
            </Box>
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: -25,
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(124,109,240,0.15), transparent 65%)',
                  filter: 'blur(15px)',
                }}
              />

              <Avatar
                src="/perfil.png"
                alt="Diogo Peres"
                sx={{
                  position: 'relative',
                  width: {
                    xs: 210,
                    sm: 260,
                    md: 330,
                  },
                  height: {
                    xs: 210,
                    sm: 260,
                    md: 330,
                  },
                  border:
                    '3px solid rgba(124,109,240,0.8)',
                  boxShadow:
                    '0 0 70px rgba(124,109,240,0.18)',
                }}
              />
            </Box>
          </motion.div>
        </Stack>

        {/* Scroll indicator */}
        <Box
          onClick={scrollToAbout}
          sx={{
            position: 'absolute',
            bottom: 25,
            left: '50%',
            transform: 'translateX(-50%)',
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
            color: '#555568',
            cursor: 'pointer',

            '&:hover': {
              color: '#8b7cf6',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: '0.65rem',
              letterSpacing: 2,
              textTransform: 'uppercase',
              mb: 0.5,
            }}
          >
            Explorar
          </Typography>

          <KeyboardArrowDownIcon
            sx={{
              animation: 'bounce 2s infinite',
              '@keyframes bounce': {
                '0%, 100%': {
                  transform: 'translateY(0)',
                },
                '50%': {
                  transform: 'translateY(5px)',
                },
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};