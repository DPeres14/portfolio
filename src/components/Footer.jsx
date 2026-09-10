


// ======================================================
// Footer.jsx
// ======================================================

import {
  Box,
  Typography,
  Container,
  Stack,
  IconButton,
} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        borderTop:
          '1px solid rgba(255,255,255,0.06)',
        backgroundColor:
          'rgba(10,10,15,0.5)',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py: 4,
        }}
      >
        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Box>
            <Typography
              sx={{
                color: '#d0d0d9',
                fontWeight: 600,
                fontSize: '0.85rem',
              }}
            >
              Diogo Peres
            </Typography>

            <Typography
              sx={{
                color: '#606073',
                fontSize: '0.7rem',
                mt: 0.3,
              }}
            >
              Fullstack Developer
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
          >
            <IconButton
              href="https://github.com/DPeres14"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: '#707084',

                '&:hover': {
                  color: '#9b8ff5',
                },
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>

            <IconButton
              href="https://www.linkedin.com/in/diogo-peres-bb6820206/"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: '#707084',

                '&:hover': {
                  color: '#9b8ff5',
                },
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/dperes28/"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: '#707084',

                '&:hover': {
                  color: '#9b8ff5',
                },
              }}
            >
              <InstagramIcon fontSize="small" />
            </IconButton>

            <IconButton
              onClick={scrollToTop}
              size="small"
              sx={{
                ml: 1,
                color: '#707084',
                border:
                  '1px solid rgba(255,255,255,0.07)',

                '&:hover': {
                  color: '#9b8ff5',
                  borderColor:
                    'rgba(124,109,240,0.3)',
                },
              }}
            >
              <KeyboardArrowUpIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Typography
            sx={{
              color: '#555568',
              fontSize: '0.68rem',
            }}
          >
            © {new Date().getFullYear()} Diogo Peres
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
