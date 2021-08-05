<template>
  <div class="HouseDetailsPage">
    {{house.price}}
    <img :src="house.imgUrl" alt="">
    <button class="btn btn-danger" @click="destroy">Delete</button>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core"
import { housesService } from "../services/HousesService"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
export default {
  name: 'HouseDetailsPage',
  setup(){
    const route = useRoute()
    onMounted(async() => {
      await housesService.getHouseById(route.params.id)
    })
    return {
      house: computed(()=> AppState.activeHouse),
      async destroy(){
        await housesService.destroy(route.params.id)
      }
    }
  },
  components:{}
}
</script>


<style lang="scss" scoped>

</style>