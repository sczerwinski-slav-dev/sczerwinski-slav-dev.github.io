import * as React from 'react'
import Alert from '@mui/material/Alert'

/**
 * Error alert properties.
 *
 * @property {string | null} message Error message.
 */
interface ErrorAlertProps {
  message: string | null
}

/**
 * Error alert feedback.
 *
 * @param {ErrorAlertProps} props Error alert properties.
 */
function ErrorAlert(props: ErrorAlertProps) {
  const errorMessage = props.message
  if (errorMessage !== null) {
    return (<Alert severity="error">{errorMessage}</Alert>)
  }
  return (<React.Fragment />)
}

export default ErrorAlert
