const JobCard = ({
  job,
  donationHandler,
  modalIsOpen,
  setModalIsOpen,
  SingleJobDetail,
  Modal,
}) => {
  return (
    <div
      className='border px-5 py-5 text-left rounded-lg w-72 bg-white m-2'
      key={job.id}
    >
      <h3 className='my-2 text-xl text-blue-moderate capitalize font-semibold overflow-ellipsis overflow-hidden'>
        {job.title}
      </h3>
      <div className='' style={{ minHeight: '50px' }}>
        <p className='text-blue-moderate multi-line-truncate mb-1'>
          {job.description}
        </p>
      </div>
      <div className='flex flex-row justify-between items-center my-2'>
        <div className='text-lg mb-5 lg:mb-0'>
          <i className='fas fa-map-marker-alt text-blue-lightBlue'></i>
          <span className='text-blue-moderate capitalize text-sm ml-2'>
            {job.location}
          </span>
        </div>

        <button
          className='px-2 py-1 text-sm bg-blue-lighter text-blue-moderate rounded'
          onClick={donationHandler}
        >
          View Applications
        </button>

        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: 'rgba(0,0,0,0.07)',
            },
            content: {
              color: 'gray',
              width: '80vw',
              margin: 'auto',
            },
          }}
        >
          <div className='flex justify-end items-start sticky top-10 right-0'>
            <button
              className='button rounded-full'
              onClick={() => setModalIsOpen(false)}
            >
              <i className='fas fa-times'></i>
            </button>
          </div>
          {/* <div className='flex justify-end items-start sticky top-10 right-0'>
                   
                  </div> */}
          {/* <div className='flex flex-col justify-center items-center pt-5 m-auto'> */}
          <SingleJobDetail setModalIsOpen={setModalIsOpen} />
          {/* </div> */}
        </Modal>
      </div>
    </div>
  )
}

export default JobCard
