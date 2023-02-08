<template>
  <div class="w-100">
    <Card :data="data"/>
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
