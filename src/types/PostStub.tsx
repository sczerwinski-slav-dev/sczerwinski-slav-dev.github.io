import Image from './Image.tsx'

/**
 * Stub for a blog post.
 *
 * @property {string} id ID of the blog post.
 * @property {string} title Title of the blog post.
 * @property {string} abstract Abstract of the blog post.
 * @property {string} date Date of the blog post publication.
 * @property {boolean} draft Draft status of the blog post.
 * @property {string[]} categories Categories of this blog post.
 * @property {string[]} tags Tags of this blog post.
 * @property {Image | null} image Hero image of this blog post, or null.
 * @property {string} url Path to the blog post resource.
 */
interface PostStub {
  id: string
  title: string
  abstract: string
  date: string
  draft: boolean
  categories: string[]
  tags: string[]
  image: Image | null
  url: string
}

export default PostStub
