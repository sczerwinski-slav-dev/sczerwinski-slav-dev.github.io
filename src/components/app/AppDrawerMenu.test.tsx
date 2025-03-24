import {render, screen} from '@testing-library/react'
import AppDrawerMenu from './AppDrawerMenu.tsx'
import PageStub from '../../types/PageStub.tsx'
import {pageTitle} from '../../config/site.tsx'

const
  emptyPages: PageStub[] = [],
  singlePage: PageStub[] = [
    {
      id: 'about',
      title: 'About',
      url: '/about',
    } as PageStub
  ]

function onClick() {
  // Do nothing
}

test('renders page title', () => {
  render(<AppDrawerMenu onClick={onClick} pages={emptyPages} />)
  const drawerMenu = screen.getByText(pageTitle)
  expect<HTMLElement>(drawerMenu).toBeDefined()
})

test('renders "About" link', () => {
  render(<AppDrawerMenu onClick={onClick} pages={singlePage} />)
  const drawerMenu = screen.getByText('About')
  expect<HTMLElement>(drawerMenu).toBeDefined()
})
