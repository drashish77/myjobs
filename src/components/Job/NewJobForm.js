import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'

import { Link } from 'react-router-dom'
import routes, { BASE_URL } from '../../config/config'
import { getApiResponse } from '../../utils/apiHandler'
import { NewJobValidation } from '../Login/validation'
import validation from './JobValidation'

const NewJobForm = ({ submitForm }) => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  const [values, setValues] = useState({
    jobTitle: '',
    description: '',
    location: '',
  })
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
    setErrors(NewJobValidation(values))
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
      const token = localStorage.getItem('token')
      let url = `${BASE_URL}${routes.jobsRoute}`
      let method = 'POST'
      let headers = {
        'Content-Type': 'application/json',
        Authorization: token,
      }

      const title = values.jobTitle
      const description = values.description
      const location = values.location
      let body = JSON.stringify({ title, description, location })
      response = await getApiResponse(url, method, headers, body)
    } catch (error) {
      errored = true
    }
    setLoading(false)
    return response
  }
  //on submit of new job application, this function will call for the API and send the required value.
  const jobCreated = async () => {
    try {
      var response = await performAPICall()
      // localStorage.setItem('jobId', response.data.id)
      if (response !== undefined) {
        setValues(...values)
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
            <h3 className='font-semibold text-2xl'>Post A job</h3>
          </div>
          <div className='py-2'>
            <span className='px-1 text-sm text-blue-dark font-semibold'>
              Job Title*
            </span>
            <input
              name='jobTitle'
              placeholder='Enter job title'
              type='text'
              className='text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none'
              value={values.jobTitle}
              onChange={handleChange}
            />
          </div>
          <div className='py-2'>
            <span className='px-1 text-sm text-blue-dark font-semibold'>
              Description*
            </span>
            <textarea
              name='description'
              placeholder='Enter job description'
              type='text'
              className='text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none'
              value={values.description}
              onChange={handleChange}
            />
          </div>

          <div className='py-2'>
            <span className='px-1 text-sm text-blue-dark font-semibold'>
              Location*
            </span>
            <input
              placeholder='Enter location'
              name='location'
              type='text'
              className='text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none'
              value={values.location}
              onChange={handleChange}
            />
            {errors.error && <p className='error'>{errors.error}</p>}
          </div>
          {errors.jobTitle && <p className='error'>{errors.jobTitle}</p>}
          <button className='button mx-auto' onClick={jobCreated}>
            POST
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewJobForm
