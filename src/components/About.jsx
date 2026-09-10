import {
  Box,
  Typography,
  Grid,
  Paper,
  Stack,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';

import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const stats = [
  {
    icon: <CodeIcon />,
    number: '3+',
    label: 'Projetos desenvolvidos',
  },
  {
    icon: <SchoolIcon />,
    number: '10+',
    label: 'Tecnologias exploradas',
  },
  {
    icon: <GroupsIcon />,
    number: '1',
    label: 'Projeto empresarial',
  },
  {
    icon: <RocketLaunchIcon />,
    number: '∞',
    label: 'Vontade de aprender',
  },
];

const technologies = [
  'React',
  'JavaScript',
  'Node.js',
  'Flutter',
  'Python',
  'SQL',
];

export const About = () => {
  return (
    <Box
      component="section"
      id="sobre"
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
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Typography
            variant="overline"
            sx={{
              color: '#8b7cf6',
              fontWeight: 700,
              letterSpacing: 3,
              fontSize: '0.75rem',
            }}
          >
            Conhece-me melhor
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 1,
              fontWeight: 800,
              fontSize: { xs: '2.2rem', md: '3rem' },
              letterSpacing: '-0.03em',
              color: '#f5f5f7',
            }}
          >
            Sobre mim
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 7 }} alignItems="center">
          {/* Texto */}
          <Grid item xs={12} md={7}>
            <Stack spacing={2.5}>
              <Typography
                sx={{
                  color: '#c0c0cc',
                  fontSize: { xs: '1rem', md: '1.08rem' },
                  lineHeight: 1.85,
                }}
              >
                Sou estudante e desenvolvedor de software com especial
                interesse por desenvolvimento web, programação e criação de
                soluções digitais. Gosto de perceber como as coisas
                funcionam e, principalmente, de transformar uma ideia num
                produto que realmente possa ser utilizado.
              </Typography>

              <Typography
                sx={{
                  color: '#9292a7',
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  lineHeight: 1.85,
                }}
              >
                Ao longo do meu percurso tenho trabalhado em projetos
                frontend, backend e mobile, passando pela construção de APIs,
                bases de dados, autenticação, interfaces e integração entre
                diferentes sistemas.
              </Typography>

              <Typography
                sx={{
                  color: '#9292a7',
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  lineHeight: 1.85,
                }}
              >
                Um dos projetos que mais marcou o meu percurso foi o
                desenvolvimento de uma plataforma empresarial de gamificação,
                onde tive também a oportunidade de assumir responsabilidades
                de liderança e coordenação de equipa.
              </Typography>
            </Stack>

            {/* Technologies */}
            <Box sx={{ mt: 4 }}>
              <Typography
                sx={{
                  color: '#f0f0f5',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  mb: 1.5,
                }}
              >
                Tecnologias com que trabalho
              </Typography>

              <Stack
                direction="row"
                sx={{
                  flexWrap: 'wrap',
                  gap: 1,
                }}
              >
                {technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    sx={{
                      height: 32,
                      color: '#aaa2f5',
                      backgroundColor:
                        'rgba(124, 109, 240, 0.08)',
                      border:
                        '1px solid rgba(124, 109, 240, 0.16)',

                      '& .MuiChip-label': {
                        px: 1.5,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                      },
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Stats */}
          <Grid item xs={12} md={5}>
            <Grid container spacing={2}>
              {stats.map((stat, index) => (
                <Grid item xs={6} key={stat.label}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        minHeight: 145,
                        p: 2.5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',

                        background:
                          'linear-gradient(145deg, rgba(28, 28, 42, 0.96), rgba(18, 18, 28, 0.98))',

                        border:
                          '1px solid rgba(255, 255, 255, 0.07)',

                        borderRadius: 3,

                        transition:
                          'transform 0.3s ease, border-color 0.3s ease',

                        '&:hover': {
                          transform: 'translateY(-5px)',
                          borderColor:
                            'rgba(124, 109, 240, 0.3)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 2,
                          mb: 1.5,
                          color: '#9b8ff5',
                          backgroundColor:
                            'rgba(124, 109, 240, 0.1)',

                          '& svg': {
                            fontSize: 21,
                          },
                        }}
                      >
                        {stat.icon}
                      </Box>

                      <Typography
                        sx={{
                          color: '#f5f5f7',
                          fontWeight: 800,
                          fontSize: '1.5rem',
                          lineHeight: 1,
                          mb: 0.7,
                        }}
                      >
                        {stat.number}
                      </Typography>

                      <Typography
                        sx={{
                          color: '#77778d',
                          fontSize: '0.7rem',
                          lineHeight: 1.4,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};