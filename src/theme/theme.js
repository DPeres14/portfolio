import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7c6df0',
      light: '#9b8cf5',
      dark: '#5a4bd1',
    },
    secondary: {
      main: '#a78bfa',
    },
    background: {
      default: '#0a0a0f',
      paper: '#14141e',
    },
    text: {
      primary: '#f0f0f5',
      secondary: '#a0a0b8',
    },
    divider: '#2a2a3e',
  },
  typography: {
    fontFamily: '"Inter", "Space Grotesk", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      marginBottom: '1.5rem',
      background: 'linear-gradient(135deg, #f0f0f5, #a0a0b8)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#1c1c2e',
          border: '1px solid #2a2a3e',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            borderColor: '#7c6df0',
            boxShadow: '0 8px 30px rgba(124, 109, 240, 0.15)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '10px 28px',
          fontWeight: 500,
          transition: 'all 0.3s ease',
        },
        contained: {
          background: 'linear-gradient(135deg, #7c6df0, #a78bfa)',
          '&:hover': {
            background: 'linear-gradient(135deg, #6a5cd6, #9b8cf5)',
            transform: 'scale(1.02)',
            boxShadow: '0 8px 30px rgba(124, 109, 240, 0.3)',
          },
        },
        outlined: {
          borderColor: '#2a2a3e',
          '&:hover': {
            borderColor: '#7c6df0',
            background: 'rgba(124, 109, 240, 0.05)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10, 10, 15, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          boxShadow: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(124, 109, 240, 0.12)',
          color: '#a78bfa',
          border: '1px solid rgba(124, 109, 240, 0.2)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#2a2a3e',
            },
            '&:hover fieldset': {
              borderColor: '#7c6df0',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#7c6df0',
            },
          },
        },
      },
    },
  },
});