import logo from './logo.svg'
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Switch,
} from 'react-router-dom'
import './App.css'
import Header from './components/Header.js/Header'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Candidate from './components/Candiates/Candidate'
import Logout from './components/Login/Logout'
import Admin from './components/admin/Admin'
import Jobs from './components/Job/Jobs'
import { useLayoutEffect } from 'react'
import Reset from './components/Login/ForgetPassword'
import ForgetPassword from './components/Login/Reset'
import ForgetPasswordForm from './components/Login/ForgetPasswordForm'
import SingleJobDetail from './components/Job/SingleJobDetail'
import PostAJob from './components/Job/PostAJob'
import JobForm from './components/Job/JobForm'
import Form from './components/Login/Form'
import LoginForm from './components/Login/LoginForm'
import routes from './config/config'

function App(props) {
  const location = useLocation()
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window && window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div>
      <nav className='bg-gradient-to-r from-blue-dark to-blue-moderate h-72 text-white'>
        <Header />
        <div className='newBorder'></div>
        <Switch>
          {/* <Route path='/login' component={Login} /> */}
          <Route path={routes.loginRoute} component={LoginForm} />
          <Route path={routes.logoutRoute} component={Logout} />
          <Route path={routes.registerRoute} component={Form} />
          {/* <Route path='/jobs/:id' component={SingleJobDetail} /> */}
          <Route path='/jobs/new-job' component={PostAJob} exact />
          <Route path='/jobs/new-job/create' component={JobForm} exact />
          <Route path={routes.jobsRoute} component={Jobs} exact />
          <Route path='/candidates' component={Candidate} />
          <Route path={routes.changePassword} component={ForgetPasswordForm} />
          <Route path={routes.forgetpassword} component={Reset} />
          <Route path={routes.admin} component={Admin} exact />
          <Route path={routes.rootRoute} exact component={Home} />
        </Switch>
      </nav>
    </div>
  )
}

export default App
