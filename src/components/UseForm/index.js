import React from 'react'
import { useInputvalue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'

export const UseForm = ({ onSubmit, title = 'titulo', info, errorMsg = 'error' }) => {
  const email = useInputvalue('')
  const password = useInputvalue('')
  const { loading, error } = info
  const handleSubmit = (event) => {
    event.preventDefault()
    const input = { email: email.value, password: password.value }
    const variables = { input }
    onSubmit(variables)
  }

  return (
    <>
      <Form disabled={loading} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={loading} type='text' placeholder='Correo' {...email} />
        <Input disabled={loading} type='text' placeholder='Contraseña' {...password} />
        <Button disabled={loading}>{title}</Button>
      </Form>
      {error && <Error>{errorMsg}</Error>}
    </>
  )
}
