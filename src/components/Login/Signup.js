import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import routes, { BASE_URL } from '../../config/config'
import { getApiResponse } from '../../utils/apiHandler'
import validation from './validation'

const Signup = ({ submitForm }) => {
  const [isActive, setIsActive] = useState(false)
  const [isActive1, setIsActive1] = useState(false)
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [userRole, setUserRole] = useState(0)
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    skills: '',
  })
  // const userRoleHandler = () => {
  //   setValues({...values,userRole})
  // }
  const [errors, setErrors] = useState({})
  const [dataIsCorrect, setDataIsCorrect] = useState(false)

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(validation(values))
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
      let url = `${BASE_URL}${routes.registerRoute}`
      let method = 'POST'
      let headers = {
        'Content-Type': 'application/json',
      }
      const name = values.fullName
      const email = values.email
      const password = values.password
      const confirmPassword = values.confirmPassword
      const skills = values.skills

      let body = JSON.stringify({
        email,
        userRole,
        password,
        confirmPassword,
        name,
        skills,
      })

      response = await getApiResponse(url, method, headers, body)
    } catch (error) {
      errored = true
    }
    setLoading(false)
    return response
  }
  const signup = async () => {
    try {
      var response = await performAPICall()
      if (response !== undefined) {
        setValues('')
        // history.push(routes.jobsRoute)
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='flex justify-center pt-20 z-50'>
      <form
        className='lg:w-2/5 text-blue-dark rounded-2xl shadow py-8 px-4 lg:px-8 bg-white border mb-10'
        onSubmit={handleSubmit}
      >
        <div className='py-2'>
          <div className='p-2'>
            <h3 className='font-semibold text-2xl'>Signup</h3>
            <p className='mt-4'>I’m a*</p>
            <div className='flex justify-start'>
              {/* button will be here*/}
              <label className='py-2 px-4 bg-blue-lightBlue text-white rounded-lg mr-4'>
                <i className='fas fa-user-tie mr-2'></i>
                <span className='mr-2'>Recruiter</span>
                <input
                  type='radio'
                  name='name'
                  value={userRole}
                  onClick={() => setUserRole(0)}
                />
              </label>
              <label className='py-2 px-4 bg-blue-lightBlue text-white rounded-lg'>
                <i className='fas fa-user-graduate mr-2'></i>
                <span className='mr-2'>Candidate</span>
                <input
                  type='radio'
                  name='name'
                  value={userRole}
                  onClick={() => setUserRole(1)}
                />
              </label>
            </div>
          </div>
          <div className='py-2'>
            <span className='px-1 text-sm text-blue-dark font-semibold'>
              Full Name*
            </span>
            <input
              name='fullName'
              placeholder='Enter your full name'
              type='text'
              className='text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none'
              value={values.fullName}
              onChange={handleChange}
            />

            {errors.fullName && <p className='error'>{errors.fullName}</p>}
          </div>
          <div className='py-2'>
            <span className='px-1 text-sm text-blue-dark font-semibold'>
              Email Address*
            </span>
            <input
              name='email'
              placeholder='Enter your email'
              type='email'
              className='text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none'
              value={values.email}
              onChange={handleChange}
            />

            {errors.email && <p className='error'>{errors.email}</p>}
          </div>
          <div className='flex justify-between'>
            <div className='py-2'>
              <span className='px-1 text-sm text-blue-dark font-semibold'>
                New Password*
              </span>
              <input
                name='password'
                placeholder='Enter your password'
                type='password'
                className='text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none'
                value={values.password}
                onChange={handleChange}
              />

              {errors.password && (
                <p className='error w-48'>{errors.password}</p>
              )}
            </div>
            <div className='py-2' x-data='{ show: true }'>
              <span className='px-1 text-sm text-blue-dark font-semibold'>
                Confirm new password*
              </span>
              <div className='relative'>
                <input
                  name='confirmPassword'
                  type='password'
                  placeholder='confirm Password'
                  className='text-md block px-3 py-2 rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-white 
                focus:border-gray-600  
                focus:outline-none'
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <p className='error'>{errors.confirmPassword}</p>
                )}

                <div className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'></div>
              </div>
            </div>
          </div>
          <div className='py-2'>
            <span className='px-1 text-sm text-blue-dark font-semibold'>
              Skills
            </span>
            <input
              placeholder='Enter your skills'
              name='skills'
              type='text'
              className='text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none'
              value={values.skills}
              onChange={handleChange}
            />
          </div>
          <button className='button mx-auto' onClick={signup}>
            Signup
          </button>
        </div>
        <div className='text-blue-dark text-center mt-8'>
          <span className=''>Have an account?</span>
          <Link to={routes.loginRoute}>
            <span className='text-blue-lightBlue'>Login</span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Signup
