import Alert from '@mui/material/Alert'
import {Grow} from '@mui/material'
import Snackbar from '@mui/material/Snackbar'

/**
 * Success snackbar properties.
 *
 * @property {string} message Success message.
 * @property {boolean} open Open state of the snackbar.
 * @property {() => void} onClose Callback executed when the snackbar times out.
 */
interface SuccessSnackbarProps {
  message: string
  open: boolean
  onClose: () => void
}

/**
 * Success snackbar feedback.
 *
 * @param {SuccessSnackbarProps} props Success snackbar properties.
 */
function SuccessSnackbar(props: SuccessSnackbarProps) {
  return (
    <Snackbar
      open={props.open}
      onClose={props.onClose}
      key='success-snackbar'
      autoHideDuration={1500}
      slots={{ transition: Grow }}
    >
      <Alert
        severity='success'
        variant='filled'
        sx={{ width: '100%' }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  )
}

export default SuccessSnackbar
