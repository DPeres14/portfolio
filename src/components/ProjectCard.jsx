import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
  Button,
  Stack,
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CodeIcon from '@mui/icons-material/Code';
import { useNavigate } from 'react-router-dom';

export const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleOpenProject = () => {
    navigate(`/projetos/${project.id}`);
  };
  const categoryLabel =
    project.category?.charAt(0).toUpperCase() +
    project.category?.slice(1);

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',

        background:
          'linear-gradient(145deg, rgba(28, 28, 42, 0.96), rgba(18, 18, 28, 0.98))',

        border: '1px solid rgba(255, 255, 255, 0.07)',
        borderRadius: 3,

        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.18)',

        transition:
          'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',

        '&:hover': {
          transform: 'translateY(-8px)',
          borderColor: 'rgba(124, 109, 240, 0.35)',
          boxShadow:
            '0 20px 55px rgba(0, 0, 0, 0.35), 0 0 35px rgba(124, 109, 240, 0.08)',

          '& .project-image': {
            transform: 'scale(1.05)',
          },

          '& .project-overlay': {
            opacity: 1,
          },

          '& .project-arrow': {
            transform: 'translate(3px, -3px)',
          },
        },
      }}
    >
      {/* Imagem */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          height: { xs: 190, sm: 210 },
          backgroundColor: '#11111a',
        }}
      >
        <CardMedia
          component="img"
          className="project-image"
          image={project.image}
          alt={`Preview do projeto ${project.title}`}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s ease',
          }}
        />

        {/* Overlay */}
        <Box
          className="project-overlay"
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: 0,
            transition: 'opacity 0.35s ease',

            background:
              'linear-gradient(180deg, transparent 35%, rgba(10, 10, 18, 0.85) 100%)',
          }}
        />

        {/* Categoria */}
        <Chip
          icon={<CodeIcon sx={{ fontSize: '15px !important' }} />}
          label={categoryLabel}
          size="small"
          sx={{
            position: 'absolute',
            top: 14,
            left: 14,

            height: 28,
            color: '#ddd9ff',
            backgroundColor: 'rgba(17, 17, 27, 0.78)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',

            '& .MuiChip-icon': {
              color: '#8b7cf6',
            },

            '& .MuiChip-label': {
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
            },
          }}
        />

        <Chip
          label={project.statusLabel}
          size="small"
          sx={{
            position: 'absolute',
            right: 14,
            bottom: 14,
            height: 26,
            color: project.status === 'completed' ? '#a6edc0' : '#d2ccff',
            backgroundColor: 'rgba(10, 10, 18, 0.72)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(10px)',
            '& .MuiChip-label': {
              px: 1.1,
              fontSize: '0.66rem',
              fontWeight: 700,
            },
          }}
        />

        {/* Número */}
        <Typography
          sx={{
            position: 'absolute',
            top: 14,
            right: 16,
            color: 'rgba(255, 255, 255, 0.45)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          {String(project.id).padStart(2, '0')}
        </Typography>
      </Box>

      {/* Conteúdo */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          p: { xs: 2.5, md: 3 },
        }}
      >
        {project.featured && (
          <Chip
            label="Projeto em destaque"
            size="small"
            sx={{
              alignSelf: 'flex-start',
              mb: 1.5,
              height: 24,
              color: '#9b8ff5',
              backgroundColor: 'rgba(124, 109, 240, 0.1)',
              border: '1px solid rgba(124, 109, 240, 0.18)',
              '& .MuiChip-label': {
                px: 1,
                fontSize: '0.68rem',
                fontWeight: 700,
              },
            }}
          />
        )}

        {/* Título */}
        <Typography
          variant="h6"
          sx={{
            mb: 1.2,
            color: '#f4f4f7',
            fontWeight: 700,
            fontSize: '1.15rem',
            letterSpacing: '-0.01em',
            ...(project.featured && {
              fontSize: { xs: '1.35rem', md: '1.6rem' },
            }),
          }}
        >
          {project.title}
        </Typography>

        {/* Descrição */}
        <Typography
          variant="body2"
          sx={{
            color: '#9292a7',
            lineHeight: 1.7,
            fontSize: '0.88rem',
            mb: 2.5,

            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </Typography>

        {/* Tecnologias */}
        <Stack
          direction="row"
          sx={{
            flexWrap: 'wrap',
            gap: 0.7,
            mb: 3,
          }}
        >
          {project.stack.slice(0, 5).map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                height: 25,
                borderRadius: 1.5,
                color: '#aaaabd',
                backgroundColor: 'rgba(255, 255, 255, 0.045)',
                border: '1px solid rgba(255, 255, 255, 0.06)',

                '& .MuiChip-label': {
                  px: 1,
                  fontSize: '0.7rem',
                  fontWeight: 500,
                },
              }}
            />
          ))}

          {project.stack.length > 5 && (
            <Chip
              label={`+${project.stack.length - 5}`}
              size="small"
              sx={{
                height: 25,
                borderRadius: 1.5,
                color: '#8b7cf6',
                backgroundColor: 'rgba(124, 109, 240, 0.08)',
                border: '1px solid rgba(124, 109, 240, 0.15)',

                '& .MuiChip-label': {
                  px: 1,
                  fontSize: '0.7rem',
                  fontWeight: 700,
                },
              }}
            />
          )}
        </Stack>

        {/* Separador */}
        <Box
          sx={{
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            mb: 2,
          }}
        />

        {/* Links */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 'auto',
          }}
        >
          <Stack direction="row" spacing={0.5}>
            <Button
              size="small"
              onClick={handleOpenProject}
              endIcon={<ArrowOutwardIcon />}
              sx={{
                px: 1.2,
                color: '#9b8ff5',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.8rem',
              }}
            >
              Ver projeto
            </Button>

            {project.live && (
              <Button
                size="small"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={
                  <ArrowOutwardIcon
                    className="project-arrow"
                    sx={{
                      fontSize: '16px !important',
                      transition: 'transform 0.25s ease',
                    }}
                  />
                }
                sx={{
                  px: 1.2,
                  color: '#9b8ff5',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.8rem',

                  '&:hover': {
                    backgroundColor: 'rgba(124, 109, 240, 0.08)',
                    color: '#b0a7ff',
                  },
                }}
              >
                Demo
              </Button>
            )}

            {project.code && (
              <Button
                size="small"
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={
                  <GitHubIcon
                    sx={{ fontSize: '17px !important' }}
                  />
                }
                sx={{
                  px: 1.2,
                  color: '#858599',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.8rem',

                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: '#f0f0f5',
                  },
                }}
              >
                GitHub
              </Button>
            )}
          </Stack>

          {/* Indicador */}
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#7c6df0',
              boxShadow: '0 0 12px rgba(124, 109, 240, 0.65)',
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};