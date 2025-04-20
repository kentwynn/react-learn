'use client'

import { useFormController } from './controller'

export default function UseIdMultiplePage() {
  const {
    usernameId,
    emailId,
    username,
    email,
    setUsername,
    setEmail,
  } = useFormController()

  return (
    <div className="p-6 max-w-md mx-auto space-y-6">
      <h1 className="text-2xl font-bold">🆔 Multiple useId Example</h1>

      <div>
        <label htmlFor={usernameId} className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          id={usernameId}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>

      <div>
        <label htmlFor={emailId} className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id={emailId}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 w-full border rounded"
        />
      </div>

      <div className="pt-4 text-sm text-gray-500">
        <p><strong>Username ID:</strong> {usernameId}</p>
        <p><strong>Email ID:</strong> {emailId}</p>
      </div>
    </div>
  )
}
