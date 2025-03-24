import PostsFilter, {PostsFilterProps} from './PostsFilter.tsx'
import CollapsibleCard from '../containers/CollapsibleCard.tsx'

/**
 * Posts filter card properties.
 */
type PostsFilterCardProps = PostsFilterProps

/**
 * Posts filter card.
 *
 * @param {PostsFilterCardProps} props Posts filter card properties.
 */
function PostsFilterCard(props: PostsFilterCardProps) {
  return (
    <CollapsibleCard caption='Filter posts'>
      <PostsFilter {...props} />
    </CollapsibleCard>
  )
}

export default PostsFilterCard
