'use client'

import { useSearchTransitionController } from './controller'

export default function UseTransitionPage() {
  const { input, handleChange, filtered, isPending } = useSearchTransitionController()

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">⚡ useTransition Example</h1>

      <input
        value={input}
        onChange={handleChange}
        placeholder="Search items..."
        className="w-full p-2 border border-gray-300 rounded"
      />

      {isPending && (
        <p className="text-yellow-600 text-sm">⏳ Filtering...</p>
      )}

      <ul className="pt-4 space-y-1 max-h-64 overflow-auto">
        {filtered.slice(0, 100).map((item) => (
          <li key={item} className="text-sm">{item}</li>
        ))}
      </ul>
    </div>
  )
}
