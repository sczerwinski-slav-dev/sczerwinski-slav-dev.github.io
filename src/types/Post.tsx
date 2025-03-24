import PostStub from './PostStub.tsx'

/**
 * Blog post.
 *
 * @property {string} content Blog post content as Markdown.
 */
interface Post extends PostStub {
  content: string
}

export default Post
