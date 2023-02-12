<template>
  <div class="row h-100vh d-flex align-content-center m-0 p-0 bg-op">
    <div class="h-6vh py-xl-2 d-flex justify-content-center text-white shadow-text-2 bg-danger"><b>Choose Your Opponent</b></div>
    <div class="row m-0 h-95vh py-2 d-flex justify-content-center align-content-center">
      <div v-for="i in opponents.length" :key="i" class="col-2 d-flex justify-content-center">
        <img
          :src="opponents[i - 1].image"
          class="h-30vh w-auto border border-2 shadow-box-2 cursor-pointer"
          @click.prevent="chooseOpponent(i - 1)"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import C001 from '../../assets/char/C001.png'
import C002 from '../../assets/char/C002.png'
import C003 from '../../assets/char/C003.png'

export default {
  name: 'Choose Opponent',
  props: ['data'],
  data () {
    return {
      opponents: [
        {
          name: 'Chart 001',
          image: C001,
          title: 'Deck 001',
          deck: []
        },
        {
          name: 'Chart 002',
          image: C002,
          title: 'Deck 002',
          deck: []
        },
        {
          name: 'Chart 003',
          image: C003,
          title: 'Deck 003',
          deck: []
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      // decks: 'decks'
    })
  },
  methods: {
    ...mapActions([
      'add_deckOpponent'
    ]),
    chooseOpponent (index) {
      if (index === 0) {
        this.buildOpDeck01()
      } else if (index === 1) {
        this.buildOpDeck02()
      }
      this.$router.replace({
        name: 'Arena'
      })
    },
    buildOpDeck01 () {
      const cards = this.data.edit.cards
      const deck = []
      cards.map((card) => {
        for (let i = 0; i < 4; i++) { // 4 Copies
          if (card.code === '001') { deck.push(card) } // Monkey D. Luffy
          if (card.code === '002') { deck.push(card) } // Roronoa Zoro
          if (card.code === '003') { deck.push(card) } // Vinsmoke Sanji
          if (card.code === '004') { deck.push(card) } // Nami
          if (card.code === '005') { deck.push(card) } // Usopp
          if (card.code === '006') { deck.push(card) } // Chopper
          if (card.code === '007') { deck.push(card) } // Robin
          if (card.code === '008') { deck.push(card) } // Franky
          if (card.code === '009') { deck.push(card) } // Brook
          if (card.code === '010') { deck.push(card) } // Jinbei
        }
      })
      this.opponents[0].deck = deck
      this.add_deckOpponent(JSON.stringify({ title: this.opponents[0].title, deck: deck }))
    },
    buildOpDeck02 () {
      const cards = this.data.edit.cards
      const deck = []
      cards.map((card) => {
        for (let i = 0; i < 4; i++) { // 4 Copies
          if (card.code === '019') { deck.push(card) } // Monkey D. Luffy
          if (card.code === '018') { deck.push(card) } // Roronoa Zoro
          if (card.code === '017') { deck.push(card) } // Vinsmoke Sanji
          if (card.code === '016') { deck.push(card) } // Nami
          if (card.code === '015') { deck.push(card) } // Usopp
          if (card.code === '013') { deck.push(card) } // Robin
          if (card.code === '012') { deck.push(card) } // Franky
          if (card.code === '010') { deck.push(card) } // Jinbei
        }
        for (let i = 0; i < 3; i++) { // 3 Copies
          if (card.code === '006') { deck.push(card) } // Chopper
          if (card.code === '011') { deck.push(card) } // Brook
        }
        for (let i = 0; i < 1; i++) { // 1 Copy
          if (card.code === '014') { deck.push(card) } // Chopper
          if (card.code === '009') { deck.push(card) } // Brook
        }
      })
      this.opponents[1].deck = deck
      this.add_deckOpponent(JSON.stringify({ title: this.opponents[1].title, deck: deck }))
    }
  }
}
</script>
