import { useState } from 'react'
import Login from './Login'
import LoginSuccess from './LoginSuccess'

const Form = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const submitForm = () => {
    setIsFormSubmitted(true)
  }
  return (
    <div>
      {!isFormSubmitted ? <Login submitForm={submitForm} /> : <LoginSuccess />}
    </div>
  )
}

export default Form
