import { useState } from 'react'
import Login from './Login'
import LoginSuccess from './LoginSuccess2'

const LoginForm = () => {
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

export default LoginForm
