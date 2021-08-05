<template>
  <div class="job-form">
    <form class="d-flex" @submit.prevent="createJob">
      <div class="form-group">
        <label for="jobTitle">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          v-model="state.newJob.jobTitle"
          class="form-control"
          placeholder="Title..."
          required
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          v-model="state.newJob.description"
          class="form-control"
          placeholder="Description..."
          required
        />
      </div>
      <div class="form-group">
        <label for="company">Company</label>
        <input
          type="text"
          name="company"
          v-model="state.newJob.company"
          class="form-control"
          placeholder="Company..."
          required
        />
      </div>
      <div class="form-group">
        <label for="hours">Hours</label>
        <input
          type="number"
          name="hours"
          v-model="state.newJob.hours"
          class="form-control"
          placeholder="Hours..."
          required
          min="5"
          max="100"
        />
      </div>
      <div class="form-group">
        <label for="rate">Rate</label>
        <input
          type="number"
          name="rate"
          v-model="state.newJob.rate"
          class="form-control"
          placeholder="Hourly Rate..."
          required
          min="1"
        />
      </div>
      <div class="d-flex align-items-center">
        <button type="submit" class="btn btn-outline-success">Add</button>
      </div>
    </form>
  </div>
</template>


<script>
import { reactive } from '@vue/reactivity'
import { jobsService } from '../services/JobsService'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      newJob: {}
    })
    return {
      state,
      async createJob(){
        try {
          const newId = await jobsService.createJob(state.newJob)
          // NOTE clears the form
          state.newJob = {}
          router.push({name: 'JobDetails', params: {id: newId}})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>