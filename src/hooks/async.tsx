import * as React from 'react'

/**
 * Return a stateful result of an asynchronous operation.
 *
 * @param operation The asynchronous operation.
 * @param defaultValue Default value of the result, before the operation finishes.
 *
 * @returns Result of an asynchronous operation, an error, and a pending status.
 *
 * @template T Type of the operation result.
 */
function useAsync<T>(operation: () => Promise<T>, defaultValue: T): [T, string | null, boolean] {
  const
    [result, setResult] = React.useState<T>(defaultValue),
    [error, setError] = React.useState<string | null>(null),
    [pending, setPending] = React.useState<boolean>(false)

  React.useEffect(() => {
    setPending(true)
    setError(null)

    operation()
      .then(setResult)
      .catch((reason: unknown) => {
        if (reason instanceof Error) {
          setError(reason.message)
        } else {
          setError('Asynchronous operation failed')
        }
      })
      .finally(() => {
        setPending(false)
      })
  }, [operation])

  return [result, error, pending]
}

export default useAsync
