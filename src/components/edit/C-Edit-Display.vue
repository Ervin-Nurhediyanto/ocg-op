<template>
  <div class="w-100">
    <Card :data="data" class="d-none d-xl-flex"/>
    <img :src="data.imageM" class="d-flex d-xl-none h-65vh w-auto my-2"/>
  </div>
</template>

<script>
import Card from '../image/Card-Display.vue'

export default {
  name: 'Edit-Display',
  props: ['data'],
  components: {
    Card
  }
}
</script>
