import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import routes, { BASE_URL } from '../../config/config'
import Loader from '../common/Loader'
import data from '../assets/candidates.json'

const SingleJobDetail = ({ match, setModalIsOpen }) => {
  const [applications, setApplications] = useState([])
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  // console.log(data)
  useEffect(() => {
    // const url = `${BASE_URL}${routes.jobsRoute}`
    // fetch(url)
    //   .then((res) => res.json())
    //   .then(
    //     (data) => {
    //       setIsLoaded(true)
    //       // const SingleData = data.data.find((a) => a.id === match.params.id)
    //       setJob(data.data)
    //     },
    //     (error) => {
    //       setIsLoaded(true)
    //       setError(error)
    //     }
    //   )
    setIsLoaded(true)
    setApplications(data)
  }, [])
  if (error) {
    return <>{error.message}</>
  } else if (!isLoaded) {
    return (
      <>
        <Loader />
      </>
    )
  } else {
    return (
      <div className='dark__mode__black'>
        <div className=' text-blue-moderate'>
          {/* <p>Currencies: {country.currencies[0]['code']}</p> */}
          <div className='lg:mx-24 mt-20 mb-12'>
            <h2 className='mx-5 my-5 text-blue-moderate font-semibold text-2xl'>
              Applicants for this job
            </h2>
            <div className='m-5'>
              <hr />
            </div>
            <h3 className='mx-5 my-5 text-blue-dark font-semibold text-lg'>
              Total {data && data.length} Applicants
            </h3>
            <div
              className='flex flex-col flex-wrap items-center justify-evenly lg:flex-row px-1 py-4 rounded-lg'
              style={{ background: '#A9AFBC' }}
            >
              {data &&
                data.map((applicant) => {
                  return (
                    <div
                      className='border px-5 py-5 w-48 md:w-96 lg:80 text-left rounded-lg bg-white m-2'
                      key={Math.random()}
                    >
                      <div className='flex flex-col md:flex-row justify-start'>
                        <div className='p-1 md:p-2 rounded-full h-16 w-16 md:mr-5 flex items-center text-2xl font-semibold justify-center bg-blue-lighter border'>
                          {applicant.name[0]}
                        </div>
                        <div className=''>
                          <h3 className='my-2 text-xl text-blue-moderate capitalize font-semibold'>
                            {applicant.name}
                          </h3>
                          <p className='text-blue-moderate overflow-ellipsis overflow-hidden'>
                            {applicant.email}
                          </p>
                        </div>
                      </div>
                      <div className='flex justify-between items-center mt-5 mb-2'>
                        <div className='text-lg'>
                          <div className=''>
                            <strong>Skills:</strong>
                          </div>
                          <span className='text-blue-moderate text-left'>
                            {applicant.skills}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
          <button
            className='bg-cyan-moderate hover:bg-cyan-dark text-white rounded-full px-6 py-2 lg:py-4'
            onClick={() => setModalIsOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    )
  }
}

export default SingleJobDetail
