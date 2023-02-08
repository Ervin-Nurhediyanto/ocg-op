<template>
  <img
    class="h-20vh w-auto"
    :src="image"
    @click.prevent="handleChange(data)"
    @mouseover.prevent="mouseover(data)"
  />
</template>

<script>
export default {
  name: 'Card-Mini',
  props: ['image', 'data'],
  methods: {
    handleChange (data) {
      this.$emit('addToDeck', data)
    },
    mouseover (data) {
      this.$emit('changeDisplay', data)
    }
  }
}
</script>
