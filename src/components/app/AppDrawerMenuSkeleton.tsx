import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Skeleton from '@mui/material/Skeleton'

const itemsCount = 3

/**
 * Skeleton of drawer menu being loaded.
 */
function AppDrawerMenuSkeleton() {
  return (
    <List>
      {[...Array(itemsCount).keys()].map((index) => (
        <ListItem key={`skeleton-${index.toString()}`} disablePadding>
          <ListItemText><Skeleton animation='wave' sx={{ mx: 2 }} /></ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default AppDrawerMenuSkeleton
