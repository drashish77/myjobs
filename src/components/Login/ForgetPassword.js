import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import routes, { BASE_URL } from '../../config/config'
import { getApiResponse } from '../../utils/apiHandler'
import { ResetValidation } from './validation'

const ForgetPassword = ({ submitForm }) => {
  const history = useHistory()
  const [result, setResult] = useState({})
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [dataIsCorrect, setDataIsCorrect] = useState(false)

  const onChangeHandler = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(ResetValidation(result, email))
    setDataIsCorrect(true)
  }
  const performAPICall = async () => {
    setLoading(true)
    let response
    let errored = false
    try {
      let url = `${BASE_URL}${routes.changePassword}?email=${email}`
      response = await getApiResponse(url)
    } catch (error) {
      errored = true
    }
    localStorage.setItem('resetToken', response.data.token)
    localStorage.setItem('email', response.data.email)
    setResult(response.data)
    setLoading(false)
    return response
  }
  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && dataIsCorrect) {
  //     submitForm(true)
  //   }
  // }, [errors])
  const reset = async () => {
    try {
      var response = await performAPICall()
      if (response !== undefined) {
        setEmail('')
        history.push(routes.changePassword)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='flex justify-center pt-20 z-50'>
      <form
        className='lg:w-2/5 text-blue-dark rounded-2xl shadow py-8 px-4 lg:px-8 bg-white border'
        onSubmit={handleSubmit}
      >
        <div className='py-2'>
          <div className='p-2'>
            <h3 className='font-semibold text-2xl'>Forgot your password?</h3>
            <p className='my-4'>
              Enter the email associated with your account and we’ll send you
              instructions to reset your password.
            </p>
          </div>
          <span className='px-1 text-sm text-blue-dark font-semibold'>
            Enter Your Email Address
          </span>
          <input
            name='email'
            placeholder='Enter your email'
            type='email'
            className='text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none text-blue-dark'
            value={email}
            onChange={onChangeHandler}
          />
          {errors.error && <p className='error w-48'>{errors.error}</p>}

          <button
            className='mt-3 text-lg font-semibold 
                bg-blue-lightBlue w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-blue-dark'
            onClick={reset}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ForgetPassword
