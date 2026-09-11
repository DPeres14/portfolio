import { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

import { BlogCard } from './BlogCard';

import post1Raw from '../posts/otimizando-react.md?raw';
import post2Raw from '../posts/aprendizado-fullstack.md?raw';
import post3Raw from '../posts/localhost.md?raw';

const parseFrontmatter = (content) => {
  const lines = content.split('\n');
  const data = {};
  const body = [];

  let inFrontmatter = false;
  let frontmatterStarted = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === '---') {
      if (!frontmatterStarted) {
        frontmatterStarted = true;
        inFrontmatter = true;
      } else {
        inFrontmatter = false;
      }

      continue;
    }

    if (inFrontmatter) {
      const colonIndex = line.indexOf(':');

      if (colonIndex > 0) {
        const key = line.substring(0, colonIndex).trim();
        const value = line.substring(colonIndex + 1).trim();

        data[key] = value;
      }
    } else if (frontmatterStarted) {
      body.push(line);
    }
  }

  return {
    ...data,
    content: body.join('\n').trim(),
  };
};

const rawPosts = [
  {
    content: post1Raw,
    slug: 'otimizando-react',
  },
  {
    content: post2Raw,
    slug: 'aprendizado-fullstack',
  },
  {
    content: post3Raw,
    slug: 'localhost',
  },
];

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      const processedPosts = rawPosts
        .map(({ content, slug }) => {
          const parsed = parseFrontmatter(content);

          return {
            slug,
            title: parsed.title || 'Novo artigo',
            date: parsed.date || '2026-09-09',
            readTime: parsed.readTime || '4',
            category: parsed.category || 'Desenvolvimento',
            excerpt:
              parsed.excerpt ||
              `${parsed.content.substring(0, 160)}...`,
            content: parsed.content,
          };
        })
        .sort(
          (a, b) =>
            new Date(b.date).getTime() -
            new Date(a.date).getTime()
        );

      setPosts(processedPosts);
    } catch (error) {
      console.error('Erro ao carregar artigos:', error);
      setPosts([]);
    }
  }, []);

  return (
    <Box
      component="section"
      id="blog"
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
        <Box
          sx={{
            mb: { xs: 5, md: 6 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            gap: 2,
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: '#8b7cf6',
                fontWeight: 700,
                letterSpacing: 3,
                fontSize: '0.75rem',
              }}
            >
              Pensamentos & aprendizagem
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
              Blog
            </Typography>
          </Box>

          <Typography
            sx={{
              maxWidth: 430,
              color: '#858599',
              lineHeight: 1.7,
              fontSize: '0.9rem',
            }}
          >
            Artigos sobre desenvolvimento, tecnologia e algumas das
            aprendizagens que vou acumulando ao longo do percurso.
          </Typography>
        </Box>

        {/* Posts */}
        {posts.length > 0 ? (
          <Grid container spacing={2.5}>
            {posts.map((post, index) => (
              <Grid item xs={12} md={6} key={post.slug}>
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  style={{ height: '100%' }}
                >
                  <BlogCard post={post} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              py: 8,
              textAlign: 'center',
              borderRadius: 3,
              border:
                '1px dashed rgba(255,255,255,0.08)',
            }}
          >
            <Typography sx={{ color: '#77778d' }}>
              Em breve novos artigos...
            </Typography>
          </Box>
        )}
      </motion.div>
    </Box>
  );
};