<template>
      <div class="house m-2 bg-light shadow">
        <!-- passing required param ':id' -->
        <!-- <router-link :to="{name: 'HouseDetails', params: {id: house.id}}"> -->
          <img :src="house.imgUrl" class="w-100" :alt="house.description">
          <div class="p-3">
              <div class="text-center">
                  <p><b>{{house.year}} - {{house.price}}</b></p>
              </div>
          </div>
        <!-- </router-link> -->
      </div>
</template>


<script>
export default {
  props: {
    // value captured from the parent data
    // NOTE parent of what, of whom? This file, the house, so confused!
    house: {
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