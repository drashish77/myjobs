import { useState } from 'react'
import Signup from './Signup'
import SignupSuccess from './SignupSuccess'

const Form = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const submitForm = () => {
    setIsFormSubmitted(true)
  }
  return (
    <div>
      {!isFormSubmitted ? (
        <Signup submitForm={submitForm} />
      ) : (
        <SignupSuccess />
      )}
    </div>
  )
}

export default Form
