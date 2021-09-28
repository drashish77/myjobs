import { useState } from 'react'
import ForgetPassword from './Reset'

const Form = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const submitForm = () => {
    setIsFormSubmitted(true)
  }
  return (
    <div>
      {!isFormSubmitted ? (
        <ForgetPassword submitForm={submitForm} />
      ) : (
        'The email is not registered'
      )}
    </div>
  )
}

export default Form
