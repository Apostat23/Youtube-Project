import { useState } from 'react'
import axios from 'axios'

export const useDataFetch = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async (url) => {
    const response = await axios.get(url)

    if (response.status === 200) {
      const {data: {items}} = response
      setData(items)
      setLoading(false)
      return
    }
    setData([])
  }
  return [data, fetchData, loading]
}