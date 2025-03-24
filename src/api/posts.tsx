import {baseUrl, postsPath} from '../config/api.tsx'
import Post from '../types/Post.tsx'
import PostStub from '../types/PostStub.tsx'
import {fetchJson} from '../utils/fetch.tsx'

/**
 * Fetch stubs for blog posts from the API.
 *
 * @returns {Promise<PageStub[]>} Promise of stubs for all posts.
 */
export async function fetchPosts(): Promise<PostStub[]> {
  return fetchJson(`${baseUrl}${postsPath}`)
}

/**
 * Fetch a single post from the API.
 *
 * @param {string} postId ID of the blog post, as in a stub returned by {@link fetchPosts}.
 *
 * @returns {Promise<PageStub[]>} Promise of a post.
 */
export async function fetchPost(postId: string): Promise<Post> {
  return fetchJson(`${baseUrl}${postsPath}/${postId}`)
}
