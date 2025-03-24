import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import AppDrawer from './AppDrawer.tsx'
import AppToolbar from './AppToolbar.tsx'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ErrorSnackbar from '../feedback/ErrorSnackbar.tsx'
import PageStub from '../../types/PageStub.tsx'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import {fetchPages} from '../../api/pages.tsx'
import useToggleable from '../../hooks/toggleable.tsx'

/**
 * Application scaffold.
 *
 * @param {React.PropsWithChildren} props Contents of the application.
 */
function AppScaffold(props: React.PropsWithChildren) {
  const [pages, setPages] = React.useState<PageStub[]>([]),
    [drawerOpen, toggleDrawerOpen] = useToggleable(false),
    [error, setError] = React.useState<string | null>(null),
    [errorSnackbarOpen, setErrorSnackbarOpen] = React.useState(false)

  React.useEffect(() => {
    fetchPages()
      .then(setPages)
      .catch((reason: unknown) => {
        if (reason instanceof Error) {
          setError(reason.message)
          setErrorSnackbarOpen(true)
        }
      })
  }, [])

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar component='nav'>
        <Container maxWidth='lg'>
          <AppToolbar onMenuClick={toggleDrawerOpen} pages={pages} />
        </Container>
      </AppBar>
      <nav>
        <AppDrawer open={drawerOpen} onClick={toggleDrawerOpen} pages={pages} />
      </nav>
      <Stack component='main' alignItems='center' sx={{mb: 5, width: '100%'}}>
        <Toolbar />
        {props.children}
      </Stack>
      <ErrorSnackbar
        message={error ?? ''}
        open={errorSnackbarOpen}
        onClose={() => {setErrorSnackbarOpen(false)}} />
    </Box>
  )
}

export default AppScaffold
