import { useState, useEffect } from 'react'

const useData = <T>(fn: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fn()

      setData(response)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => fetchData()

  return { data, isLoading, refetch }
}

export default useData
