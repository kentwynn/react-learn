'use client'

import { useCallback, useState } from 'react'

export function useCounterController() {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount((c) => c + 1)
  }, []) // memoized function

  return { count, increment }
}
