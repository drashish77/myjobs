import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import routes, { BASE_URL } from '../../config/config'
import Loader from '../common/Loader'
import SingleJobDetail from './SingleJobDetail'
import Modal from 'react-modal'

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [isActive, setActive] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [loading, setLoading] = useState(false)
  // console.log(jobs)
  const toggleCard = () => {
    setActive(true)
  }
  const donationHandler = (e) => {
    setModalIsOpen(true)
  }
  useEffect(() => {
    const url = `${BASE_URL}${routes.jobsRoute}`
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch(url)
      if (!response) {
        const message = 'The data is not fetched'
        throw new Error(message)
      }
      const data = await response.json()
      // setLoading(false)
      setJobs(data.data)
    }
    fetchData()
  }, [])
  // console.log(jobs)
  if (!loading) {
    return (
      <>
        <Loader />
      </>
    )
  } else {
    return (
      <div>
        {' '}
        <div className='lg:mx-24 mt-20 mb-12'>
          <h3 className='mx-5 my-5 text-white font-semibold text-2xl'>
            Jobs posted by you
          </h3>
          <div className='flex flex-col flex-wrap items-center justify-evenly lg:flex-row pb-20'>
            {jobs &&
              jobs.map((job) => {
                return (
                  <div
                    className='border px-5 py-5 text-left rounded-lg w-64 md:w-96 bg-white m-2'
                    key={job.id}
                  >
                    <h3 className='my-2 text-xl text-blue-moderate capitalize font-semibold overflow-ellipsis overflow-hidden'>
                      {job.title}
                    </h3>
                    <div className='h-20'>
                      <p className='text-blue-moderate overflow-ellipsis overflow-hidden'>
                        {job.description}
                      </p>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center my-2'>
                      <div className='text-lg mb-5 lg:mb-0'>
                        <i className='fas fa-map-marker-alt text-blue-lightBlue'></i>
                        <span className='text-blue-moderate  ml-2'>
                          {job.location}
                        </span>
                      </div>

                      <button
                        className='px-3 py-2 bg-blue-lighter text-blue-moderate rounded'
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
                            <i class='fas fa-times'></i>
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
              })}
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
