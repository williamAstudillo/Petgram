import { useState } from 'react'

export const useInitialState = () => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })
  const authenticate = (token) => {
    setIsAuth(token)
    window.sessionStorage.setItem('token', token)
  }
  return {
    isAuth,
    authenticate
  }
}
