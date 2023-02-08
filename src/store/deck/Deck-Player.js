const DeckPlayer = {
  state: {
    deckPlay: localStorage.getItem('deckPlay') || []
  },
  getters: {
    deckPlay (state) {
      return state.deckPlay
    }
  },
  mutations: {
    set_deckPlay (state, payload) {
      state.deckPlay = payload
    }
  },
  actions: {
    add_deckPlay (setex, payload) {
      setex.commit('set_deckPlay', payload)
      localStorage.setItem('deckPlay', payload)
    }
  }
}

export default DeckPlayer
