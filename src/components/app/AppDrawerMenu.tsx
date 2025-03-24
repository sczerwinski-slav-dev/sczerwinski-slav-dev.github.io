import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ModeListItemButton from '../buttons/ModeListItemButton.tsx'
import {NavLink} from 'react-router'
import PageStub from '../../types/PageStub.tsx'

/**
 * Drawer menu properties.
 *
 * @property {PageStub[]} pages Array of pages or stubs to be referenced in the drawer menu.
 */
interface AppDrawerMenuProps {
  pages: PageStub[]
}

/**
 * Menu inside the {@link AppDrawer}.
 *
 * @param {AppDrawerMenuProps} props Drawer menu properties.
 */
function AppDrawerMenu(props: AppDrawerMenuProps) {
  return (
    <List>
      {props.pages.map((pageStub) => (
        <ListItem key={pageStub.id} disablePadding>
          <ListItemButton component={NavLink} to={`/${pageStub.id}`} sx={{textAlign: 'center'}}>
            <ListItemText primary={pageStub.title}/>
          </ListItemButton>
        </ListItem>
      ))}
      <ListItem key='switch-mode' disablePadding>
        <ModeListItemButton sx={{textAlign: 'center'}} />
      </ListItem>
    </List>
  )
}

export default AppDrawerMenu
