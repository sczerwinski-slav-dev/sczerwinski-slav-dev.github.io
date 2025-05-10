import {extractCategoriesAndTags, filterByCategoriesAndTags} from '../../utils/posts.tsx'
import Container from '@mui/material/Container'
import ErrorAlert from '../feedback/ErrorAlert.tsx'
import PostStub from '../../types/PostStub.tsx'
import PostsFilterCard from './PostsFilterCard.tsx'
import PostsList from './PostsList.tsx'
import Stack from '@mui/material/Stack'
import {fetchPosts} from '../../api/posts.tsx'
import useAsync from '../../hooks/async.tsx'
import useItems from '../../hooks/items.tsx'

/**
 * List of stubs for blog posts with posts filter.
 */
function PostsListWithFilter() {
  const [posts, error, pending] = useAsync<PostStub[]>(fetchPosts, []),
    [selectedFilterItems, selectFilterItem, deselectFilterItem] = useItems<string>([])

  return (
    <Container maxWidth='lg'>
      <Stack direction='column' spacing={2} sx={{mt: 5}}>
        <ErrorAlert message={error} />
        <PostsFilterCard
          allItems={extractCategoriesAndTags(posts)}
          selectedItems={selectedFilterItems}
          onSelectItem={selectFilterItem}
          onDeselectItem={deselectFilterItem}
        />
        <PostsList
          posts={filterByCategoriesAndTags(posts, selectedFilterItems)}
          loading={pending}
        />
      </Stack>
    </Container>
  )
}

export default PostsListWithFilter
