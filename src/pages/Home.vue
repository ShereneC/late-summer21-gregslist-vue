<template>
  <div class="home container-fluid">
    
    <div class="row">
      <div class="col">
        <CarForm />
        <HouseForm />
        <JobForm />
      </div>
          <div class="row mt-4 container-fluid text-center">
      <h3>Jobs for Hire</h3>
          </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="j in jobs" :key="j.id">
        <JobCard :job="j"/>
    </div>
    </div>
        <div class="row mt-4 container-fluid text-center">
      <h3>Houses for Sale</h3>
    </div>
    <div class="row">
      <div class="col-4" v-for="h in houses" :key="h.id">
        <!-- Data passed through prop ':car' to child -->
        <!-- NOTE Who is the parent and who is the child??? I'm so confused -->
        <HouseCard :house="h"/>
      </div>
    </div>
    <div class="row mt-4 container-fluid text-center">
      <h3>Cars for Sale</h3>
    </div>
    <div class="row">
      <div class="col-4" v-for="c in cars" :key="c.id">
        <!-- Data passed through prop ':car' to child -->
        <!-- NOTE Who is the parent and who is the child??? I'm so confused -->
        <CarCard :car="c"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import {carsService } from '../services/CarsService'
import {housesService} from '../services/HousesService'
import {jobsService} from '../services/JobsService'
import CarCard from '../components/CarCard.vue'
import CarForm from '../components/CarForm.vue'
import JobCard from '../components/JobCard.vue'
import JobForm from '../components/JobForm.vue'
import HouseCard from '../components/HouseCard.vue'
import HouseForm from '../components/HouseForm.vue'

export default {
  name: 'Home',
  setup(){
    // state

    // mounted
    onMounted(async ()=>{
      try {
        await carsService.getCars()
        await housesService.getHouses()
        await jobsService.getJobs()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      // state,
      // computeds
      cars: computed(() => AppState.cars),
      houses: computed(()=> AppState.houses),
      jobs: computed(()=> AppState.jobs)
      // methods
    }
  },
  components: {
    CarCard,
    CarForm,
    HouseCard,
    HouseForm,
    JobCard,
    JobForm
  }
}
</script>
