<template>
  <div class="col-6 h-100vh p-0">
    <Opponent
      v-on:onDisplay="onDisplay"
      v-on:HAND="HAND"
      v-on:unit="unit"
      :effect='effect'
      :info='info'
      :turn='turn'
      :phases="phases"
      :player="player"
      :opponent="opponent"
      v-on:openDeck="openDeck"
      v-on:openBind="openBind"
      v-on:openDrop="openDrop"
      v-on:onATK="onATK"
      v-on:onDEF="onDEF"
      v-on:EFAUTO="EFAUTO"
      v-on:EFCONT="EFCONT"
      v-on:EFACT="EFACT"
    />
    <Player
      v-on:onDisplay="onDisplay"
      v-on:HAND="HAND"
      v-on:unit="unit"
      :effect="effect"
      :info='info'
      :turn='turn'
      :phases="phases"
      :player="player"
      :opponent="opponent"
      v-on:openDeck="openDeck"
      v-on:openBind="openBind"
      v-on:openDrop="openDrop"
      v-on:onATK="onATK"
      v-on:onDEF="onDEF"
      v-on:EFAUTO="EFAUTO"
      v-on:EFCONT="EFCONT"
      v-on:EFACT="EFACT"
    />
  </div>
</template>

<script>
import Player from './player/C-Arena-Player.vue'
import Opponent from './opponent/C-Arena-Opponent.vue'

export default {
  name: 'Arena Battle',
  props: ['data', 'info', 'turn', 'phases', 'player', 'opponent', 'effect'],
  components: {
    Player,
    Opponent
  },
  methods: {
    onDisplay (data) {
      this.$emit('onDisplay', data)
    },
    openDeck (data) {
      this.$emit('openDeck', data)
    },
    openBind (data) {
      this.$emit('openBind', data)
    },
    openDrop (data) {
      this.$emit('openDrop', data)
    },
    HAND (data) {
      this.$emit('HAND', data)
    },
    unit (data) {
      this.$emit('unit', data)
    },
    // OLD CODE
    onATK (data) {
      this.$emit('onATK', data)
    },
    onDEF (data) {
      this.$emit('onDEF', data)
    },
    EFAUTO (data) {
      this.$emit('EFAUTO', data)
    },
    EFCONT (data) {
      this.$emit('EFCONT', data)
    },
    EFACT (data) {
      this.$emit('EFACT', data)
    }
  }
}
</script>
