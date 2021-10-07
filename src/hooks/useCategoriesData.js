import { useState, useEffect } from 'react'
import axios from 'axios'

export const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const URL = 'https://petgram-25u20oi2x-williamastudillo.vercel.app/categories'
  useEffect(async () => {
    const response = await axios.get(URL)
    setCategories(response.data)
  }, [])
  return { categories }
}
