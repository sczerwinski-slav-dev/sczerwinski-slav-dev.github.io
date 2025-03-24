import Chip from '@mui/material/Chip'
import PostStub from '../../types/PostStub.tsx'
import Stack from '@mui/material/Stack'

/**
 * Post category and tag chips properties.
 *
 * @property {PostStub} post Post or stub.
 */
interface PostChipsProps {
  post: PostStub
}

/**
 * Post category and tag chips.
 *
 * @param {PostChipsProps} props Post category and tag chips properties.
 */
function PostChips(props: PostChipsProps) {
  return (
    <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', my: 1 }}>
      {props.post.categories.map(category => (
        <Chip key={category} label={category} color='primary' size='small' />
      ))}
      {props.post.tags.map(tag => (
        <Chip key={tag} label={tag} size='small' />
      ))}
    </Stack>
  )
}

export default PostChips
