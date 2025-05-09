import * as React from 'react'
import Container from '@mui/material/Container'
import ErrorAlert from '../feedback/ErrorAlert.tsx'
import MaterialMarkdown from '../markdown/MaterialMarkdown.tsx'
import Post from '../../types/Post.tsx'
import PostHero from './PostHero.tsx'
import PostSkeleton from '../posts/PostSkeleton.tsx'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import {fetchPost} from '../../api/posts.tsx'
import {formatDate} from '../../utils/date.tsx'
import useAsync from '../../hooks/async.tsx'
import {useParams} from 'react-router'

interface PostContentInnerProps {
  post: Post | null
  loading: boolean
}

function PostContentInner(props: PostContentInnerProps) {
  const {post, loading} = props

  if (loading) {
    return (<PostSkeleton />)
  }

  if (post) {
    return (
      <React.Fragment>
        <Typography sx={{ color: 'text.secondary', mb: 4 }}>
          {formatDate(post.date)}
        </Typography>
        <MaterialMarkdown markdown={post.content} />
      </React.Fragment>
    )
  }
}

/**
 * Blog post content rendered based on REST API data.
 */
function PostContent() {
  const {postId} = useParams(),
    fetchPostCallback = React.useCallback(() => {
      if (postId) {
        return fetchPost(postId)
      }
      return Promise.reject(Error('Post ID not provided'))
    }, [postId]),
    [post, error, pending] = useAsync<Post | null>(fetchPostCallback, null)

  return (
    <Stack spacing={2} alignItems='center' sx={{width: '100%'}}>
      <PostHero post={post} />
      <Container maxWidth='lg'>
        <ErrorAlert message={error} />
        <PostContentInner post={post} loading={pending} />
      </Container>
    </Stack>
  )
}

export default PostContent
