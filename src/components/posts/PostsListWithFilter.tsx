import * as React from 'react'
import {extractCategoriesAndTags, filterByCategoriesAndTags} from '../../utils/posts.tsx'
import Container from '@mui/material/Container'
import ErrorAlert from '../feedback/ErrorAlert.tsx'
import PostStub from '../../types/PostStub.tsx'
import PostsFilterCard from './PostsFilterCard.tsx'
import PostsList from './PostsList.tsx'
import Stack from '@mui/material/Stack'
import {fetchPosts} from '../../api/posts.tsx'
import useAsync from '../../hooks/async.tsx'

/**
 * List of stubs for blog posts with posts filter.
 */
function PostsListWithFilter() {
  const [posts, error, pending] = useAsync<PostStub[]>(fetchPosts, []),
    [filter, setFilter] = React.useState<string[]>([])

  return (
    <Container maxWidth='lg'>
      <Stack direction='column' spacing={2} sx={{mt: 5}}>
        <ErrorAlert message={error} />
        <PostsFilterCard items={extractCategoriesAndTags(posts)} filter={filter} setFilter={setFilter} />
        <PostsList posts={filterByCategoriesAndTags(posts, filter)} loading={pending} />
      </Stack>
    </Container>
  )
}

export default PostsListWithFilter
