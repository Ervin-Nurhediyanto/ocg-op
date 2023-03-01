<template>
  <div class="col-12 h-20vh">
    <div
      class="row h-20vh d-flex justify-content-center align-content-center text-white shadow-text-2"
      @click.prevent="onClick"
    >
      <b>BIND {{ data.player.bind.length }}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bind-Zone-Player',
  props: ['data'],
  data () {},
  methods: {
    onClick () {
      this.$emit('openZone', { who: 'player', zone: 'bind', todo: 'show bind zone' })
    }
  }
}
</script>
