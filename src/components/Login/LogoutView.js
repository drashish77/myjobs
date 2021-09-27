import React from 'react'
import { useHistory } from 'react-router-dom'
import routes from '../../config/config'

export const LogoutView = (props) => {
  const history = useHistory()
  const root = () => {
    history.push(routes.rootRoute)
  }
  const logout = () => {
    localStorage.removeItem('userRole')
    localStorage.removeItem('token')
    history.push(routes.rootRoute)
  }
  return (
    <>
      <img src='avatar.png' alt='profile' className='profile-image'></img>
      <div className='header-info'>{localStorage.getItem('username')}</div>
      <button className='btn' onClick={logout}>
        Logout
      </button>
    </>
  )
}
