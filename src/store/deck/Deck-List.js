const DeckList = {
  state: {
    decks: localStorage.getItem('decks') || []
  },
  getters: {
    decks (state) {
      return state.decks
    }
  },
  mutations: {
    set_decks (state, payload) {
      state.decks = payload
    }
  },
  actions: {
    add_decks (setex, payload) {
      setex.commit('set_decks', payload)
      localStorage.setItem('decks', payload)
    }
  }
}

export default DeckList
