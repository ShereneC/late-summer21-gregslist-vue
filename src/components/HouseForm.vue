<template>
  <div class="car-form">
    <form class="d-flex" @submit.prevent="createHouse">
      <div class="form-group">
        <label for="year">Year</label>
        <input
          type="number"
          name="year"
          v-model="state.newHouse.year"
          class="form-control"
          placeholder="Year..."
          required
          min="1930"
          max="2021"
        />
      </div>
      <div class="form-group">
        <label for="year">Bedrooms</label>
        <input
          type="number"
          name="year"
          v-model="state.newHouse.bedrooms"
          class="form-control"
          placeholder="Beds..."
          required
          min="1"
          max="20"
        />
      </div>
      <div class="form-group">
        <label for="year">Bathrooms</label>
        <input
          type="number"
          name="year"
          v-model="state.newHouse.bathrooms"
          class="form-control"
          placeholder="Beds..."
          required
          min="1"
          max="20"
        />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input
          type="number"
          name="price"
          v-model="state.newHouse.price"
          class="form-control"
          placeholder="Price..."
          required
          min="1"
        />
      </div>
      <div class="form-group">
        <label for="imgUrl">Image Url</label>
        <input
          type="text"
          name="imgUrl"
          v-model="state.newHouse.imgUrl"
          class="form-control"
          placeholder="Url..."
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          v-model="state.newHouse.description"
          class="form-control"
          placeholder="Description..."
          maxlength="240"
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
import { housesService } from '../services/HousesService'
// import { useRouter } from 'vue-router'
export default {
  setup() {
    // const router = useRouter()
    const state = reactive({
      newHouse: {}
    })
    return {
      state,
      async createHouse(){
        try {
          // const newId = 
          await housesService.createHouse(state.newHouse)

          // NOTE clears the form
          state.newHouse = {}
          // router.push({name: 'HouseDetails', params: {id: newId}})
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