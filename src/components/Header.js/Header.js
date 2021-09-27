import { Link } from 'react-router-dom'
import routes from '../../config/config'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const Header = (props) => {
  const [isActive, setIsActive] = useState(false)
  const toggleHeader = () => {
    setIsActive(!isActive)
  }
  const history = useHistory()
  const root = () => {
    history.push(routes.rootRoute)
  }
  const login = () => {
    history.push(routes.loginRoute)
  }
  return (
    <div>
      <div className='flex justify-between py-5 px-12 lg:px-20  items-center '>
        <div className='logo font-bold text-2xl' onClick={root}>
          <h2>
            My<span className='text-blue-400'>Jobs</span>
          </h2>
        </div>

        <div
          // className='side__nav hidden md:flex text-center '
          className={
            isActive
              ? 'flex justify-center shadow items-center text-center  Navbar__Link-toggle'
              : 'text-sm w-56 justify-evenly items-center text-center  hidden md:flex'
          }
        >
          <Link to='/admin'>
            <div className='ml-4'>
              <i className='fas fa-user-cog'></i>
              <p className='text-sm'>Admin</p>
            </div>
          </Link>
          {localStorage.getItem('token') ? (
            <Link to='/logout'>
              <div className='ml-4'>
                <i className='fas fa-user-injured'></i>
                <p className='text-sm'>Logout</p>
              </div>
            </Link>
          ) : (
            <>
              <Link to='/login'>
                <div className='ml-4'>
                  <i className='fas fa-sign-in-alt'></i>
                  <p className='text-sm'>Login</p>
                </div>
              </Link>
              <Link to='/register'>
                <div className='ml-4'>
                  <i className='fas fa-user-plus'></i>
                  <p className='text-sm'>Signup</p>
                </div>
              </Link>
            </>
          )}
        </div>
        <div className='block md:hidden' onClick={toggleHeader}>
          <i className='fas fa-bars'></i>
        </div>
      </div>
    </div>
  )
}

export default Header
