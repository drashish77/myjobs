import { useState } from 'react'
import NewJobForm from './NewJobForm'
import NewJobSuccess from './NewJobSuccess'

const JobForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const submitForm = () => {
    setIsFormSubmitted(true)
  }
  return (
    <div>
      {!isFormSubmitted ? (
        <NewJobForm submitForm={submitForm} />
      ) : (
        <NewJobSuccess />
      )}
    </div>
  )
}

export default JobForm
