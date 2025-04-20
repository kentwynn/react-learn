'use client'

import { useEffect, useRef, useState } from 'react'

export function useRefController() {
  const inputRef = useRef<HTMLInputElement>(null)
  const prevCountRef = useRef<number>(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    prevCountRef.current = count
  }, [count])

  const focusInput = () => {
    inputRef.current?.focus()
  }

  return {
    count,
    setCount,
    prevCount: prevCountRef.current,
    focusInput,
    inputRef,
  }
}
