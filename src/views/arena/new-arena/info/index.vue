<template>
  <div class="col-3 p-0">
    <div class="row h-10vh m-0">
      <div class="text-white shadow-text-2"><b>Opponent</b></div>
      <div class="text-white shadow-text-2"><b>Life : {{ data.opponent.life }}</b></div>
    </div>
    <div class="row h-80vh m-0">
      <OPEN_ZONE
        :data="data"
        v-on:onDisplay="onDisplay"
      />
      <div class="col-1 p-0">
        <div v-for="phase in phases" :key="phase">
          <span v-if="phase === data.phase && data.turn === 'player'" class="d-flex justify-content-center my-1 font-12px border border-1 rounded cursor-default bg-warning">
            <b>{{ phase }}</b>
          </span>
          <span v-else-if="phase === data.phase && data.turn === 'opponent'" class="d-flex justify-content-center my-1 font-12px border border-1 rounded cursor-default bg-danger">
            <b>{{ phase }}</b>
          </span>
          <span
            v-else
            class="d-flex justify-content-center my-1 font-12px border border-1 rounded cursor-pointer bg-white"
            @click.prevent="onClick(phase)"
          >
            <b>{{ phase }}</b>
          </span>
        </div>
      </div>
    </div>
    <div class="row h-10vh m-0">
      <div class="text-white shadow-text-2"><b>Player</b></div>
      <div class="text-white shadow-text-2"><b>Life : {{ data.player.life }}</b></div>
    </div>
  </div>
</template>

<script>
import OPEN_ZONE from './open-zone.vue'

export default {
  name: 'Info',
  props: ['data'],
  data () {
    return {
      phases: ['SP', 'DP', 'MP1', 'BP', 'MP2', 'EP']
    }
  },
  components: {
    OPEN_ZONE
  },
  methods: {
    onClick (phase) {
      if (this.data.phase === 'MP1' && phase === 'BP') {
        this.$emit('changePhase', { who: this.data.turn, phase: 'BP' })
      }
      if (this.data.phase === 'BP' && phase === 'MP2') {
        this.$emit('changePhase', { who: this.data.turn, phase: 'MP2' })
      }
      if ((this.data.phase === 'MP1' || this.data.phase === 'BP' || this.data.phase === 'MP2') && phase === 'EP') {
        this.$emit('changePhase', { who: this.data.turn, phase: 'EP' })
      }
    },
    onDisplay (data) {
      this.$emit('onDisplay', data)
    }
  }
}
</script>
