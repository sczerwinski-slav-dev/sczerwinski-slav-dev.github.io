import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

/**
 * Posts filter chips properties.
 *
 * @property items Items to be displayed as filter chips.
 * @property onItemClick Callback to be executed when a chip is clicked.
 */
interface PostsFilterChipsProps {
  items: string[]
  onItemClick: (item: string) => void
}

/**
 * Posts filter chips.
 *
 * @param {PostsFilterChipsProps} props Posts filter chips properties.
 */
function PostsFilterChips(props: PostsFilterChipsProps) {
  return (
    <Stack direction='row' spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
      {props.items.map((item) => (
        <Chip
          key={item}
          label={item}
          onClick={() => {props.onItemClick(item)}}
          size='small' />
      ))}
    </Stack>
  )
}

export default PostsFilterChips
