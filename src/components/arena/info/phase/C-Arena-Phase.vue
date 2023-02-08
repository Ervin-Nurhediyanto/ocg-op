<template>
  <div class="row d-flex justify-content-center">
    <div
      class="col-12 p-0 d-flex justify-content-center cursor-pointer border border-2"
      v-for="i in phases.length"
      :key="i"
    >
      <PlayerPhaseAct :turn='turn' :phases="phases" :player="player" :i="i"/>
      <PlayerPhaseNonAct
        :i="i"
        :turn='turn'
        :phases="phases"
        :player="player"
        v-on:changePhase="changePhase"
      />
      <OpponentPhaseAct :turn='turn' :phases="phases" :opponent="opponent" :i="i"/>
      <OpponentPhaseNonAct
        :i="i"
        :turn='turn'
        :phases="phases"
        :opponent="opponent"
        v-on:changePhase="changePhase"
      />
    </div>
  </div>
</template>

<script>
import PlayerPhaseAct from './player/active.vue'
import PlayerPhaseNonAct from './player/non-active.vue'
import OpponentPhaseAct from './opponent/active.vue'
import OpponentPhaseNonAct from './opponent/non-active.vue'

export default {
  name: 'Arena Phase',
  props: ['turn', 'phases', 'player', 'opponent'],
  data () {
    return {
    }
  },
  components: {
    PlayerPhaseAct,
    PlayerPhaseNonAct,
    OpponentPhaseAct,
    OpponentPhaseNonAct
  },
  methods: {
    changePhase (index) {
      const who = this.turn
      const BPS = this.phases[index] // Button Phase Click
      if (BPS === 'BP') {
        if (who === 'Player') { // BP Player
          const phase = this.player.phase
          if (phase === 'MP1') {
            console.log('Masuk ke BP')
            this.$emit('BCP', { who: who, phase: BPS })
          } else {
            console.log('Tidak Bisa ke Phase Ini')
          }
        } else { // BP Opponent
          const phase = this.opponent.phase
          if (phase === 'MP1') {
            console.log('Masuk ke BP')
            this.$emit('BCP', { who: who, phase: BPS })
          } else {
            console.log('Tidak Bisa ke Phase Ini')
          }
        }
      } else if (BPS === 'MP2') {
        if (who === 'Player') { // MP2 Player
          const phase = this.player.phase
          if (phase === 'BP') {
            console.log('Masuk ke MP2')
            this.$emit('BCP', { who: who, phase: BPS })
          } else {
            console.log('Tidak Bisa ke Phase Ini')
          }
        } else { // MP2 Opponent
          const phase = this.opponent.phase
          if (phase === 'BP') {
            console.log('Masuk ke MP2')
            this.$emit('BCP', { who: who, phase: BPS })
          } else {
            console.log('Tidak Bisa ke Phase Ini')
          }
        }
      } else if (BPS === 'EP') {
        if (who === 'Player') { // EP Player
          const phase = this.player.phase
          if (phase === 'MP1' || phase === 'BP' || phase === 'MP2') {
            console.log('Masuk ke EP')
            this.$emit('BCP', { who: who, phase: BPS })
          } else {
            console.log('Tidak Bisa ke Phase Ini')
          }
        } else { // EP Opponent
          const phase = this.opponent.phase
          if (phase === 'MP1' || phase === 'BP' || phase === 'MP2') {
            console.log('Masuk ke EP')
            this.$emit('BCP', { who: who, phase: BPS })
          } else {
            console.log('Tidak Bisa ke Phase Ini')
          }
        }
      }
    }
  }
}
</script>
