import { Box, Typography, Grid, Paper, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import LanguageIcon from '@mui/icons-material/Language';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';

export const Skills = () => {
  const skillIcons = {
    web: <LanguageIcon />,
    database: <StorageIcon />,
    code: <CodeIcon />,
    build: <BuildIcon />,
  };
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
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
              fontSize: '0.75rem',
            }}
          >
            Tecnologias & conhecimentos
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 1,
              mb: 2,
              fontWeight: 800,
              fontSize: { xs: '2.2rem', md: '3rem' },
              letterSpacing: '-0.03em',
              color: '#f5f5f7',
            }}
          >
            Skills
          </Typography>

          <Typography
            sx={{
              maxWidth: 650,
              mx: 'auto',
              color: '#9494aa',
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              lineHeight: 1.7,
            }}
          >
            Tecnologias e ferramentas que utilizo para transformar ideias
            em aplicações funcionais, desde o frontend até ao backend.
          </Typography>
        </Box>

        {/* Skills */}
        <Grid container spacing={3}>
          {skills.map((category, categoryIndex) => (
            <Grid
              item
              xs={12}
              md={6}
              key={category.name}
            >
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: categoryIndex * 0.1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                style={{ height: '100%' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    height: '100%',
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 3,

                    background:
                      'linear-gradient(145deg, rgba(28, 28, 42, 0.96), rgba(18, 18, 28, 0.98))',

                    border:
                      '1px solid rgba(255, 255, 255, 0.07)',

                    transition:
                      'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',

                    '&:hover': {
                      transform: 'translateY(-5px)',
                      borderColor:
                        'rgba(124, 109, 240, 0.3)',
                      boxShadow:
                        '0 15px 45px rgba(0, 0, 0, 0.25)',
                    },
                  }}
                >
                  {/* Category header */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        width: 46,
                        height: 46,
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                        borderRadius: 2,
                        color: '#9b8ff5',
                        backgroundColor:
                          'rgba(124, 109, 240, 0.1)',
                        border:
                          '1px solid rgba(124, 109, 240, 0.15)',

                        '& svg': {
                          fontSize: 22,
                        },
                      }}
                    >
                      {skillIcons[category.icon]}
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          color: '#f2f2f6',
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          mb: 0.5,
                        }}
                      >
                        {category.name}
                      </Typography>

                      <Typography
                        sx={{
                          color: '#77778d',
                          fontSize: '0.78rem',
                          lineHeight: 1.5,
                        }}
                      >
                        {category.description}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Skills list */}
                  <Stack spacing={2.2}>
                    {category.items.map((skill) => (
                      <Box key={skill.name}>
                        {/* Name + percentage */}
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 0.8,
                          }}
                        >
                          <Typography
                            sx={{
                              color: '#e5e5eb',
                              fontSize: '0.85rem',
                              fontWeight: 500,
                            }}
                          >
                            {skill.name}
                          </Typography>

                          <Typography
                            sx={{
                              color: '#7c6df0',
                              fontSize: '0.72rem',
                              fontWeight: 700,
                            }}
                          >
                            {skill.level}%
                          </Typography>
                        </Box>

                        {/* Progress */}
                        <Box
                          sx={{
                            width: '100%',
                            height: 5,
                            borderRadius: 10,
                            overflow: 'hidden',
                            backgroundColor:
                              'rgba(255, 255, 255, 0.06)',
                          }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${skill.level}%`,
                            }}
                            transition={{
                              duration: 1,
                              delay: 0.2 + categoryIndex * 0.1,
                              ease: 'easeOut',
                            }}
                            viewport={{ once: true }}
                            style={{
                              height: '100%',
                              borderRadius: 10,
                              background:
                                'linear-gradient(90deg, #7c6df0, #a78bfa)',
                            }}
                          />
                        </Box>
                      </Box>
                    ))}
                  </Stack>

                  {/* Skill count */}
                  <Box sx={{ mt: 3 }}>
                    <Chip
                      label={`${category.items.length} tecnologias`}
                      size="small"
                      sx={{
                        height: 24,
                        color: '#77778d',
                        backgroundColor:
                          'rgba(255, 255, 255, 0.035)',
                        border:
                          '1px solid rgba(255, 255, 255, 0.06)',

                        '& .MuiChip-label': {
                          fontSize: '0.68rem',
                          px: 1,
                        },
                      }}
                    />
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};
