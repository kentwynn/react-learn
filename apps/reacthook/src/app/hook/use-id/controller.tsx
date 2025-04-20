'use client'

import { useId, useState } from 'react'

export function useFormController() {
  // Unique IDs for form fields
  const usernameId = useId()
  const emailId = useId()

  // Form state
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  return {
    usernameId,
    emailId,
    username,
    email,
    setUsername,
    setEmail,
  }
}
