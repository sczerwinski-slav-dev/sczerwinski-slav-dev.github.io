import PostStub from '../types/PostStub.tsx'

function extractCategories(posts: PostStub[]): string[] {
  const categories = posts.flatMap((post) => post.categories)
  return [...new Set(categories)]
}

function extractTags(posts: PostStub[]): string[] {
  const tags = posts.flatMap((post) => post.tags)
  return [...new Set(tags)]
}

/**
 * Return array of all categories and tags present in the given posts.
 *
 * The resulting array will only contain distinct values.
 *
 * The resulting array is not sorted.
 *
 * @param {PostStub[]} posts Array of posts or stubs.
 *
 * @returns {string[]} All categories and tags in the given posts.
 */
export function extractCategoriesAndTags(posts: PostStub[]): string[] {
  const items = [...extractCategories(posts), ...extractTags(posts)]
  return [...new Set(items)]
}

function hasCategoryOrTag(post: PostStub, value: string): post is PostStub {
  return new Set([...post.categories, ...post.tags]).has(value)
}

/**
 * Return only those posts in the array that contain any of the given categories or tags.
 *
 * @param {PostStub[]} posts Array of posts or stubs.
 * @param {string[]} filter Categories and tags to be searched.
 *
 * @returns {PostStub[]} Posts matching the given criteria.
 */
export function filterByCategoriesAndTags(posts: PostStub[], filter: string[]): PostStub[] {
  if (filter.length) {
    return posts.filter(
      (post) => filter.some((value) => hasCategoryOrTag(post, value))
    )
  }
  return posts
}
