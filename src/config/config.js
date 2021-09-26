export const BASE_URL = `https://jobs-api.squareboat.info/api/v1`

const routes = {
  rootRoute: '/',
  //auth routes
  loginRoute: '/auth/login',
  logoutRoute: '/auth/logout',
  registerRoute: '/auth/register',
  getPasswordResetToken: '/auth/resetpassword?email=sharad@gmail.com',
  verifyPasswordToken: '/auth/resetpassword/:token',
  changePassword: '/auth/resetpassword',
  //job router
  jobsRoute: '/jobs?',
  getOneJobDetails: '/jobs/:id',
  getAllJobDetails: '/jobs?',
  deleteJob: '/jobs/:id',
  //candidates
  candidates: '/candidates/jobs',
  getAvailableJobs: '/candidates/jobs?',
  getAlreadyAppliedJobs: '/candidates/jobs/applied',
  //recruiters
  getPostedJobs: '/recruiters/jobs',
  getOneJobCandidates: '/recruiters/jobs/:id',
  thanksRoute: '/thanks',
}
export default routes
