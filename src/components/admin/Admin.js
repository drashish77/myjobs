import PostAJob from '../Job/PostAJob'
import { useHistory } from 'react-router-dom'
import routes from '../../config/config'

const Admin = () => {
  const history = useHistory()
  const home = () => {
    history.push(routes.rootRoute)
  }

  const token = localStorage.getItem('token')
  // const userRole = localStorage.getItem('userRole')
  // console.log(userRole)
  //User role is 0 for Recruiter and 1 for Candidate.
  const renderText = (
    <div className=' '>
      <div className='flex justify-center items-center my-2'>
        <div onClick={home}>
          <i className='fas fa-house-user mr-2'></i>{' '}
          <span className='text-blue-lightBlue'>Go Home</span>
        </div>
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
