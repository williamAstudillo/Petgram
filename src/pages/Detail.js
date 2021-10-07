import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardowithQuery'
import { useParams } from 'react-router-dom'

export const Detail = () => {
  const { detailId } = useParams()
  return <PhotoCardWithQuery id={detailId} />
}
