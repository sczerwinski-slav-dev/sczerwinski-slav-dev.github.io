import {baseUrl, pagesPath} from '../config/api.tsx'
import Page from '../types/Page.tsx'
import PageStub from '../types/PageStub.tsx'
import {fetchJson} from '../utils/fetch.tsx'

export async function fetchPages(): Promise<PageStub[]> {
  return fetchJson(`${baseUrl}${pagesPath}`)
}

export async function fetchPage(pageId: string): Promise<Page> {
  return fetchJson(`${baseUrl}${pagesPath}/${pageId}`)
}
