import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { darkTheme } from './theme/theme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { BlogPost } from './components/BlogPost';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Development } from './pages/Development';
import { ProjectDetails } from './pages/ProjectDetails';

function HomePage() {
  return (
    <>
      <Hero />
      <Container maxWidth="lg">
        <About />
        <Projects />
        <Blog />
        <Skills />
        <Contact />
      </Container>
    </>
  );
}

function App() {
  const location = useLocation();
  const isBlogPost = location.pathname.startsWith('/blog/');

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/desenvolvimento" element={<Development />} />
          <Route
            path="/projetos/:id"
            element={<ProjectDetails />}
          />
        </Routes>
      </AnimatePresence>
      {!isBlogPost && <Footer />}
    </ThemeProvider>
  );
}

export default App;