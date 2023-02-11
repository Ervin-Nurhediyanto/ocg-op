<template>
  <div class="col-12 h-30vh">
    <div class="row h-30vh">
      <div class="col-11 p-0">
        <div class="row d-flex justify-content-center align-content-center h-20vh m-0">
          <div v-if="turn === 'Player'" class="mt-3 text-center">
            <span v-if="player.phase === 'BP'" class="text-danger shadow-text-1"><b>ATK : {{ player.atk }}</b></span>
          </div>
          <div v-else class="mt-3 text-center">
            <span v-if="opponent.phase === 'BP'" class="text-info shadow-text-1"><b>DEF : {{ player.def }}</b></span>
          </div>
          <div v-for="i in player.field.length" :key="i" class="col-2 h-15vh d-flex justify-content-center align-content-center">
            <img
              :class="`h-15vh w-auto cursor-pointer ${player.field[i - 1].position}`"
              :src="player.field[i - 1].card.imageM"
              @click.prevent="onClick(i - 1)"
              @mouseover.prevent="mouseover(player.field[i - 1].card)"
            />
          </div>
        </div>
        <div class="row d-flex justify-content-center align-content-center h-5vh m-0">
          <div v-for="i in player.field.length" :key="i" class="col-2 h-5vh d-flex justify-content-center align-content-center">
            <div class="text-white shadow-text-2"><b>{{ player.field[i - 1].totalPow }}</b></div>
          </div>
        </div>
      </div>
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
    </div>
  </div>
</template>

<script>
import Deck from './C-Arena-Deck.vue'

export default {
  name: 'Arena Player Field',
  props: ['info', 'turn', 'phases', 'player', 'opponent', 'effect'],
  components: {
    Deck
  },
  methods: {
    mouseover (data) {
      this.$emit('onDisplay', data) // On Display
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
        const unit = this.player.field[index].card
        const code = unit.code
        const phase = this.player.phase
        if (this.turn === 'Player') {
          if (phase === 'BP') { // On Attack
            this.onATK(index, code)
          } else if (phase === 'MP1' || phase === 'MP2') {
            if (this.effect.player.active === true && this.effect.player.target.isField === true) {
              this.$emit('unit', { who: 'Player', index: index, from: 'FIELD', todo: this.effect.player.todo, RES: this.effect.player.RES })
            } else {
              this.onEFF(index, code)
            }
          }
        } else {
          if (this.opponent.phase === 'BP' && this.player.isBlock === true) { // On Block
            this.onDEF(index, code)
          }
          if ((this.opponent.phase === 'MP1' || this.opponent.phase === 'MP2') && (this.effect.opponent.active === true && this.effect.opponent.target.who === 'OTHER')) { // Target By Opponent
            console.log('DITARGET LAWAN')
            this.$emit('unit', { who: 'Player', index: index, from: 'FIELD', todo: this.effect.opponent.todo })
          }
        }
      }
    },
    onATK (index, code) {
      this.$emit('onATK', { who: 'Player', index: index, code: code })
    },
    onDEF (index, code) {
      this.$emit('onDEF', { who: 'Player', index: index, code: code })
    },
    onEFF (index, code) {
      this.$emit('EFACT', { who: 'Player', index: index, code: code })
    }
  }
}
</script>
