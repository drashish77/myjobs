import React from 'react'
import { useState } from 'react'
import routes, { BASE_URL } from '../../config/config'
import { Link, useHistory } from 'react-router-dom'
import { getApiResponse } from '../../utils/apiHandler'
// import validation from './validation'
import { useEffect } from 'react'
import validation, { LoginValidation } from './validation'

const Login = ({ submitForm }) => {
  const [result, setResult] = useState({})
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})
  const [dataIsCorrect, setDataIsCorrect] = useState(false)

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }
  // const validation = (result, values) => {
  //   if (
  //     result.data.email !== values.email ||
  //     result.data.password !== values.password
  //   ) {
  //     errors.password = 'The Field is mandatory'
  //   }
  // }
  // console.log(result)
  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(LoginValidation(values))
    setDataIsCorrect(true)
  }
  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true)
    }
  }, [errors])
  const performAPICall = async () => {
    setLoading(true)
    let response
    let errored = false
    try {
      let url = `${BASE_URL}/auth/login`
      let method = 'POST'
      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
      const email = values.email
      const password = values.password
      let body = JSON.stringify({ email, password })

      response = await getApiResponse(url, method, headers, body)
    } catch (error) {
      errored = true
    }
    console.log(response.data)
    // localStorage.setItem('token', data.email)
    // localStorage.setItem('email', data.name)
    setLoading(false)
    // if (validateResponse(errored, response)) {
    //   return response
    // }
    return response
  }

  // const validateInput = () => {
  //   if (email === '') {
  //     ;<div className='div'>Username is a required field</div>
  //     errors.username = 'Username is a required field'
  //     return false
  //   }
  //   if (password === '') {
  //     // ;<Message sign='error' message='Password must not be empty' />
  //     // errors.=('Password must not be empty')
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  const validateResponse = (errored, response) => {
    if (errored === true || response === null) {
      // ;<Message sign='error' message='Error Occured' />

      // errors.=('Error Occured')
      return false
    } else if (response.success === false) {
      // ;<Message sign='error' message={response.message} />
    } else if (errored === false && response.success === true) {
      return true
    }
  }

  const persistLogin = (token, email) => {
    localStorage.setItem('token', token)
    localStorage.setItem('email', email)
  }

  const login = async () => {
    try {
      var response = await performAPICall()
      // console.log(response)
      // setResult(response)
      if (response !== undefined) {
        // if(response.data.email!==values.email)
        persistLogin(response.data.token, response.data.email)
        setValues({ email: '', password: '' })
        // ;<Message sign='sucess' message='Successfully Login' />
        // succes.=ss('Successfully Login')
        history.push(routes.jobsRoute)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='flex justify-center pt-20 z-50 '>
      <form
        className='lg:w-2/5 text-black rounded-2xl shadow py-8 px-4 lg:px-8 bg-white border'
        onSubmit={handleSubmit}
      >
        <div className='mx-auto max-w-lg'>
          <h3 className='my-3 text-2xl text-blue-dark font-semibold'>Login</h3>
          <div className='py-2'>
            <span className='px-1 text-sm text-blue-dark font-semibold'>
              Email Address
            </span>
            <input
              name='email'
              placeholder='Enter your email'
              type='text'
              className='text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none'
              onChange={handleChange}
            />
            {/* {errors.email && <p className='error'>{errors.email}</p>} */}
          </div>
          <div className='py-2' x-data='{ show: true }'>
            <span className='px-1 text-sm text-blue-dark font-semibold'>
              Password
            </span>
            <div className='relative'>
              <input
                name='password'
                type='password'
                placeholder='Enter your password'
                className='text-md block px-3 py-2 rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-white 
                focus:border-gray-600  
                focus:outline-none'
                onChange={handleChange}
              />
              {errors.error && <p className='error w-48'>{errors.error}</p>}
              <div className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'></div>
            </div>
          </div>
          <div className='flex justify-between'>
            <label className='block text-gray-500 font-bold my-4'>
              <Link
                to='/reset'
                className='cursor-pointer tracking-tighter text-blue-lightBlue no-underline border-b-2'
              >
                <span>Reset your password?</span>
              </Link>
            </label>
            <label className='block text-gray-500 font-bold my-4'>
              <Link
                to='/forgetpassword'
                className='cursor-pointer tracking-tighter text-blue-lightBlue no-underline border-b-2'
              >
                <span>Forgot your password?</span>
              </Link>
            </label>
          </div>
          <button className='button mx-auto' onClick={login}>
            Login
          </button>
        </div>
      </form>
      {/* Display the footer */}
    </div>
  )
}

export default Login
