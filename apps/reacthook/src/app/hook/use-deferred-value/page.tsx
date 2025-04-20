'use client'

import { useSearchController } from './controller'

export default function UseDeferredValuePage() {
  const { query, setQuery, filteredItems, isStale } = useSearchController()

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">⌛ useDeferredValue</h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type to filter..."
        className="w-full p-2 border border-gray-300 rounded"
      />

      {isStale && (
        <p className="text-yellow-600 text-sm mt-2">Loading deferred results...</p>
      )}

      <ul className="mt-4 max-h-[300px] overflow-auto space-y-1">
        {filteredItems.map((item) => (
          <li key={item} className="text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
