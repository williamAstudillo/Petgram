import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const LOGIN = gql`
    mutation login ($input: UserCredentials!) {
    login (input: $input)
    }
`

export const loginMutation = (input) => {
  const [loginMutation, infoLogin] = useMutation(LOGIN)
  return { loginMutation, infoLogin }
}
