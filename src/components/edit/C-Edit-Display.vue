<template>
  <div class="w-100">
    <div class="row h-5vh py-1">
      <div class="col-2 h-5vh">Search</div>
      <input class="col-8 h-4vh" type="text" v-model="search" @change.prevent="sortText">
    </div>
    <Card :data="data" class="d-none d-xl-flex"/>
    <img :src="data.imageM" class="d-flex d-xl-none h-60vh w-auto my-2"/>
  </div>
</template>

<script>
import Card from '../image/Card-Display.vue'

export default {
  name: 'Edit-Display',
  props: ['data'],
  data () {
    return {
      search: ''
    }
  },
  components: {
    Card
  },
  methods: {
    sortText () {
      this.$emit('sortData', 'text', this.search)
    }
  }
}
</script>
