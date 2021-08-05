<template>
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
      </div>
</template>


<script>
export default {
  props: {
    // value captured from the parent data
    job: {
      type: Object,
      required: true
    }
  },
  setup(){
    return {}
  }}
</script>


<style lang="scss" scoped>

</style>