import { Link } from 'react-router-dom'
import Header from '../Header.js/Header'

const Home = () => {
  return (
    <div className='home'>
      <div className='bg-gradient-to-r from-blue-dark to-blue-moderate lg:px-16 h-3/4'>
        {/* <Header /> */}

        <div className='newBorder mx-12'></div>
        <div className=''>
          <div className='mx-10 md:mx-16 lg:mx-24 my-12 lg:my-20 text-white'>
            <div className='flex items-center md:block logo text-2xl md:text-4xl lg:text-6xl'>
              <h3 className='my-2 mx-2 lg:mx-0'>Welcome to </h3>
              <h2 className=''>
                My<span className='text-blue-lightBlue'>Jobs</span>
              </h2>
            </div>
            <Link to='/jobs'>
              <button className=' py-2 lg:py-3 lg:px-8  font-semibold rounded px-5 bg-blue-lightBlue mt-8 mb-12 lg:mt-12 lg:mb-20 hover:bg-blue-lighter'>
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className='img
       hidden lg:flex justify-end -mt-96 mr-32 '
      >
        <img
          src='https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          className='object-contain rounded-2xl'
          alt=''
        />
      </div>
      <div className='m-5 lg:mx-24 lg:mt-20 mb-12'>
        <h3 className='my-5 text-blue-dark font-semibold text-lg'>Why Us</h3>
        <div className='flex flex-col lg:flex-row '>
          <div className='border px-5 py-5 text-left rounded-lg  bg-white'>
            <div className='w-1/2'>
              <h3 className='my-2 text-xl text-blue-lightBlue capitalize font-semibold'>
                Get more visibility
              </h3>
            </div>
            <p className='text-blue-dark'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className='border px-5 py-5 text-left rounded-lg my-5 lg:my-0 lg:mx-5 bg-white'>
            <div className='w-1/2'>
              <h3 className='my-2 text-xl text-blue-lightBlue capitalize font-semibold'>
                Organize your candidates
              </h3>
            </div>
            <p className='text-blue-dark'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className='border px-5 py-5 text-left rounded-lg   bg-white'>
            <div className='w-1/2'>
              <h3 className='my-2 text-xl text-blue-lightBlue capitalize font-semibold'>
                Verify their abilities
              </h3>
            </div>
            <p className='text-blue-dark'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
