'use client'

import {
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
} from 'react'

export interface InputRefHandle {
  focus: () => void
  clear: () => void
  getValue: () => string
  isValid: () => boolean
  reset: () => void
}

export const CustomInput = forwardRef<InputRefHandle, InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      clear: () => {
        if (inputRef.current) inputRef.current.value = ''
      },
      getValue: () => inputRef.current?.value ?? '',
      isValid: () => !!inputRef.current?.value.trim(),
      reset: () => {
        if (inputRef.current) inputRef.current.value = ''
      },
    }))

    return (
      <input
        {...props}
        ref={inputRef}
        className="p-2 border border-gray-300 rounded w-full"
      />
    )
  }
)

CustomInput.displayName = 'CustomInput'
