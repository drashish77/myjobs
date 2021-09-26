import useJobs from '../Hooks/useJobs'

const Candidate = () => {
  const jobs = useJobs()
  console.log(jobs)
  return <div>here you find a list of Candidate</div>
}

export default Candidate
