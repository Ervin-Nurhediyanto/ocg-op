<template>
  <div class="col-12 h-20vh">
    <div class="row h-20vh d-flex justify-content-center align-content-center text-white shadow-text-2">
      <b>MANA : {{ data.opponent.mana.use }} / {{ data.opponent.mana.max }}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mana-Zone-Opponent',
  props: ['data'],
  data () {}
}
</script>
