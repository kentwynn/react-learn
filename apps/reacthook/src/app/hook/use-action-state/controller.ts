'use client'

import { useActionState } from 'react'

export interface FormState {
  previousName: string
  name: string
  submitted: boolean
}

const initialState: FormState = {
  previousName: '',
  name: '',
  submitted: false,
}

// this is the server action
export async function handleSubmit(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const previousName = prevState.name;
  const name = formData.get('name')?.toString() ?? ''
  await new Promise((res) => setTimeout(res, 500)) // simulate delay

  return {
    previousName,
    name,
    submitted: true,
  }
}

// custom hook that encapsulates useActionState logic
export function useNameForm() {
  return useActionState(handleSubmit, initialState)
}
