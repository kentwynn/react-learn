'use client'

import { useLayoutEffect, useRef, useState } from 'react'

export function useBoxController() {
  const boxRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (boxRef.current) {
      const { width, height } = boxRef.current.getBoundingClientRect()
      setSize({ width: Math.round(width), height: Math.round(height) })
    }
  }, []) // Only on mount

  return { boxRef, size }
}
