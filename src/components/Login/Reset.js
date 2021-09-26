import { useState } from 'react'

const ForgetPassword = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onChangeHandler = (e) => {
    // console.log()
    setEmail(e.target.value)
  }
  return (
    <div className='flex justify-center pt-20 z-50'>
      <form
        className='lg:w-2/5 text-blue-dark rounded-2xl shadow py-8 px-4 lg:px-8 bg-white border'
        onSubmit={(e) => e.preventDefault()}
      >
        <div className='py-2'>
          <div className='p-2'>
            <h3 className='font-semibold text-2xl'>Reset Your Password</h3>
            <p className='my-4'>Enter your new password below.</p>
          </div>
          <div className='py-2'>
            <span className='px-1 text-sm text-blue-dark font-semibold'>
              New Password
            </span>
            <input
              placeholder='Enter your password'
              type='text'
              className='text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='py-2' x-data='{ show: true }'>
            <span className='px-1 text-sm text-blue-dark font-semibold'>
              Confirm new password
            </span>
            <div className='relative'>
              <input
                placeholder='Enter your password'
                className='text-md block px-3 py-2 rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                focus:placeholder-gray-500
                focus:bg-white 
                focus:border-gray-600  
                focus:outline-none'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'></div>
            </div>
          </div>
          <button
            className='mt-3 text-lg font-semibold 
                bg-blue-lightBlue w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-blue-dark'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ForgetPassword
