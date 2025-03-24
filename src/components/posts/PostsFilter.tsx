import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

/**
 * Posts filter properties.
 *
 * @property {string[]} items All filter items (categories and tags).
 * @property {string[]} filter Selected filter items.
 * @property {(string[]) => void} setFilter Callback executed when the selected filter items change.
 */
export interface PostsFilterProps {
  items: string[]
  filter: string[]
  setFilter: (filter: string[]) => void
}

/**
 * Posts filter.
 *
 * @param {PostsFilterProps} props Posts filter properties.
 */
function PostsFilter(props: PostsFilterProps) {
  const {items, filter, setFilter} = props,
    availableItems = items
      .filter((item) => !filter.find((value) => value === item))
      .sort()

  function addFilterItem(item: string) {
    setFilter([...filter, item].sort())
  }

  function removeFilterItem(item: string) {
    setFilter(filter.filter((filterItem) => filterItem !== item))
  }

  return (
    <Stack direction='column' spacing={1}>
      <Stack direction='row' spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
        {availableItems.map((item) => (
          <Chip
            key={item}
            label={item}
            onClick={() => {addFilterItem(item)}}
            size="small" />
        ))}
      </Stack>
      <Typography variant='overline'>Selection:</Typography>
      <Stack direction='row' spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
        {filter.map((item) => (
          <Chip
            key={item}
            label={item}
            onDelete={() => {removeFilterItem(item)}}
            size="small" />
        ))}
      </Stack>
    </Stack>
  )
}

export default PostsFilter
