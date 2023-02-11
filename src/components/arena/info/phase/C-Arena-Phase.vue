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
      const changePhase = this.phases[index]
      let phase = ''
      if (who === 'Player') { phase = this.player.phase }
      if (who === 'Opponent') { phase = this.opponent.phase }
      if (changePhase === 'BP' && phase === 'MP1') { this.$emit('changePhase', { who: who, phase: changePhase }) }
      if (changePhase === 'MP2' && phase === 'BP') { this.$emit('changePhase', { who: who, phase: changePhase }) }
      if (changePhase === 'EP' && (phase === 'MP1' || phase === 'BP' || phase === 'MP2')) { this.$emit('changePhase', { who: who, phase: changePhase }) }
    }
  }
}
</script>
