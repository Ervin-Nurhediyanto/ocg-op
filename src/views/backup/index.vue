<template>
  <div>
    <router-view
      :data="data"
      v-on:removeCard="removeCard"
      v-on:changeDisplay="changeDisplay"
      v-on:changeTitle="changeTitle"
      v-on:loadDeck="loadDeck"
      v-on:deleteDeck="deleteDeck"
      v-on:addToDeck="addToDeck"
      v-on:sortData="sortData"
      v-on:selectPlayerDeck="selectPlayerDeck"
      v-on:selectOpponentDeck="selectOpponentDeck"
      v-on:ShowDeck="ShowDeck"
      v-on:ShowDrop="ShowDrop"
      v-on:ShowBind="ShowBind"
      v-on:changePhase="changePhase"
      v-on:unitAttack="unitAttack"
      v-on:unitCall="unitCall"
      v-on:handleToDo="handleToDo"
    />
  </div>
</template>

<script>
import C001 from '../assets/cards/001.png'
import CM001 from '../assets/mini-cards/001.png'
import C002 from '../assets/cards/002.png'
import CM002 from '../assets/mini-cards/002.png'
import C003 from '../assets/cards/003.png'
import CM003 from '../assets/mini-cards/003.png'
import C004 from '../assets/cards/004.png'
import CM004 from '../assets/mini-cards/004.png'
import C005 from '../assets/cards/005.png'
import CM005 from '../assets/mini-cards/005.png'
import C006 from '../assets/cards/006.png'
import CM006 from '../assets/mini-cards/006.png'
import C007 from '../assets/cards/007.png'
import CM007 from '../assets/mini-cards/007.png'
import C008 from '../assets/cards/008.png'
import CM008 from '../assets/mini-cards/008.png'
import C009 from '../assets/cards/009.png'
import CM009 from '../assets/mini-cards/009.png'
import C010 from '../assets/cards/010.png'
import CM010 from '../assets/mini-cards/010.png'
import C011 from '../assets/cards/011.png'
import CM011 from '../assets/mini-cards/011.png'
import C012 from '../assets/cards/012.png'
import CM012 from '../assets/mini-cards/012.png'
import C013 from '../assets/cards/013.png'
import CM013 from '../assets/mini-cards/013.png'
import C014 from '../assets/cards/014.png'
import CM014 from '../assets/mini-cards/014.png'
import C015 from '../assets/cards/015.png'
import CM015 from '../assets/mini-cards/015.png'
import C016 from '../assets/cards/016.png'
import CM016 from '../assets/mini-cards/016.png'
import C017 from '../assets/cards/017.png'
import CM017 from '../assets/mini-cards/017.png'
import C018 from '../assets/cards/018.png'
import CM018 from '../assets/mini-cards/018.png'
import C019 from '../assets/cards/019.png'
import CM019 from '../assets/mini-cards/019.png'
import C020 from '../assets/cards/020.png'
import CM020 from '../assets/mini-cards/020.png'
import C021 from '../assets/cards/021.png'
import CM021 from '../assets/mini-cards/021.png'
import C022 from '../assets/cards/022.png'
import CM022 from '../assets/mini-cards/022.png'
import C023 from '../assets/cards/023.png'
import CM023 from '../assets/mini-cards/023.png'
import C024 from '../assets/cards/024.png'
import CM024 from '../assets/mini-cards/024.png'
import C025 from '../assets/cards/025.png'
import CM025 from '../assets/mini-cards/025.png'
import C026 from '../assets/cards/026.png'
import CM026 from '../assets/mini-cards/026.png'
import C027 from '../assets/cards/027.png'
import CM027 from '../assets/mini-cards/027.png'
import C028 from '../assets/cards/028.png'
import CM028 from '../assets/mini-cards/028.png'
import C029 from '../assets/cards/029.png'
import CM029 from '../assets/mini-cards/029.png'
import C030 from '../assets/cards/030.png'
import CM030 from '../assets/mini-cards/030.png'
import C031 from '../assets/cards/031.png'
import CM031 from '../assets/mini-cards/031.png'
import C032 from '../assets/cards/032.png'
import CM032 from '../assets/mini-cards/032.png'
import C033 from '../assets/cards/033.png'
import CM033 from '../assets/mini-cards/033.png'
import C034 from '../assets/cards/034.png'
import CM034 from '../assets/mini-cards/034.png'
import C035 from '../assets/cards/035.png'
import CM035 from '../assets/mini-cards/035.png'
import C036 from '../assets/cards/036.png'
import CM036 from '../assets/mini-cards/036.png'
import C037 from '../assets/cards/037.png'
import CM037 from '../assets/mini-cards/037.png'
import C038 from '../assets/cards/038.png'
import CM038 from '../assets/mini-cards/038.png'
import C039 from '../assets/cards/039.png'
import CM039 from '../assets/mini-cards/039.png'
import C040 from '../assets/cards/040.png'
import CM040 from '../assets/mini-cards/040.png'
import C041 from '../assets/cards/041.png'
import CM041 from '../assets/mini-cards/041.png'
import C042 from '../assets/cards/042.png'
import CM042 from '../assets/mini-cards/042.png'
import C043 from '../assets/cards/043.png'
import CM043 from '../assets/mini-cards/043.png'
import C044 from '../assets/cards/044.png'
import CM044 from '../assets/mini-cards/044.png'
import C045 from '../assets/cards/045.png'
import CM045 from '../assets/mini-cards/045.png'
import C046 from '../assets/cards/046.png'
import CM046 from '../assets/mini-cards/046.png'
import C047 from '../assets/cards/047.png'
import CM047 from '../assets/mini-cards/047.png'
import C048 from '../assets/cards/048.png'
import CM048 from '../assets/mini-cards/048.png'
import C049 from '../assets/cards/049.png'
import CM049 from '../assets/mini-cards/049.png'
import C050 from '../assets/cards/050.png'
import CM050 from '../assets/mini-cards/050.png'
import C051 from '../assets/cards/051.png'
import CM051 from '../assets/mini-cards/051.png'
import C052 from '../assets/cards/052.png'
import CM052 from '../assets/mini-cards/052.png'
import C053 from '../assets/cards/053.png'
import CM053 from '../assets/mini-cards/053.png'
import C054 from '../assets/cards/054.png'
import CM054 from '../assets/mini-cards/054.png'
import C055 from '../assets/cards/055.png'
import CM055 from '../assets/mini-cards/055.png'
import C056 from '../assets/cards/056.png'
import CM056 from '../assets/mini-cards/056.png'
import C057 from '../assets/cards/057.png'
import CM057 from '../assets/mini-cards/057.png'
import C058 from '../assets/cards/058.png'
import CM058 from '../assets/mini-cards/058.png'
import C059 from '../assets/cards/059.png'
import CM059 from '../assets/mini-cards/059.png'
import C060 from '../assets/cards/060.png'
import CM060 from '../assets/mini-cards/060.png'
import C061 from '../assets/cards/061.png'
import CM061 from '../assets/mini-cards/061.png'
import C062 from '../assets/cards/062.png'
import CM062 from '../assets/mini-cards/062.png'
import C063 from '../assets/cards/063.png'
import CM063 from '../assets/mini-cards/063.png'
import C064 from '../assets/cards/064.png'
import CM064 from '../assets/mini-cards/064.png'
import C065 from '../assets/cards/065.png'
import CM065 from '../assets/mini-cards/065.png'
import C066 from '../assets/cards/066.png'
import CM066 from '../assets/mini-cards/066.png'
import C067 from '../assets/cards/067.png'
import CM067 from '../assets/mini-cards/067.png'
import C068 from '../assets/cards/068.png'
import CM068 from '../assets/mini-cards/068.png'
import C069 from '../assets/cards/069.png'
import CM069 from '../assets/mini-cards/069.png'
import C070 from '../assets/cards/070.png'
import CM070 from '../assets/mini-cards/070.png'
import C071 from '../assets/cards/071.png'
import CM071 from '../assets/mini-cards/071.png'
import C072 from '../assets/cards/072.png'
import CM072 from '../assets/mini-cards/072.png'
import C073 from '../assets/cards/073.png'
import CM073 from '../assets/mini-cards/073.png'
import C074 from '../assets/cards/074.png'
import CM074 from '../assets/mini-cards/074.png'
import C075 from '../assets/cards/075.png'
import CM075 from '../assets/mini-cards/075.png'
import C076 from '../assets/cards/076.png'
import CM076 from '../assets/mini-cards/076.png'
import C077 from '../assets/cards/077.png'
import CM077 from '../assets/mini-cards/077.png'
import C078 from '../assets/cards/078.png'
import CM078 from '../assets/mini-cards/078.png'
import C079 from '../assets/cards/079.png'
import CM079 from '../assets/mini-cards/079.png'
import C080 from '../assets/cards/080.png'
import CM080 from '../assets/mini-cards/080.png'
import C081 from '../assets/cards/081.png'
import CM081 from '../assets/mini-cards/081.png'
import C082 from '../assets/cards/082.png'
import CM082 from '../assets/mini-cards/082.png'
import C083 from '../assets/cards/083.png'
import CM083 from '../assets/mini-cards/083.png'
import C084 from '../assets/cards/084.png'
import CM084 from '../assets/mini-cards/084.png'
import C085 from '../assets/cards/085.png'
import CM085 from '../assets/mini-cards/085.png'
import C086 from '../assets/cards/086.png'
import CM086 from '../assets/mini-cards/086.png'
import C087 from '../assets/cards/087.png'
import CM087 from '../assets/mini-cards/087.png'
import C088 from '../assets/cards/088.png'
import CM088 from '../assets/mini-cards/088.png'
import C089 from '../assets/cards/089.png'
import CM089 from '../assets/mini-cards/089.png'
import C090 from '../assets/cards/090.png'
import CM090 from '../assets/mini-cards/090.png'
import C091 from '../assets/cards/091.png'
import CM091 from '../assets/mini-cards/091.png'
import C092 from '../assets/cards/092.png'
import CM092 from '../assets/mini-cards/092.png'
import C093 from '../assets/cards/093.png'
import CM093 from '../assets/mini-cards/093.png'
import C094 from '../assets/cards/094.png'
import CM094 from '../assets/mini-cards/094.png'
import C095 from '../assets/cards/095.png'
import CM095 from '../assets/mini-cards/095.png'
import C096 from '../assets/cards/096.png'
import CM096 from '../assets/mini-cards/096.png'
import C097 from '../assets/cards/097.png'
import CM097 from '../assets/mini-cards/097.png'
import C098 from '../assets/cards/098.png'
import CM098 from '../assets/mini-cards/098.png'
import C099 from '../assets/cards/099.png'
import CM099 from '../assets/mini-cards/099.png'
import C100 from '../assets/cards/100.png'
import CM100 from '../assets/mini-cards/100.png'
// import C101 from '../../assets/cards/101.png'
// import CM101 from '../../assets/mini-cards/101.png'

