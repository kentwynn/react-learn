'use client'

import { useReducer } from 'react';

// 1️⃣ Define state shape
interface CounterState {
  count: number
}

// 2️⃣ Define action types
type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'set'; payload: number }

// 3️⃣ Reducer logic
function counterReducer(state: CounterState, action: Action): CounterState {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    case 'set':
      return { count: action.payload }
    default:
      return state
  }
}

// 4️⃣ Custom hook for usage
export function useCounterReducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 })

  return {
    count: state.count,
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
    reset: () => dispatch({ type: 'reset' }),
    set: (value: number) => dispatch({ type: 'set', payload: value }),
  }
}
