'use client'

import { useCounterController } from './controller'

export default function UseStatePage() {
  const { count, increment, decrement, reset } = useCounterController()

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">🧮 useState Example</h1>

      <p className="text-lg">Count: <strong>{count}</strong></p>

      <div className="space-x-2">
        <button onClick={increment} className="bg-blue-600 text-white px-4 py-2 rounded">
          ➕ Increment
        </button>
        <button onClick={decrement} className="bg-red-600 text-white px-4 py-2 rounded">
          ➖ Decrement
        </button>
        <button onClick={reset} className="bg-gray-600 text-white px-4 py-2 rounded">
          🔁 Reset
        </button>
      </div>
    </div>
  )
}
