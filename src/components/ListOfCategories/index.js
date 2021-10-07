import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { useCategoriesData } from '../../hooks/useCategoriesData'

export const ListOfCategories = () => {
  const { categories } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const newShowFexied = window.scrollY > 200
      showFixed !== newShowFexied && setShowFixed(newShowFexied)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const render = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(category =>
          (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>)
        )
    }
    </List>
  )
  return (
    <>
      {render()}
      {showFixed && render(true)}
    </>
  )
}
