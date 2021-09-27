const InputRadio = (props) => {
  return (
    <div
    // className='mx-auto max-w-full text-center flex flex-wrap justify-center'
    >
      <div className='  cursor-pointer select-none'>
        <input id={props.radio} type='radio' name='radio' className='hidden' />
        <label htmlFor={props.radio} className=' cursor-pointer'>
          <span className='hidden'></span>
          {props.children}
        </label>
      </div>
    </div>
  )
}

export default InputRadio
