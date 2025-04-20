'use client'

import { memo } from 'react'
import { useCounterController } from './controller'

const CounterButton = memo(function CounterButton({
  onClick,
}: {
  onClick: () => void
}) {
  console.log('🔁 CounterButton rendered')
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      Increment
    </button>
  )
})

export default function UseCallbackPage() {
  const { count, increment } = useCounterController()

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">🔁 useCallback Example</h1>

      <p className="text-lg">Count: {count}</p>

      <CounterButton onClick={increment} />

      <p className="text-gray-500 text-sm">
        Open console to see if <code>CounterButton</code> re-renders.
      </p>
    </div>
  )
}