export default {
  name: 'Main',
  methods: {
    addToDeck (data) {
      this.checkDeck(data)
    },
    changeDisplay (data) {
      this.data.edit.display = data
      this.data.arena.display = data
    },
    removeCard (data, index) {
      this.data.edit.deck.splice(index, 1)
    },
    checkDeck (data) {
      if (this.data.edit.deck.length < 40) {
        this.checkCard(data)
      } else {
        console.log('Deck Harus 40 Kartu')
      }
    },
    checkCard (data) {
      let copy = 0
      this.data.edit.deck.map((card) => {
        if (card.name === data.name) {
          copy += 1
        }
      })
      if (copy < 4) {
        this.data.edit.deck.push(data)
      } else {
        console.log('Maksimal Kartu 4 Copy')
      }
    },
    sortData (byKey) {
      let sortedData
      if (byKey === 'name') {
        sortedData = this.data.edit.cards.sort((a, b) => {
          const x = a.name.toLowerCase()
          const y = b.name.toLowerCase()
          if (x > y) { return 1 }
          if (x < y) { return -1 }
          return 0
        })
      }
      if (byKey === 'grade') {
        sortedData = this.data.edit.cards.sort((a, b) => {
          const x = a.grade
          const y = b.grade
          if (x > y) { return 1 }
          if (x < y) { return -1 }
          return 0
        })
      }
      if (byKey === 'power') {
        sortedData = this.data.edit.cards.sort((a, b) => {
          const x = a.power
          const y = b.power
          if (x > y) { return 1 }
          if (x < y) { return -1 }
          return 0
        })
      }
      return sortedData
    },
    changeTitle (title) {
      this.data.edit.title = title
    },
    loadDeck (data) {
      this.data.edit.title = data.title
      this.data.edit.deck = data.deck
    },
    deleteDeck () {
      this.data.edit.title = 'New Deck'
      this.data.edit.deck = []
    },
    selectPlayerDeck (data) {
      const deck = data.deck
      // const shuffle = []
      // while (deck.length > 0) {
      //   const indexRandom = Math.floor(Math.random() * data.deck.length)
      //   const random = data.deck[indexRandom]
      //   shuffle.push(random)
      //   deck.splice(indexRandom, 1)
      // }
      // this.data.arena.player.deck = shuffle
      this.data.arena.player.deck = deck
      this.openingDraw()
      this.changePhase('SP')
    },
    selectOpponentDeck (data) {
      const shuffle = []
      const deck = data.deck
      while (deck.length > 0) {
        const indexRandom = Math.floor(Math.random() * data.deck.length)
        const random = data.deck[indexRandom]
        shuffle.push(random)
        deck.splice(indexRandom, 1)
      }
      this.data.arena.opponent.deck = shuffle
      this.openingDrawOp()
    },
    openingDraw () {
      for (let i = 0; i < 5; i++) {
        const deck = this.data.arena.player.deck
        this.data.arena.player.hand.push(deck[0])
        this.data.arena.player.deck.splice(0, 1)
      }
    },
    openingDrawOp () {
      for (let i = 0; i < 5; i++) {
        const deck = this.data.arena.opponent.deck
        this.data.arena.opponent.hand.push(deck[0])
        this.data.arena.opponent.deck.splice(0, 1)
      }
    },
    ShowDeck (data) {
      this.data.arena.player.isOpenChat = !this.data.arena.player.isOpenChat
      if (data === 'Player') {
        this.data.arena.player.view.zone = 'Deck Player'
        this.data.arena.player.view.card = this.data.arena.player.deck
      } else {
        this.data.arena.player.view.zone = 'Deck Opponent'
        this.data.arena.player.view.card = this.data.arena.opponent.deck
      }
    },
    ShowDrop (data) {
      this.data.arena.player.isOpenChat = !this.data.arena.player.isOpenChat
      if (data === 'Player') {
        this.data.arena.player.view.zone = 'Drop Player'
        this.data.arena.player.view.card = this.data.arena.player.drop
      } else {
        this.data.arena.player.view.zone = 'Drop Opponent'
        this.data.arena.player.view.card = this.data.arena.opponent.drop
      }
    },
    ShowBind (data) {
      this.data.arena.player.isOpenChat = !this.data.arena.player.isOpenChat
      if (data === 'Player') {
        this.data.arena.player.view.zone = 'Bind Player'
        this.data.arena.player.view.card = this.data.arena.player.bind
      } else {
        this.data.arena.player.view.zone = 'Bind Opponent'
        this.data.arena.player.view.card = this.data.arena.opponent.bind
      }
    },
    changePhase (phase) {
      if (this.data.arena.turn === 'Player') {
        this.data.arena.player.phase = phase
      } else {
        this.data.arena.opponent.phase = phase
      }
      if (phase === 'SP') {
        this.standbyPhase(this.data.arena.turn)
        setTimeout(() => this.changePhase('DP'), 1000)
      }
      if (phase === 'DP') {
        this.drawPhase(this.data.arena.turn)
        setTimeout(() => this.changePhase('MP1'), 1000)
      }
      if (phase === 'BP') {
        console.log('Battle Phase')
      }
      if (phase === 'EP') {
        if (this.data.arena.turn === 'Player') {
          this.endPhase('Player')
          this.data.arena.turn = 'Opponent'
          setTimeout(() => this.changePhase('SP'), 1000)
        } else {
          this.endPhase('Opponent')
          this.data.arena.turn = 'Player'
          setTimeout(() => this.changePhase('SP'), 1000)
        }
      }
    },
    endPhase (data) {
      if (data === 'Player') {
        this.data.arena.player.battlefield.map((card) => {
          card.totalPow -= card.gainAuto
          card.gainAuto = 0
        })
        this.data.arena.player.oncePerTurn = []
      } else {
        this.data.arena.opponent.battlefield.map((card) => {
          card.totalPow -= card.gainAuto
          card.gainAuto = 0
        })
        this.data.arena.opponent.oncePerTurn = []
      }
    },
    standbyPhase (data) {
      if (data === 'Player') {
        this.data.arena.player.battlefield.map((card) => {
          card.position = 'Stand'
        })
      } else {
        this.data.arena.opponent.battlefield.map((card) => {
          card.position = 'Stand'
        })
      }
    },
    drawPhase (data) {
      if (data === 'Player') {
        const deck = this.data.arena.player.deck
        this.data.arena.player.hand.push(deck[0])
        this.data.arena.player.deck.splice(0, 1)
      } else {
        const deck = this.data.arena.opponent.deck
        this.data.arena.opponent.hand.push(deck[0])
        this.data.arena.opponent.deck.splice(0, 1)
      }
    },
    unitAttackPlayer (Toast, index) {
      if (this.data.arena.player.phase === 'BP') {
        const unitAttack = this.data.arena.player.battlefield[index]
        unitAttack.position = 'Rest'
        const code = unitAttack.card.code
        this.effectOnAtk('Player', index, code)
        const unit = {}
        for (let i = 0; i < this.data.arena.opponent.battlefield.length; i++) {
          if (i === 0 && this.data.arena.opponent.battlefield[i].position === 'Stand') {
            unit.unit0 = this.data.arena.opponent.battlefield[i].card.name
          } else if (i === 1 && this.data.arena.opponent.battlefield[i].position === 'Stand') {
            unit.unit1 = this.data.arena.opponent.battlefield[i].card.name
          } else if (i === 2 && this.data.arena.opponent.battlefield[i].position === 'Stand') {
            unit.unit2 = this.data.arena.opponent.battlefield[i].card.name
          } else if (i === 3 && this.data.arena.opponent.battlefield[i].position === 'Stand') {
            unit.unit3 = this.data.arena.opponent.battlefield[i].card.name
          } else if (i === 4 && this.data.arena.opponent.battlefield[i].position === 'Stand') {
            unit.unit4 = this.data.arena.opponent.battlefield[i].card.name
          } else if (i === 5 && this.data.arena.opponent.battlefield[i].position === 'Stand') {
            unit.unit5 = this.data.arena.opponent.battlefield[i].card.name
          }
        }
        if (unit.length !== null) {
          this.$swal.fire({
            title: '<strong><u>Block Attack</u></strong>',
            input: 'select',
            inputOptions: {
              unit
            },
            showCancelButton: true,
            inputValidator: (value) => {
              let indexBlock = ''
              if (value === 'unit0') { indexBlock = 0 }
              if (value === 'unit1') { indexBlock = 1 }
              if (value === 'unit2') { indexBlock = 2 }
              if (value === 'unit3') { indexBlock = 3 }
              if (value === 'unit4') { indexBlock = 4 }
              if (value === 'unit5') { indexBlock = 5 }
              const unitBloack = this.data.arena.opponent.battlefield[indexBlock]
              const codeAtk = unitAttack.card.code
              const codeDef = unitBloack.card.code
              unitBloack.position = 'Rest'
              if (unitBloack.totalPow > unitAttack.totalPow) {
                this.effectOnDestroy('Player', index, codeAtk)
                this.data.arena.player.drop.push(unitAttack.card)
                this.data.arena.player.battlefield.splice(index, 1)
              } else if (unitBloack.totalPow < unitAttack.totalPow) {
                this.effectOnDestroy('Opponent', indexBlock, codeDef)
                this.data.arena.opponent.drop.push(unitBloack.card)
                this.data.arena.opponent.battlefield.splice(indexBlock, 1)
              } else if (unitBloack.totalPow === unitAttack.totalPow) {
                this.effectOnDestroy('Player', index, codeAtk)
                this.effectOnDestroy('Opponent', indexBlock, codeDef)
                this.data.arena.player.drop.push(unitAttack.card)
                this.data.arena.player.battlefield.splice(index, 1)
                this.data.arena.opponent.drop.push(unitBloack.card)
                this.data.arena.opponent.battlefield.splice(indexBlock, 1)
              }
              this.handleCountEffect('Player')
              this.handleCountEffect('Opponent')
            }
          }).then((res) => {
            if (res.dismiss === 'cancel') {
              this.data.arena.opponent.life -= unitAttack.totalPow
              if (this.data.arena.opponent.life <= 0) {
                alert('You Win Duel')
              }
            }
          })
        }
      } else {
        const unitAct = this.data.arena.player.battlefield[index]
        this.effectAct('Player', unitAct, index)
        // Toast('error', 'Masuk BP Dulu')
      }
    },
    unitAttackOpponent (Toast, index) {
      if (this.data.arena.opponent.phase === 'BP') {
        const unitAttack = this.data.arena.opponent.battlefield[index]
        unitAttack.position = 'Rest'
        const code = unitAttack.card.code
        this.effectOnAtk('Opponent', index, code)
        const unit = {}
        for (let i = 0; i < this.data.arena.player.battlefield.length; i++) {
          if (i === 0 && this.data.arena.player.battlefield[i].position === 'Stand') {
            unit.unit0 = this.data.arena.player.battlefield[i].card.name
          } else if (i === 1 && this.data.arena.player.battlefield[i].position === 'Stand') {
            unit.unit1 = this.data.arena.player.battlefield[i].card.name
          } else if (i === 2 && this.data.arena.player.battlefield[i].position === 'Stand') {
            unit.unit2 = this.data.arena.player.battlefield[i].card.name
          } else if (i === 3 && this.data.arena.player.battlefield[i].position === 'Stand') {
            unit.unit3 = this.data.arena.player.battlefield[i].card.name
          } else if (i === 4 && this.data.arena.player.battlefield[i].position === 'Stand') {
            unit.unit4 = this.data.arena.player.battlefield[i].card.name
          } else if (i === 5 && this.data.arena.player.battlefield[i].position === 'Stand') {
            unit.unit5 = this.data.arena.player.battlefield[i].card.name
          }
        }
        if (unit.length !== null) {
          this.$swal.fire({
            title: '<strong><u>Block Attack</u></strong>',
            input: 'select',
            inputOptions: {
              unit
            },
            showCancelButton: true,
            inputValidator: (value) => {
              let indexBlock = ''
              if (value === 'unit0') { indexBlock = 0 }
              if (value === 'unit1') { indexBlock = 1 }
              if (value === 'unit2') { indexBlock = 2 }
              if (value === 'unit3') { indexBlock = 3 }
              if (value === 'unit4') { indexBlock = 4 }
              if (value === 'unit5') { indexBlock = 5 }
              const unitBloack = this.data.arena.player.battlefield[indexBlock]
              const codeAtk = unitAttack.card.code
              const codeDef = unitBloack.card.code
              unitBloack.position = 'Rest'
              if (unitBloack.totalPow > unitAttack.totalPow) {
                this.effectOnDestroy('Opponent', index, codeAtk)
                this.data.arena.opponent.drop.push(unitAttack.card)
                this.data.arena.opponent.battlefield.splice(index, 1)
              } else if (unitBloack.totalPow < unitAttack.totalPow) {
                this.effectOnDestroy('Player', indexBlock, codeDef)
                this.data.arena.player.drop.push(unitBloack.card)
                this.data.arena.player.battlefield.splice(indexBlock, 1)
              } else if (unitBloack.totalPow === unitAttack.totalPow) {
                this.effectOnDestroy('Opponent', index, codeAtk)
                this.effectOnDestroy('Player', indexBlock, codeDef)
                this.data.arena.player.drop.push(unitAttack.card)
                this.data.arena.player.battlefield.splice(index, 1)
                this.data.arena.opponent.drop.push(unitBloack.card)
                this.data.arena.opponent.battlefield.splice(indexBlock, 1)
              }
              this.handleCountEffect('Player')
              this.handleCountEffect('Opponent')
            }
          }).then((res) => {
            if (res.dismiss === 'cancel') {
              this.data.arena.player.life -= unitAttack.totalPow
              if (this.data.arena.player.life <= 0) {
                alert('You Lose Duel')
              }
            }
          })
        }
      } else {
        const unitAct = this.data.arena.opponent.battlefield[index]
        this.effectAct('Opponent', unitAct, index)
        // Toast('error', 'Masuk BP Dulu')
      }
    },
    unitAttack (data, index) {
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
      if (data === 'Player') {
        this.unitAttackPlayer(Toast, index)
      } else {
        this.unitAttackOpponent(Toast, index)
      }
    },
    unitCallOpponent (Toast, index, data) {
      if (this.data.arena.opponent.phase === 'MP1' || this.data.arena.opponent.phase === 'MP2') {
        const grade = this.data.arena.opponent.hand[index].grade
        if (grade === 1) { this.unitCallOpponentG1(Toast, index, data) }
        if (grade === 2) { this.unitCallOpponentG2(Toast, index, data) }
        if (grade === 3) { this.unitCallOpponentG3(Toast, index, data) }
      } else {
        Toast('error', 'Masuk MP dulu')
      }
    },
    unitCallPlayer (Toast, index, data) {
      if (this.data.arena.player.phase === 'MP1' || this.data.arena.player.phase === 'MP2') {
        const grade = this.data.arena.player.hand[index].grade
        if (grade === 1) { this.unitCallPlayerG1(Toast, index, data) }
        if (grade === 2) { this.unitCallPlayerG2(Toast, index, data) }
        if (grade === 3) { this.unitCallPlayerG3(Toast, index, data) }
      } else {
        Toast('error', 'Masuk MP dulu')
      }
    },
    unitCallOpponentG1 (Toast, index, data) {
      if (this.data.arena.opponent.battlefield.length < 6) {
        this.data.arena.opponent.battlefield.push({
          card: this.data.arena.opponent.hand[index],
          position: 'Stand',
          gainCont: 0,
          gainAuto: 0,
          totalPow: this.data.arena.opponent.hand[index].power
        })
        this.data.arena.opponent.hand.splice(index, 1)
        this.effectOnCall(data)
        this.effectCont(data, this.data.arena.player.battlefield[this.data.arena.player.battlefield.length - 1], this.data.arena.player.battlefield.length - 1)
        this.handleCountEffect(data)
      } else {
        Toast('error', 'Battlefield Penuh')
      }
    },
    unitCallPlayerG1 (Toast, index, data) {
      if (this.data.arena.player.battlefield.length < 6) {
        this.data.arena.player.battlefield.push({
          card: this.data.arena.player.hand[index],
          position: 'Stand',
          gainCont: 0,
          gainAuto: 0,
          totalPow: this.data.arena.player.hand[index].power
        })
        this.data.arena.player.hand.splice(index, 1)
        this.effectOnCall(data)
        this.effectCont(data, this.data.arena.player.battlefield[this.data.arena.player.battlefield.length - 1], this.data.arena.player.battlefield.length - 1)
        this.handleCountEffect(data)
      } else {
        Toast('error', 'Battlefield Penuh')
      }
    },
    unitCallOpponentG2 (Toast, index, data) {
      if (this.data.arena.opponent.battlefield.length > 0) {
        const unit = {}
        for (let i = 0; i < this.data.arena.opponent.battlefield.length; i++) {
          if (i === 0) {
            unit.unit0 = this.data.arena.opponent.battlefield[i].card.name
          } else if (i === 1) {
            unit.unit1 = this.data.arena.opponent.battlefield[i].card.name
          } else if (i === 2) {
            unit.unit2 = this.data.arena.opponent.battlefield[i].card.name
          } else if (i === 3) {
            unit.unit3 = this.data.arena.opponent.battlefield[i].card.name
          } else if (i === 4) {
            unit.unit4 = this.data.arena.opponent.battlefield[i].card.name
          } else if (i === 5) {
            unit.unit5 = this.data.arena.opponent.battlefield[i].card.name
          }
        }
        this.$swal.fire({
          title: '<strong><u>Tribute 1 unit</u></strong>',
          input: 'select',
          inputOptions: {
            unit
          },
          showCancelButton: true,
          inputValidator: (value) => {
            let indexTribute = ''
            if (value === 'unit0') { indexTribute = 0 }
            if (value === 'unit1') { indexTribute = 1 }
            if (value === 'unit2') { indexTribute = 2 }
            if (value === 'unit3') { indexTribute = 3 }
            if (value === 'unit4') { indexTribute = 4 }
            if (value === 'unit5') { indexTribute = 5 }
            const unitTribute = this.data.arena.opponent.battlefield[indexTribute].card
            this.data.arena.opponent.drop.push(unitTribute)
            this.data.arena.opponent.battlefield.splice(indexTribute, 1)
            this.data.arena.opponent.battlefield.push({
              card: this.data.arena.opponent.hand[index],
              position: 'Stand',
              gainCont: 0,
              gainAuto: 0,
              totalPow: this.data.arena.opponent.hand[index].power
            })
            this.data.arena.opponent.hand.splice(index, 1)
            this.effectOnCall(data)
            this.effectCont(data, this.data.arena.opponent.battlefield[this.data.arena.opponent.battlefield.length - 1], this.data.arena.opponent.battlefield.length - 1)
            this.handleCountEffect(data)
          }
        })
      } else {
        Toast('error', 'Perlu Unit Untuk Tribute')
      }
    },
    unitCallPlayerG2 (Toast, index, data) {
      if (this.data.arena.player.battlefield.length > 0) {
        const unit = {}
        for (let i = 0; i < this.data.arena.player.battlefield.length; i++) {
          if (i === 0) {
            unit.unit0 = this.data.arena.player.battlefield[i].card.name
          } else if (i === 1) {
            unit.unit1 = this.data.arena.player.battlefield[i].card.name
          } else if (i === 2) {
            unit.unit2 = this.data.arena.player.battlefield[i].card.name
          } else if (i === 3) {
            unit.unit3 = this.data.arena.player.battlefield[i].card.name
          } else if (i === 4) {
            unit.unit4 = this.data.arena.player.battlefield[i].card.name
          } else if (i === 5) {
            unit.unit5 = this.data.arena.player.battlefield[i].card.name
          }
        }
        this.$swal.fire({
          title: '<strong><u>Tribute 1 unit</u></strong>',
          input: 'select',
          inputOptions: {
            unit
          },
          showCancelButton: true,
          inputValidator: (value) => {
            let indexTribute = ''
            if (value === 'unit0') { indexTribute = 0 }
            if (value === 'unit1') { indexTribute = 1 }
            if (value === 'unit2') { indexTribute = 2 }
            if (value === 'unit3') { indexTribute = 3 }
            if (value === 'unit4') { indexTribute = 4 }
            if (value === 'unit5') { indexTribute = 5 }
            const unitTribute = this.data.arena.player.battlefield[indexTribute].card
            this.data.arena.player.drop.push(unitTribute)
            this.data.arena.player.battlefield.splice(indexTribute, 1)
            this.data.arena.player.battlefield.push({
              card: this.data.arena.player.hand[index],
              position: 'Stand',
              gainCont: 0,
              gainAuto: 0,
              totalPow: this.data.arena.player.hand[index].power
            })
            this.data.arena.player.hand.splice(index, 1)
            this.effectOnCall(data)
            this.effectCont(data, this.data.arena.player.battlefield[this.data.arena.player.battlefield.length - 1], this.data.arena.player.battlefield.length - 1)
            this.handleCountEffect(data)
          }
        })
      } else {
        Toast('error', 'Perlu Unit Untuk Tribute')
      }
    },
    unitCallOpponentG3 (Toast, index, data) {
      if (this.data.arena.opponent.battlefield.length > 1) {
        const unit1 = {}
        for (let i = 0; i < this.data.arena.opponent.battlefield.length; i++) {
          if (i === 0) {
            unit1.unit0 = this.data.arena.opponent.battlefield[i].card.name
          } else if (i === 1) {
            unit1.unit1 = this.data.arena.opponent.battlefield[i].card.name
          } else if (i === 2) {
            unit1.unit2 = this.data.arena.opponent.battlefield[i].card.name
          } else if (i === 3) {
            unit1.unit3 = this.data.arena.opponent.battlefield[i].card.name
          } else if (i === 4) {
            unit1.unit4 = this.data.arena.opponent.battlefield[i].card.name
          } else if (i === 5) {
            unit1.unit5 = this.data.arena.opponent.battlefield[i].card.name
          }
        }
        this.$swal.fire({
          title: '<strong><u>Tribute 2 unit</u></strong>',
          input: 'select',
          inputOptions: {
            unit1
          },
          showCancelButton: true,
          inputValidator: (value1) => {
            let indexTribute1 = ''
            if (value1 === 'unit0') { indexTribute1 = 0 }
            if (value1 === 'unit1') { indexTribute1 = 1 }
            if (value1 === 'unit2') { indexTribute1 = 2 }
            if (value1 === 'unit3') { indexTribute1 = 3 }
            if (value1 === 'unit4') { indexTribute1 = 4 }
            if (value1 === 'unit5') { indexTribute1 = 5 }
            const unitTribute1 = this.data.arena.opponent.battlefield[indexTribute1].card
            this.data.arena.opponent.drop.push(unitTribute1)
            this.data.arena.opponent.battlefield.splice(indexTribute1, 1)
            const unit2 = {}
            for (let i = 0; i < this.data.arena.opponent.battlefield.length; i++) {
              if (i === 0) {
                unit2.unit0 = this.data.arena.opponent.battlefield[i].card.name
              } else if (i === 1) {
                unit2.unit1 = this.data.arena.opponent.battlefield[i].card.name
              } else if (i === 2) {
                unit2.unit2 = this.data.arena.opponent.battlefield[i].card.name
              } else if (i === 3) {
                unit2.unit3 = this.data.arena.opponent.battlefield[i].card.name
              } else if (i === 4) {
                unit2.unit4 = this.data.arena.opponent.battlefield[i].card.name
              } else if (i === 5) {
                unit2.unit5 = this.data.arena.opponent.battlefield[i].card.name
              }
            }
            this.$swal.fire({
              title: '<strong><u>Tribute 2 unit</u></strong>',
              input: 'select',
              inputOptions: {
                unit2
              },
              showCancelButton: true,
              inputValidator: (value2) => {
                let indexTribute2 = ''
                if (value2 === 'unit0') { indexTribute2 = 0 }
                if (value2 === 'unit1') { indexTribute2 = 1 }
                if (value2 === 'unit2') { indexTribute2 = 2 }
                if (value2 === 'unit3') { indexTribute2 = 3 }
                if (value2 === 'unit4') { indexTribute2 = 4 }
                if (value2 === 'unit5') { indexTribute2 = 5 }
                const unitTribute2 = this.data.arena.opponent.battlefield[indexTribute2].card
                this.data.arena.opponent.drop.push(unitTribute2)
                this.data.arena.opponent.battlefield.splice(indexTribute2, 1)
                this.data.arena.opponent.battlefield.push({
                  card: this.data.arena.opponent.hand[index],
                  position: 'Stand',
                  gainCont: 0,
                  gainAuto: 0,
                  totalPow: this.data.arena.opponent.hand[index].power
                })
                this.data.arena.opponent.hand.splice(index, 1)
                this.effectOnCall(data)
                this.effectCont(data, this.data.arena.opponent.battlefield[this.data.arena.opponent.battlefield.length - 1], this.data.arena.opponent.battlefield.length - 1)
                this.handleCountEffect(data)
              }
            })
          }
        })
      } else {
        Toast('error', 'Perlu Unit Untuk Tribute')
      }
    },
    unitCallPlayerG3 (Toast, index, data) {
      if (this.data.arena.player.battlefield.length > 1) {
        const unit1 = {}
        for (let i = 0; i < this.data.arena.player.battlefield.length; i++) {
          if (i === 0) {
            unit1.unit0 = this.data.arena.player.battlefield[i].card.name
          } else if (i === 1) {
            unit1.unit1 = this.data.arena.player.battlefield[i].card.name
          } else if (i === 2) {
            unit1.unit2 = this.data.arena.player.battlefield[i].card.name
          } else if (i === 3) {
            unit1.unit3 = this.data.arena.player.battlefield[i].card.name
          } else if (i === 4) {
            unit1.unit4 = this.data.arena.player.battlefield[i].card.name
          } else if (i === 5) {
            unit1.unit5 = this.data.arena.player.battlefield[i].card.name
          }
        }
        this.$swal.fire({
          title: '<strong><u>Tribute 2 unit</u></strong>',
          input: 'select',
          inputOptions: {
            unit1
          },
          showCancelButton: true,
          inputValidator: (value1) => {
            let indexTribute1 = ''
            if (value1 === 'unit0') { indexTribute1 = 0 }
            if (value1 === 'unit1') { indexTribute1 = 1 }
            if (value1 === 'unit2') { indexTribute1 = 2 }
            if (value1 === 'unit3') { indexTribute1 = 3 }
            if (value1 === 'unit4') { indexTribute1 = 4 }
            if (value1 === 'unit5') { indexTribute1 = 5 }
            const unitTribute1 = this.data.arena.player.battlefield[indexTribute1].card
            this.data.arena.player.drop.push(unitTribute1)
            this.data.arena.player.battlefield.splice(indexTribute1, 1)
            const unit2 = {}
            for (let i = 0; i < this.data.arena.player.battlefield.length; i++) {
              if (i === 0) {
                unit2.unit0 = this.data.arena.player.battlefield[i].card.name
              } else if (i === 1) {
                unit2.unit1 = this.data.arena.player.battlefield[i].card.name
              } else if (i === 2) {
                unit2.unit2 = this.data.arena.player.battlefield[i].card.name
              } else if (i === 3) {
                unit2.unit3 = this.data.arena.player.battlefield[i].card.name
              } else if (i === 4) {
                unit2.unit4 = this.data.arena.player.battlefield[i].card.name
              } else if (i === 5) {
                unit2.unit5 = this.data.arena.player.battlefield[i].card.name
              }
            }
            this.$swal.fire({
              title: '<strong><u>Tribute 2 unit</u></strong>',
              input: 'select',
              inputOptions: {
                unit2
              },
              showCancelButton: true,
              inputValidator: (value2) => {
                let indexTribute2 = ''
                if (value2 === 'unit0') { indexTribute2 = 0 }
                if (value2 === 'unit1') { indexTribute2 = 1 }
                if (value2 === 'unit2') { indexTribute2 = 2 }
                if (value2 === 'unit3') { indexTribute2 = 3 }
                if (value2 === 'unit4') { indexTribute2 = 4 }
                if (value2 === 'unit5') { indexTribute2 = 5 }
                const unitTribute2 = this.data.arena.player.battlefield[indexTribute2].card
                this.data.arena.player.drop.push(unitTribute2)
                this.data.arena.player.battlefield.splice(indexTribute2, 1)
                this.data.arena.player.battlefield.push({
                  card: this.data.arena.player.hand[index],
                  position: 'Stand',
                  gainCont: 0,
                  gainAuto: 0,
                  totalPow: this.data.arena.player.hand[index].power
                })
                this.data.arena.player.hand.splice(index, 1)
                this.effectOnCall(data)
                this.effectCont(data, this.data.arena.player.battlefield[this.data.arena.player.battlefield.length - 1], this.data.arena.player.battlefield.length - 1)
                this.handleCountEffect(data)
              }
            })
          }
        })
      } else {
        Toast('error', 'Perlu Unit Untuk Tribute')
      }
    },
    unitCall (data, index) {
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
      if (data === 'Player') {
        this.unitCallPlayer(Toast, index, data)
      } else {
        this.unitCallOpponent(Toast, index, data)
      }
    },
    eff010 (data) { // Jinbei 010
      if (data === 'Player') {
        if (this.data.arena.opponent.battlefield.length > 0) {
          const unit = {}
          for (let i = 0; i < this.data.arena.opponent.battlefield.length; i++) {
            if (i === 0) {
              unit.unit0 = this.data.arena.opponent.battlefield[i].card.name
            } else if (i === 1) {
              unit.unit1 = this.data.arena.opponent.battlefield[i].card.name
            } else if (i === 2) {
              unit.unit2 = this.data.arena.opponent.battlefield[i].card.name
            } else if (i === 3) {
              unit.unit3 = this.data.arena.opponent.battlefield[i].card.name
            } else if (i === 4) {
              unit.unit4 = this.data.arena.opponent.battlefield[i].card.name
            } else if (i === 5) {
              unit.unit5 = this.data.arena.opponent.battlefield[i].card.name
            }
          }
          this.$swal.fire({
            title: '<strong><u>Pilih Unit untuk kembali ke kartu tangan lawan.</u></strong>',
            input: 'select',
            inputOptions: {
              unit
            },
            showCancelButton: true,
            inputValidator: (value) => {
              let indexTarget = ''
              if (value === 'unit0') { indexTarget = 0 }
              if (value === 'unit1') { indexTarget = 1 }
              if (value === 'unit2') { indexTarget = 2 }
              if (value === 'unit3') { indexTarget = 3 }
              if (value === 'unit4') { indexTarget = 4 }
              if (value === 'unit5') { indexTarget = 5 }
              const unitTarget = this.data.arena.opponent.battlefield[indexTarget]
              this.data.arena.opponent.hand.push(unitTarget.card)
              this.data.arena.opponent.battlefield.splice(indexTarget, 1)
            }
          })
        }
      } else {
        if (this.data.arena.player.battlefield.length > 0) {
          const unit = {}
          for (let i = 0; i < this.data.arena.player.battlefield.length; i++) {
            if (i === 0) {
              unit.unit0 = this.data.arena.player.battlefield[i].card.name
            } else if (i === 1) {
              unit.unit1 = this.data.arena.player.battlefield[i].card.name
            } else if (i === 2) {
              unit.unit2 = this.data.arena.player.battlefield[i].card.name
            } else if (i === 3) {
              unit.unit3 = this.data.arena.player.battlefield[i].card.name
            } else if (i === 4) {
              unit.unit4 = this.data.arena.player.battlefield[i].card.name
            } else if (i === 5) {
              unit.unit5 = this.data.arena.player.battlefield[i].card.name
            }
          }
          this.$swal.fire({
            title: '<strong><u>Pilih Unit untuk kembali ke kartu tangan lawan.</u></strong>',
            input: 'select',
            inputOptions: {
              unit
            },
            showCancelButton: true,
            inputValidator: (value) => {
              let indexTarget = ''
              if (value === 'unit0') { indexTarget = 0 }
              if (value === 'unit1') { indexTarget = 1 }
              if (value === 'unit2') { indexTarget = 2 }
              if (value === 'unit3') { indexTarget = 3 }
              if (value === 'unit4') { indexTarget = 4 }
              if (value === 'unit5') { indexTarget = 5 }
              const unitTarget = this.data.arena.player.battlefield[indexTarget]
              this.data.arena.player.hand.push(unitTarget.card)
              this.data.arena.player.battlefield.splice(indexTarget, 1)
            }
          })
        }
      }
    },
    eff011 (data) { // Brook 011
      if (data === 'Player') {
        this.$swal.fire({
          title: '<strong>Aktifkan Efek Brook ?</strong>',
          showCancelButton: true
        }).then((res) => {
          if (res.isConfirmed) {
            const index = this.data.arena.player.drop.length - 1
            const unit = this.data.arena.player.drop[index]
            this.data.arena.player.bind.push(unit)
            this.data.arena.player.drop.splice(index, 1)
            let copy = 0
            const brook = {}
            const brookIndex = []
            for (let i = 0; i < this.data.arena.player.drop.length; i++) {
              if (this.data.arena.player.drop[i].name === 'Brook') {
                if (copy === 0) {
                  brook.unit0 = this.data.arena.player.drop[i].name
                } else if (copy === 1) {
                  brook.unit1 = this.data.arena.player.drop[i].name
                } else if (copy === 2) {
                  brook.unit2 = this.data.arena.player.drop[i].name
                }
                copy += 1
                brookIndex.push(i)
              }
            }
            this.$swal.fire({
              title: '<strong><u>Pilih Unit untuk dipanggil.</u></strong>',
              input: 'select',
              inputOptions: {
                brook
              },
              showCancelButton: true,
              inputValidator: (value) => {
                let indexTarget = ''
                if (value === 'unit0') { indexTarget = brookIndex[0] }
                if (value === 'unit1') { indexTarget = brookIndex[1] }
                if (value === 'unit2') { indexTarget = brookIndex[2] }
                const unitTarget = this.data.arena.player.drop[indexTarget]
                this.data.arena.player.battlefield.push({
                  card: unitTarget,
                  position: 'Stand',
                  gainCont: 0,
                  gainAuto: 0,
                  totalPow: unitTarget.power
                })
                this.data.arena.player.drop.splice(indexTarget, 1)
              }
            })
          }
        })
      } else {
        this.$swal.fire({
          title: '<strong>Aktifkan Efek Brook ?</strong>',
          showCancelButton: true
        }).then((res) => {
          if (res.isConfirmed) {
            const index = this.data.arena.opponent.drop.length - 1
            const unit = this.data.arena.opponent.drop[index]
            this.data.arena.opponent.bind.push(unit)
            this.data.arena.opponent.drop.splice(index, 1)
            let copy = 0
            const brook = {}
            const brookIndex = []
            for (let i = 0; i < this.data.arena.opponent.drop.length; i++) {
              if (this.data.arena.opponent.drop[i].name === 'Brook') {
                if (copy === 0) {
                  brook.unit0 = this.data.arena.opponent.drop[i].name
                } else if (copy === 1) {
                  brook.unit1 = this.data.arena.opponent.drop[i].name
                } else if (copy === 2) {
                  brook.unit2 = this.data.arena.opponent.drop[i].name
                }
                copy += 1
                brookIndex.push(i)
              }
            }
            this.$swal.fire({
              title: '<strong><u>Pilih Unit untuk dipanggil.</u></strong>',
              input: 'select',
              inputOptions: {
                brook
              },
              showCancelButton: true,
              inputValidator: (value) => {
                let indexTarget = ''
                if (value === 'unit0') { indexTarget = brookIndex[0] }
                if (value === 'unit1') { indexTarget = brookIndex[1] }
                if (value === 'unit2') { indexTarget = brookIndex[2] }
                const unitTarget = this.data.arena.opponent.drop[indexTarget]
                this.data.arena.opponent.battlefield.push({
                  card: unitTarget,
                  position: 'Stand',
                  gainCont: 0,
                  gainAuto: 0,
                  totalPow: unitTarget.power
                })
                this.data.arena.opponent.drop.splice(indexTarget, 1)
              }
            })
          }
        })
      }
    },
    eff012 (data) { // Franky 011
      if (data === 'Player') {
        if (this.data.arena.opponent.battlefield.length > 0) {
          const unit = {}
          for (let i = 0; i < this.data.arena.opponent.battlefield.length; i++) {
            if (i === 0 && this.data.arena.opponent.battlefield[i].card.grade < 3) {
              unit.unit0 = this.data.arena.opponent.battlefield[i].card.name
            } else if (i === 1 && this.data.arena.opponent.battlefield[i].card.grade < 3) {
              unit.unit1 = this.data.arena.opponent.battlefield[i].card.name
            } else if (i === 2 && this.data.arena.opponent.battlefield[i].card.grade < 3) {
              unit.unit2 = this.data.arena.opponent.battlefield[i].card.name
            } else if (i === 3 && this.data.arena.opponent.battlefield[i].card.grade < 3) {
              unit.unit3 = this.data.arena.opponent.battlefield[i].card.name
            } else if (i === 4 && this.data.arena.opponent.battlefield[i].card.grade < 3) {
              unit.unit4 = this.data.arena.opponent.battlefield[i].card.name
            } else if (i === 5 && this.data.arena.opponent.battlefield[i].card.grade < 3) {
              unit.unit5 = this.data.arena.opponent.battlefield[i].card.name
            }
          }
          this.$swal.fire({
            title: '<strong><u>Pilih Unit untuk dihancurkan.</u></strong>',
            input: 'select',
            inputOptions: {
              unit
            },
            showCancelButton: true,
            inputValidator: (value) => {
              let indexTarget = ''
              if (value === 'unit0') { indexTarget = 0 }
              if (value === 'unit1') { indexTarget = 1 }
              if (value === 'unit2') { indexTarget = 2 }
              if (value === 'unit3') { indexTarget = 3 }
              if (value === 'unit4') { indexTarget = 4 }
              if (value === 'unit5') { indexTarget = 5 }
              const unitTarget = this.data.arena.opponent.battlefield[indexTarget]
              const code = unitTarget.card.code
              this.effectOnDestroy('Opponent', indexTarget, code)
              this.data.arena.opponent.drop.push(unitTarget.card)
              this.data.arena.opponent.battlefield.splice(indexTarget, 1)
            }
          })
        }
      } else {
        if (this.data.arena.player.battlefield.length > 0) {
          const unit = {}
          for (let i = 0; i < this.data.arena.player.battlefield.length; i++) {
            if (i === 0 && this.data.arena.player.battlefield[i].card.grade < 3) {
              unit.unit0 = this.data.arena.player.battlefield[i].card.name
            } else if (i === 1 && this.data.arena.player.battlefield[i].card.grade < 3) {
              unit.unit1 = this.data.arena.player.battlefield[i].card.name
            } else if (i === 2 && this.data.arena.player.battlefield[i].card.grade < 3) {
              unit.unit2 = this.data.arena.player.battlefield[i].card.name
            } else if (i === 3 && this.data.arena.player.battlefield[i].card.grade < 3) {
              unit.unit3 = this.data.arena.player.battlefield[i].card.name
            } else if (i === 4 && this.data.arena.player.battlefield[i].card.grade < 3) {
              unit.unit4 = this.data.arena.player.battlefield[i].card.name
            } else if (i === 5 && this.data.arena.player.battlefield[i].card.grade < 3) {
              unit.unit5 = this.data.arena.player.battlefield[i].card.name
            }
          }
          this.$swal.fire({
            title: '<strong><u>Pilih Unit untuk dihancurkan.</u></strong>',
            input: 'select',
            inputOptions: {
              unit
            },
            showCancelButton: true,
            inputValidator: (value) => {
              let indexTarget = ''
              if (value === 'unit0') { indexTarget = 0 }
              if (value === 'unit1') { indexTarget = 1 }
              if (value === 'unit2') { indexTarget = 2 }
              if (value === 'unit3') { indexTarget = 3 }
              if (value === 'unit4') { indexTarget = 4 }
              if (value === 'unit5') { indexTarget = 5 }
              const unitTarget = this.data.arena.player.battlefield[indexTarget]
              const code = unitTarget.card.code
              this.effectOnDestroy('Player', indexTarget, code)
              this.data.arena.player.drop.push(unitTarget.card)
              this.data.arena.player.battlefield.splice(indexTarget, 1)
            }
          })
        }
      }
    },
    eff013 (data) { // Nico Robin 013
      if (data === 'Player') {
        const deck = this.data.arena.player.deck
        this.data.arena.player.hand.push(deck[0])
        this.data.arena.player.deck.splice(0, 1)
      } else {
        const deck = this.data.arena.opponent.deck
        this.data.arena.opponent.hand.push(deck[0])
        this.data.arena.opponent.deck.splice(0, 1)
      }
    },
    eff014 (data) { // Chopper 014
      if (data === 'Player') {
        this.data.arena.player.life += 2000
      } else {
        this.data.arena.opponent.life += 2000
      }
    },
    shuffleDeck (data) {
      if (data === 'Player') {
        const deck = this.data.arena.player.deck
        const shuffle = []
        while (deck.length > 0) {
          const indexRandom = Math.floor(Math.random() * deck.length)
          const random = deck[indexRandom]
          shuffle.push(random)
          deck.splice(indexRandom, 1)
        }
        this.data.arena.player.deck = shuffle
      }
    },
    handleToDo (data) {
      const code = data.code
      const todo = this.data.arena.player.view.toDo
      if (this.data.arena.turn === 'Player') {
        if (todo === 'call') {
          const index = this.data.arena.player.deck.findIndex(x => x.code === code)
          const unit = this.data.arena.player.deck[index]
          const battlefield = this.data.arena.player.battlefield
          if (battlefield.length < 6) {
            battlefield.push({
              card: unit,
              position: 'Stand',
              gainCont: 0,
              gainAuto: 0,
              totalPow: unit.power
            })
            this.data.arena.player.deck.splice(index, 1)
            this.data.arena.player.isOpenChat = true
            this.data.arena.player.view.toDo = ''
            this.shuffleDeck('Player')
            this.effectOnCall('Player')
            this.handleCountEffect('Player')
          } else {
            console.log('Battlefield Penuh')
            this.data.arena.player.isOpenChat = true
            this.data.arena.player.view.toDo = ''
            this.shuffleDeck('Player')
          }
        }
        if (todo === 'discard') {
          const index = this.data.arena.player.hand.findIndex(x => x.code === code)
          const unit = this.data.arena.player.hand[index]
          const drop = this.data.arena.player.drop
          drop.push(unit)
          this.data.arena.player.hand.splice(index, 1)
          this.data.arena.player.isOpenChat = true
          this.data.arena.player.view.toDo = ''
        }
      } else {
        if (todo === 'call') {
          const index = this.data.arena.opponent.deck.findIndex(x => x.code === code)
          const unit = this.data.arena.opponent.deck[index]
          const battlefield = this.data.arena.opponent.battlefield
          if (battlefield.length < 6) {
            battlefield.push({
              card: unit,
              position: 'Stand',
              gainCont: 0,
              gainAuto: 0,
              totalPow: unit.power
            })
            this.data.arena.opponent.deck.splice(index, 1)
            this.data.arena.player.isOpenChat = true
            this.data.arena.player.view.toDo = ''
            this.shuffleDeck('Opponent')
            this.effectOnCall('Opponent')
            this.handleCountEffect('Opponent')
          } else {
            console.log('Battlefield Penuh')
            this.data.arena.player.isOpenChat = true
            this.data.arena.player.view.toDo = ''
            this.shuffleDeck('Opponent')
          }
        }
        if (todo === 'discard') {
          const index = this.data.arena.opponent.hand.findIndex(x => x.code === code)
          const unit = this.data.arena.opponent.hand[index]
          const drop = this.data.arena.opponent.drop
          drop.push(unit)
          this.data.arena.opponent.hand.splice(index, 1)
          this.data.arena.player.isOpenChat = true
          this.data.arena.player.view.toDo = ''
        }
      }
    },
    eff015 (data) { // Usopp 015
      this.data.arena.player.isOpenChat = false
      if (data === 'Player') {
        const search = []
        this.data.arena.player.deck.map((card) => {
          if (card.name !== 'Usopp' && card.grade === 1) {
            search.push(card)
          }
        })
        this.data.arena.player.view = {
          zone: 'Deck Player',
          card: search,
          toDo: 'call'
        }
      } else {
        const search = []
        this.data.arena.opponent.deck.map((card) => {
          if (card.name !== 'Usopp' && card.grade === 1) {
            search.push(card)
          }
        })
        this.data.arena.player.view = {
          zone: 'Deck Opponent',
          card: search,
          toDo: 'call'
        }
      }
    },
    eff016 (data) { // Nami 016
      if (data === 'Player') {
        if (this.data.arena.opponent.battlefield.length > 0) {
          const unit = {}
          for (let i = 0; i < this.data.arena.opponent.battlefield.length; i++) {
            if (i === 0 && this.data.arena.opponent.battlefield[i].card.grade === 1) {
              unit.unit0 = this.data.arena.opponent.battlefield[i].card.name
            } else if (i === 1 && this.data.arena.opponent.battlefield[i].card.grade === 1) {
              unit.unit1 = this.data.arena.opponent.battlefield[i].card.name
            } else if (i === 2 && this.data.arena.opponent.battlefield[i].card.grade === 1) {
              unit.unit2 = this.data.arena.opponent.battlefield[i].card.name
            } else if (i === 3 && this.data.arena.opponent.battlefield[i].card.grade === 1) {
              unit.unit3 = this.data.arena.opponent.battlefield[i].card.name
            } else if (i === 4 && this.data.arena.opponent.battlefield[i].card.grade === 1) {
              unit.unit4 = this.data.arena.opponent.battlefield[i].card.name
            } else if (i === 5 && this.data.arena.opponent.battlefield[i].card.grade === 1) {
              unit.unit5 = this.data.arena.opponent.battlefield[i].card.name
            }
          }
          this.$swal.fire({
            title: '<strong><u>Pilih Unit untuk di-bind.</u></strong>',
            input: 'select',
            inputOptions: {
              unit
            },
            showCancelButton: true,
            inputValidator: (value) => {
              let indexTarget = ''
              if (value === 'unit0') { indexTarget = 0 }
              if (value === 'unit1') { indexTarget = 1 }
              if (value === 'unit2') { indexTarget = 2 }
              if (value === 'unit3') { indexTarget = 3 }
              if (value === 'unit4') { indexTarget = 4 }
              if (value === 'unit5') { indexTarget = 5 }
              const unitTarget = this.data.arena.opponent.battlefield[indexTarget]
              // const code = unitTarget.card.code
              // this.effectOnDestroy('Opponent', indexTarget, code)
              this.data.arena.opponent.bind.push(unitTarget.card)
              this.data.arena.opponent.battlefield.splice(indexTarget, 1)
              this.handleCountEffect('Player')
              this.handleCountEffect('Opponent')
            }
          })
        }
      } else {
        if (this.data.arena.player.battlefield.length > 0) {
          const unit = {}
          for (let i = 0; i < this.data.arena.player.battlefield.length; i++) {
            if (i === 0 && this.data.arena.player.battlefield[i].card.grade === 1) {
              unit.unit0 = this.data.arena.player.battlefield[i].card.name
            } else if (i === 1 && this.data.arena.player.battlefield[i].card.grade === 1) {
              unit.unit1 = this.data.arena.player.battlefield[i].card.name
            } else if (i === 2 && this.data.arena.player.battlefield[i].card.grade === 1) {
              unit.unit2 = this.data.arena.player.battlefield[i].card.name
            } else if (i === 3 && this.data.arena.player.battlefield[i].card.grade === 1) {
              unit.unit3 = this.data.arena.player.battlefield[i].card.name
            } else if (i === 4 && this.data.arena.player.battlefield[i].card.grade === 1) {
              unit.unit4 = this.data.arena.player.battlefield[i].card.name
            } else if (i === 5 && this.data.arena.player.battlefield[i].card.grade === 1) {
              unit.unit5 = this.data.arena.player.battlefield[i].card.name
            }
          }
          this.$swal.fire({
            title: '<strong><u>Pilih Unit untuk di-bind.</u></strong>',
            input: 'select',
            inputOptions: {
              unit
            },
            showCancelButton: true,
            inputValidator: (value) => {
              let indexTarget = ''
              if (value === 'unit0') { indexTarget = 0 }
              if (value === 'unit1') { indexTarget = 1 }
              if (value === 'unit2') { indexTarget = 2 }
              if (value === 'unit3') { indexTarget = 3 }
              if (value === 'unit4') { indexTarget = 4 }
              if (value === 'unit5') { indexTarget = 5 }
              const unitTarget = this.data.arena.player.battlefield[indexTarget]
              // const code = unitTarget.card.code
              // this.effectOnDestroy('Player', indexTarget, code)
              this.data.arena.player.bind.push(unitTarget.card)
              this.data.arena.player.battlefield.splice(indexTarget, 1)
              this.handleCountEffect('Player')
              this.handleCountEffect('Opponent')
            }
          })
        }
      }
    },
    eff017 (data, index) { // Sanji 017
      if (data === 'Player') {
        const unitAct = this.data.arena.player.battlefield[index]
        let isAlreadyAct = false
        if (this.data.arena.player.oncePerTurn.length > 0) {
          this.data.arena.player.oncePerTurn.map((code) => {
            if (unitAct.card.code === code) {
              isAlreadyAct = true
            }
          })
        }
        if (isAlreadyAct === false) {
          this.data.arena.player.isOpenChat = false
          const cards = []
          this.data.arena.player.hand.map((card) => {
            cards.push(card)
          })
          this.data.arena.player.view = {
            zone: 'Hand Player',
            card: cards,
            toDo: 'discard'
          }
          unitAct.gainAuto += 1000
          unitAct.totalPow += unitAct.gainAuto
          this.data.arena.player.oncePerTurn.push(unitAct.card.code)
        } else {
          console.log('effect sudah digunakan')
        }
      } else {
        const unitAct = this.data.arena.opponent.battlefield[index]
        let isAlreadyAct = false
        if (this.data.arena.opponent.oncePerTurn.length > 0) {
          this.data.arena.opponent.oncePerTurn.map((code) => {
            if (unitAct.card.code === code) {
              isAlreadyAct = true
            }
          })
        }
        if (isAlreadyAct === false) {
          this.data.arena.player.isOpenChat = false
          const cards = []
          this.data.arena.opponent.hand.map((card) => {
            cards.push(card)
          })
          this.data.arena.player.view = {
            zone: 'Hand Opponent',
            card: cards,
            toDo: 'discard'
          }
          unitAct.gainAuto += 1000
          unitAct.totalPow += unitAct.gainAuto
          this.data.arena.opponent.oncePerTurn.push(unitAct.card.code)
        } else {
          console.log('effect sudah digunakan')
        }
      }
    },
    eff018 (data, index) { // Zoro 018
      if (data === 'Player') {
        const unitAct = this.data.arena.player.battlefield[index]
        let isAlreadyAct = false
        if (this.data.arena.player.oncePerTurn.length > 0) {
          this.data.arena.player.oncePerTurn.map((code) => {
            if (unitAct.card.code === code) {
              isAlreadyAct = true
            }
          })
        }
        if (isAlreadyAct === false) {
          this.data.arena.player.life -= 1000
          unitAct.gainAuto += 1000
          unitAct.totalPow += unitAct.gainAuto
          this.data.arena.player.oncePerTurn.push(unitAct.card.code)
        } else {
          console.log('effect sudah digunakan')
        }
      } else {
        const unitAct = this.data.arena.opponent.battlefield[index]
        let isAlreadyAct = false
        if (this.data.arena.opponent.oncePerTurn.length > 0) {
          this.data.arena.opponent.oncePerTurn.map((code) => {
            if (unitAct.card.code === code) {
              isAlreadyAct = true
            }
          })
        }
        if (isAlreadyAct === false) {
          this.data.arena.opponent.life -= 1000
          unitAct.gainAuto += 1000
          unitAct.totalPow += unitAct.gainAuto
          this.data.arena.opponent.oncePerTurn.push(unitAct.card.code)
        } else {
          console.log('effect sudah digunakan')
        }
      }
    },
    handleCountEffect (data) {
      if (data === 'Player') {
        this.data.arena.player.contEffect.map((code) => {
          if (code === '019') {
            this.data.arena.player.battlefield.map((unit) => {
              if (unit.card.code === code) {
                unit.gainCont = (500 * (this.data.arena.player.battlefield.length - 1))
                unit.totalPow = unit.card.power + unit.gainCont
              }
            })
          }
        })
      } else {
        this.data.arena.opponent.contEffect.map((code) => {
          if (code === '019') {
            this.data.arena.opponent.battlefield.map((unit) => {
              if (unit.card.code === code) {
                unit.gainCont = (500 * (this.data.arena.opponent.battlefield.length - 1))
                unit.totalPow = unit.card.power + unit.gainCont
              }
            })
          }
        })
      }
    },
    eff019 (data, index) { // Luffy 019
      if (data === 'Player') {
        let isAlready = false
        if (this.data.arena.player.contEffect.length > 0) {
          this.data.arena.player.contEffect.map((code) => {
            if (code === '019') {
              isAlready = true
            }
          })
          if (isAlready === false) {
            this.data.arena.player.contEffect.push('019')
          }
        } else {
          this.data.arena.player.contEffect.push('019')
        }
      } else {
        let isAlready = false
        if (this.data.arena.opponent.contEffect.length > 0) {
          this.data.arena.opponent.contEffect.map((code) => {
            if (code === '019') {
              isAlready = true
            }
          })
          if (isAlready === false) {
            this.data.arena.opponent.contEffect.push('019')
          }
        } else {
          this.data.arena.opponent.contEffect.push('019')
        }
      }
    },
    eff020 (data, index) { // Vivi 020
      this.data.arena.player.isOpenChat = false
      if (data === 'Player') {
        const search = []
        this.data.arena.player.deck.map((card) => {
          if (card.name !== 'Nefertari Vivi' && card.grade === 1) {
            search.push(card)
          }
        })
        this.data.arena.player.view = {
          zone: 'Deck Player',
          card: search,
          toDo: 'call'
        }
        const unit = this.data.arena.player.battlefield[index]
        this.data.arena.player.deck.push(unit.card)
        setTimeout(() => this.data.arena.player.battlefield.splice(index, 1), 1000)
      } else {
        const search = []
        this.data.arena.opponent.deck.map((card) => {
          if (card.name !== 'Nefertari Vivi' && card.grade === 1) {
            search.push(card)
          }
        })
        this.data.arena.player.view = {
          zone: 'Deck Opponent',
          card: search,
          toDo: 'call'
        }
        const unit = this.data.arena.opponent.battlefield[index]
        this.data.arena.opponent.deck.push(unit.card)
        setTimeout(() => this.data.arena.opponent.battlefield.splice(index, 1), 1000)
      }
    },
    eff021 (data, index) { // Vinsmoke Yonji 021
      if (data === 'Player') {
        const battlefield = this.data.arena.player.battlefield
        const unitAtk = battlefield[index]
        let vinsmoke = 0
        battlefield.map((unit) => {
          if (unit.card.name.search('Vinsmoke') >= 0) {
            vinsmoke += 1
          }
        })
        if (vinsmoke > 1) {
          unitAtk.gainAuto = 1000
          unitAtk.totalPow += unitAtk.gainAuto
        }
      } else {
        const battlefield = this.data.arena.opponent.battlefield
        const unitAtk = battlefield[index]
        let vinsmoke = 0
        battlefield.map((unit) => {
          if (unit.card.name.search('Vinsmoke') >= 0) {
            vinsmoke += 1
          }
        })
        if (vinsmoke > 1) {
          unitAtk.gainAuto += 1000
          unitAtk.totalPow += unitAtk.gainAuto
        }
      }
    },
    eff022 (data, index) { // Sanji 022
      if (data === 'Player') {
        const unitAct = this.data.arena.player.battlefield[index]
        let isAlreadyAct = false
        if (this.data.arena.player.oncePerTurn.length > 0) {
          this.data.arena.player.oncePerTurn.map((code) => {
            if (unitAct.card.code === code) {
              isAlreadyAct = true
            }
          })
        }
        if (isAlreadyAct === false) {
          this.data.arena.player.isOpenChat = false
          const cards = []
          this.data.arena.player.hand.map((card) => {
            if (card.name.search('Vinsmoke') >= 0) {
              cards.push(card)
            }
          })
          if (cards.length > 0) {
            this.data.arena.player.view = {
              zone: 'Hand Player',
              card: cards,
              toDo: 'discard'
            }
            unitAct.gainAuto += 2000
            unitAct.totalPow += unitAct.gainAuto
            this.data.arena.player.oncePerTurn.push(unitAct.card.code)
          }
        } else {
          console.log('effect sudah digunakan')
        }
      } else {
        const unitAct = this.data.arena.opponent.battlefield[index]
        let isAlreadyAct = false
        if (this.data.arena.opponent.oncePerTurn.length > 0) {
          this.data.arena.opponent.oncePerTurn.map((code) => {
            if (unitAct.card.code === code) {
              isAlreadyAct = true
            }
          })
        }
        if (isAlreadyAct === false) {
          this.data.arena.player.isOpenChat = false
          const cards = []
          this.data.arena.opponent.hand.map((card) => {
            if (card.name.search('Vinsmoke') >= 0) {
              cards.push(card)
            }
          })
          if (cards.length > 0) {
            this.data.arena.player.view = {
              zone: 'Hand Opponent',
              card: cards,
              toDo: 'discard'
            }
            unitAct.gainAuto += 2000
            unitAct.totalPow += unitAct.gainAuto
            this.data.arena.opponent.oncePerTurn.push(unitAct.card.code)
          }
        } else {
          console.log('effect sudah digunakan')
        }
      }
    },
    eff023 (data, index) { // Vinsmoke Niji 023
      if (data === 'Player') {
        const unitAct = this.data.arena.player.battlefield[index]
        let isAlreadyAct = false
        if (this.data.arena.player.oncePerTurn.length > 0) {
          this.data.arena.player.oncePerTurn.map((code) => {
            if (unitAct.card.code === code) {
              isAlreadyAct = true
            }
          })
        }
        if (isAlreadyAct === false) {
          this.data.arena.player.isOpenChat = false
          const cards = []
          this.data.arena.player.hand.map((card) => {
            if (card.name.search('Vinsmoke') >= 0) {
              cards.push(card)
            }
          })
          if (cards.length > 0) {
            this.data.arena.player.view = {
              zone: 'Hand Player',
              card: cards,
              toDo: 'discard'
            }
            if (this.data.arena.opponent.battlefield.length > 0) {
              const unit = {}
              for (let i = 0; i < this.data.arena.opponent.battlefield.length; i++) {
                if (i === 0 && this.data.arena.opponent.battlefield[i].card.grade < 3) {
                  unit.unit0 = this.data.arena.opponent.battlefield[i].card.name
                } else if (i === 1 && this.data.arena.opponent.battlefield[i].card.grade < 3) {
                  unit.unit1 = this.data.arena.opponent.battlefield[i].card.name
                } else if (i === 2 && this.data.arena.opponent.battlefield[i].card.grade < 3) {
                  unit.unit2 = this.data.arena.opponent.battlefield[i].card.name
                } else if (i === 3 && this.data.arena.opponent.battlefield[i].card.grade < 3) {
                  unit.unit3 = this.data.arena.opponent.battlefield[i].card.name
                } else if (i === 4 && this.data.arena.opponent.battlefield[i].card.grade < 3) {
                  unit.unit4 = this.data.arena.opponent.battlefield[i].card.name
                } else if (i === 5 && this.data.arena.opponent.battlefield[i].card.grade < 3) {
                  unit.unit5 = this.data.arena.opponent.battlefield[i].card.name
                }
              }
              this.$swal.fire({
                title: '<strong><u>Pilih Unit untuk di-bind.</u></strong>',
                input: 'select',
                inputOptions: {
                  unit
                },
                showCancelButton: true,
                inputValidator: (value) => {
                  let indexTarget = ''
                  if (value === 'unit0') { indexTarget = 0 }
                  if (value === 'unit1') { indexTarget = 1 }
                  if (value === 'unit2') { indexTarget = 2 }
                  if (value === 'unit3') { indexTarget = 3 }
                  if (value === 'unit4') { indexTarget = 4 }
                  if (value === 'unit5') { indexTarget = 5 }
                  const unitTarget = this.data.arena.opponent.battlefield[indexTarget]
                  // const code = unitTarget.card.code
                  // this.effectOnDestroy('Opponent', indexTarget, code)
                  this.data.arena.opponent.bind.push(unitTarget.card)
                  this.data.arena.opponent.battlefield.splice(indexTarget, 1)
                  this.handleCountEffect('Player')
                  this.handleCountEffect('Opponent')
                }
              })
            }
            this.data.arena.player.oncePerTurn.push(unitAct.card.code)
          }
        } else {
          console.log('effect sudah digunakan')
        }
      } else {
        const unitAct = this.data.arena.opponent.battlefield[index]
        let isAlreadyAct = false
        if (this.data.arena.opponent.oncePerTurn.length > 0) {
          this.data.arena.opponent.oncePerTurn.map((code) => {
            if (unitAct.card.code === code) {
              isAlreadyAct = true
            }
          })
        }
        if (isAlreadyAct === false) {
          this.data.arena.player.isOpenChat = false
          const cards = []
          this.data.arena.opponent.hand.map((card) => {
            if (card.name.search('Vinsmoke') >= 0) {
              cards.push(card)
            }
          })
          if (cards.length > 0) {
            this.data.arena.player.view = {
              zone: 'Hand Opponent',
              card: cards,
              toDo: 'discard'
            }
            if (this.data.arena.player.battlefield.length > 0) {
              const unit = {}
              for (let i = 0; i < this.data.arena.player.battlefield.length; i++) {
                if (i === 0 && this.data.arena.player.battlefield[i].card.grade < 3) {
                  unit.unit0 = this.data.arena.player.battlefield[i].card.name
                } else if (i === 1 && this.data.arena.player.battlefield[i].card.grade < 3) {
                  unit.unit1 = this.data.arena.player.battlefield[i].card.name
                } else if (i === 2 && this.data.arena.player.battlefield[i].card.grade < 3) {
                  unit.unit2 = this.data.arena.player.battlefield[i].card.name
                } else if (i === 3 && this.data.arena.player.battlefield[i].card.grade < 3) {
                  unit.unit3 = this.data.arena.player.battlefield[i].card.name
                } else if (i === 4 && this.data.arena.player.battlefield[i].card.grade < 3) {
                  unit.unit4 = this.data.arena.player.battlefield[i].card.name
                } else if (i === 5 && this.data.arena.player.battlefield[i].card.grade < 3) {
                  unit.unit5 = this.data.arena.player.battlefield[i].card.name
                }
              }
              this.$swal.fire({
                title: '<strong><u>Pilih Unit untuk di-bind.</u></strong>',
                input: 'select',
                inputOptions: {
                  unit
                },
                showCancelButton: true,
                inputValidator: (value) => {
                  let indexTarget = ''
                  if (value === 'unit0') { indexTarget = 0 }
                  if (value === 'unit1') { indexTarget = 1 }
                  if (value === 'unit2') { indexTarget = 2 }
                  if (value === 'unit3') { indexTarget = 3 }
                  if (value === 'unit4') { indexTarget = 4 }
                  if (value === 'unit5') { indexTarget = 5 }
                  const unitTarget = this.data.arena.player.battlefield[indexTarget]
                  // const code = unitTarget.card.code
                  // this.effectOnDestroy('player', indexTarget, code)
                  this.data.arena.player.bind.push(unitTarget.card)
                  this.data.arena.player.battlefield.splice(indexTarget, 1)
                  this.handleCountEffect('Player')
                  this.handleCountEffect('Opponent')
                }
              })
            }
            this.data.arena.opponent.oncePerTurn.push(unitAct.card.code)
          }
        } else {
          console.log('effect sudah digunakan')
        }
      }
    },
    effectOnCall (data) {
      let index = null
      let unit = null
      if (data === 'Player') {
        index = this.data.arena.player.battlefield.length - 1
        unit = this.data.arena.player.battlefield[index]
      } else {
        index = this.data.arena.opponent.battlefield.length - 1
        unit = this.data.arena.opponent.battlefield[index]
      }
      const code = unit.card.code
      if (code === '010') { this.eff010(data) }
      if (code === '012') { this.eff012(data) }
      if (code === '013') { this.eff013(data) }
      if (code === '014') { this.eff014(data) }
      if (code === '015') { this.eff015(data) }
      if (code === '016') { this.eff016(data) }
      if (code === '020') { this.eff020(data, index) }
    },
    effectOnDestroy (data, index, code) {
      if (code === '011') { this.eff011(data, index) }
    },
    effectAct (data, unit, index) {
      const code = unit.card.code
      if (code === '017') { this.eff017(data, index) }
      if (code === '018') { this.eff018(data, index) }
      if (code === '022') { this.eff022(data, index) }
      if (code === '023') { this.eff023(data, index) }
    },
    effectCont (data, unit, index) {
      const code = unit.card.code
      if (code === '019') { this.eff019(data, index) }
    },
    effectOnAtk (data, index, code) {
      if (code === '021') { this.eff021(data, index) }
    }
  },
  data () {
    return {
      data: {
        arena: {
          turn: 'Player',
          display: {
            name: 'Monkey D. Luffy',
            image: C001,
            imageM: CM001,
            grade: 3,
            type: ['Human', 'Fighter', 'Paramecia'],
            text: '',
            power: 3000,
            code: '001'
          },
          player: {
            isOpenChat: true,
            life: 8000,
            view: {
              zone: '',
              card: [],
              toDo: ''
            },
            phase: 'SP',
            deck: [],
            hand: [],
            drop: [],
            bind: [],
            battlefield: [],
            oncePerTurn: [],
            contEffect: []
          },
          opponent: {
            life: 8000,
            view: {
              zone: '',
              card: []
            },
            phase: 'SP',
            deck: [],
            hand: [],
            drop: [],
            bind: [],
            battlefield: [],
            oncePerTurn: [],
            contEffect: []
          }
        },
        edit: {
          title: 'DECK NAME INDEX',
          deck: [],
          display: {
            name: 'Monkey D. Luffy',
            image: C001,
            imageM: CM001,
            grade: 3,
            type: ['Human', 'Fighter', 'Paramecia'],
            text: '',
            power: 3000,
            code: '001'
          },
          cards: [
            {
              name: 'Kozuki Hiyori Komurasaki',
              image: C100,
              imageM: CM100,
              grade: 3,
              type: ['Human'],
              text: '[Act][1/Turn]: Search your deck. Call up to one "Swordman" from your deck. Shuffle your deck.',
              power: 0,
              code: '100'
            },
            {
              name: 'Shirahoshi',
              image: C099,
              imageM: CM099,
              grade: 3,
              type: ['Fishman'],
              text: '[Act][1/Turn]: Search your deck. Call up to one "Fishman" except "Shirahoshi" from your deck. Shuffle your deck.',
              power: 0,
              code: '099'
            },
            {
              name: 'Charlotte Linlin "Big Mom"',
              image: C098,
              imageM: CM098,
              grade: 3,
              type: ['Human', 'Fighter', 'Paramecia'],
              text: '[Act][1/Turn]: Put other unit your control into bottom of your deck. Call up to one "Charlotte" in its card name except "Charlotte Linlin" from your deck. Shuffle your deck.',
              power: 2500,
              code: '098'
            },
            {
              name: 'Charlotte Katakuri',
              image: C097,
              imageM: CM097,
              grade: 3,
              type: ['Human', 'Swordman', 'Paramecia'],
              text: '[Cont]: This unit get Power + 500 for each "Charlotte" in its card name in your bind zone.',
              power: 2500,
              code: '097'
            },
            {
              name: 'Charlotte Smoothie',
              image: C096,
              imageM: CM096,
              grade: 3,
              type: ['Human', 'Swordman', 'Paramecia'],
              text: '[Act][1/Turn]: Pay 500 life points. Choose up to one your other unit, and put that unit into bottom of your deck. This unit get Power equal that unit put into bottom deck.',
              power: 2500,
              code: '096'
            },
            {
              name: 'Charlotte Cracker',
              image: C095,
              imageM: CM095,
              grade: 3,
              type: ['Human', 'Swordman', 'Paramecia'],
              text: '[Cont]: During your opponents turn. This unit get Power + 1500.',
              power: 2500,
              code: '095'
            },
            {
              name: 'Charlotte Oven',
              image: C094,
              imageM: CM094,
              grade: 2,
              type: ['Human', 'Fighter', 'Paramecia'],
              text: '[Auto]: When this unit is placed on battlefield. Choose up to one your opponrnents "Rest" unit, and destroy that unit.',
              power: 1500,
              code: '094'
            },
            {
              name: 'Charlotte Daifuku',
              image: C093,
              imageM: CM093,
              grade: 2,
              type: ['Human', 'Fighter', 'Paramecia'],
              text: '[Auto]: When this unit is placed on battlefield from your hand. Call up to one "Charlotte Daifuku" from your deck. Shuffle your deck.',
              power: 1500,
              code: '093'
            },
            {
              name: 'Charlotte Pudding',
              image: C092,
              imageM: CM092,
              grade: 1,
              type: ['Human', 'Spellcaster', 'Paramecia'],
              text: '[Auto]: When this unit is send into drop zone. Choose a card other "Charlotte Pudding" from drop zone, and put that card into your hand.',
              power: 0,
              code: '092'
            },
            {
              name: 'Charlotte Brulee',
              image: C091,
              imageM: CM091,
              grade: 1,
              type: ['Human', 'Spellcaster', 'Paramecia'],
              text: '[Act]: Bind this unit. Choose up to one Grade 2 or less your opponents unit, and put that unit into opponents bind zone.',
              power: 0,
              code: '091'
            },
            {
              name: 'Charlotte Flampe',
              image: C090,
              imageM: CM090,
              grade: 1,
              type: ['Human', 'Gunner'],
              text: '[Act][1/Turn]: Rest this unit. Choose up to one "Charlotte Katakuri" your control, and that unit get Power + 1000 until end this turn.',
              power: 0,
              code: '090'
            },
            {
              name: 'Charlotte Amande',
              image: C089,
              imageM: CM089,
              grade: 1,
              type: ['Human', 'Swordman'],
              text: '[Act][1/Turn]: Rest this unit and Pay 500 life points. Choose up to one Grade 2 or less your opponents unit, and destroy that unit.',
              power: 500,
              code: '089'
            },
            {
              name: 'Carrot',
              image: C088,
              imageM: CM088,
              grade: 3,
              type: ['Beast', 'Fighter', 'Sulong'],
              text: '[Auto]: When this unit attack. All your "Beast" unit get Power + 1000 until end this turn. At the end of turn, put this unit into bottom of your deck, call up to one Grade 2 or less "Carrot" in its card name from your deck. Shuffle your deck.',
              power: 2500,
              code: '088'
            },
            {
              name: 'Carrot',
              image: C087,
              imageM: CM087,
              grade: 2,
              type: ['Beast', 'Fighter'],
              text: '[Act][1/Turn]: Put this unit into bottom of your deck, seacrh up to one "Carrot" in its card name and call that unit. Shuffer your deck.',
              power: 1500,
              code: '087'
            },
            {
              name: 'Baby 5',
              image: C086,
              imageM: CM086,
              grade: 1,
              type: ['Human', 'Swordman', 'Gunner', 'Paramecia'],
              text: '[Act][1/Turn]: Rest this unit. Choose up to one your unit, then Stand that unit.',
              power: 500,
              code: '086'
            },
            {
              name: 'Denjiro',
              image: C085,
              imageM: CM085,
              grade: 2,
              type: ['Human', 'Swordman'],
              text: '[Cont]: If you control another "Swordman" unit, this unit get Power + 1000.',
              power: 1500,
              code: '085'
            },
            {
              name: 'Monkey D. Luffy',
              image: C084,
              imageM: CM084,
              grade: 3,
              type: ['Human', 'Fighter', 'Paramecia'],
              text: '[Act][1/turn]: Call up to one "Cavendish" or "Bartolomeo" or "Don Sai" or "Ideo" or "Leo" from your deck or drop zone or bind zone. If you call a unit from deck, shuffel your deck.',
              power: 2500,
              code: '084'
            },
            {
              name: 'Leo',
              image: C083,
              imageM: CM083,
              grade: 2,
              type: ['Dwarfs', 'Swordman', 'Paramecia'],
              text: '[Act][1/turn]: Pay 500 life points. Choose up to one Grade 2 or less your opponents unit, then Rest that unit.',
              power: 1500,
              code: '083'
            },
            {
              name: 'Ideo',
              image: C082,
              imageM: CM082,
              grade: 2,
              type: ['Human', 'Fighter'],
              text: '[Auto]: When this unit destroy opponents unit by battle. Inflict 2000 damage to your opponents',
              power: 1500,
              code: '082'
            },
            {
              name: 'Don Sai',
              image: C081,
              imageM: CM081,
              grade: 2,
              type: ['Human', 'Swordman'],
              text: '[Act]: Pay 500 life points and Rest this unit. Choose one your unit, that unit get Power + 1500 until end this turn.',
              power: 1500,
              code: '081'
            },
            {
              name: 'Bartolomeo',
              image: C080,
              imageM: CM080,
              grade: 2,
              type: ['Human', 'Fighter', 'Paramecia'],
              text: '[Act][1/Turn]: Choose up to one your unit. that unit cannot be destroy by battle until end this turn.',
              power: 1500,
              code: '080'
            },
            {
              name: 'Cavendish',
              image: C079,
              imageM: CM079,
              grade: 2,
              type: ['Human', 'Swordman'],
              text: '[Auto][1/Turn]: When this unit become Rest. You may pay 500 life points, then Stand this unit.',
              power: 1500,
              code: '079'
            },
            {
              name: 'Diamond Jozu',
              image: C078,
              imageM: CM078,
              grade: 2,
              type: ['Human', 'Fighter', 'Paramecia'],
              text: '[Cont]: This unit cannot destoy by battle.',
              power: 1500,
              code: '078'
            },
            {
              name: 'Thatch',
              image: C077,
              imageM: CM077,
              grade: 2,
              type: ['Human', 'Fighter'],
              text: '[Auto]: When this unit send into drop zone. Choose up to two "Normal" unit from drop zone, and call that unit as Rest.',
              power: 1000,
              code: '077'
            },
            {
              name: 'Blenheim',
              image: C076,
              imageM: CM076,
              grade: 2,
              type: ['Human', 'Swordman'],
              text: '',
              power: 2000,
              code: '076'
            },
            {
              name: 'Curiel',
              image: C075,
              imageM: CM075,
              grade: 2,
              type: ['Human', 'Gunner'],
              text: '',
              power: 2000,
              code: '075'
            },
            {
              name: 'Kingdew',
              image: C074,
              imageM: CM074,
              grade: 2,
              type: ['Human', 'Fighter'],
              text: '',
              power: 2000,
              code: '074'
            },
            {
              name: 'Haruta',
              image: C073,
              imageM: CM073,
              grade: 1,
              type: ['Human', 'Swordman'],
              text: '',
              power: 1000,
              code: '073'
            },
            {
              name: 'Squard',
              image: C072,
              imageM: CM072,
              grade: 1,
              type: ['Human', 'Swordman'],
              text: '',
              power: 1000,
              code: '072'
            },
            {
              name: 'Bohemian',
              image: C071,
              imageM: CM071,
              grade: 1,
              type: ['Human', 'Swordman'],
              text: '',
              power: 1000,
              code: '071'
            },
            {
              name: 'Edward Newgate',
              image: C070,
              imageM: CM070,
              grade: 3,
              type: ['Human', 'Swordman', 'Paramecia'],
              text: `
              [Cont]: This unit uneffected by "Logia" card effect.
              [Auto]: When this unit attack. You may pay 1000 life points, then this unit get Power + 3000 until end this turn.
              `,
              power: 2500,
              code: '070'
            },
            {
              name: 'Portgas D. Ace',
              image: C069,
              imageM: CM069,
              grade: 3,
              type: ['Human', 'Fighter', 'Logia'],
              text: `
              [Cont]: This unit cannot be destroy by card effect.
              [Auto][1/Turn]: When your opponents unit attack. Choose up to one opponents unit, and destroy that unit.
              `,
              power: 2500,
              code: '069'
            },
            {
              name: 'Monkey D. Garp',
              image: C068,
              imageM: CM068,
              grade: 3,
              type: ['Human', 'Fighter'],
              text: '[Auto]: When this unit attack. This unit get Power + 1000 for each "Human" unit your control until end of this turn.',
              power: 2500,
              code: '068'
            },
            {
              name: 'Dracule Mihawk',
              image: C067,
              imageM: CM067,
              grade: 3,
              type: ['Human', 'Swordman'],
              text: '[Auto]: When this unit attack. You may pay 500 life points and destroy one your unit, then this unit get Power + 2500 until end this turn.',
              power: 2500,
              code: '067'
            },
            {
              name: 'Marco',
              image: C066,
              imageM: CM066,
              grade: 3,
              type: ['Human', 'Fighter', 'Zoan'],
              text: '[Auto]: When this unit is destroyed. Increase your Life Points by 2000 points. At the end of this turn, call this unit from drop zone.',
              power: 2500,
              code: '066'
            },
            {
              name: 'Kaido',
              image: C065,
              imageM: CM065,
              grade: 3,
              type: ['Human', 'Fighter', 'Zoan'],
              text: '[Cont]: This unit get Power + 500 for each "Zoan" unit your control.',
              power: 2500,
              code: '065'
            },
            {
              name: 'Kaido',
              image: C064,
              imageM: CM064,
              grade: 3,
              type: ['Human', 'Fighter', 'Zoan'],
              text: '[Cont]: All your "Zoan" unit get Power + 500.',
              power: 2500,
              code: '064'
            },
            {
              name: 'Oars Jr',
              image: C063,
              imageM: CM063,
              grade: 2,
              type: ['Giant', 'Fighter'],
              text: '[Auto]: When this unit is placed on battlefield. Choose one unit your control, and destroy that unit.',
              power: 3000,
              code: '063'
            },
            {
              name: 'Fujitora',
              image: C062,
              imageM: CM062,
              grade: 3,
              type: ['Human', 'Swordman', 'Paramecia'],
              text: '[Act][2/Turn]: Pay 500 life points. Choose up to one your opponents unit, and destroy that unit.',
              power: 2500,
              code: '062'
            },
            {
              name: 'Eustass Kid',
              image: C061,
              imageM: CM061,
              grade: 3,
              type: ['Human', 'Fighter', 'Paramecia'],
              text: '[Auto]: When this unit attack. This unit get Power + 1000 for each "Rest" your opponents unit until end of this turn.',
              power: 2500,
              code: '061'
            },
            {
              name: 'Coby',
              image: C060,
              imageM: CM060,
              grade: 2,
              type: ['Human', 'Fighter'],
              text: '[Auto]: When this unit attack. This unit get Power + 500 for each "Human" unit your control until end of this turn.',
              power: 1500,
              code: '060'
            },
            {
              name: 'Boa Hancock',
              image: C059,
              imageM: CM059,
              grade: 3,
              type: ['Human', 'Fighter', 'Paramecia'],
              text: '[Cont]: During Standby Phase. All your opponents unit cannot become Stand.',
              power: 2500,
              code: '059'
            },
            {
              name: 'Jack',
              image: C058,
              imageM: CM058,
              grade: 3,
              type: ['Fishman', 'Fighter', 'Zoan'],
              text: '[Auto]: When this unit attack. This unit get Power + 500 ("stack effect").',
              power: 2500,
              code: '058'
            },
            {
              name: 'Basil Hawkins',
              image: C057,
              imageM: CM057,
              grade: 2,
              type: ['Human', 'Spellcaster', 'Paramecia'],
              text: '[Auto]: When this unit destroyed and send to drop zone. You may discard a card from your hand, then call this unit from drop zone.',
              power: 1500,
              code: '057'
            },
            {
              name: 'Brook',
              image: C056,
              imageM: CM056,
              grade: 2,
              type: ['Undead', 'Swordman', 'Paramecia'],
              text: '[Auto]: When this unit is call from drop zone. Choose a card from your bind zone, put that unit into your hand.',
              power: 1500,
              code: '056'
            },
            {
              name: 'Arlong',
              image: C055,
              imageM: CM055,
              grade: 1,
              type: ['Fishman', 'Fighter'],
              text: '[Auto]: When this unit is placed on battlefield. Search up to one "Fishman" card from your deck, and put into your hand. Shuffle your deck.',
              power: 500,
              code: '055'
            },
            {
              name: 'Gordon',
              image: C054,
              imageM: CM054,
              grade: 1,
              type: ['Human'],
              text: '[Act][1/turn]: Rest this unit. Choose Grade 2 or less your opponents unit, then Rest that unit.',
              power: 0,
              code: '054'
            },
            {
              name: 'Uta',
              image: C053,
              imageM: CM053,
              grade: 2,
              type: ['Human', 'Swordman', 'Paramecia'],
              text: '[Auto]: When this unit attack. you may pay 500 life points. This unit get Power + 500 for each Rest unit on battlefield until end this turn.',
              power: 1500,
              code: '053'
            },
            {
              name: 'Nekomamushi',
              image: C052,
              imageM: CM052,
              grade: 3,
              type: ['Beast', 'Swordman', 'Sulong'],
              text: '[Auto]: When this unit attack. you may pay 500 life points. choose an opponets unit, and destroy that unit. At the end of turn, put this unit into bottom of your deck, call up to one Grade 2 or less "Nekomamushi" in its card name from your deck. Shuffle your deck.',
              power: 2500,
              code: '052'
            },
            {
              name: 'Nekomamushi',
              image: C051,
              imageM: CM051,
              grade: 2,
              type: ['Beast', 'Swordman'],
              text: '[Act][1/Turn]: Put this unit into bottom of your deck, seacrh up to one "Nekomamushi" in its card name and call that unit. Shuffer your deck.',
              power: 1500,
              code: '051'
            },
            {
              name: 'Inuarashi',
              image: C050,
              imageM: CM050,
              grade: 3,
              type: ['Beast', 'Swordman', 'Sulong'],
              text: '[Auto]: When this unit attack. you may pay 500 life points, then this unit get Power + 2000 until end of this turn. At the end of turn, put this unit into bottom of your deck, call up to one Grade 2 or less "Inuarashi" in its card name from your deck. Shuffle your deck.',
              power: 2500,
              code: '050'
            },
            {
              name: 'Inuarashi',
              image: C049,
              imageM: CM049,
              grade: 2,
              type: ['Beast', 'Swordman'],
              text: '[Act][1/Turn]: Put this unit into bottom of your deck, seacrh up to one "Inuarashi" in its card name and call that unit. Shuffer your deck.',
              power: 1500,
              code: '049'
            },
            {
              name: 'Bartolomeo',
              image: C048,
              imageM: CM048,
              grade: 2,
              type: ['Human', 'Fighter', 'Paramecia'],
              text: '[Auto]: When this unit Block an attack unit. This unit get Power + 1000 until end of this turn.',
              power: 1500,
              code: '048'
            },
            {
              name: 'Charlotte Cracker',
              image: C047,
              imageM: CM047,
              grade: 3,
              type: ['Human', 'Swordman', 'Paramecia'],
              text: '[Auto]: When this unit Block an attack unit. This unit get Power + 1500 until end of this turn.',
              power: 2500,
              code: '047'
            },
            {
              name: 'Bartholomew Kuma',
              image: C046,
              imageM: CM046,
              grade: 3,
              type: ['Cyborg', 'Fighter', 'Paramecia'],
              text: '[Act][1/Turn]: Choose up to one your other unit, and Rest that unit. Increase your Life Points equal of Power that unit Rest by this card effect.',
              power: 2500,
              code: '046'
            },
            {
              name: 'Trafalgal D. Water Law',
              image: C045,
              imageM: CM045,
              grade: 3,
              type: ['Human', 'Swordman', 'Paramecia'],
              text: '[Act][1/Turn]: Choose up to one your other unit, and destroy that unit. Inflict damage to each players equal of Power that unit destroyed by this card effect.',
              power: 2500,
              code: '045'
            },
            {
              name: 'Kizaru',
              image: C044,
              imageM: CM044,
              grade: 3,
              type: ['Human', 'Spellcaster', 'Logia'],
              text: '[Auto][1/Turn]: When this unit attack. Stand this unit (this unit can attack again).',
              power: 2500,
              code: '044'
            },
            {
              name: 'Aokiji',
              image: C043,
              imageM: CM043,
              grade: 3,
              type: ['Human', 'Spellcaster', 'Logia'],
              text: '[Act][1/Turn]: Choose up to one opponents unit, and Rest that unit.',
              power: 2500,
              code: '043'
            },
            {
              name: 'Akainu',
              image: C042,
              imageM: CM042,
              grade: 3,
              type: ['Human', 'Spellcaster', 'Logia'],
              text: '[Act][1/Turn]: Choose up to one opponents unit, and destroy that unit.',
              power: 2500,
              code: '042'
            },
            {
              name: 'Aladdin',
              image: C041,
              imageM: CM041,
              grade: 1,
              type: ['Fishman', 'Swordman'],
              text: '[Auto]: When this unit is placed on battlefield. Choose up to one Grade 1 your opponents unit, and put that unit to your opponents hand.',
              power: 500,
              code: '041'
            },
            {
              name: 'Jack',
              image: C040,
              imageM: CM040,
              grade: 2,
              type: ['Fishman', 'Swordman', 'Zoan'],
              text: '[Auto]: When this unit attack. Choose up to one opponents unit, that unit get Power -500 until end of this turn.',
              power: 1500,
              code: '040'
            },
            {
              name: 'Tony Tony Chopper',
              image: C039,
              imageM: CM039,
              grade: 3,
              type: ['Beast', 'Fighter', 'Zoan'],
              text: '[Cont]: Cannot be call from hand.',
              power: 4000,
              code: '039'
            },
            {
              name: 'Tony Tony Chopper',
              image: C038,
              imageM: CM038,
              grade: 2,
              type: ['Beast', 'Fighter', 'Zoan'],
              text: '[Act][1/Turn]: Put this unit into bottom of your deck, seacrh up to one "Tony Tony Chopper" in its card name and call that unit. Shuffer your deck.',
              power: 1500,
              code: '038'
            },
            {
              name: 'Donquixote Doflamingo',
              image: C037,
              imageM: CM037,
              grade: 3,
              type: ['Human', 'Fighter', 'Paramecia'],
              text: '[Act][1/Turn]: Put top card of your deck into drop zone. Your opponent choose a card from his/her hand, and discard that card.',
              power: 2500,
              code: '037'
            },
            {
              name: 'Hody Jones',
              image: C036,
              imageM: CM036,
              grade: 2,
              type: ['Fishman', 'Fighter'],
              text: '[Auto]: When this unit is placed on battlefield. Choose up to one Grade 2 or less your opponents unit, and put that unit to your opponents hand.',
              power: 1500,
              code: '036'
            },
            {
              name: 'Fisher Tiger',
              image: C035,
              imageM: CM035,
              grade: 3,
              type: ['Fishman', 'Fighter'],
              text: '[Cont]: All your "Fishman" unit get Power + 500.',
              power: 2500,
              code: '035'
            },
            {
              name: 'Monkey D. Luffy',
              image: C034,
              imageM: CM034,
              grade: 3,
              type: ['Undead', 'Swordman', 'Paramecia'],
              text: '[Auto]: When this unit attack. This unit get Power + 500 for each "Undead" unit your control until end this turn. At the end this unit attack, destroy this unit.',
              power: 2500,
              code: '034'
            },
            {
              name: 'Gecko Moria',
              image: C033,
              imageM: CM033,
              grade: 3,
              type: ['Undead', 'Spellcaster', 'Paramecia'],
              text: '[Act][1/Turn]: Pay 1000 Life Points, Call up to one card from your drop zone.',
              power: 2000,
              code: '033'
            },
            {
              name: 'Buggy',
              image: C032,
              imageM: CM032,
              grade: 1,
              type: ['Human', 'Fighter', 'Paramecia'],
              text: '[Auto]: When this unit is destroyed, put this card into your hand.',
              power: 500,
              code: '032'
            },
            {
              name: 'Sir Crocodile',
              image: C031,
              imageM: CM031,
              grade: 3,
              type: ['Human', 'Spellcaster', 'Logia'],
              text: '[Cont]: All your opponents unit get Power -500.',
              power: 2500,
              code: '031'
            },
            {
              name: 'Kozuki Momonosuke',
              image: C030,
              imageM: CM030,
              grade: 1,
              type: ['Human', 'Swordman', 'Zoan'],
              text: '[Auto]: When this unit is placed on battlefield. Search up to one "Swordman" card from your deck, and put into your hand. Shuffle your deck.',
              power: 0,
              code: '030'
            },
            {
              name: 'Tama',
              image: C029,
              imageM: CM029,
              grade: 1,
              type: ['Human', 'Paramecia'],
              text: '[Auto]: When this unit is placed on battlefield. Search up to one "Beast" or "Zoan" card from your deck, and put into your hand. Shuffle your deck.',
              power: 0,
              code: '029'
            },
            {
              name: 'Smoker',
              image: C028,
              imageM: CM028,
              grade: 3,
              type: ['Human', 'Swordman', 'Logia'],
              text: '[Act][1/Turn]: Pay 500 Life Points, Choose up to one your opponent unit, that unit cannot block until end of this turn.',
              power: 2500,
              code: '028'
            },
            {
              name: 'Vinsmoke Sora',
              image: C027,
              imageM: CM027,
              grade: 1,
              type: ['Human'],
              text: '[Auto]: When this card is send to the drop zone. Put this unit into bottom of your deck, then put up to two "Vinsmoke" in its card name from your drop zone into your hand.',
              power: 0,
              code: '027'
            },
            {
              name: 'Vinsmoke Judge',
              image: C026,
              imageM: CM026,
              grade: 3,
              type: ['Human', 'Fighter'],
              text: '[Act][1/Turn]: Discard a card with "Vinsmoke" in its card name from your hand. Search your deck, and Call up to one "Vinsmoke" unit in its card name other "Vinsmoke Judge". Shuffle your deck.',
              power: 2500,
              code: '026'
            },
            {
              name: 'Vinsmoke Reiju',
              image: C025,
              imageM: CM025,
              grade: 2,
              type: ['Human', 'Fighter'],
              text: '[Auto]: When this card is send to the drop zone. Increase your Life Points by 2000 points.',
              power: 1500,
              code: '025'
            },
            {
              name: 'Vinsmoke Ichiji',
              image: C024,
              imageM: CM024,
              grade: 2,
              type: ['Human', 'Fighter'],
              text: '[Act][1/Turn]: Discard a card with "Vinsmoke" in its card name from your hand. Choose up to two grade 2 or less your opponents unit, and destroy that unit.',
              power: 1500,
              code: '024'
            },
            {
              name: 'Vinsmoke Niji',
              image: C023,
              imageM: CM023,
              grade: 2,
              type: ['Human', 'Fighter'],
              text: '[Act][1/Turn]: Discard a card with "Vinsmoke" in its card name from your hand. Choose up to one grade 2 or less your opponents unit, and bind that unit.',
              power: 1500,
              code: '023'
            },
            {
              name: 'Vinsmoke Sanji',
              image: C022,
              imageM: CM022,
              grade: 3,
              type: ['Human', 'Fighter'],
              text: '[Act][1/Turn]: Discard a card with "Vinsmoke" in its card name from your hand, and this unit get Power + 2000 until end of this turn.',
              power: 2500,
              code: '022'
            },
            {
              name: 'Vinsmoke Yonji',
              image: C021,
              imageM: CM021,
              grade: 2,
              type: ['Human', 'Fighter'],
              text: '[Auto]: When this unit attack. If you control another "Vinsmoke" unit in its card name, this unit get Power + 1000 until end of this turn.',
              power: 1500,
              code: '021'
            },
            {
              name: 'Nefertari Vivi',
              image: C020,
              imageM: CM020,
              grade: 1,
              type: ['Human', 'Fighter'],
              text: '[Auto]: When this unit is placed on battlefield. Put this unit into bottom of your deck, then call up to one Grade 1 other "Nefertari Vivi" from yuor deck. Shuffle your deck.',
              power: 500,
              code: '020'
            },
            {
              name: 'Monkey D. Luffy',
              image: C019,
              imageM: CM019,
              grade: 3,
              type: ['Human', 'Fighter', 'Paramecia'],
              text: '[Cont]: This unit get Power + 500 for each your another unit on battlefield.',
              power: 2500,
              code: '019'
            },
            {
              name: 'Roronoa Zoro',
              image: C018,
              imageM: CM018,
              grade: 3,
              type: ['Human', 'Swordman'],
              text: '[Act][1/Turn]: Pay 500 Life Points, and this unit get Power + 1000 until end of this turn.',
              power: 2500,
              code: '018'
            },
            {
              name: 'Vinsmoke Sanji',
              image: C017,
              imageM: CM017,
              grade: 3,
              type: ['Human', 'Fighter'],
              text: '[Act][1/Turn]: Discard a card from your hand, and this unit get Power + 1000 until end of this turn.',
              power: 2500,
              code: '017'
            },
            {
              name: 'Nami',
              image: C016,
              imageM: CM016,
              grade: 1,
              type: ['Human', 'Spellcaster'],
              text: '[Auto]: When this unit is placed on battlefield. Choose one your opponents grade 1 unit, and bind that unit.',
              power: 500,
              code: '016'
            },
            {
              name: 'Usopp',
              image: C015,
              imageM: CM015,
              grade: 1,
              type: ['Human', 'Gunner'],
              text: '[Auto]: When this unit is placed on battlefield. Search your deck and call up to one Grade 1 other "Usopp" card to the battlefield.',
              power: 500,
              code: '015'
            },
            {
              name: 'Tony Tony Chopper',
              image: C014,
              imageM: CM014,
              grade: 1,
              type: ['Beast', 'Fighter', 'Zoan'],
              text: '[Auto]: When this unit is placed on battlefield. Increase your Life Points by 2000 points.',
              power: 500,
              code: '014'
            },
            {
              name: 'Nico Robin',
              image: C013,
              imageM: CM013,
              grade: 2,
              type: ['Human', 'Fighter', 'Paramecia'],
              text: '[Auto]: When this unit is placed on battlefield. Draw a card.',
              power: 1500,
              code: '013'
            },
            {
              name: 'Franky',
              image: C012,
              imageM: CM012,
              grade: 2,
              type: ['Cyborg', 'Fighter'],
              text: '[Auto]: When this unit is placed on battlefield. Choose one your opponents unit with grade 2 or less, and destroy that unit.',
              power: 1500,
              code: '012'
            },
            {
              name: 'Brook',
              image: C011,
              imageM: CM011,
              grade: 2,
              type: ['Undead', 'Swordman', 'Paramecia'],
              text: '[Auto]: When this unit is destroyed and send to the drop zone. You may put this card to your bind zone, and call one card with "Brook" in its card name from your drop zone.',
              power: 1500,
              code: '011'
            },
            {
              name: 'Jinbei',
              image: C010,
              imageM: CM010,
              grade: 3,
              type: ['Fishman', 'Fighter'],
              text: '[Auto]: When this unit is placed on battlefield. Choose one your opponents unit, and put that unit to your opponents hand.',
              power: 2500,
              code: '010'
            },
            {
              name: 'Brook',
              image: C009,
              imageM: CM009,
              grade: 2,
              type: ['Undead', 'Swordman', 'Paramecia'],
              text: '',
              power: 2000,
              code: '009'
            },
            {
              name: 'Franky',
              image: C008,
              imageM: CM008,
              grade: 2,
              type: ['Cyborg', 'Gunner'],
              text: '',
              power: 2000,
              code: '008'
            },
            {
              name: 'Nico Robin',
              image: C007,
              imageM: CM007,
              grade: 2,
              type: ['Human', 'Fighter', 'Paramecia'],
              text: '',
              power: 2000,
              code: '007'
            },
            {
              name: 'Tony Tony Chopper',
              image: C006,
              imageM: CM006,
              grade: 1,
              type: ['Beast', 'Fighter', 'Zoan'],
              text: '',
              power: 1000,
              code: '006'
            },
            {
              name: 'Usopp',
              image: C005,
              imageM: CM005,
              grade: 1,
              type: ['Human', 'Gunner'],
              text: '',
              power: 1000,
              code: '005'
            },
            {
              name: 'Nami',
              image: C004,
              imageM: CM004,
              grade: 1,
              type: ['Human', 'Spellcaster'],
              text: '',
              power: 1000,
              code: '004'
            },
            {
              name: 'Vinsmoke Sanji',
              image: C003,
              imageM: CM003,
              grade: 3,
              type: ['Human', 'Fighter'],
              text: '',
              power: 3000,
              code: '003'
            },
            {
              name: 'Roronoa Zoro',
              image: C002,
              imageM: CM002,
              grade: 3,
              type: ['Human', 'Swordman'],
              text: '',
              power: 3000,
              code: '002'
            },
            {
              name: 'Monkey D. Luffy',
              image: C001,
              imageM: CM001,
              grade: 3,
              type: ['Human', 'Fighter', 'Paramecia'],
              text: '',
              power: 3000,
              code: '001'
            }
          ]
        }
      }
    }
  }
}
</script>
