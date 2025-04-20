'use client'

import { useCounterReducer } from './controller'

export default function UseReducerPage() {
  const { count, increment, decrement, reset, set } = useCounterReducer()

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">⚙️ useReducer Example</h1>

      <p className="text-lg">Count: {count}</p>

      <div className="space-x-2">
        <button onClick={increment} className="bg-blue-600 text-white px-3 py-2 rounded">
          ➕ Increment
        </button>
        <button onClick={decrement} className="bg-red-600 text-white px-3 py-2 rounded">
          ➖ Decrement
        </button>
        <button onClick={reset} className="bg-gray-600 text-white px-3 py-2 rounded">
          🔁 Reset
        </button>
        <button onClick={() => set(100)} className="bg-green-600 text-white px-3 py-2 rounded">
          🎯 Set to 100
        </button>
      </div>
    </div>
  )
}
