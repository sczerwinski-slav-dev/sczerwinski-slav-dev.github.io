import {baseUrl, postsPath} from '../config/api.tsx'
import Post from '../types/Post.tsx'
import PostStub from '../types/PostStub.tsx'
import {fetchJson} from '../utils/fetch.tsx'

export async function fetchPosts(): Promise<PostStub[]> {
  return fetchJson(`${baseUrl}${postsPath}`)
}

export async function fetchPost(postId: string): Promise<Post> {
  return fetchJson(`${baseUrl}${postsPath}/${postId}`)
}