<template>
  <div class="col-10 h-80vh p-0">
    <div class="h-4vh text-center text-white bg-dark">Open {{ info.who }} {{ info.zone }}</div>
    <div class="row h-76vh overflow scrollbar-none border border-2">
      <div v-for="i in info.card.length" :key="i" class="col-2 h-15vh">
        <img
          :class="`h-15vh w-auto cursor-pointer`"
          :src="info.card[i - 1].imageM"
          @click.prevent="onClick(i - 1)"
          @mouseover.prevent="mouseover(info.card[i - 1])"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Arena Open',
  props: ['info', 'turn', 'phases', 'player', 'opponent'],
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    mouseover (data) {
      this.$emit('OD', data) // On Display
    },
    onClick (i) {
      if (this.info.todo === 'ADD TO HAND') {
        const unit = this.info.card[i]
        const code = unit.code
        let deck = []
        if (this.info.who === 'Player') {
          deck = this.player.deck.deck
        } else {
          deck = this.opponent.deck.deck
        }
        const index = deck.findIndex(x => x.code === code)
        const data = {
          who: this.info.who,
          index: index,
          from: 'DECK',
          todo: this.info.todo
        }
        // this.$emit('AFD', data)
        this.$emit('card', data)
      }
      if (this.info.todo === 'DECK TO FIELD') {
        const unit = this.info.card[i]
        const code = unit.code
        let deck = []
        if (this.info.who === 'Player') {
          deck = this.player.deck.deck
        } else {
          deck = this.opponent.deck.deck
        }
        const index = deck.findIndex(x => x.code === code)
        const data = {
          who: this.info.who,
          index: index,
          from: 'DECK',
          todo: this.info.todo
        }
        // this.$emit('DTF', data)
        this.$emit('card', data)
      }
      if (this.info.todo === 'DROP TO FIELD') {
        const unit = this.info.card[i]
        const code = unit.code
        let drop = []
        if (this.info.who === 'Player') {
          drop = this.player.drop
        } else {
          drop = this.opponent.drop
        }
        const index = drop.findIndex(x => x.code === code)
        const data = {
          who: this.info.who,
          index: index,
          from: 'DROP',
          todo: this.info.todo
        }
        this.$emit('card', data)
        // this.$emit('DRTF', data)
      }
      if (this.info.todo === 'FIELD TO DROP') {
      // if (this.info.todo === 'DESTROY UNIT') {
        const data = {
          who: this.info.who,
          index: i,
          from: 'FIELD',
          todo: this.info.todo
        }
        // this.$emit('UDF', data)
        this.$emit('card', data)
      }
      // if (this.info.todo === 'BIND UNIT') {
      if (this.info.todo === 'FIELD TO BIND') {
        const data = {
          who: this.info.who,
          index: i,
          from: 'FIELD',
          todo: this.info.todo
        }
        this.$emit('card', data)
        // this.$emit('UBF', data)
      }
      if (this.info.todo === 'FIELD TO HAND') {
        const data = {
          who: this.info.who,
          index: i,
          from: 'FIELD',
          todo: this.info.todo
        }
        this.$emit('card', data)
        // this.$emit('FTH', data)
      }
      if (this.info.todo === 'HAND TO DECK') {
        const data = {
          who: this.info.who,
          index: i,
          from: 'HAND',
          todo: this.info.todo
        }
        // this.$emit('HTD', data)
        this.$emit('card', data)
      }
      if (this.info.todo === 'UNIT TO REST') {
        const data = {
          who: this.info.who,
          index: i
        }
        this.$emit('UTR', data)
      }
      if (this.info.todo === 'FIELD TO DECK') {
        const data = {
          who: this.info.who,
          index: i
        }
        this.$emit('FTD', data)
      }
      if (this.info.todo === 'DROP TO HAND') {
        const card = this.info.card[i]
        const code = card.code
        let drop = []
        if (this.info.who === 'Player') {
          drop = this.player.drop
        } else {
          drop = this.opponent.drop
        }
        const index = drop.findIndex(x => x.code === code)
        const data = {
          who: this.info.who,
          index: index
        }
        this.$emit('DRTH', data)
      }
      if (this.info.todo === 'ACT017') { // Discard to get Power
        this.ACT('ACT017', i)
      }
      if (this.info.todo === 'ACT022') { // Discard to get Power
        this.ACT('ACT022', i)
      }
      if (this.info.todo === 'ACT023') { // Discard to bind
        this.ACT('ACT023', i)
      }
      if (this.info.todo === 'ACT024') { // Discard to destroy
        this.ACT('ACT024', i)
      }
      if (this.info.todo === 'ACT026') { // Call unit from deck
        this.ACT('ACT026', i)
      }
      if (this.info.todo === 'ACT033') { // Call unit from drop
        this.ACT('ACT033', i)
      }
      if (this.info.todo === 'ACT045') { // Deal damage
        this.ACT('ACT045', i)
      }
    },
    ACT (act, index) {
      const data = {
        who: this.info.who,
        index: index,
        uindex: this.info.uindex
      }
      this.$emit(act, data)
    }
  }
}
</script>
