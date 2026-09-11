

// ======================================================
// Navbar.jsx
// ======================================================

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Box,
  useMediaQuery,
  useTheme,
  Divider,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const navItems = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Blog', id: 'blog' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contacto', id: 'contacto' },
];

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        'inicio',
        ...navItems.map((item) => item.id),
      ];

      let current = 'inicio';

      sections.forEach((id) => {
        const element = document.getElementById(id);

        if (element && window.scrollY >= element.offsetTop - 180) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${id}`);

      window.setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 0);

      return;
    }

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(10,10,15,0.88)'
            : 'rgba(10,10,15,0.45)',

          backdropFilter: 'blur(18px)',

          borderBottom:
            '1px solid rgba(255,255,255,0.06)',

          transition: 'background 0.3s ease',
        }}
      >
        <Toolbar
          sx={{
            maxWidth: '1200px',
            width: '100%',
            mx: 'auto',
            py: 1,
            px: { xs: 2, md: 3 },
          }}
        >
          {/* Logo */}
          <Box
            onClick={() => scrollToSection('inicio')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              cursor: 'pointer',
              mr: 'auto',
            }}
          >
            <Avatar
              src="/perfil.png"
              alt="Diogo Peres"
              sx={{
                width: 38,
                height: 38,
                border:
                  '2px solid rgba(124,109,240,0.8)',
              }}
            />

            <Typography
              sx={{
                display: { xs: 'none', sm: 'block' },
                color: '#f0f0f5',
                fontWeight: 700,
                fontSize: '0.95rem',
              }}
            >
              Diogo Peres
            </Typography>
          </Box>

          {/* Desktop */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <Button
                onClick={() => scrollToSection('inicio')}
                startIcon={<HomeOutlinedIcon />}
                sx={{
                  color:
                    activeSection === 'inicio'
                      ? '#9b8ff5'
                      : '#858599',
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: 2,
                }}
              >
                Início
              </Button>

              {navItems.map((item) => {
                const active =
                  activeSection === item.id;

                return (
                  <Button
                    key={item.id}
                    onClick={() =>
                      scrollToSection(item.id)
                    }
                    sx={{
                      position: 'relative',
                      color: active
                        ? '#9b8ff5'
                        : '#858599',
                      textTransform: 'none',
                      fontWeight: 600,
                      borderRadius: 2,
                      px: 1.5,

                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 3,
                        left: '50%',
                        width: active ? '18px' : 0,
                        height: 2,
                        borderRadius: 2,
                        backgroundColor: '#7c6df0',
                        transform:
                          'translateX(-50%)',
                        transition:
                          'width 0.25s ease',
                      },

                      '&:hover': {
                        color: '#fff',
                        backgroundColor:
                          'rgba(124,109,240,0.06)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>
          )}

          {/* Mobile */}
          {isMobile && (
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ color: '#f0f0f5' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 290,
            background: '#111119',
            borderLeft:
              '1px solid rgba(255,255,255,0.07)',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Typography
              sx={{
                color: '#f0f0f5',
                fontWeight: 700,
              }}
            >
              Menu
            </Typography>

            <IconButton
              onClick={() => setMobileOpen(false)}
            >
              <CloseIcon sx={{ color: '#aaaaba' }} />
            </IconButton>
          </Box>

          <Divider
            sx={{
              borderColor:
                'rgba(255,255,255,0.06)',
              mb: 1,
            }}
          />

          <List>
            <ListItem
              component="button"
              onClick={() =>
                scrollToSection('inicio')
              }
              sx={{
                border: 0,
                width: '100%',
                background: 'transparent',
                borderRadius: 2,
                cursor: 'pointer',
                mb: 0.5,

                '&:hover': {
                  background:
                    'rgba(124,109,240,0.08)',
                },
              }}
            >
              <ListItemText
                primary="Início"
                primaryTypographyProps={{
                  sx: {
                    color: '#f0f0f5',
                    fontWeight: 600,
                  },
                }}
              />
            </ListItem>

            {navItems.map((item) => (
              <ListItem
                component="button"
                key={item.id}
                onClick={() =>
                  scrollToSection(item.id)
                }
                sx={{
                  border: 0,
                  width: '100%',
                  background: 'transparent',
                  borderRadius: 2,
                  cursor: 'pointer',
                  mb: 0.5,

                  '&:hover': {
                    background:
                      'rgba(124,109,240,0.08)',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      color: '#f0f0f5',
                      fontWeight: 600,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};