import CollapsibleCard from '../containers/CollapsibleCard.tsx'
import FilterListIcon from '@mui/icons-material/FilterList'
import PostsFilterChips from './PostsFilterChips.tsx'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

/**
 * Posts filter card properties.
 *
 * @property {string[]} allItems All filter items (categories and tags).
 * @property {string[]} selectedItems Selected filter items.
 * @property {(string) => void} onSelectItem Callback executed when a filter item is selected.
 * @property {(string) => void} onSelectItem Callback executed when a filter item is deselected.
 */
interface PostsFilterCardProps {
  allItems: string[]
  selectedItems: string[]
  onSelectItem: (item: string) => void
  onDeselectItem: (item: string) => void
}

/**
 * Posts filter card.
 *
 * @param {PostsFilterCardProps} props Posts filter card properties.
 */
function PostsFilterCard(props: PostsFilterCardProps) {
  if (!props.allItems.length) {
    return <></>
  }

  const {allItems, selectedItems, onSelectItem, onDeselectItem} = props,
    notSelectedItems = allItems
      .filter((item) => !selectedItems.find((value) => value === item))
      .sort()

  return (
    <CollapsibleCard caption='Filter posts' icon={FilterListIcon}>
      <Stack direction='column' spacing={1}>
        <PostsFilterChips items={notSelectedItems} onItemClick={onSelectItem} />
        <Typography variant='overline'>Selection:</Typography>
        <PostsFilterChips items={selectedItems} onItemClick={onDeselectItem} />
      </Stack>
    </CollapsibleCard>
  )
}

export default PostsFilterCard
