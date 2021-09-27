import { Link } from 'react-router-dom'

const SignupSuccess = () => {
  return (
    <div className=''>
      <div className='flex justify-center mt-20 items-center '>
        <div className='p-5 shadow border flex items-center rounded-lg'>
          <i className='far fa-smile-beam text-yellow-500 mr-2 text-4xl'></i>
          <h1 className='text-blue-lightBlue text-4xl'>Account Created!</h1>
        </div>
      </div>
      <div className='flex justify-center items-center my-2'>
        <Link to='/myjobs' className='mr-20'>
          <i className='fas fa-house-user mr-2'></i>{' '}
          <span className='text-blue-lightBlue'>Go Home</span>
        </Link>
        <Link to='/login' className=''>
          <i className='fas fa-sign-in-alt mr-2'></i>
          <span className='text-blue-lightBlue'>Login</span>
        </Link>
      </div>
    </div>
  )
}

export default SignupSuccess
