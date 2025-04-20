'use client'

import { useRefController } from './controller'

export default function UseRefPage() {
  const { count, setCount, prevCount, inputRef, focusInput } = useRefController()

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">📦 useRef Example</h1>

      <input
        ref={inputRef}
        placeholder="I'm focusable"
        className="p-2 border rounded w-full"
      />

      <div className="space-x-2">
        <button onClick={focusInput} className="bg-blue-600 text-white px-3 py-2 rounded">
          🎯 Focus Input
        </button>
      </div>

      <div className="pt-4 space-y-2">
        <p>Current Count: <strong>{count}</strong></p>
        <p>Previous Count (via useRef): <strong>{prevCount}</strong></p>

        <button
          onClick={() => setCount((c) => c + 1)}
          className="bg-green-600 text-white px-3 py-2 rounded"
        >
          ➕ Increment Count
        </button>
      </div>
    </div>
  )
}
