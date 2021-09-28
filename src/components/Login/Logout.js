import React from 'react'
// import "./Header.css";
import { useHistory } from 'react-router-dom'
import routes from '../../config/config'
const LogoutView = (props) => {
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    history.push(routes.rootRoute)
  }
  return (
    <div className='flex h-48 flex-col justify-center items-center'>
      {/* <img src='avatar.png' alt='profile' className='profile-image'></img> */}
      <div className='header-info '>
        Hey {localStorage.getItem('username')},
      </div>
      <p className='my-5'>Click the button for logout</p>
      <button className='button mx-auto' onClick={logout}>
        Logout
      </button>
    </div>
  )
}
export default LogoutView
