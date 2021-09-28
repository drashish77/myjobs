export const NewJobValidation = (values) => {
  console.log(values)
  const { jobTitle, description, location } = values
  let errors = {}
  if (jobTitle === '' || description === '' || location === '') {
    errors.error = 'All fields are mandatory.'
  }
  return errors
}
export const ResetValidation = (result, values) => {
  let errors = {}
  if (values.email === '') {
    errors.error = 'The Field should not be empty.'
  } else if (values.email !== result.email) {
    errors.error = 'The email address is not registered.'
  }

  return errors
}
export const LoginValidation = (result, values) => {
  let errors = {}
  if (values.email === '' || !values.password === '') {
    errors.error = 'The Field/s should not be empty.'
  } else if (values.email !== result.email) {
    errors.error = 'Incorrect email address or password.'
  }

  return errors
}
const validation = (values) => {
  let errors = {}
  if (!values.fullName) {
    errors.fullName = 'The Field is mandatory'
  }
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'The Field is required'
  } else if (values.password.length < 5) {
    errors.password = 'Password must be more than five character long'
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'password is not matching'
  }
  return errors
}

export default validation
