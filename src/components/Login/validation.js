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
