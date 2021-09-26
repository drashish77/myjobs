import { useEffect } from 'react'
import { useState } from 'react'

const useJobs = () => {
  const [jobs, setJobs] = useState([])
  const url = 'https://jobs-api.squareboat.info/api/v1/'
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      if (!response) {
        const message = 'unable to fetch data ...'
        throw new Error(message)
      }
      const data = await response.json()
      setJobs(data)
    }
    fetchData()
  }, [])
  return jobs
}

export default useJobs
