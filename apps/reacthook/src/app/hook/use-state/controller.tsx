'use client'

import { useState } from 'react'

export function useCounterController() {
  const [count, setCount] = useState(0)

  return {
    count,
    increment: () => setCount((prev) => prev + 1),
    decrement: () => setCount((prev) => prev - 1),
    reset: () => setCount(0),
  }
}
