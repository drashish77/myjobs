const validation = (values) => {
  let errors = {}
  if (!values.jobTitle || !values.description || !values.location) {
    errors.jobTitle = 'All Fields is mandatory'
  }

  return errors
}

export default validation
