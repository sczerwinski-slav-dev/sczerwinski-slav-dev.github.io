import * as React from 'react'

interface ItemsAction<T> {
  type: 'add' | 'remove'
  payload: T
}

function itemsActionReducer<T>(state: T[], action: ItemsAction<T>): T[] {
  switch (action.type) {
    case 'add':
      return [...state, action.payload].sort()

    case 'remove':
      return state.filter(item => item !== action.payload)

    default:
      throw new Error('Unsupported action type')
  }
}

type OnAddItem<T> = (item: T) => void
type OnRemoveItem<T> = (item: T) => void

/**
 * Return a stateful list of items.
 *
 * @returns List of items, add item callback, and remove item callback.
 *
 * @template T Type of items in the list.
 */
function useItems<T>(initialValue: T[]): [T[], OnAddItem<T>, OnRemoveItem<T>] {
  const [state, dispatch] = React.useReducer(itemsActionReducer, initialValue)

  function addItem(item: T): void {
    dispatch({
      payload: item,
      type: 'add'
    })
  }

  function removeItem(item: T): void {
    dispatch({
      payload: item,
      type: 'remove'
    })
  }

  return [state, addItem, removeItem]
}

export default useItems
