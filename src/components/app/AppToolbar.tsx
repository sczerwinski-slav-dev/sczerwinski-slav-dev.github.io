import AppToolbarMenu from './AppToolbarMenu.tsx'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import {NavLink} from 'react-router'
import PageStub from '../../types/PageStub.tsx'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {pageTitle} from '../../config/site.tsx'

/**
 * Application toolbar properties.
 *
 * @property {() => void} onMenuClick Callback executed when the menu icon is clicked.
 * @property {PageStub[]} pages Array of pages or stubs to be linked to from the toolbar buttons.
 * @property {boolean} loading Pages loading status.
 */
interface AppToolbarProps {
  onMenuClick: () => void
  pages: PageStub[]
  loading: boolean
}

/**
 * Application toolbar, displayed on top of the page.
 *
 * @param {AppToolbarProps} props Application toolbar properties.
 */
function AppToolbar(props: AppToolbarProps) {
  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        edge="start"
        onClick={props.onMenuClick}
        sx={{display: {sm: 'none'}, mr: 2}}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        component={NavLink}
        to="/"
        variant="h6"
        sx={{color: 'inherit', flexGrow: 1, textDecoration: 'none'}}
      >
        {pageTitle}
      </Typography>
      <AppToolbarMenu pages={props.pages} loading={props.loading} />
    </Toolbar>
  )
}

export default AppToolbar
