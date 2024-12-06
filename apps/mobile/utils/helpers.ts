const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePassword = (password: string) => {
  return password.length >= 8
}

const errorHandler = (error: string[]) => {
  if (Array.isArray(error)) {
    return error.join(', ')
  }
  return error || 'An unexpected error occurred.'
}

export { validateEmail, validatePassword, errorHandler }
