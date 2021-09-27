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
import SingleJobDetail from './components/Job/SingleJobDetail'
import PostAJob from './components/Job/PostAJob'
import JobForm from './components/Job/JobForm'
import Form from './components/Login/Form'
import LoginForm from './components/Login/LoginForm'

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
          <Route path='/login' component={LoginForm} />
          <Route path='/logout' component={Logout} />
          <Route path='/register' component={Form} />
          {/* <Route path='/jobs/:id' component={SingleJobDetail} /> */}
          <Route path='/jobs/new-job' component={PostAJob} exact />
          <Route path='/jobs/new-job/create' component={JobForm} exact />
          <Route path='/jobs' component={Jobs} />
          <Route path='/candidates' component={Candidate} />
          <Route path='/reset' component={ForgetPassword} />
          <Route path='/forgetpassword' component={Reset} />
          <Route path='/admin' component={Admin} />
          <Route path='/myjobs' exact component={Home} />
        </Switch>
      </nav>
    </div>
  )
}

export default App
