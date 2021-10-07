import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery } from '@apollo/react-hooks'
import { getPhotos } from '../../hoc/getPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading } = useQuery(getPhotos, { variables: { categoryId } })
  if (loading) return 'Loading..'
  return (
    <ul>
      {
        data.photos.map(photo => (
          <PhotoCard key={photo.id} {...photo} />
        ))
      }
    </ul>
  )
}
