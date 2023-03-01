<template>
  <div class="col-3 p-0">
    <div class="h-15vh"/>
    <img
      :class="`h-70vh`"
      :src="data.display.imageM"
    />
    <div class="h-15vh"/>
  </div>
</template>

<script>
export default {
  name: 'Display',
  data () {},
  props: ['data']
}
</script>
