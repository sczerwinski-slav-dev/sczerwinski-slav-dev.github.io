import * as React from 'react'

/**
 * Return a stateful boolean value, and a function to toggle it.
 *
 * @param {boolean} initialState Initial state.
 *
 * @returns A stateful boolean value, and a function to toggle it.
 */
function useToggleable(initialState: boolean): [boolean, React.Dispatch<void>] {
  const [state, setState] = React.useState(initialState)

  function toggleState() {
    setState((oldState) => !oldState)
  }

  return [state, toggleState]
}

export default useToggleable
