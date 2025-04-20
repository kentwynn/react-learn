'use client'

import { useDebugValue, useState } from 'react'

export function useCounterDebug() {
  const [count, setCount] = useState(0)

  const increment = () => setCount((c) => c + 1)

  // ✅ This value will show in React DevTools
  useDebugValue(count, (value) => `Current count: ${value}`)

  return { count, increment }
}
