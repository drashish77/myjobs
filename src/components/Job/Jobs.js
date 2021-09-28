import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import routes, { BASE_URL } from '../../config/config'
import Loader from '../common/Loader'
import SingleJobDetail from './SingleJobDetail'
import Modal from 'react-modal'
import JobCard from './JobCard'
import PaginationTable from '../common/PaginationTable'

const renderedData = (jobs) => {
  return (
    <ul>
      {jobs.map((job, index) => {
        return <li key={index}>{job.title}</li>
      })}
    </ul>
  )
}
const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [isActive, setActive] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(4)
  const [pageNumberLimit, setPageNumberLimit] = useState(4)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.value))
  }
  const pages = []
  for (let i = 1; i <= Math.ceil(jobs.length / itemsPerPage); i++) {
    pages.push(i)
  }
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = jobs.slice(indexOfFirstItem, indexOfLastItem)

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? 'bg-blue-dark text-white' : ''}
        >
          {number}
        </li>
      )
    } else {
      return null
    }
  })
  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1)
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }
  const handleNextButton = () => {
    setCurrentPage(currentPage + 1)
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }
  let pageIncrementBtn = null
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextButton}> &hellip; </li>
  }
  let pageDecrementBtn = null
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevButton}> &hellip; </li>
  }
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

  // const renderedData = pages.map() => {
  //   return (
  //     <div className='flex flex-col flex-wrap items-center justify-evenly lg:flex-row pb-20'>
  //       {pages &&
  //         pages.map((job) => {
  //           return (
  //             <div className='' key={job.id}>
  //               <JobCard
  //                 job={job}
  //                 Modal={Modal}
  //                 donationHandler={donationHandler}
  //                 modalIsOpen={modalIsOpen}
  //                 setModalIsOpen={setModalIsOpen}
  //                 SingleJobDetail={SingleJobDetail}
  //               />
  //             </div>
  //           )
  //         })}
  //     </div>
  //   )
  // }
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
        <div className='lg:mx-24 mt-20 mb-12'>
          <h3 className='mx-5 my-5 text-white text-center lg:text-left font-semibold text-2xl'>
            Jobs posted by you
          </h3>
          <div className='flex flex-col flex-wrap items-center justify-start lg:flex-row '>
            {currentItems &&
              currentItems.map((job) => {
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
            {/* {renderedData(jobs)} */}
          </div>

          <ul className='pageNumbers py-5'>
            <li>
              <button
                className=''
                disabled={currentPage === pages[0] ? true : false}
                onClick={handlePrevButton}
              >
                <i className='fas fa-backward mr-2'></i>Prev
              </button>
            </li>
            {pageDecrementBtn}
            {/* {renderPageNumbers} */}
            <li>Pages</li>
            {pageIncrementBtn}
            <li>
              <button
                className=''
                disabled={
                  currentPage === pages[pages.length - 1] ? true : false
                }
                onClick={handleNextButton}
              >
                Next
                <i className='fas fa-forward ml-2'></i>
              </button>
            </li>
          </ul>
          {/* <PaginationTable data={jobs} renderedData={renderedData} /> */}
        </div>
      </div>
    )
  }
}

export default Jobs
