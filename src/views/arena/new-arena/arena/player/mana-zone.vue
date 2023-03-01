<template>
  <div class="col-12 h-20vh">
    <div class="row h-20vh d-flex justify-content-center align-content-center text-white shadow-text-2">
      <b>MANA : {{ data.player.mana.use }} / {{ data.player.mana.max }}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mana-Zone-Player',
  props: ['data'],
  data () {}
}
</script>
