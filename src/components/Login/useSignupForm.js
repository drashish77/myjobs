import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { BASE_URL } from '../../config/config'
import { getApiResponse } from '../../utils/apiHandler'
import validation from './validation'

const useSignupForm = ({ submitForm }) => {
  const [isActive, setIsActive] = useState(false)
  const [isActive1, setIsActive1] = useState(false)
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    skills: '',
    userRole: 0,
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
      let url = `${BASE_URL}/auth/register`
      let method = 'POST'
      let headers = {
        'Content-Type': 'application/json',
      }
      const name = values.fullName
      const email = values.email
      const password = values.password
      const confirmPassword = values.confirmPassword
      const skills = values.skills
      const userRole = values.userRole
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
  return <div></div>
}

export default useSignupForm
