import AppDrawerMenu from './AppDrawerMenu.tsx'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import PageStub from '../../types/PageStub.tsx'
import Typography from '@mui/material/Typography'
import {pageTitle} from '../../config/site.tsx'

const drawerWidth = 180

/**
 * Drawer properties.
 *
 * @property {() => void} onClick Callback executed when the drawer (not menu item!) is clicked.
 * @property {PageStub[]} pages Array of pages or stubs to be referenced in the drawer menu.
 * @property {boolean} loading Pages loading status.
 * @property {boolean} open Drawer open state.
 */
interface AppDrawerProps {
  onClick: () => void
  pages: PageStub[]
  loading: boolean
  open: boolean
}

/**
 * Drawer embedded in the {@link AppScaffold}, displayed under the {@link AppToolbar}.
 *
 * @param {AppDrawerProps} props Drawer properties.
 */
function AppDrawer(props: AppDrawerProps) {
  return (
    <Drawer
      variant="temporary"
      open={props.open}
      onClose={props.onClick}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        '.MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
        display: {sm: 'none', xs: 'block'},
      }}
    >
      <Box onClick={props.onClick} sx={{textAlign: 'center'}}>
        <Typography variant="h6" sx={{my: 2}}>{pageTitle}</Typography>
        <Divider />
        <AppDrawerMenu pages={props.pages} loading={props.loading} />
      </Box>
    </Drawer>
  )
}

export default AppDrawer
