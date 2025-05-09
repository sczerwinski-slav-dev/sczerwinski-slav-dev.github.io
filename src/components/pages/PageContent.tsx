import * as React from 'react'
import Container from '@mui/material/Container'
import ErrorAlert from '../feedback/ErrorAlert.tsx'
import MaterialMarkdown from '../markdown/MaterialMarkdown.tsx'
import Page from '../../types/Page.tsx'
import PageSkeleton from './PageSkeleton.tsx'
import Typography from '@mui/material/Typography'
import {fetchPage} from '../../api/pages.tsx'
import useAsync from '../../hooks/async.tsx'
import {useParams} from 'react-router'

interface PageContentInnerProps {
  page: Page | null
  loading: boolean
}

function PageContentInner(props: PageContentInnerProps) {
  const {page, loading} = props

  if (loading) {
    return (<PageSkeleton />)
  }

  if (page) {
    return (
      <React.Fragment>
        <Typography variant="h1" sx={{mt: 10}}>{page.title}</Typography>
        <MaterialMarkdown markdown={page.content} />
      </React.Fragment>
    )
  }
}

/**
 * Page content rendered based on REST API data.
 */
function PageContent() {
  const {pageId} = useParams(),
    fetchPageCallback = React.useCallback(() => {
      if (pageId) {
        return fetchPage(pageId)
      }
      return Promise.reject(Error('Page ID not provided'))
    }, [pageId]),
    [page, error, pending] = useAsync<Page | null>(fetchPageCallback, null)

  return (
    <Container maxWidth='lg'>
      <ErrorAlert message={error} />
      <PageContentInner page={page} loading={pending} />
    </Container>
  )
}

export default PageContent
