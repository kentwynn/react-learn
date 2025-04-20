'use client'

import { useMemoController } from './controller'

export default function UseMemoPage() {
  const { count, setCount, other, setOther, computed } = useMemoController()

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">🧮 useMemo Example</h1>

      <p>Count: {count}</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="bg-blue-600 text-white px-3 py-2 rounded"
      >
        ➕ Increment Count
      </button>

      <p>Other: {other}</p>
      <button
        onClick={() => setOther((o) => o + 1)}
        className="bg-gray-600 text-white px-3 py-2 rounded"
      >
        🔁 Trigger Re-render
      </button>

      <p className="pt-4">
        🧠 Computed Result: <strong>{computed}</strong>
      </p>
    </div>
  )
}
