import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Stack,
  CircularProgress,
  IconButton,
  Button,
  Chip,
  Divider,
  Paper,
  Tooltip,
} from '@mui/material';

import { motion } from 'framer-motion';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import ReactMarkdown from 'react-markdown';

// Posts
import post1Raw from '../posts/otimizando-react.md?raw';
import post2Raw from '../posts/aprendizado-fullstack.md?raw';


// ============================================================
// PARSE MARKDOWN
// ============================================================

const parseMarkdown = (content) => {
  const lines = content.split('\n');

  let frontmatter = {};
  let body = [];

  let isFrontmatter = false;
  let isReadingFrontmatter = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === '---') {
      if (!isReadingFrontmatter) {
        isReadingFrontmatter = true;
        isFrontmatter = true;
      } else {
        isReadingFrontmatter = false;
        isFrontmatter = false;
      }

      continue;
    }

    if (isFrontmatter) {
      const match = line.match(/^([^:]+):\s*(.*)$/);

      if (match) {
        const key = match[1].trim();

        const value = match[2]
          .trim()
          .replace(/^['"]|['"]$/g, '');

        frontmatter[key] = value;
      }
    } else if (!isReadingFrontmatter) {
      body.push(lines[i]);
    }
  }

  return {
    ...frontmatter,
    content: body.join('\n'),
  };
};


// ============================================================
// POSTS
// ============================================================

const postsMap = {
  'otimizando-react': post1Raw,
  'aprendizado-fullstack': post2Raw,
};


// ============================================================
// COMPONENT
// ============================================================

