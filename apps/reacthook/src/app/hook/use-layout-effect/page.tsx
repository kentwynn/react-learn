'use client'

import { useBoxController } from './controller'

export default function UseLayoutEffectPage() {
  const { boxRef, size } = useBoxController()

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-2xl font-bold">📐 useLayoutEffect Example</h1>

      <div
        ref={boxRef}
        className="w-full h-32 bg-blue-100 border border-blue-500 rounded p-4"
      >
        Resize-aware box
      </div>

      <p className="text-sm text-gray-700">
        Box size: {size.width}px × {size.height}px
      </p>
    </div>
  )
}
