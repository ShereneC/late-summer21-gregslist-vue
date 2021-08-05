import { AppState } from "../AppState"
import { sandbox } from "./AxiosService"

class JobsService {
  async getJobs() {
    let res = await sandbox.get("/jobs")
    AppState.jobs = res.data
  }
  async getJobById(id){
    let res = await sandbox.get(`/jobs/${id}`)
    AppState.activeJob = res.data
  }
  async createJob(job){
    let res = await sandbox.post('/jobs', job)
    AppState.jobs.push(res.data)
    return res.data.id
  }
  async destroy(id){
    await sandbox.delete(`/jobs/${id}`)
    AppState.jobs = AppState.jobs.filter(job => job.id !== id)
  }
}

export const jobsService = new JobsService()