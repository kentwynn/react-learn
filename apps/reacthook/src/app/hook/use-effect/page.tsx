'use client'

import { useJokeController } from './controller'

export default function UseEffectPage() {
  const { joke, refetch } = useJokeController()

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">🎭 useEffect Joke Fetcher</h1>

      {joke ? (
        <div className="bg-gray-100 p-4 rounded shadow">
          <p className="font-semibold">{joke.setup}</p>
          <p className="mt-2">{joke.punchline}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <button
        onClick={refetch}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        🔁 Get Another Joke
      </button>
    </div>
  )
}
