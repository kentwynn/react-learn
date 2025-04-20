'use client'

import { useNameForm } from './controller'

export default function UseActionStatePage() {
  const [state, formAction, isPending] = useNameForm()

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧪 useActionState Example</h1>

      <form action={formAction} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={isPending}
        >
          {isPending ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {state.submitted && (
        <p className="mt-4 text-green-600">
          {state.previousName && (
            <span>
              Previous name: <strong>{state.previousName}</strong>
            </span>
          )}
          ✅ Hello, <strong>{state.name}</strong>!
        </p>
      )}
    </div>
  )
}
