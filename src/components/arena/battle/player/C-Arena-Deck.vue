<template>
  <div class="row h-30vh">
    <div
      class="col-12 h-10vh py-2 text-center text-white shadow-text-2 bg-sleeve-001"
      @click.prevent="openBind"
    >
      <b>Bind {{ player.bind.length }}</b>
    </div>
    <div
      class="col-12 h-10vh py-2 text-center text-white shadow-text-2 bg-sleeve-001"
      @click.prevent="openDeck"
    >
      <b>Deck {{ player.deck.deck.length }}</b>
    </div>
    <div
      class="col-12 h-10vh py-2 text-center text-white shadow-text-2 bg-sleeve-001"
      @click.prevent="openDrop"
    >
      <b>Drop {{ player.drop.length }}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Arena Player Deck',
  props: ['turn', 'phases', 'player', 'opponent'],
  methods: {
    openDeck () {
      this.$emit('openDeck', 'Player')
    },
    openBind () {
      this.$emit('openBind', 'Player')
    },
    openDrop () {
      this.$emit('openDrop', 'Player')
    }
  }
}
</script>
