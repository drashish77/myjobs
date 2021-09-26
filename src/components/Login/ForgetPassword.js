import { useState } from 'react'

const Reset = () => {
  const [email, setEmail] = useState('')
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
            <h3 className='font-semibold text-2xl'>Forgot your password?</h3>
            <p className='my-4'>
              Enter the email associated with your account and we’ll send you
              instructions to reset your password.
            </p>
          </div>
          <span className='px-1 text-sm text-blue-dark font-semibold'>
            Enter Your Email Address
          </span>
          <input
            placeholder='Enter your email'
            type='text'
            className='text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none text-blue-dark'
            value={email}
            onChange={onChangeHandler}
          />
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

export default Reset