export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  // ----------------------------------------------------------
  // LOAD POST
  // ----------------------------------------------------------

  useEffect(() => {
    try {
      const rawContent = postsMap[slug];

      if (rawContent) {
        const parsed = parseMarkdown(rawContent);

        setPost({
          title: parsed.title || 'Artigo',
          date: parsed.date || '2026-09-09',
          readTime: parsed.readTime || '5',
          excerpt: parsed.excerpt || '',
          coverImage: parsed.coverImage || '',
          tags: parsed.tags
            ? parsed.tags.split(',').map((tag) => tag.trim())
            : [],
          content: parsed.content,
        });
      } else {
        setPost(null);
      }
    } catch (error) {
      console.error('Erro ao carregar post:', error);
      setPost(null);
    } finally {
      setLoading(false);
    }
  }, [slug]);


  // ----------------------------------------------------------
  // SHARE
  // ----------------------------------------------------------

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);

        alert('Link copiado para a clipboard!');
      }
    } catch (error) {
      console.log('Partilha cancelada.');
    }
  };


  // ----------------------------------------------------------
  // SAVE
  // ----------------------------------------------------------

  const handleSave = () => {
    setSaved((prev) => !prev);
  };


  // ----------------------------------------------------------
  // SCROLL TOP
  // ----------------------------------------------------------

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  // ----------------------------------------------------------
  // LOADING
  // ----------------------------------------------------------

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0f',
        }}
      >
        <CircularProgress
          size={32}
          sx={{
            color: '#8b5cf6',
          }}
        />
      </Box>
    );
  }


  // ----------------------------------------------------------
  // 404
  // ----------------------------------------------------------

  if (!post) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          background: '#0a0a0f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Box
              sx={{
                textAlign: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '5rem',
                  fontWeight: 800,
                  color: '#8b5cf6',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}
              >
                404
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  color: '#f5f5f7',
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Artigo não encontrado
              </Typography>

              <Typography
                sx={{
                  color: '#8f8fa3',
                  mb: 4,
                }}
              >
                O artigo que procuras não existe ou foi removido.
              </Typography>

              <Button
                variant="contained"
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate('/')}
                sx={{
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  background:
                    'linear-gradient(135deg, #7c3aed, #8b5cf6)',
                  '&:hover': {
                    background:
                      'linear-gradient(135deg, #6d28d9, #7c3aed)',
                  },
                }}
              >
                Voltar ao início
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    );
  }


  // ============================================================
  // PAGE
  // ============================================================

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'linear-gradient(180deg, #09090d 0%, #0d0d14 45%, #11111a 100%)',
        color: '#f5f5f7',
        pt: {
          xs: 9,
          md: 11,
        },
        pb: 10,
      }}
    >

      {/* ======================================================
          HERO
      ====================================================== */}

      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          mb: 7,
        }}
      >

        {/* Glow */}

        <Box
          sx={{
            position: 'absolute',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
            top: -250,
            right: -150,
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg">

          {/* Back */}

          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            sx={{
              color: '#8f8fa3',
              textTransform: 'none',
              fontWeight: 500,
              mb: 4,

              '&:hover': {
                color: '#a78bfa',
                background: 'rgba(139,92,246,0.06)',
              },
            }}
          >
            Voltar ao blog
          </Button>


          {/* Tags */}

          {post.tags?.length > 0 && (
            <Stack
              direction="row"
              spacing={1}
              sx={{
                mb: 3,
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              {post.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    height: 28,
                    borderRadius: 1.5,
                    background:
                      'rgba(139,92,246,0.10)',
                    border:
                      '1px solid rgba(139,92,246,0.22)',
                    color: '#a78bfa',
                    fontWeight: 500,

                    '& .MuiChip-label': {
                      px: 1.3,
                    },
                  }}
                />
              ))}
            </Stack>
          )}


          {/* Title */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <Typography
              component="h1"
              sx={{
                maxWidth: 950,
                fontFamily:
                  'Space Grotesk, sans-serif',
                fontSize: {
                  xs: '2.2rem',
                  sm: '3rem',
                  md: '4.2rem',
                },
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                fontWeight: 800,
                mb: 3,

                background:
                  'linear-gradient(135deg, #ffffff 20%, #c4b5fd 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {post.title}
            </Typography>
          </motion.div>


          {/* Excerpt */}

          {post.excerpt && (
            <Typography
              sx={{
                maxWidth: 780,
                color: '#9b9bab',
                fontSize: {
                  xs: '1rem',
                  md: '1.15rem',
                },
                lineHeight: 1.8,
                mb: 3.5,
              }}
            >
              {post.excerpt}
            </Typography>
          )}


          {/* Metadata */}

          <Stack
            direction={{
              xs: 'column',
              sm: 'row',
            }}
            spacing={{
              xs: 1.5,
              sm: 3,
            }}
            alignItems={{
              xs: 'flex-start',
              sm: 'center',
            }}
          >

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <CalendarTodayIcon
                sx={{
                  fontSize: 17,
                  color: '#8b5cf6',
                }}
              />

              <Typography
                variant="body2"
                sx={{
                  color: '#8f8fa3',
                }}
              >
                {post.date}
              </Typography>
            </Stack>


            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <AccessTimeIcon
                sx={{
                  fontSize: 18,
                  color: '#8b5cf6',
                }}
              />

              <Typography
                variant="body2"
                sx={{
                  color: '#8f8fa3',
                }}
              >
                {post.readTime} min de leitura
              </Typography>
            </Stack>


            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
            >
              <MenuBookIcon
                sx={{
                  fontSize: 18,
                  color: '#8b5cf6',
                }}
              />

              <Typography
                variant="body2"
                sx={{
                  color: '#8f8fa3',
                }}
              >
                Artigo técnico
              </Typography>
            </Stack>

          </Stack>

        </Container>
      </Box>


      {/* ======================================================
          COVER
      ====================================================== */}

      {post.coverImage && (
        <Container maxWidth="lg">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >

            <Box
              sx={{
                position: 'relative',
                height: {
                  xs: 230,
                  sm: 350,
                  md: 500,
                },
                borderRadius: {
                  xs: 2,
                  md: 3,
                },
                overflow: 'hidden',
                mb: 7,
                border:
                  '1px solid rgba(255,255,255,0.08)',
                boxShadow:
                  '0 30px 80px rgba(0,0,0,0.35)',
              }}
            >

              <Box
                component="img"
                src={post.coverImage}
                alt={post.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Overlay */}

              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, transparent 45%, rgba(9,9,13,0.65) 100%)',
                }}
              />

            </Box>

          </motion.div>
        </Container>
      )}


      {/* ======================================================
          CONTENT AREA
      ====================================================== */}

      <Container maxWidth="lg">

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              lg: '190px minmax(0, 760px)',
            },
            gap: {
              xs: 0,
              lg: 7,
            },
            justifyContent: 'center',
          }}
        >

          {/* ==================================================
              SIDEBAR
          ================================================== */}

          <Box
            sx={{
              display: {
                xs: 'none',
                lg: 'block',
              },
            }}
          >

            <Box
              sx={{
                position: 'sticky',
                top: 110,
              }}
            >

              <Typography
                sx={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#666678',
                  mb: 2,
                }}
              >
                Neste artigo
              </Typography>

              <Divider
                sx={{
                  borderColor:
                    'rgba(255,255,255,0.07)',
                  mb: 2,
                }}
              />

              <Stack spacing={1.2}>

                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    color: '#a78bfa',
                    cursor: 'pointer',
                    transition: '0.2s',

                    '&:hover': {
                      color: '#c4b5fd',
                    },
                  }}
                >
                  Introdução
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    color: '#777789',
                  }}
                >
                  Performance
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    color: '#777789',
                  }}
                >
                  Boas práticas
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    color: '#777789',
                  }}
                >
                  Conclusão
                </Typography>

              </Stack>

            </Box>

          </Box>


          {/* ==================================================
              ARTICLE
          ================================================== */}

          <motion.article
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
          >

            <Box
              sx={{
                position: 'relative',
              }}
            >

              {/* Article top actions */}

              <Stack
                direction="row"
                justifyContent="flex-end"
                spacing={0.5}
                sx={{
                  mb: 2,
                }}
              >

                <Tooltip title="Partilhar artigo">

                  <IconButton
                    onClick={handleShare}
                    sx={{
                      color: '#777789',

                      '&:hover': {
                        color: '#a78bfa',
                        background:
                          'rgba(139,92,246,0.08)',
                      },
                    }}
                  >
                    <ShareIcon fontSize="small" />
                  </IconButton>

                </Tooltip>


                <Tooltip
                  title={
                    saved
                      ? 'Remover dos guardados'
                      : 'Guardar artigo'
                  }
                >

                  <IconButton
                    onClick={handleSave}
                    sx={{
                      color: saved
                        ? '#a78bfa'
                        : '#777789',

                      '&:hover': {
                        color: '#a78bfa',
                        background:
                          'rgba(139,92,246,0.08)',
                      },
                    }}
                  >
                    <BookmarkBorderIcon
                      fontSize="small"
                    />
                  </IconButton>

                </Tooltip>

              </Stack>


              {/* Article content */}

              <Box
                sx={{
                  color: '#b5b5c4',
                  fontSize: {
                    xs: '1rem',
                    md: '1.08rem',
                  },
                  lineHeight: 1.9,

                  // ------------------------------------------
                  // HEADINGS
                  // ------------------------------------------

                  '& h1': {
                    color: '#f5f5f7',
                    fontFamily:
                      'Space Grotesk, sans-serif',
                    fontSize: {
                      xs: '2rem',
                      md: '2.5rem',
                    },
                    fontWeight: 750,
                    lineHeight: 1.2,
                    letterSpacing: '-0.025em',
                    marginTop: '3rem',
                    marginBottom: '1.25rem',
                  },

                  '& h2': {
                    color: '#f5f5f7',
                    fontFamily:
                      'Space Grotesk, sans-serif',
                    fontSize: {
                      xs: '1.55rem',
                      md: '1.9rem',
                    },
                    fontWeight: 700,
                    lineHeight: 1.25,
                    letterSpacing: '-0.02em',
                    marginTop: '3.2rem',
                    marginBottom: '1.2rem',
                    paddingBottom: '0.7rem',
                    borderBottom:
                      '1px solid rgba(255,255,255,0.07)',
                  },

                  '& h3': {
                    color: '#e8e8ef',
                    fontFamily:
                      'Space Grotesk, sans-serif',
                    fontSize: '1.3rem',
                    fontWeight: 650,
                    marginTop: '2rem',
                    marginBottom: '0.8rem',
                  },


                  // ------------------------------------------
                  // PARAGRAPHS
                  // ------------------------------------------

                  '& p': {
                    marginTop: 0,
                    marginBottom: '1.4rem',
                  },


                  // ------------------------------------------
                  // LINKS
                  // ------------------------------------------

                  '& a': {
                    color: '#a78bfa',
                    textDecoration: 'none',
                    borderBottom:
                      '1px solid rgba(167,139,250,0.3)',

                    '&:hover': {
                      color: '#c4b5fd',
                      borderBottomColor:
                        '#c4b5fd',
                    },
                  },


                  // ------------------------------------------
                  // INLINE CODE
                  // ------------------------------------------

                  '& :not(pre) > code': {
                    background:
                      'rgba(139,92,246,0.12)',
                    color: '#c4b5fd',
                    padding: '0.18rem 0.45rem',
                    borderRadius: '5px',
                    fontSize: '0.88em',
                    fontFamily:
                      '"JetBrains Mono", "Fira Code", monospace',
                    border:
                      '1px solid rgba(139,92,246,0.12)',
                  },


                  // ------------------------------------------
                  // CODE BLOCK
                  // ------------------------------------------

                  '& pre': {
                    background: '#08080c',
                    border:
                      '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: {
                      xs: '1rem',
                      md: '1.35rem',
                    },
                    overflowX: 'auto',
                    marginTop: '1.5rem',
                    marginBottom: '2rem',
                    boxShadow:
                      '0 15px 40px rgba(0,0,0,0.22)',

                    '& code': {
                      background: 'transparent',
                      color: '#e5e7eb',
                      padding: 0,
                      fontSize: {
                        xs: '0.8rem',
                        md: '0.88rem',
                      },
                      lineHeight: 1.7,
                      fontFamily:
                        '"JetBrains Mono", "Fira Code", monospace',
                    },
                  },


                  // ------------------------------------------
                  // LISTS
                  // ------------------------------------------

                  '& ul, & ol': {
                    paddingLeft: '1.6rem',
                    marginBottom: '1.6rem',
                  },

                  '& li': {
                    marginBottom: '0.55rem',
                    paddingLeft: '0.25rem',
                  },

                  '& li::marker': {
                    color: '#8b5cf6',
                    fontWeight: 700,
                  },


                  // ------------------------------------------
                  // BLOCKQUOTE
                  // ------------------------------------------

                  '& blockquote': {
                    margin: '2rem 0',
                    padding: '1.2rem 1.5rem',
                    borderLeft:
                      '3px solid #8b5cf6',
                    background:
                      'rgba(139,92,246,0.055)',
                    borderRadius:
                      '0 10px 10px 0',
                    color: '#a7a7b7',
                    fontStyle: 'italic',
                  },


                  // ------------------------------------------
                  // IMAGES
                  // ------------------------------------------

                  '& img': {
                    display: 'block',
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                    margin:
                      '2rem auto',
                    border:
                      '1px solid rgba(255,255,255,0.08)',
                  },


                  // ------------------------------------------
                  // HR
                  // ------------------------------------------

                  '& hr': {
                    border: 0,
                    borderTop:
                      '1px solid rgba(255,255,255,0.08)',
                    margin: '3rem 0',
                  },


                  // ------------------------------------------
                  // TABLE
                  // ------------------------------------------

                  '& table': {
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginBottom: '2rem',
                    display: 'block',
                    overflowX: 'auto',
                  },

                  '& th, & td': {
                    border:
                      '1px solid rgba(255,255,255,0.08)',
                    padding: '0.75rem 1rem',
                    textAlign: 'left',
                    whiteSpace: 'nowrap',
                  },

                  '& th': {
                    background:
                      'rgba(139,92,246,0.08)',
                    color: '#f5f5f7',
                    fontWeight: 650,
                  },

                  '& td': {
                    color: '#a9a9b8',
                  },


                  // ------------------------------------------
                  // STRONG
                  // ------------------------------------------

                  '& strong': {
                    color: '#e7e7ee',
                    fontWeight: 650,
                  },
                }}
              >

                <ReactMarkdown>
                  {post.content}
                </ReactMarkdown>

              </Box>


              {/* ==================================================
                  ARTICLE FOOTER
              ================================================== */}

              <Divider
                sx={{
                  mt: 6,
                  mb: 4,
                  borderColor:
                    'rgba(255,255,255,0.08)',
                }}
              />

              <Stack
                direction={{
                  xs: 'column',
                  sm: 'row',
                }}
                justifyContent="space-between"
                alignItems={{
                  xs: 'flex-start',
                  sm: 'center',
                }}
                spacing={2}
              >

                <Box>

                  <Typography
                    sx={{
                      color: '#777789',
                      fontSize: '0.8rem',
                      mb: 0.5,
                    }}
                  >
                    Gostaste deste artigo?
                  </Typography>

                  <Typography
                    sx={{
                      color: '#d6d6df',
                      fontSize: '0.9rem',
                    }}
                  >
                    Partilha-o com outros developers.
                  </Typography>

                </Box>


                <Button
                  startIcon={<ShareIcon />}
                  onClick={handleShare}
                  sx={{
                    color: '#a78bfa',
                    border:
                      '1px solid rgba(139,92,246,0.25)',
                    borderRadius: 2,
                    px: 2,
                    textTransform: 'none',

                    '&:hover': {
                      background:
                        'rgba(139,92,246,0.08)',
                      borderColor:
                        'rgba(139,92,246,0.45)',
                    },
                  }}
                >
                  Partilhar
                </Button>

              </Stack>

            </Box>

          </motion.article>

        </Box>

      </Container>


      {/* ======================================================
          FLOATING TOP BUTTON
      ====================================================== */}

      <Tooltip title="Voltar ao topo">

        <IconButton
          onClick={scrollTop}
          sx={{
            position: 'fixed',
            right: {
              xs: 16,
              md: 30,
            },
            bottom: {
              xs: 16,
              md: 30,
            },
            width: 44,
            height: 44,
            background:
              'rgba(28,28,42,0.9)',
            backdropFilter: 'blur(10px)',
            border:
              '1px solid rgba(255,255,255,0.08)',
            color: '#a78bfa',
            boxShadow:
              '0 10px 30px rgba(0,0,0,0.3)',

            '&:hover': {
              background:
                'rgba(139,92,246,0.15)',
            },
          }}
        >
          <ArrowUpwardIcon fontSize="small" />
        </IconButton>

      </Tooltip>

    </Box>
  );
};