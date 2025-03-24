import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import {NavLink} from 'react-router'
import PostChips from './PostChips.tsx'
import PostStub from '../../types/PostStub.tsx'
import ReactMarkdown from 'react-markdown'
import Typography from '@mui/material/Typography'
import {formatDate} from '../../utils/date.tsx'
import {getThumbnailUrl} from '../../utils/images.tsx'
import {postsPath} from '../../config/site.tsx'

/**
 * Post stub card properties.
 *
 * @property {PostStub} post Post or stub.
 */
interface PostCardProps {
  post: PostStub
}

/**
 * Post stub card displayed in {@link PostsList}.
 *
 * @param {PostCardProps} props Post stub card properties.
 */
function PostCard(props: PostCardProps) {
  const {post} = props

  return (
    <Card>
      <CardActionArea component={NavLink} to={`/${postsPath}/${post.id}`}>
        <CardMedia
          component='img'
          image={getThumbnailUrl(post.image)}
          alt={post.title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {post.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
            {formatDate(post.date)}
          </Typography>
          <PostChips post={post} />
          <ReactMarkdown>{post.abstract}</ReactMarkdown>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PostCard
