<template>
  <div class="row h-30vh">
    <div
      class="col-12 h-10vh py-2 text-center text-white shadow-text-2 bg-sleeve-001 cursor-pointer"
      @click.prevent="openDrop"
    >
      <b>Drop {{ opponent.drop.length }}</b>
    </div>
    <div
      class="col-12 h-10vh py-2 text-center text-white shadow-text-2 bg-sleeve-001 cursor-pointer"
      @click.prevent="openDeck"
    >
      <b>Deck {{ opponent.deck.deck.length }}</b>
    </div>
    <div
      class="col-12 h-10vh py-2 text-center text-white shadow-text-2 bg-sleeve-001 cursor-pointer"
      @click.prevent="openBind"
    >
      <b>Bind {{ opponent.bind.length }}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Arena Opponent Deck',
  props: ['turn', 'phases', 'player', 'opponent'],
  methods: {
    openDeck () {
      this.$emit('openDeck', 'Opponent')
    },
    openBind () {
      this.$emit('openBind', 'Opponent')
    },
    openDrop () {
      this.$emit('openDrop', 'Opponent')
    }
  }
}
</script>
