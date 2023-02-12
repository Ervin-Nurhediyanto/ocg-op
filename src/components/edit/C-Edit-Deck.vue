<template>
  <div class="row h-100vh w-100">
    <div class="col-12 h-10vh m-0 py-4 d-flex justify-content-center">
      <input
        type="text"
        class="p-1 h-5vh w-100 mx-2 font-14px shadow text-center bg-white"
        v-model="title"
        @change.prevent="changeTitle(title)"
      >
    </div>
    <div v-if="isLoad" class="row h-75vh m-0 d-flex justify-content-center align-content-start overflow scrollbar-none border border-2 border-dark">
      <div v-for="i in playerDecks.length" :key="i" class="h-10vh my-1 p-0 d-flex justify-content-center shadow-box-inset-2 bg-warning">
        <div class="w-100 text-center py-2 py-xl-4 text-white font-14px cursor-pointer" @click.prevent="loadDeck((i - 1))">
          <b>{{ playerDecks[i - 1].title }}</b>
        </div>
      </div>
    </div>
    <div v-else class="row h-75vh m-0 px-3 d-flex justify-content-center align-content-start overflow scrollbar-none border border-2 border-dark">
      <div v-for="i in data.length" :key="i" class="col-2 h-10vh my-1 d-flex justify-content-center">
        <img
          class="h-10vh w-auto"
          :src="data[i - 1].imageM"
          @click.prevent="handleChange(data, (i - 1))"
          @mouseover.prevent="mouseover(data[i - 1])"
        />
      </div>
    </div>
    <div class="col-12 h-15vh m-0 p-0 d-flex justify-content-center overflow scrollbar-none">
      <div class="row w-100">
        <div class="col-3 col-sm col-md col-xl-2 p-0 px-1 mx-3">
          <button class="d-flex justify-content-center btn btn-primary my-1 w-100 font-12px text-center" @click.prevent="handleSave">
            Save
          </button>
        </div>
        <div class="col-3 col-sm col-md col-xl-2 p-0 px-1 mx-3">
          <button class="d-flex justify-content-center btn btn-success my-1 w-100 font-12px text-center" @click.prevent="handleLoad">
            Load
          </button>
        </div>
        <div class="col-3 col-sm col-md col-xl-2 p-0 px-1 mx-3">
          <button class="btn btn-danger my-1 w-100 font-weight-bold font-12px text-center" @click.prevent="handleDelete">
            Delete
          </button>
        </div>
        <div class="col-3 col-sm col-md col-xl-2 p-0 px-1 mx-3">
          <button
            class="btn btn-danger border my-1 w-100 border-2 font-weight-bold font-12px text-white text-center"
            @click.prevent="handleBack">
            Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Edit-Deck',
  props: ['deckTitle', 'data'],
  data () {
    return {
      title: this.deckTitle,
      playerDecks: [],
      isLoad: false
    }
  },
  computed: {
    ...mapGetters({
      decks: 'decks',
      deckPlay: 'deckPlay'
    })
  },
  methods: {
    ...mapActions([
      'add_decks',
      'add_deckPlay',
      'add_deckOpponent'
    ]),
    handleChange (data, i) {
      this.$emit('removeCard', data, i)
    },
    handleSubmit () {
      this.$emit('sortData', 'name')
    },
    mouseover (data) {
      this.$emit('changeDisplay', data)
    },
    changeTitle (title) {
      this.$emit('changeTitle', title)
    },
    handleSave () {
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
      if (this.data.length !== 40) {
        Toast('error', 'Deck Harus Berjumlah 40 Kartu !!!')
      } else {
        let copy = 0
        this.playerDecks.map((deck) => {
          if (deck.title === this.title) {
            copy += 1
          }
        })
        console.log(`total copy: ${copy}`)
        if (copy !== 0) {
          Toast('error', 'Nama Deck Tidak Boleh Sama !!!')
        } else {
          const deck = {
            title: this.title,
            deck: this.data
          }
          this.playerDecks.push(deck)
          this.add_decks(JSON.stringify(this.playerDecks))
          this.add_deckPlay(JSON.stringify(deck))
          // this.add_deckOpponent(JSON.stringify(deck)) // Opponent Deck
          Toast('success', 'Deck Berhasil Disimpan')
        }
      }
    },
    handleLoad () {
      this.isLoad = !this.isLoad
    },
    loadDeck (index) {
      const title = this.playerDecks[index].title
      const deck = this.playerDecks[index].deck
      this.add_deckPlay(JSON.stringify({ title: title, deck: deck }))
      // this.add_deckOpponent(JSON.stringify({ title: title, deck: deck })) // Opponent Deck
      this.$emit('loadDeck', {
        title: title,
        deck: deck
      })
      this.title = title
      this.isLoad = false
    },
    handleDelete () {
      this.$swal.fire({
        title: 'Anda yakin?',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya!',
        cancelButtonText: 'Tidak!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$emit('deleteDeck', true)
          const index = this.playerDecks.findIndex(x => x.title === this.title)
          this.playerDecks.splice(index, 1)
          this.add_decks(JSON.stringify(this.playerDecks))
          this.$swal.fire(
            'Deleted!',
            'Deck Berhasil Dihapus',
            'success'
          )
        }
      })
    },
    handleBack () {
      this.$router.replace({
        name: 'Home'
      })
    }
  },
  mounted () {
    const parse = JSON.parse(this.decks, (key, value) => {
      if (typeof value === 'string') {
        return value
      }
      return value
    })
    this.playerDecks = parse
  }
}
</script>
