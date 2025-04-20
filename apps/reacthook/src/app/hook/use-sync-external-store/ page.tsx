'use client'

import { useSyncExternalStore } from 'react'
import { counterStore } from './store'

export default function UseSyncExternalStorePage() {
  const count = useSyncExternalStore(
    counterStore.subscribe,
    counterStore.getSnapshot
  )

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">📦 useSyncExternalStore</h1>
      <p className="text-lg">Count from store: {count}</p>

      <div className="space-x-2">
        <button
          onClick={counterStore.increment}
          className="bg-blue-600 text-white px-3 py-2 rounded"
        >
          ➕ Increment
        </button>

        <button
          onClick={counterStore.reset}
          className="bg-gray-600 text-white px-3 py-2 rounded"
        >
          🔄 Reset
        </button>
      </div>
    </div>
  )
}
