'use client'

import { useRef } from 'react'
import { CustomInput, InputRefHandle } from './controller'

export default function UseImperativeHandlePage() {
  const inputRef = useRef<InputRefHandle>(null)

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">🛠 useImperativeHandle Extended</h1>

      <CustomInput placeholder="Enter something..." ref={inputRef} />

      <div className="space-x-2">
        <button
          onClick={() => alert(inputRef.current?.getValue())}
          className="bg-blue-600 text-white px-3 py-2 rounded"
        >
          📋 Get Value
        </button>

        <button
          onClick={() => {
            const isValid = inputRef.current?.isValid()
            alert(isValid ? '✅ Valid!' : '❌ Invalid (empty)')
          }}
          className="bg-yellow-600 text-white px-3 py-2 rounded"
        >
          ✅ Validate
        </button>

        <button
          onClick={() => inputRef.current?.reset()}
          className="bg-red-600 text-white px-3 py-2 rounded"
        >
          ♻️ Reset
        </button>
      </div>
    </div>
  )
}
