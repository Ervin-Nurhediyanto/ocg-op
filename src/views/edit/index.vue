<template>
  <!-- <div class="row h-100vh bg-op"> -->
  <div class="row h-100vh bg-white">
    <div class="col-3 p-0 d-flex justify-content-center">
      <Deck
        :deckTitle="data.edit.title"
        :data="data.edit.deck"
        v-on:removeCard="removeCard"
        v-on:changeDisplay="changeDisplay"
        v-on:changeTitle="changeTitle"
        v-on:loadDeck="loadDeck"
        v-on:deleteDeck="deleteDeck"
      />
    </div>
    <div class="col p-0 d-flex justify-content-center">
      <Card
        :data="data.edit.cards"
        v-on:addToDeck="addToDeck"
        v-on:changeDisplay="changeDisplay"
        v-on:sortData="sortData"
      />
    </div>
    <div class="col-3 p-0 d-flex justify-content-center">
      <Display :data="data.edit.display"/>
    </div>
  </div>
</template>

<script>
import Card from '../../components/edit/C-Edit-Card.vue'
import Display from '../../components/edit/C-Edit-Display.vue'
import Deck from '../../components/edit/C-Edit-Deck.vue'

export default {
  name: 'Edit',
  props: ['data'],
  components: {
    Card,
    Display,
    Deck
  },
  methods: {
    addToDeck (data) {
      this.$emit('addToDeck', data)
    },
    changeDisplay (data) {
      this.$emit('changeDisplay', data)
    },
    removeCard (data, index) {
      this.$emit('removeCard', data, index)
    },
    changeTitle (title) {
      this.$emit('changeTitle', title)
    },
    loadDeck (data) {
      this.$emit('loadDeck', data)
    },
    deleteDeck () {
      this.$emit('deleteDeck')
    },
    sortData (byKey) {
      this.$emit('sortData', byKey)
    }
  }
}
</script>
