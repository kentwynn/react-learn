'use client'

import { CounterProvider, useCounter } from './controller'

function Display() {
  const { count } = useCounter()
  return <p className="text-lg">🔢 Count: {count}</p>
}

function Button() {
  const { increment } = useCounter()
  return (
    <button
      onClick={increment}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      ➕ Increment
    </button>
  )
}

export default function UseContextPage() {
  return (
    <CounterProvider>
      <div className="p-6 max-w-md mx-auto space-y-4">
        <h1 className="text-2xl font-bold">🌐 useContext (All-in-One)</h1>
        <Display />
        <Button />
      </div>
    </CounterProvider>
  )
}
