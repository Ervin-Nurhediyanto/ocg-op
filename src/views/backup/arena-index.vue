<template>
  <div class="row h-100vh d-flex align-content-center m-0 p-0 bg-op">
    <div class="col-3 p-0">
      <div class="row h-10vh m-0">
        <div class="col-12 text-white shadow-text-2"><b>Opponent Name</b></div>
        <div class="col-12 text-white shadow-text-2"><b>Life: {{ data.arena.opponent.life }}</b></div>
      </div>
      <div class="row h-80vh m-0">
        <div v-if="data.arena.player.isOpenChat" class="col-10 p-0 shadow-box-inset-2 bg-white">Chat</div>
        <div v-if="!data.arena.player.isOpenChat" class="col-10 p-0">
          <div class="row m-0">
            <div class="my-1 text-center"><b class="p-1 bg-white rounded-3 shadow">{{ data.arena.player.view.zone }}</b></div>
            <div v-for="i in data.arena.player.view.card.length" :key="i" class="col-2 h-10vh cursor-pointer">
              <img
                class="h-10vh w-auto"
                :src="data.arena.player.view.card[i - 1].imageM"
                @click.prevent="handleToDo(data.arena.player.view.card[i - 1])"
              />
            </div>
          </div>
        </div>
        <div class="col-2 d-flex justify-content-center">
          <div v-if="data.arena.turn === 'Player'" class="row h-30vh d-flex justify-content-center">
            <div
              v-for="phase in phases" :key="phase"
              class="col-12 h-5vh w-50px mb-1 p-1 d-flex justify-content-center border border-1 shadow-box-2 rounded-4 bg-aqua">
              <span v-if="data.arena.player.phase === phase" class="text-danger shadow-text-1"><b>{{ phase }}</b></span>
              <span v-else class="text-white shadow-text-1 cursor-pointer" @click.prevent="changePhase(phase)"><b>{{ phase }}</b></span>
            </div>
          </div>
          <div v-if="data.arena.turn === 'Opponent'" class="row h-30vh d-flex justify-content-center">
            <div
              v-for="phase in phases" :key="phase"
              class="col-12 h-5vh w-50px mb-1 p-1 d-flex justify-content-center border border-1 shadow-box-2 rounded-4 bg-warning">
              <span v-if="data.arena.opponent.phase === phase" class="text-danger shadow-text-1"><b>{{ phase }}</b></span>
              <span v-else class="text-white shadow-text-1 cursor-pointer" @click.prevent="changePhase(phase)"><b>{{ phase }}</b></span>
            </div>
          </div>
        </div>
      </div>
      <div class="row h-10vh m-0">
        <div class="col-12 text-white shadow-text-2"><b>Player Name</b></div>
        <div class="col-12 text-white shadow-text-2"><b>Life: {{ data.arena.player.life }}</b></div>
      </div>
    </div>
    <div class="col m-0 p-0">
      <BattleOpponent
        :data="data"
        v-on:ShowDeck="ShowDeck"
        v-on:ShowDrop="ShowDrop"
        v-on:ShowBind="ShowBind"
        v-on:unitAttack="unitAttack"
        v-on:unitCall="unitCall"
        v-on:changeDisplay="changeDisplay"
      />
      <BattlePlayer
        :data="data"
        v-on:ShowDeck="ShowDeck"
        v-on:ShowDrop="ShowDrop"
        v-on:ShowBind="ShowBind"
        v-on:unitAttack="unitAttack"
        v-on:unitCall="unitCall"
        v-on:changeDisplay="changeDisplay"
      />
    </div>
    <Display :data="data"/>
  </div>
</template>

<script>
import BattlePlayer from '../../components/arena/battle/player/C-Arena-Player.vue'
import BattleOpponent from '../../components/arena/battle/opponent/C-Arena-Opponent.vue'
import Display from '../../components/arena/display/C-Arena-Display.vue'

export default {
  name: 'Arena',
  props: ['data'],
  data () {
    return {
      phases: ['SP', 'DP', 'MP1', 'BP', 'MP2', 'EP']
    }
  },
  components: {
    BattlePlayer,
    BattleOpponent,
    Display
  },
  methods: {
    changeDisplay (data) {
      this.$emit('changeDisplay', data)
    },
    ShowDeck (data) {
      this.$emit('ShowDeck', data)
    },
    ShowDrop (data) {
      this.$emit('ShowDrop', data)
    },
    ShowBind (data) {
      this.$emit('ShowBind', data)
    },
    changePhase (phase) {
      this.$emit('changePhase', phase)
    },
    unitAttack (data, index) {
      this.$emit('unitAttack', data, index)
    },
    unitCall (data, index) {
      this.$emit('unitCall', data, index)
    },
    handleToDo (data) {
      this.$emit('handleToDo', data)
    }
  }
}
</script>
