import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import routes, { BASE_URL } from '../../config/config'
import Loader from '../common/Loader'
import SingleJobDetail from './SingleJobDetail'
import Modal from 'react-modal'
import JobCard from './JobCard'
import PaginationTable from '../common/PaginationTable'

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
  const renderedData = () => {
    return (
      <div className='lg:mx-24 mt-20 mb-12'>
        <h3 className='mx-5 my-5 text-white font-semibold text-2xl'>
          Jobs posted by you
        </h3>
        <div className='flex flex-col flex-wrap items-center justify-evenly lg:flex-row pb-20'>
          {jobs &&
            jobs.map((job) => {
              return (
                <div className='' key={job.id}>
                  <JobCard
                    job={job}
                    Modal={Modal}
                    donationHandler={donationHandler}
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                    SingleJobDetail={SingleJobDetail}
                  />
                </div>
              )
            })}
        </div>
      </div>
    )
  }
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
        {/* <div className='lg:mx-24 mt-20 mb-12'>
          <h3 className='mx-5 my-5 text-white font-semibold text-2xl'>
            Jobs posted by you
          </h3>
          <div className='flex flex-col flex-wrap items-center justify-evenly lg:flex-row pb-20'>
            {jobs &&
              jobs.map((job) => {
                return (
                  <div className='' key={job.id}>
                    <JobCard
                      job={job}
                      Modal={Modal}
                      donationHandler={donationHandler}
                      modalIsOpen={modalIsOpen}
                      setModalIsOpen={setModalIsOpen}
                      SingleJobDetail={SingleJobDetail}
                    />
                  </div>
                )
              })}
          </div>
        </div> */}
        <PaginationTable data={jobs} renderedData={renderedData} />
      </div>
    )
  }
}

export default Jobs
