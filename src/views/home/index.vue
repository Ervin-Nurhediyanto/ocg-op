<template>
  <div class="row h-100vh d-flex align-content-center m-0 p-0 bg-op">
    <div class="col-4 d-flex justify-content-center cursor-pointer bg-sleeve-001" @click.prevent="goToEditDeck">
      <div class="row h-90vh w-100px d-flex align-content-center">
        <div class="d-flex justify-content-center text-white rounded bg-danger"><b>Edit Deck</b></div>
      </div>
    </div>
    <div class="col-4 d-flex justify-content-center cursor-pointer bg-sleeve-001" @click.prevent="goToArena">
      <div class="row h-90vh w-100px d-flex align-content-center">
        <div class="d-flex justify-content-center text-white rounded bg-danger"><b>Arena</b></div>
      </div>
    </div>
    <div class="col-4 d-flex justify-content-center cursor-pointer bg-sleeve-001" @click.prevent="goToProfil">
      <div class="row h-90vh w-100px d-flex align-content-center">
        <div class="d-flex justify-content-center text-white rounded bg-danger"><b>Profil</b></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  props: ['data'],
  computed: {
    ...mapGetters({
      decks: 'decks',
      deckPlay: 'deckPlay',
      deckOpponent: 'deckOpponent'
    })
  },
  methods: {
    goToEditDeck () {
      this.$router.replace({
        name: 'Edit'
      })
    },
    goToArena () {
      const deck = this.data.edit.deck.length
      const Toast = (icon, title) => {
        this.$swal.mixin().fire({
          icon: icon,
          title: title,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        })
      }
      if (deck !== 0) {
        // const parse = JSON.parse(this.deckPlay, (key, value) => {
        //   if (typeof value === 'string') {
        //     return value
        //   }
        //   return value
        // })
        // this.$emit('selectPlayerDeck', parse)
        // // Opponent
        // const parseOp = JSON.parse(this.deckOpponent, (key, value) => {
        //   if (typeof value === 'string') {
        //     return value
        //   }
        //   return value
        // })
        // this.$emit('selectOpponentDeck', parseOp)
        // //
        this.$router.replace({
          name: 'Choose-Opponent'
        })
      } else {
        Toast('error', 'Pilih Deck Sebelum Memasuki Arena !!!')
      }
    },
    goToProfil () {
      console.log(this.data)
    }
  }
}
</script>
