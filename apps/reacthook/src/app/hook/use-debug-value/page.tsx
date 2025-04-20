'use client'

import { useCounterDebug } from './controller'

export default function UseDebugValuePage() {
  const { count, increment } = useCounterDebug()

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">🪛 useDebugValue Example</h1>
      <p className="text-lg">Count: {count}</p>
      <button
        onClick={increment}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        ➕ Increment
      </button>
      <p className="text-sm text-gray-500">👀 Open React DevTools → Hooks tab</p>
    </div>
  )
}
