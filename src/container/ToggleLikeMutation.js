import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const TOGGLE_LIKE = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`
export const ToggleLikeMutation = (id) => {
  const [toggleLike] = useMutation(TOGGLE_LIKE, {
    variables: { input: { id } }
  })
  return toggleLike
}
