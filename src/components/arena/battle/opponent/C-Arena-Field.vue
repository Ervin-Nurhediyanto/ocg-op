<template>
  <div class="col-12 h-30vh">
    <div class="row h-30vh">
      <div class="col-1">
        <Deck
          :turn='turn'
          :phases="phases"
          :player="player"
          :opponent="opponent"
          v-on:openDeck="openDeck"
          v-on:openBind="openBind"
          v-on:openDrop="openDrop"
        />
      </div>
      <div class="col-11 p-0">
        <div class="row d-flex justify-content-center align-content-center h-5vh m-0">
          <div v-for="i in opponent.field.length" :key="i" class="col-2 h-5vh d-flex justify-content-center align-content-center">
            <div class="text-white shadow-text-2"><b>{{ opponent.field[i - 1].totalPow }}</b></div>
          </div>
        </div>
        <div class="row d-flex justify-content-center align-content-center h-20vh m-0">
          <div v-for="i in opponent.field.length" :key="i" class="col-2 h-15vh d-flex justify-content-center align-content-center">
            <img
              :class="`h-15vh w-auto cursor-pointer ${opponent.field[i - 1].position}`"
              :src="opponent.field[i - 1].card.imageM"
              @click.prevent="onClick(i - 1)"
              @mouseover.prevent="mouseover(opponent.field[i - 1].card)"
            />
          </div>
          <div v-if="turn === 'Opponent'" class="mt-3 text-center">
            <span v-if="opponent.phase === 'BP'" class="text-danger shadow-text-1"><b>ATK : {{ opponent.atk }}</b></span>
          </div>
          <div v-else class="mt-3 text-center">
            <span v-if="player.phase === 'BP'" class="text-info shadow-text-1"><b>DEF : {{ opponent.def }}</b></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Deck from './C-Arena-Deck.vue'

export default {
  name: 'Arena Opponent Field',
  props: ['info', 'turn', 'phases', 'player', 'opponent'],
  components: {
    Deck
  },
  methods: {
    mouseover (data) {
      this.$emit('OD', data) // On Display
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
    onClick (index) {
      if (this.info.isOpen === true) {
        alert('Selesaikan Efek kartu !!!')
      } else {
        const unit = this.opponent.field[index].card
        const code = unit.code
        const phase = this.opponent.phase
        if (this.turn === 'Opponent') {
          if (phase === 'BP') {
            this.onATK(index, code)
          } else if (phase === 'MP1' || phase === 'MP2') {
            this.onEFF(index, code)
          }
        }
      }
    },
    onATK (index, code) {
      console.log('attack')
      this.$emit('onATK', { who: 'Opponent', index: index, code: code })
    },
    onEFF (index, code) {
      console.log('effect ACT')
      this.$emit('EFACT', { who: 'Opponent', index: index, code: code })
    }
  }
}
</script>
