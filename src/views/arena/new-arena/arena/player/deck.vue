<template>
  <div class="col-12 h-20vh">
    <div class="row h-20vh d-flex justify-content-center align-content-center text-white shadow-text-2">
      <b>DECK {{ data.player.deck.length }}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Deck-Player',
  props: ['data'],
  data () {}
}
</script>
