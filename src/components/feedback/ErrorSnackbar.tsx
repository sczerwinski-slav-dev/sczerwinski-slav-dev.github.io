import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

/**
 * Error snackbar properties.
 *
 * @property {string} message Error message.
 * @property {boolean} open Open state of the snackbar.
 * @property {() => void} onClose Callback executed when the close button is clicked.
 */
interface ErrorSnackbarProps {
  message: string
  open: boolean
  onClose: () => void
}

/**
 * Error snackbar feedback.
 *
 * @param {ErrorSnackbarProps} props Error snackbar properties.
 */
function ErrorSnackbar(props: ErrorSnackbarProps) {
  return (
    <Snackbar
      open={props.open}
      onClose={props.onClose}
      key='error-snackbar'
    >
      <Alert
        severity='error'
        variant='filled'
        sx={{ width: '100%' }}
        onClose={props.onClose}
      >
        {props.message}
      </Alert>
    </Snackbar>
  )
}

export default ErrorSnackbar
