import { useState } from 'react';
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Grid,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

const categories = [
  { value: 'todos', label: 'Todos' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'fullstack', label: 'Fullstack' },
];

export const Projects = () => {
  const [filter, setFilter] = useState('todos');

  const handleFilter = (_, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  const filteredProjects =
    filter === 'todos'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <Box
      component="section"
      id="projetos"
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
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <Typography
            variant="overline"
            sx={{
              color: '#8b7cf6',
              fontWeight: 700,
              letterSpacing: 3,
              fontSize: '0.75rem',
            }}
          >
            O meu trabalho
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
            Projetos
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
            Alguns dos projetos que desenvolvi ao longo do meu percurso,
            desde aplicações frontend a soluções fullstack completas.
          </Typography>
        </Box>

        {/* Filtros */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: { xs: 5, md: 6 },
          }}
        >
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={handleFilter}
            aria-label="Filtro de projetos"
            sx={{
              p: 0.5,
              borderRadius: 2.5,
              backgroundColor: 'rgba(255, 255, 255, 0.035)',
              border: '1px solid rgba(255, 255, 255, 0.07)',

              '& .MuiToggleButton-root': {
                border: 0,
                borderRadius: 2,
                px: { xs: 1.5, sm: 2.2 },
                py: 1,
                color: '#85859b',
                fontSize: '0.85rem',
                fontWeight: 600,
                textTransform: 'none',
                transition: 'all 0.25s ease',

                '&:hover': {
                  color: '#d0cdfc',
                  backgroundColor: 'rgba(124, 109, 240, 0.08)',
                },

                '&.Mui-selected': {
                  color: '#fff',
                  backgroundColor: '#7c6df0',
                  boxShadow: '0 4px 20px rgba(124, 109, 240, 0.25)',

                  '&:hover': {
                    backgroundColor: '#887af2',
                  },
                },
              },
            }}
          >
            {categories.map((category) => (
              <ToggleButton
                key={category.value}
                value={category.value}
              >
                {category.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        {/* Projetos */}
        <AnimatePresence mode="popLayout">
          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {filteredProjects.map((project, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                key={project.id}
                component={motion.div}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
              >
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </AnimatePresence>

        {/* Estado vazio */}
        {filteredProjects.length === 0 && (
          <Box
            sx={{
              textAlign: 'center',
              py: 8,
              color: '#77778c',
            }}
          >
            <Typography>
              Não existem projetos nesta categoria.
            </Typography>
          </Box>
        )}
      </motion.div>
    </Box>
  );
};