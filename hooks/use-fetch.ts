import { useEffect, useState } from 'react'

interface FetchResult<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

export default function useFetch<T>(
  url: string,
  transformData?: (prevData: T | null, nextData: T) => T
): FetchResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(url)
      .then(response => {
        if (!response.ok) throw Error('Network response was not ok')
        return response.json()
      })
      .then(nextData =>
        setData(transformData ? transformData(data, nextData) : nextData)
      )
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}
