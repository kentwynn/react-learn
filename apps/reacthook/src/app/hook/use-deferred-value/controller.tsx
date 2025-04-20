'use client'

import { useDeferredValue, useMemo, useState } from 'react'

// Simulate a big dataset
const items = Array.from({ length: 5000 }, (_, i) => `Item #${i + 1}`)

export function useSearchController() {
  const [query, setQuery] = useState('')

  // ✅ create a deferred version of the input
  const deferredQuery = useDeferredValue(query)

  // ✅ simulate expensive filtering logic
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(deferredQuery.toLowerCase())
    )
  }, [deferredQuery])

  return {
    query,
    setQuery,
    filteredItems,
    isStale: query !== deferredQuery,
  }
}
