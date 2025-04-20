'use client'

import { useInsertionEffect } from 'react'

export default function UseInsertionEffectPage() {
  useInsertionEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      body {
        background-color: #fef9c3;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold">🎨 useInsertionEffect</h1>
      <p>This page injects a yellow background <strong>before DOM updates</strong>.</p>
    </div>
  )
}
