import Image from './Image.tsx'

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
