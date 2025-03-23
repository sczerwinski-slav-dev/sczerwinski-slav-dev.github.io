import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Post from '../../types/Post.tsx'
import Typography from '@mui/material/Typography'
import {getImageUrl} from '../../utils/images.tsx'
import useHeroOverlayColor from '../../hooks/hero-overlay-color.tsx'
import useHeroTextShadow from '../../hooks/hero-shadow-color.tsx'

interface PostHeroProps {
  post: Post | null
}

function PostHero(props: PostHeroProps) {
  const {post} = props,
    overlayColor = useHeroOverlayColor(),
    textShadow = useHeroTextShadow()

  if (post === null) {
    return (<React.Fragment />)
  }

  if (post.image === null) {
    return (
      <Container maxWidth='lg'>
        <Typography variant="h1" sx={{mt: 10}}>{post.title}</Typography>
      </Container>
    )
  }

  return (
    <Box
      sx={{
        backgroundBlendMode: 'overlay',
        backgroundColor: overlayColor,
        backgroundImage: {
          lg: `url('${getImageUrl(post.image, '@3')}')`,
          md: `url('${getImageUrl(post.image, '@2')}')`,
          xs: `url('${getImageUrl(post.image)}')`,
        },
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        textShadow,
        width: '100%',
      }}
    >
      <Container maxWidth='lg'>
        <Typography variant="h1" sx={{my: {lg: 30, md: 20, xs: 5}}}>{post.title}</Typography>
      </Container>
    </Box>
  )
}

export default PostHero
