import {baseUrl, pagesPath} from '../config/api.tsx'
import Page from '../types/Page.tsx'
import PageStub from '../types/PageStub.tsx'
import {fetchJson} from '../utils/fetch.tsx'

/**
 * Fetch stubs for pages from the API.
 *
 * @returns {Promise<PageStub[]>} Promise of stubs for all pages.
 */
export async function fetchPages(): Promise<PageStub[]> {
  return fetchJson(`${baseUrl}${pagesPath}`)
}

/**
 * Fetch a single page from the API.
 *
 * @param {string} pageId ID of the page, as in a stub returned by {@link fetchPages}.
 *
 * @returns {Promise<PageStub[]>} Promise of a page.
 */
export async function fetchPage(pageId: string): Promise<Page> {
  return fetchJson(`${baseUrl}${pagesPath}/${pageId}`)
}
