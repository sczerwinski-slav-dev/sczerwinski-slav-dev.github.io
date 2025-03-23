import Image from './Image.tsx'

interface Post {
  id: string
  title: string
  abstract: string
  date: string
  content: string
  draft: boolean
  categories: string[]
  tags: string[]
  image: Image | null
  url: string
}

export default Post
