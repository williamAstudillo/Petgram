import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const User = () => {
  const { authenticate } = useContext(AppContext)
  const handleClick = () => {
    window.sessionStorage.removeItem('token')
    authenticate('')
  }
  return (
    <>
      <div>User</div>
      <button onClick={handleClick}>Cerrar sesion</button>
    </>
  )
}
