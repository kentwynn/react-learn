'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

// 1️⃣ Define the context type
interface CounterContextType {
  count: number
  increment: () => void
}

// 2️⃣ Create the context
const CounterContext = createContext<CounterContextType | undefined>(undefined)

// 3️⃣ Create a custom hook to consume the context
export function useCounter(): CounterContextType {
  const context = useContext(CounterContext)
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider')
  }
  return context
}

// 4️⃣ Create the provider component
export function CounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)
  const increment = () => setCount((c) => c + 1)

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  )
}
