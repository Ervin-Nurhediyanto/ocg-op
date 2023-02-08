const DeckOpponent = {
  state: {
    deckOpponent: localStorage.getItem('deckOpponent') || []
  },
  getters: {
    deckOpponent (state) {
      return state.deckOpponent
    }
  },
  mutations: {
    set_deckOpponent (state, payload) {
      state.deckOpponent = payload
    }
  },
  actions: {
    add_deckOpponent (setex, payload) {
      setex.commit('set_deckOpponent', payload)
      localStorage.setItem('deckOpponent', payload)
    }
  }
}

export default DeckOpponent
