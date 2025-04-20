'use client'

import { useMemo, useState } from 'react'

// Simulate expensive logic
function heavyComputation(num: number): number {
  console.log('🔁 Running heavy computation...')
  let result = 0
  for (let i = 0; i < 1_000_000_000; i++) {
    result += i % num
  }
  return result
}

export function useMemoController() {
  const [count, setCount] = useState(1)
  const [other, setOther] = useState(0)

  const computed = useMemo(() => {
    return heavyComputation(count)
  }, [count]) // only re-run when count changes

  return {
    count,
    setCount,
    other,
    setOther,
    computed,
  }
}
