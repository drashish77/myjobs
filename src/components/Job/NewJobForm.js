import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../config/config'
import { getApiResponse } from '../../utils/apiHandler'
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
  const performAPICall = async () => {
    setLoading(true)
    let response
    let errored = false
    try {
      let url = `${BASE_URL}/auth/register`
      let method = 'POST'
      let headers = {
        'Content-Type': 'application/json',
      }
      let jobTitle = values.jobTitle
      let description = values.description
      let location = values.location
      let body = JSON.stringify({ jobTitle, description, location })

      response = await getApiResponse(url, method, headers, body)
    } catch (error) {
      errored = true
    }
    setLoading(false)
    return response
  }

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
              Description**
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
          </div>
          {errors.jobTitle && <p className='error'>{errors.jobTitle}</p>}
          <button className='button mx-auto'>POST</button>
        </div>
      </form>
    </div>
  )
}

export default NewJobForm
