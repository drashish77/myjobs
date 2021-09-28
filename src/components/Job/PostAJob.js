import { Link, useHistory } from 'react-router-dom'
import routes from '../../config/config'

const PostAJob = () => {
  const history = useHistory()
  const home = () => {
    history.push(routes.rootRoute)
  }
  const newjob = () => {
    history.push(routes.jobsRoute)
  }
  return (
    <div>
      {/* <div className='bg-gradient-to-r from-blue-dark to-blue-moderate lg:px-16 h-3/4'> */}
      {/* <Header /> */}
      <div onClick={home} className='ml-20 '>
        <i className='fas fa-house-user mr-2 pt-5'></i>
        <span className='text-blue-lightBlue'>Home</span>
      </div>
      <div className=''>
        <div className='mx-10 md:mx-16 lg:mx-24 my-12 lg:my-20 text-white'>
          <div className='flex items-center md:block logo text-2xl'>
            <h2 className=''>Create a New Job</h2>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center pt-20'>
          <i className='fas fa-pen-square text-6xl text-blue-moderate'></i>
          <p className='text-blue-moderate my-5'>
            Your posted jobs will show here!
          </p>
          <Link to='/jobs/new-job/create'>
            <button className='button'>Post a Job</button>
          </Link>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default PostAJob
