/**
 * Fetch Json data from a URL.
 *
 * @param {string} url A URL.
 *
 * @returns {Promise<T>} Promise of Json data.
 *
 * @template T Type of the returned Json data.
 */
export async function fetchJson<T>(url: string): Promise<T> {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error(`Request to ${response.url} returned ${response.status.toString()}`)
  }) as Promise<T>
}
