'use client'

import { useCommentController } from './controller'

export default function UseOptimisticPage() {
  const { optimisticComments, submitComment, isPending, error } = useCommentController()

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">⚡ useOptimistic + Rollback</h1>

      <form action={submitComment} className="flex space-x-2">
        <input
          name="comment"
          placeholder="Type a comment (try 'fail')..."
          className="flex-1 border p-2 rounded"
          disabled={isPending}
        />
        <button
          type="submit"
          disabled={isPending}
          className={`px-4 py-2 rounded text-white ${
            isPending ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isPending ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <ul className="pt-4 space-y-2">
        {optimisticComments.map((comment, idx) => (
          <li
            key={idx}
            className="bg-gray-100 border px-3 py-2 rounded text-sm"
          >
            {comment}
          </li>
        ))}
      </ul>
    </div>
  )
}
