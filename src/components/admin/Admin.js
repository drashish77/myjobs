import { Link } from 'react-router-dom'
import PostAJob from '../Job/PostAJob'

const Admin = () => {
  const token = localStorage.getItem('token')
  const userRole = localStorage.getItem('userRole')
  console.log(userRole)
  //userRole
  //recruiter=0 candidate=1
  const renderText = (
    <div className=' '>
      <div className='flex justify-center items-center my-2'>
        <Link to='/myjobs' className=''>
          <i className='fas fa-house-user mr-2'></i>{' '}
          <span className='text-blue-lightBlue'>Go Home</span>
        </Link>
      </div>
      <div className='flex justify-center mt-4 items-center w-2/3 mx-auto'>
        <div className='p-5 shadow border flex items-center rounded-lg'>
          <i className='far fa-sad-tear text-red-500 mr-3 text-4xl'></i>
          <h1 className='text-red-500 text-lg  lg:text-4xl'>
            Sorry, No proper user right to access this section !
          </h1>
        </div>
      </div>
    </div>
  )

  return <div>{token ? <PostAJob /> : renderText}</div>
}

export default Admin
