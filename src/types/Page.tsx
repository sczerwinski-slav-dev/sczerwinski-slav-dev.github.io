import PageStub from './PageStub.tsx'

/**
 * Page.
 *
 * @property {string} content Page content as Markdown.
 */
interface Page extends PageStub {
  content: string
}

export default Page
