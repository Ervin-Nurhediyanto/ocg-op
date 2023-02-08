<template>
  <div class="col-6 h-100vh p-0">
    <Opponent
      :info='info'
      :turn='turn'
      :phases="phases"
      :player="player"
      :opponent="opponent"
      v-on:openDeck="openDeck"
      v-on:openBind="openBind"
      v-on:openDrop="openDrop"
      v-on:CFH="CFH"
      v-on:OD="OD"
      v-on:onATK="onATK"
      v-on:EFAUTO="EFAUTO"
      v-on:EFCONT="EFCONT"
      v-on:EFACT="EFACT"
    />
    <Player
      :info='info'
      :turn='turn'
      :phases="phases"
      :player="player"
      :opponent="opponent"
      v-on:openDeck="openDeck"
      v-on:openBind="openBind"
      v-on:openDrop="openDrop"
      v-on:CFH="CFH"
      v-on:OD="OD"
      v-on:onATK="onATK"
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
  props: ['data', 'info', 'turn', 'phases', 'player', 'opponent'],
  components: {
    Player,
    Opponent
  },
  methods: {
    openDeck (data) {
      this.$emit('openDeck', data)
    },
    openBind (data) {
      this.$emit('openBind', data)
    },
    openDrop (data) {
      this.$emit('openDrop', data)
    },
    CFH (data) {
      this.$emit('CFH', data)
    },
    OD (data) {
      this.$emit('OD', data)
    },
    onATK (data) {
      this.$emit('onATK', data)
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
