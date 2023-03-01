<template>
  <div class="col-12 h-20vh">
    <div
      class="row h-20vh d-flex justify-content-center align-content-center text-white shadow-text-2"
      @click.prevent="onClick"
    >
      <b>DROP {{ data.opponent.drop.length }}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Drop-Zone-Opponent',
  props: ['data'],
  data () {},
  methods: {
    onClick () {
      this.$emit('openZone', { who: 'opponent', zone: 'drop', todo: 'show drop zone' })
    }
  }
}
</script>
