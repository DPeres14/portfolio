import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Stack,
  LinearProgress,
} from '@mui/material';

import { motion } from 'framer-motion';

import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Projeto em desenvolvimento',
    description:
      'Uma nova aplicação focada em explorar novas tecnologias, arquitetura e desenvolvimento fullstack.',
    category: 'Web Development',
    progress: 65,
    technologies: ['React', 'Node.js', 'SQL'],
    status: 'Em desenvolvimento',
    github: '#',
  },

  {
    title: 'Projeto experimental',
    description:
      'Projeto pessoal criado para experimentar novas ideias, melhorar competências técnicas e testar diferentes abordagens.',
    category: 'Experimental',
    progress: 40,
    technologies: ['React', 'JavaScript', 'MUI'],
    status: 'Em desenvolvimento',
    github: '#',
  },
];

export const Development = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top, rgba(124,109,240,0.10), transparent 35%), #0a0a0f',
        color: '#f5f5f7',
        py: { xs: 8, md: 12 },
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
            color: '#9696aa',
            textTransform: 'none',
            mb: { xs: 6, md: 8 },

            '&:hover': {
              color: '#a78bfa',
              backgroundColor: 'rgba(124,109,240,0.06)',
            },
          }}
        >
          Voltar ao portfólio
        </Button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              maxWidth: 750,
              mb: { xs: 6, md: 8 },
            }}
          >
            <Chip
              icon={
                <ConstructionOutlinedIcon
                  sx={{ fontSize: '16px !important' }}
                />
              }
              label="Projetos em desenvolvimento"
              sx={{
                mb: 2.5,
                color: '#a78bfa',
                backgroundColor: 'rgba(124,109,240,0.08)',
                border: '1px solid rgba(124,109,240,0.16)',

                '& .MuiChip-icon': {
                  color: '#8b7cf6',
                },

                '& .MuiChip-label': {
                  fontWeight: 600,
                  fontSize: '0.75rem',
                },
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: {
                  xs: '2.5rem',
                  sm: '3.5rem',
                  md: '4.5rem',
                },
                lineHeight: 1.05,
                letterSpacing: '-0.045em',
                mb: 2.5,
              }}
            >
              O que estou a{' '}
              <Box
                component="span"
                sx={{
                  background:
                    'linear-gradient(90deg, #8b7cf6, #c4b5fd)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                construir.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: '#858599',
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                lineHeight: 1.8,
                maxWidth: 680,
              }}
            >
              Nem todos os projetos chegam imediatamente ao portfólio.
              Aqui podes acompanhar algumas das aplicações e experiências
              que estou atualmente a desenvolver, explorar ou aperfeiçoar.
            </Typography>
          </Box>
        </motion.div>

        {/* Projects */}
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background:
                      'linear-gradient(145deg, rgba(28,28,42,0.96), rgba(18,18,28,0.98))',
                    border:
                      '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 3,
                    transition:
                      'transform .3s ease, border-color .3s ease, box-shadow .3s ease',

                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor:
                        'rgba(124,109,240,0.3)',
                      boxShadow:
                        '0 20px 50px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 2.5, md: 3.5 },
                    }}
                  >
                    {/* Top */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: 2,
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background:
                            'rgba(124,109,240,0.1)',
                          border:
                            '1px solid rgba(124,109,240,0.15)',
                        }}
                      >
                        <CodeOutlinedIcon
                          sx={{
                            color: '#9b8ff5',
                            fontSize: 25,
                          }}
                        />
                      </Box>

                      <Chip
                        label={project.status}
                        size="small"
                        sx={{
                          color: '#a78bfa',
                          backgroundColor:
                            'rgba(124,109,240,0.08)',
                          border:
                            '1px solid rgba(124,109,240,0.12)',

                          '& .MuiChip-label': {
                            fontSize: '0.68rem',
                            fontWeight: 600,
                          },
                        }}
                      />
                    </Box>

                    {/* Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 750,
                        fontSize: '1.25rem',
                        mb: 1,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: '#858599',
                        fontSize: '0.88rem',
                        lineHeight: 1.75,
                        mb: 3,
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Progress */}
                    <Box sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mb: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            color: '#77778d',
                            fontSize: '0.72rem',
                          }}
                        >
                          Progresso
                        </Typography>

                        <Typography
                          sx={{
                            color: '#a78bfa',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                          }}
                        >
                          {project.progress}%
                        </Typography>
                      </Box>

                      <LinearProgress
                        variant="determinate"
                        value={project.progress}
                        sx={{
                          height: 5,
                          borderRadius: 5,
                          backgroundColor:
                            'rgba(255,255,255,0.06)',

                          '& .MuiLinearProgress-bar': {
                            borderRadius: 5,
                            background:
                              'linear-gradient(90deg, #7c6df0, #a78bfa)',
                          },
                        }}
                      />
                    </Box>

                    {/* Technologies */}
                    <Stack
                      direction="row"
                      spacing={0.8}
                      flexWrap="wrap"
                      useFlexGap
                      sx={{ mb: 3 }}
                    >
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            color: '#aaaabd',
                            backgroundColor:
                              'rgba(255,255,255,0.035)',
                            border:
                              '1px solid rgba(255,255,255,0.06)',

                            '& .MuiChip-label': {
                              fontSize: '0.68rem',
                            },
                          }}
                        />
                      ))}
                    </Stack>

                    {/* Actions */}
                    <Stack direction="row" spacing={1.5}>
                      {project.github !== '#' && (
                        <Button
                          component="a"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<GitHubIcon />}
                          size="small"
                          sx={{
                            color: '#aaaabd',
                            textTransform: 'none',
                          }}
                        >
                          GitHub
                        </Button>
                      )}

                      <Button
                        disabled
                        startIcon={
                          <RocketLaunchOutlinedIcon />
                        }
                        size="small"
                        sx={{
                          textTransform: 'none',
                        }}
                      >
                        Em breve
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Box
            sx={{
              mt: 8,
              p: { xs: 3, md: 4 },
              textAlign: 'center',
              borderRadius: 3,
              border:
                '1px solid rgba(255,255,255,0.06)',
              background:
                'rgba(255,255,255,0.015)',
            }}
          >
            <Typography
              sx={{
                color: '#f0f0f5',
                fontWeight: 650,
                mb: 1,
              }}
            >
              Em constante evolução.
            </Typography>

            <Typography
              sx={{
                color: '#77778d',
                fontSize: '0.82rem',
                lineHeight: 1.7,
              }}
            >
              Alguns destes projetos podem mudar bastante antes de
              chegarem à versão final. Esta página acompanha esse
              processo.
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};