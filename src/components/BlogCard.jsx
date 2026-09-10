
// ==============================
// BlogCard.jsx
// ==============================

import { Link } from 'react-router-dom';

import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Button,
} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

export const BlogCard = ({ post }) => {
  const title = post?.title || 'Novo artigo';
  const date = post?.date || '';
  const readTime = post?.readTime || '4';
  const excerpt = post?.excerpt || '';
  const slug = post?.slug || '';
  const category = post?.category || 'Desenvolvimento';

  const formattedDate = date
    ? new Date(date).toLocaleDateString('pt-PT', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    : '';

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

        background:
          'linear-gradient(145deg, rgba(28, 28, 42, 0.96), rgba(18, 18, 28, 0.98))',

        border:
          '1px solid rgba(255, 255, 255, 0.07)',

        borderRadius: 3,
        overflow: 'hidden',

        transition:
          'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',

        '&:hover': {
          transform: 'translateY(-6px)',
          borderColor:
            'rgba(124, 109, 240, 0.3)',
          boxShadow:
            '0 18px 45px rgba(0, 0, 0, 0.28)',

          '& .blog-arrow': {
            transform: 'translateX(4px)',
          },
        },
      }}
    >
      <CardContent
        sx={{
          p: { xs: 2.5, md: 3 },
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Meta */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
            mb: 2,
          }}
        >
          <Chip
            icon={
              <ArticleOutlinedIcon
                sx={{ fontSize: '15px !important' }}
              />
            }
            label={category}
            size="small"
            sx={{
              color: '#9b8ff5',
              backgroundColor:
                'rgba(124, 109, 240, 0.08)',
              border:
                '1px solid rgba(124, 109, 240, 0.12)',

              '& .MuiChip-icon': {
                color: '#8b7cf6',
              },

              '& .MuiChip-label': {
                fontSize: '0.68rem',
                fontWeight: 600,
              },
            }}
          />

          <Typography
            sx={{
              color: '#68687c',
              fontSize: '0.7rem',
            }}
          >
            {readTime} min
          </Typography>
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            color: '#f2f2f6',
            fontWeight: 700,
            fontSize: '1.1rem',
            lineHeight: 1.4,
            mb: 1.2,
          }}
        >
          {title}
        </Typography>

        {/* Excerpt */}
        <Typography
          sx={{
            color: '#858599',
            fontSize: '0.85rem',
            lineHeight: 1.7,
            mb: 3,

            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {excerpt}
        </Typography>

        {/* Bottom */}
        <Box
          sx={{
            mt: 'auto',
            pt: 2,
            borderTop:
              '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              color: '#68687c',
              fontSize: '0.7rem',
            }}
          >
            {formattedDate}
          </Typography>

          <Button
            component={Link}
            to={`/blog/${slug}`}
            size="small"
            endIcon={
              <ArrowForwardIcon
                className="blog-arrow"
                sx={{
                  fontSize: '16px !important',
                  transition: 'transform 0.25s ease',
                }}
              />
            }
            sx={{
              color: '#9b8ff5',
              textTransform: 'none',
              fontSize: '0.78rem',
              fontWeight: 600,
              px: 1,

              '&:hover': {
                backgroundColor:
                  'rgba(124, 109, 240, 0.07)',
              },
            }}
          >
            Ler artigo
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};