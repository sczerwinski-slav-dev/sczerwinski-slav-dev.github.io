import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import ModeIconButton from '../buttons/ModeIconButton.tsx'
import {NavLink} from 'react-router'
import PageStub from '../../types/PageStub.tsx'
import Stack from '@mui/material/Stack'

/**
 * Toolbar menu properties.
 *
 * @property {PageStub[]} pages Array of pages or stubs to be referenced in the toolbar menu.
 * @property {boolean} loading Pages loading status.
 */
interface AppToolbarMenuProps {
  pages: PageStub[]
  loading: boolean
}

/**
 * Menu inside the {@link AppToolbar}.
 *
 * @param {AppToolbarMenuProps} props Toolbar menu properties.
 */
function AppToolbarMenu(props: AppToolbarMenuProps) {
  if (props.loading) {
    return <CircularProgress color='inherit' size={30} sx={{display: {sm: 'block', xs: 'none'}}} />
  }
  return (
    <Stack direction='row' spacing={2} sx={{display: {sm: 'block', xs: 'none'}}}>
      {props.pages.map((pageStub) => (
        <Button component={NavLink} to={`/${pageStub.id}`} key={pageStub.id} sx={{color: 'inherit'}}>
          {pageStub.title}
        </Button>
      ))}
      <ModeIconButton
        color='inherit'
        aria-label='Swith mode'
        edge='end' />
    </Stack>
  )
}

export default AppToolbarMenu
