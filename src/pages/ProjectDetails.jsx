import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import {
  Box,
  Typography,
  Button,
  Chip,
  Grid,
  Stack,
  Divider,
} from '@mui/material';

import { motion } from 'framer-motion';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';

import { projects } from '../data/projects';

export const ProjectDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [id]);

  const project = projects.find(
    (item) => String(item.id) === String(id)
  );

  if (!project) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0f',
          color: '#fff',
          px: 3,
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: 800, mb: 2 }}
          >
            Projeto não encontrado
          </Typography>

          <Typography
            sx={{
              color: '#858599',
              mb: 4,
            }}
          >
            O projeto que procuras não existe ou foi removido.
          </Typography>

              {(project.contribution || project.impact) && (
                <Stack spacing={1.5} sx={{ mb: 3 }}>
                  {project.contribution && (
                    <Typography
                      sx={{
                        color: '#c0c0cc',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                      }}
                    >
                      <strong>O meu contributo:</strong>{' '}
                      {project.contribution}
                    </Typography>
                  )}

                  {project.impact && (
                    <Typography
                      sx={{
                        color: '#c0c0cc',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                      }}
                    >
                      <strong>Resultado:</strong> {project.impact}
                    </Typography>
                  )}
                </Stack>
              )}

          <Button
            component={Link}
            to="/"
            startIcon={<ArrowBackIcon />}
            sx={{
              color: '#a78bfa',
              textTransform: 'none',
            }}
          >
            Voltar ao portfólio
          </Button>
        </Box>
      </Box>
    );
  }

  const statusStyles = {
    completed: {
      color: '#8ee6b0',
      background: 'rgba(74, 222, 128, 0.08)',
      border: 'rgba(74, 222, 128, 0.15)',
    },

    development: {
      color: '#a78bfa',
      background: 'rgba(124, 109, 240, 0.08)',
      border: 'rgba(124, 109, 240, 0.16)',
    },

    archived: {
      color: '#a0a0b5',
      background: 'rgba(255, 255, 255, 0.05)',
      border: 'rgba(255, 255, 255, 0.08)',
    },
  };

  const status =
    statusStyles[project.status] || statusStyles.archived;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top, rgba(124,109,240,0.09), transparent 30%), #0a0a0f',
        color: '#f5f5f7',
        pt: { xs: 10, md: 11 },
        pb: { xs: 4, md: 7 },
      }}
    >
      <Box
        sx={{
          maxWidth: 1150,
          mx: 'auto',
          px: { xs: 2.5, md: 4 },
        }}
      >
        {/* Voltar */}
        <Button
          component={Link}
          to="/"
          startIcon={<ArrowBackIcon />}
          sx={{
            color: '#858599',
            textTransform: 'none',
            mb: { xs: 5, md: 7 },

            '&:hover': {
              color: '#a78bfa',
              backgroundColor: 'rgba(124,109,240,0.06)',
            },
          }}
        >
          Voltar aos projetos
        </Button>

        {/* Hero */}
        <Grid
          container
          spacing={{ xs: 4, md: 7 }}
          alignItems="center"
          sx={{ mb: { xs: 7, md: 10 } }}
        >
          {/* Imagem */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border:
                    '1px solid rgba(255,255,255,0.08)',
                  backgroundColor: '#11111a',
                  boxShadow:
                    '0 25px 70px rgba(0,0,0,0.35)',
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    display: 'block',
                    width: '100%',
                    aspectRatio: '16 / 10',
                    objectFit: 'cover',
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, transparent 50%, rgba(10,10,15,0.45))',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Informação */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Chip
                label={project.statusLabel}
                size="small"
                sx={{
                  mb: 2.5,
                  color: status.color,
                  backgroundColor: status.background,
                  border: `1px solid ${status.border}`,

                  '& .MuiChip-label': {
                    fontSize: '0.7rem',
                    fontWeight: 700,
                  },
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: {
                    xs: '2.5rem',
                    md: '3.7rem',
                  },
                  lineHeight: 1.05,
                  letterSpacing: '-0.04em',
                  mb: 2,
                }}
              >
                {project.title}
              </Typography>

              <Typography
                sx={{
                  color: '#9292a7',
                  fontSize: {
                    xs: '0.95rem',
                    md: '1.05rem',
                  },
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                {project.longDescription}
              </Typography>

              {(project.contribution || project.impact) && (
                <Stack spacing={1.5} sx={{ mb: 3 }}>
                  {project.contribution && (
                    <Typography
                      sx={{
                        color: '#c0c0cc',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                      }}
                    >
                      <strong>O meu contributo:</strong>{' '}
                      {project.contribution}
                    </Typography>
                  )}

                  {project.impact && (
                    <Typography
                      sx={{
                        color: '#c0c0cc',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                      }}
                    >
                      <strong>Resultado:</strong> {project.impact}
                    </Typography>
                  )}
                </Stack>
              )}

              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                useFlexGap
                sx={{ mb: 3 }}
              >
                {project.stack.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      color: '#b6b6c8',
                      backgroundColor:
                        'rgba(255,255,255,0.04)',
                      border:
                        '1px solid rgba(255,255,255,0.07)',
                    }}
                  />
                ))}
              </Stack>

              <Typography
                sx={{
                  color: '#68687c',
                  fontSize: '0.78rem',
                }}
              >
                {project.year} · {project.category}
              </Typography>

              {/* Links */}
              {(project.live || project.code) && (
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ mt: 3 }}
                >
                  {project.live && (
                    <Button
                      variant="contained"
                      component="a"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<OpenInNewIcon />}
                      sx={{
                        backgroundColor: '#7c6df0',
                        textTransform: 'none',
                        fontWeight: 600,
                        borderRadius: 2,
                        px: 2.2,

                        '&:hover': {
                          backgroundColor: '#8b7cf6',
                        },
                      }}
                    >
                      Ver projeto
                    </Button>
                  )}

                  {project.code && (
                    <Button
                      component="a"
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHubIcon />}
                      sx={{
                        color: '#aaaabd',
                        textTransform: 'none',
                      }}
                    >
                      GitHub
                    </Button>
                  )}
                </Stack>
              )}
            </motion.div>
          </Grid>
        </Grid>

        {/* Nota */}
        {project.note && (
          <Box
            sx={{
              mb: 8,
              p: { xs: 2.5, md: 3 },
              borderRadius: 2.5,
              backgroundColor:
                'rgba(124,109,240,0.045)',
              border:
                '1px solid rgba(124,109,240,0.12)',
            }}
          >
            <Typography
              sx={{
                color: '#aaa4d9',
                fontSize: '0.85rem',
                lineHeight: 1.7,
              }}
            >
              {project.note}
            </Typography>
          </Box>
        )}

        <Divider
          sx={{
            borderColor: 'rgba(255,255,255,0.07)',
            mb: { xs: 6, md: 8 },
          }}
        />

        {/* Informação */}
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
        >
          {/* Funcionalidades */}
          <Grid item xs={12} md={6}>
            <SectionTitle
              icon={<CheckCircleOutlineIcon />}
              eyebrow="O que foi desenvolvido"
              title="Funcionalidades"
            />

            <Stack spacing={1.5} sx={{ mt: 3 }}>
              {project.features.map((feature) => (
                <Box
                  key={feature}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                  }}
                >
                  <CheckCircleOutlineIcon
                    sx={{
                      color: '#8b7cf6',
                      fontSize: 19,
                      mt: 0.2,
                    }}
                  />

                  <Typography
                    sx={{
                      color: '#a0a0b3',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Aprendizagens */}
          <Grid item xs={12} md={6}>
            <SectionTitle
              icon={<SchoolOutlinedIcon />}
              eyebrow="Experiência"
              title="O que aprendi"
            />

            <Stack spacing={1.5} sx={{ mt: 3 }}>
              {project.learnings.map((learning) => (
                <Box
                  key={learning}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                  }}
                >
                  <SchoolOutlinedIcon
                    sx={{
                      color: '#8b7cf6',
                      fontSize: 19,
                      mt: 0.2,
                    }}
                  />

                  <Typography
                    sx={{
                      color: '#a0a0b3',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {learning}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Footer da página */}
        <Box
          sx={{
            mt: { xs: 8, md: 12 },
            pt: 4,
            borderTop:
              '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Typography
            sx={{
              color: '#68687c',
              fontSize: '0.75rem',
            }}
          >
            Projeto {String(project.id).padStart(2, '0')}
          </Typography>

          <Button
            component={Link}
            to="/"
            endIcon={<ArrowBackIcon />}
            sx={{
              color: '#9b8ff5',
              textTransform: 'none',
              flexDirection: 'row-reverse',
            }}
          >
            Voltar ao portfólio
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const SectionTitle = ({ icon, eyebrow, title }) => (
  <Box>
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Box
        sx={{
          display: 'flex',
          color: '#8b7cf6',
        }}
      >
        {icon}
      </Box>

      <Typography
        sx={{
          color: '#8b7cf6',
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: 'uppercase',
        }}
      >
        {eyebrow}
      </Typography>
    </Stack>

    <Typography
      variant="h3"
      sx={{
        fontWeight: 750,
        fontSize: {
          xs: '1.8rem',
          md: '2.2rem',
        },
        letterSpacing: '-0.03em',
      }}
    >
      {title}
    </Typography>
  </Box>
);