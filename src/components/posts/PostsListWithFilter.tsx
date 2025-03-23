import * as React from 'react'
import {extractCategoriesAndTags, filterByCategoriesAndTags} from '../../utils/posts.tsx'
import Container from '@mui/material/Container'
import ErrorAlert from '../feedback/ErrorAlert.tsx'
import PostStub from '../../types/PostStub.tsx'
import PostsFilterCard from './PostsFilterCard.tsx'
import PostsList from './PostsList.tsx'
import Stack from '@mui/material/Stack'
import {fetchPosts} from '../../api/posts.tsx'

function PostsListWithFilter() {
  const [posts, setPosts] = React.useState<PostStub[]>([]),
    [filter, setFilter] = React.useState<string[]>([]),
    [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    setError(null)
    setPosts([])
    fetchPosts()
      .then(setPosts)
      .catch((reason: unknown) => {
        if (reason instanceof Error) {
          setError(reason.message)
        }
      })
  }, [])

  return (
    <Container maxWidth='lg'>
      <Stack direction='column' spacing={2} sx={{mt: 5}}>
        <ErrorAlert message={error} />
        <PostsFilterCard items={extractCategoriesAndTags(posts)} filter={filter} setFilter={setFilter} />
        <PostsList posts={filterByCategoriesAndTags(posts, filter)} loading={!error && !posts.length} />
      </Stack>
    </Container>
  )
}

export default PostsListWithFilter
