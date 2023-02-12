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
            <div v-if="opponent.field[i - 1].totalPow === opponent.field[i - 1].card.power" class="text-white shadow-text-2"><b>{{ opponent.field[i - 1].totalPow }}</b></div>
            <div v-if="opponent.field[i - 1].totalPow < opponent.field[i - 1].card.power" class="text-danger shadow-text-2"><b>{{ opponent.field[i - 1].totalPow }}</b></div>
            <div v-if="opponent.field[i - 1].totalPow > opponent.field[i - 1].card.power" class="text-info shadow-text-2"><b>{{ opponent.field[i - 1].totalPow }}</b></div>
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
          <div v-if="turn === 'Opponent'" class="mt-xl-3 text-center">
            <span v-if="opponent.phase === 'BP'" class="text-danger shadow-text-1"><b>ATK : {{ opponent.atk }}</b></span>
          </div>
          <div v-else class="mt-xl-3 text-center">
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
  props: ['info', 'turn', 'phases', 'player', 'opponent', 'effect'],
  components: {
    Deck
  },
  methods: {
    mouseover (data) {
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
    onClick (index) {
      if (this.info.isOpen === true) {
        alert('Selesaikan Efek kartu !!!')
      } else {
        const unit = this.opponent.field[index].card
        const code = unit.code
        const phase = this.opponent.phase
        if (this.turn === 'Opponent') {
          if (phase === 'BP') { // On Attack
            this.onATK(index, code)
          } else if (phase === 'MP1' || phase === 'MP2') {
            if (this.effect.opponent.active === true && this.effect.opponent.target.isField === true) {
              this.$emit('unit', { who: 'Opponent', index: index, from: 'FIELD', todo: this.effect.opponent.todo, RES: this.effect.opponent.RES })
            } else {
              this.onEFF(index, code)
            }
            // this.onEFF(index, code)
          }
        } else {
          if (this.player.phase === 'BP' && this.opponent.isBlock === true) { // On Block
            if (this.opponent.field[index].position !== 'Rest') {
              this.onDEF(index, code)
            } else {
              alert('Pilih unit lain')
            }
          }
          if ((this.player.phase === 'MP1' || this.player.phase === 'MP2') && (this.effect.player.active === true && this.effect.player.target.who === 'OTHER')) { // Target By Player
            this.$emit('unit', { who: 'Opponent', index: index, from: 'FIELD', todo: this.effect.player.todo })
          }
        }
      }
    },
    onATK (index, code) {
      this.$emit('onATK', { who: 'Opponent', index: index, code: code })
    },
    onDEF (index, code) {
      this.$emit('onDEF', { who: 'Opponent', index: index, code: code })
    },
    onEFF (index, code) {
      this.$emit('EFACT', { who: 'Opponent', index: index, code: code })
    }
  }
}
</script>
