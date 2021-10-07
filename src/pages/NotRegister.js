import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { UseForm } from '../components/UseForm'
import { registerMutation as register } from '../hoc/registerMutation'
import { loginMutation as login } from '../hoc/loginMutation'

export const NotRegister = () => {
  const { authenticate } = useContext(AppContext)

  const { registerMutation, infoRegister } = register()
  const { loginMutation, infoLogin } = login()

  const errorMsgLogin = infoLogin.error && 'Correo o constraseña incorrecta'
  const errorMsgRegister = infoRegister.error && 'Usuario ya existe '

  const onSubmitRegister = (variables) => {
    registerMutation({ variables }).then(({ data: { signup } }) => {
      authenticate(signup)
    }).catch(err => {
      console.log(err)
    })
  }

  const onSubmitLogin = (variables) => {
    loginMutation({ variables }).then(({ data: { login } }) => {
      authenticate(login)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <UseForm title='Registro' onSubmit={onSubmitRegister} info={infoRegister} errorMsg={errorMsgRegister} />
      <UseForm title='Iniciar sesión' onSubmit={onSubmitLogin} info={infoLogin} errorMsg={errorMsgLogin} />
    </div>
  )
}
