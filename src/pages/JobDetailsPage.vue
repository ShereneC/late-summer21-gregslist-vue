<template>
  <div class="job-details-page">
      <div class="job m-2 bg-light shadow">
        <!-- passing required param ':id' -->
        <router-link :to="{name: 'JobDetails', params: {id: job.id}}">
          <img src="https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" class="w-100" :alt="job.description">
          <div class="p-3">
              <div class="text-center">
                  <p><b>{{job.jobTitle}} - {{job.description}}</b></p>
                  <p>Hours: {{job.hours}}   Rate: {{job.rate}}</p>
                  <p>{{job.company}}</p>
              </div>
          </div>
        </router-link>
    <button class="btn btn-danger" @click="destroy">Delete</button>
      </div>
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { jobsService } from '../services/JobsService'
import {useRoute, useRouter} from 'vue-router'

export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    onMounted(async()=>{
      try {
        await jobsService.getJobById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      job: computed(()=> AppState.activeJob),
      async destroy(){
        try {
          await jobsService.destroy(route.params.id)
          //  navigate user back to home
          router.push({name: 'Home'})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }}
</script>


<style lang="scss" scoped>

</style>