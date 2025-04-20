'use client'

import { useMemo, useState, useTransition } from 'react'

const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`)

export function useSearchTransitionController() {
  const [input, setInput] = useState('')
  const [query, setQuery] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInput(value)

    startTransition(() => {
      setQuery(value)
    })
  }

  const filtered = useMemo(() => {
    return bigList.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    )
  }, [query])

  return {
    input,
    handleChange,
    filtered,
    isPending,
  }
}
