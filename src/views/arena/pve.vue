<template>
  <div class="row h-100vh d-flex align-content-center m-0 p-0 bg-op">
    <ArenaInfo
      :info="info"
      v-on:changePhase="changePhase"
      v-on:onDisplay="onDisplay"
      v-on:card="card"
      :data="data"
      :turn="turn"
      :phases="phases"
      :player="player"
      :opponent="opponent"
    />
    <ArenaBattle
      v-on:onDisplay="onDisplay"
      v-on:onATK="onATK"
      v-on:onDEF="onDEF"
      v-on:HAND="HAND"
      v-on:unit="unit"
      :effect="effect"
      :data="data"
      :info="info"
      :turn="turn"
      :phases="phases"
      :player="player"
      :opponent="opponent"
      v-on:openDeck="openDeck"
      v-on:openBind="openBind"
      v-on:openDrop="openDrop"
      v-on:EFAUTO="EFAUTO"
      v-on:EFCONT="EFCONT"
      v-on:EFACT="EFACT"
    />
    <ArenaDisplay :data="display"/>
  </div>
</template>

<script>
import ArenaInfo from '../../components/arena/info/C-Arena-Info.vue'
import ArenaBattle from '../../components/arena/battle/C-Arena-Battle.vue'
import ArenaDisplay from '../../components/arena/display/C-Arena-Display.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Arena-PvE',
  props: ['data'],
  data () {
    return {
      phases: ['SP', 'DP', 'MP1', 'BP', 'MP2', 'EP'],
      turn: 'Player',
      cTurn: 0,
      effect: {
        player: {
          active: false,
          todo: ''
        },
        opponent: {
          active: false,
          todo: ''
        }
      },
      info: {
        isOpen: false,
        who: '',
        zone: '',
        card: [],
        todo: '',
        uindex: ''
      },
      display: {
        name: null,
        image: null,
        imageM: null,
        grade: null,
        type: {
          race: '',
          job: '',
          special: ''
        },
        text: '',
        power: '',
        code: ''
      },
      player: {
        name: 'Nama Pemain',
        life: 8000,
        phase: 'SP',
        deck: [], // 40 cards
        hand: [], // Max 12 Cards
        drop: [],
        bind: [],
        field: [ // Max 6 Cards
          // {
          //   card: {
          //     name: 'Monkey D. Luffy',
          //     // image: C001,
          //     // imageM: CM001,
          //     imageM: this.data.edit.cards[0].imageM,
          //     grade: 3,
          //     type: {
          //       race: 'Human',
          //       job: 'Fighter',
          //       special: 'Paramecia'
          //     },
          //     text: '[Auto]: When this unit attack or block. This unit get Power + 1000, until end this turn.',
          //     power: 2500,
          //     code: '001'
          //   },
          //   position: 'Rest',
          //   gainAuto: 0,
          //   gaintCont: 0,
          //   otherCont: [{ code: '031', gain: -500 }],
          //   totalPow: 2500,
          //   OPT: false, // One Per Turn
          //   cannotDestroy: false
          // }
        ],
        atk: 0,
        def: 0,
        indexATK: '',
        indexDEF: '',
        isBlock: false
      },
      opponent: {
        name: 'Nama Lawan',
        life: 8000,
        phase: 'SP',
        deck: [],
        hand: [],
        drop: [],
        bind: [],
        field: [],
        atk: 0,
        def: 0,
        indexATK: '',
        indexDEF: '',
        isBlock: false
      }
    }
  },
  components: {
    ArenaInfo,
    ArenaBattle,
    ArenaDisplay
  },
  computed: {
    ...mapGetters({
      deckPlay: 'deckPlay',
      deckOpponent: 'deckOpponent'
    })
  },
  methods: {
    ...mapActions([
      // 'add_numb_a'
    ]),
    parseDP () {
      const parse = JSON.parse(this.deckPlay, (key, value) => {
        if (typeof value === 'string') {
          return value
        }
        return value
      })
      this.player.deck = parse
      const parseOp = JSON.parse(this.deckOpponent, (key, value) => {
        if (typeof value === 'string') {
          return value
        }
        return value
      })
      this.opponent.deck = parseOp // Test Mirror Match
    },
    Toast (icon, title) {
      this.$swal.mixin().fire({
        icon: icon,
        title: title,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      })
    },
    open (data) {
      if (this.info.isOpen === false) {
        this.info = {
          isOpen: true,
          who: data.who,
          zone: data.zone,
          card: data.card,
          todo: '',
          uindex: ''
        }
      } else {
        this.closeInfo()
      }
    },
    openDeck (who) {
      const data = { who: who, zone: 'Deck', card: [], todo: '' }
      if (who === 'Player') { data.card = this.player.deck.deck }
      if (who === 'Opponent') { data.card = this.opponent.deck.deck }
      this.open(data)
    },
    openDrop (who) {
      const data = { who: who, zone: 'Drop', card: [], todo: '' }
      if (who === 'Player') { data.card = this.player.drop }
      if (who === 'Opponent') { data.card = this.opponent.drop }
      this.open(data)
    },
    openBind (who) {
      const data = { who: who, zone: 'Bind', card: [], todo: '' }
      if (who === 'Player') { data.card = this.player.bind }
      if (who === 'Opponent') { data.card = this.opponent.bind }
      this.open(data)
    },
    closeInfo () {
      this.info = { isOpen: false, who: '', zone: '', card: [], todo: '' }
    },
    openInfo (data) {
      this.info = { isOpen: true, who: data.who, zone: data.zone, card: data.card, todo: data.todo, uindex: data.index }
    },
    onDisplay (data) {
      this.display = data
    },
    FIRST () {
      const user = ['Player', 'Opponent']
      const index = Math.floor(Math.random() * user.length)
      alert(`${user[index]} First Turn`)
      this.turn = user[index]
      this.changePhase({ who: user[index], phase: 'SP' })
    },
    gameover (data) {
      if (data.deck.length === 0) {
        this.Toast('error', data.notif)
        this.rematch()
        // this.$router.replace({
        //   name: 'Home'
        // })
      }
    },
    rematch () {
      this.$swal.fire({
        title: 'Rematch Battle ?',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$router.go(0)
          // this.$router.replace({
          //   name: 'Arena'
          // })
        } else {
          this.$router.replace({
            name: 'Home'
          })
        }
      })
    },
    OpponentTurn (data) {
      if (data.who === 'Opponent') {
        console.log('Opponent Turn')
        console.log(data)
        if (data.phase === 'MP1') {
          this.OpponentMP1(data)
        }
      }
    },
    OpponentMP1 (data) {
      console.log(this.opponent)
      data.BF = this.opponent.field
      data.hand = this.opponent.hand
      this.opponentCallG1(data)
      setTimeout(() => this.opponentCallG2(data), 2000)
    },
    opponentCallG1 (data) {
      if (data.BF.length < 6) {
        let nCall = 0
        for (let i = 0; i < data.hand.length; i++) {
          data.unit = this.opponent.hand[i - nCall]
          data.index = [i - nCall]
          if (data.hand[i - nCall].grade === 1) {
            // alert(`Your opponent call ${data.unit.name}`)
            this.handToField(data)
            nCall += 1
          }
        }
      }
    },
    opponentCallG2 (data) {
      console.log('Call Grade 2')
      console.log(data)
      const G1 = [] // On Field
      for (let i = 0; i < data.BF.length; i++) {
        if (data.BF[i].card.grade === 1) {
          G1.push({ unit: data.BF[i], index: i })
        }
      }
      const G2 = [] // On Hand
      for (let i = 0; i < data.hand.length; i++) {
        if (data.hand[i].grade === 2) {
          G2.push({ card: data.hand[i], index: i })
        }
      }
      let nCall = 0
      for (let i = 0; i < G2.length; i++) {
        if (G2.length <= G1.length) {
          // alert(`your opponent tribute ${G1[i - nCall].unit.card.name}`)
          this.fieldToDrop({ who: data.who, index: G1[i - nCall].index, BF: data.BF })
          // alert(`Your opponent call ${G2[i - nCall].card.name}`)
          data.index = G2[i - nCall].index
          this.handToField(data)
          nCall += 1
        }
      }
    },
    changePhase (data) {
      this.handleChangePhase(data)
      this.OpponentTurn(data)
    },
    handleChangePhase (data) {
      if (data.who === 'Player') { this.player.phase = data.phase }
      if (data.who === 'Opponent') { this.opponent.phase = data.phase }
      if (data.phase === 'SP') {
        this.SP(data)
        setTimeout(() => this.changePhase({ who: data.who, phase: 'DP' }), 500)
      }
      if (data.phase === 'DP') {
        this.DP(data)
        setTimeout(() => this.changePhase({ who: data.who, phase: 'MP1' }), 500)
      }
      if (data.phase === 'BP') {
        if (this.cTurn === 0) {
          alert('First Turn Cannot ATK')
          setTimeout(() => this.changePhase({ who: data.who, phase: 'EP' }), 500)
        }
      }
      if (data.phase === 'EP') {
        this.EP(data)
        if (data.who === 'Player') {
          this.turn = 'Opponent'
          setTimeout(() => this.handleChangePhase({ who: 'Opponent', phase: 'SP' }), 500)
        } else {
          this.turn = 'Player'
          setTimeout(() => this.handleChangePhase({ who: 'Player', phase: 'SP' }), 500)
        }
        this.cTurn += 1
      }
    },
    SP (data) { // Standby Phase
      let BF = []
      let BFOP = []
      let isStun = false
      if (data.who === 'Player') {
        BF = this.player.field
        BFOP = this.opponent.field
      }
      if (data.who === 'Opponent') {
        BF = this.opponent.field
        BFOP = this.player.field
      }
      BFOP.map((unit) => {
        if (unit.card.code === '059') { isStun = true } // Boa Hancock
      })
      if (isStun === false) {
        BF.map((unit) => {
          if (unit.position === 'Rest') {
            unit.position = 'Stand'
            this.EFCONT({ who: data.who, event: 'UNIT TO STAND' })
            this.EFCONT({ who: data.who, event: 'UNIT TO REST' })
          }
        })
      }
    },
    DP (data) { // Draw Phase
      this.draw(data)
    },
    EP (data) { // End Phase
      let BF = []
      if (data.who === 'Player') {
        BF = this.player.field
      } else {
        BF = this.opponent.field
      }
      BF.map((unit) => {
        unit.totalPow -= unit.gainAuto
        unit.gainAuto = 0
        unit.OPT = false
        unit.cannotDestroy = false
      })
      this.EFAUTO({ who: data.who, stat: 'EFEP' })
      this.EFAUTO({ who: data.who, stat: 'EFEPCALL' })
      this.EFAUTO({ who: data.who, stat: 'EFEPDROP' })
    },
    onATK (data) {
      if (data.who === 'Player') {
        data.unit = this.player.field[data.index]
        this.player.indexATK = data.index
      } else {
        data.unit = this.opponent.field[data.index]
        this.opponent.indexATK = data.index
      }
      data.unit.position = 'Rest'
      if (data.who === 'Player') { this.player.atk = data.unit.totalPow }
      if (data.who === 'Opponent') { this.opponent.atk = data.unit.totalPow }
      data.unitname = data.unit.card.name
      data.code = data.unit.card.code
      data.stat = 'EFATK'
      this.EFCONT({ who: data.who, event: 'UNIT TO REST' })
      this.EFAUTO(data)
    },
    confirmBlock (data) {
      if (data.who === 'Player') { data.BF = this.opponent.field }
      if (data.who === 'Opponent') { data.BF = this.player.field }
      const units = []
      data.BF.map((unit) => {
        if (unit.position === 'Stand') {
          units.push(unit)
        }
      })
      if (units.length > 0) {
        this.$swal.fire({
          title: `Block ${data.unitname} ?`,
          showCancelButton: true,
          confirmButtonText: 'YES',
          cancelButtonText: 'NO'
        }).then((result) => {
          if (result.isConfirmed) {
            if (data.who === 'Player') { this.opponent.isBlock = true }
            if (data.who === 'Opponent') { this.player.isBlock = true }
            alert('Choose an unit to block')
          } else {
            alert('DAMAGE GAN')
            if (data.who === 'Player') {
              this.DMG({ who: 'Opponent', deal: this.player.atk })
              this.player.atk = 0
            } else {
              this.DMG({ who: 'Player', deal: this.opponent.atk })
              this.opponent.atk = 0
            }
          }
        })
      } else {
        alert('DAMAGE GAN')
        if (data.who === 'Player') {
          this.DMG({ who: 'Opponent', deal: this.player.atk })
          this.player.atk = 0
        } else {
          this.DMG({ who: 'Player', deal: this.opponent.atk })
          this.opponent.atk = 0
        }
      }
    },
    onDEF (data) {
      let unit = {}
      if (data.who === 'Player') {
        unit = this.player.field[data.index]
        data.index = { def: data.index, atk: this.opponent.indexATK }
      }
      if (data.who === 'Opponent') {
        unit = this.opponent.field[data.index]
        data.index = { def: data.index, atk: this.player.indexATK }
      }
      unit.position = 'Rest'
      this.EFCONT({ who: data.who, event: 'UNIT TO REST' })
      this.EFAUTO({ who: data.who, code: unit.card.code, index: data.index, stat: 'EFDEF' })
      if (data.who === 'Player') { this.player.def = unit.totalPow }
      if (data.who === 'Opponent') { this.opponent.def = unit.totalPow }
      this.onResBattle(data)
    },
    onResBattle (data) {
      let ATK = 0
      let DEF = 0
      let OP = ''
      if (data.who === 'Player') {
        ATK = this.opponent.atk
        DEF = this.player.def
        OP = 'Opponent'
      } else {
        ATK = this.player.atk
        DEF = this.opponent.def
        OP = 'Player'
      }
      if (ATK > DEF) {
        this.FIELD({ who: data.who, index: data.index.def, todo: 'FIELD TO DROP' })
      } else if (ATK < DEF) {
        this.FIELD({ who: OP, index: data.index.atk, todo: 'FIELD TO DROP' })
      } else if (ATK === DEF) {
        this.FIELD({ who: data.who, index: data.index.def, todo: 'FIELD TO DROP' })
        this.FIELD({ who: OP, index: data.index.atk, todo: 'FIELD TO DROP' })
      }
      if (data.who === 'Player') {
        this.player.def = 0
        this.opponent.atk = 0
      } else {
        this.opponent.def = 0
        this.player.atk = 0
      }
    },
    DECK (data) {
      if (data.who === 'Player') { data.deck = this.player.deck.deck }
      if (data.who === 'Opponent') { data.deck = this.opponent.deck.deck }
      if (data.todo === 'shuffle') { this.shuffle(data) }
      if (data.todo === 'draw') { this.draw(data) }
      if (data.todo === 'mill') { this.mill(data) }
      if (data.todo === 'search') { this.search(data) }
      if (data.todo === 'ADD TO HAND') { this.addToHand(data) }
      if (data.todo === 'DECK TO FIELD') { this.deckToField(data) }
    },
    HAND (data) {
      if (data.who === 'Player') { data.hand = this.player.hand }
      if (data.who === 'Opponent') { data.hand = this.opponent.hand }
      if (data.todo === 'select') { this.select(data) }
      if (data.todo === 'HAND TO DECK') { this.handToDeck(data) }
      if (data.todo === 'HAND TO FIELD') { this.handToField(data) }
      if (data.todo === 'HAND TO DROP') { this.handToDrop(data) }
    },
    FIELD (data) {
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      if (data.todo === 'choose') { this.choose(data) }
      if (data.todo === 'FIELD TO DROP') { this.fieldToDrop(data) }
      if (data.todo === 'FIELD TO BIND') { this.fieldToBind(data) }
      if (data.todo === 'FIELD TO HAND') { this.fieldToHand(data) }
      if (data.todo === 'FIELD TO DECK') { this.fieldToDeck(data) }
      if (data.todo === 'UNIT TO REST') { this.unitToRest(data) }
      if (data.todo === 'UNIT TO STAND') { this.unitToStand(data) }
      if (data.todo === 'UNIT CANNOT DESTROY') { this.unitCannotDestroy(data) }
      if (data.todo === 'EFOPT') { this.EFOPT(data) }
    },
    DROP (data) {
      if (data.who === 'Player') { data.drop = this.player.drop }
      if (data.who === 'Opponent') { data.drop = this.opponent.drop }
      if (data.todo === 'pick') { this.pick(data) }
      if (data.todo === 'DROP TO HAND') { this.dropToHand(data) }
      if (data.todo === 'DROP TO BIND') { this.dropToBind(data) }
      if (data.todo === 'DROP TO DECK') { this.dropToDeck(data) }
      if (data.todo === 'DROP TO FIELD') { this.dropToField(data) }
    },
    clearEffect (data) {
      const clear = {
        active: false,
        todo: '',
        target: {
          isTarget: false,
          grade: ''
        }
      }
      this.effect.player = { clear }
      this.effect.opponent = { clear }
    },
    unit (data) {
      if (data.who === 'Opponent') {
        if (data.who === this.turn) { // TARGET OPPONENT SELF
          const target = this.effect.opponent.target
          if (target.who === 'SELF') {
            if (data.from === 'HAND') {
              const card = this.opponent.hand[data.index]
              if (card.name.search(target.name) >= 0) {
                this.HAND(data)
                if (data.RES.todo === 'GET AUTO POWER') {
                  this.GAP({ who: data.who, index: data.RES.index, gain: data.RES.gain })
                }
                if (data.RES.todo === 'search') {
                  this.DECK({ who: data.who, todo: data.RES.todo, RESEFF: data.RES.effect.todo, filter: true, filterSearch: data.RES.effect.target.filterName, filterNotName: data.RES.effect.target.filterNotName })
                }
                this.clearEffect(data)
                if (data.RES.todo === 'TARGET OPPONENT UNIT') {
                  alert('Effect actived, choose opponent unit')
                  this.effect.opponent = data.RES.effect
                }
              } else {
                alert('Target tidak sesuai')
              }
            }
            if (data.from === 'FIELD') {
              const unit = this.opponent.field[data.index]
              if (data.todo === 'UNIT CANNOT DESTROY') {
                alert(`${unit.card.name} Cannot be destroy this turn !`)
              }
              if (data.RES.todo === 'DAMAGE TO OPPONENT') {
                this.DMG({ who: 'Player', deal: unit.totalPow })
              }
              this.FIELD(data)
              if (data.RES.todo === 'pick') {
                this.DROP({ who: data.who, todo: data.RES.todo, RESEFF: data.RES.effect.todo })
              }
              this.clearEffect(data)
            }
          }
        } else { // TARGET BY PLAYER
          const BF = this.opponent.field
          const target = this.effect.player.target
          if (target.isTarget) {
            if (target.grade === '2 OR LESS') {
              if (BF[data.index].card.grade <= 2) {
                if (data.from === 'FIELD') { this.FIELD(data) }
                this.clearEffect(data)
              } else {
                alert('Target tidak sesuai')
              }
            }
            if (target.grade === 'EQUAL 1') {
              if (BF[data.index].card.grade === 1) {
                if (data.from === 'FIELD') { this.FIELD(data) }
                this.clearEffect(data)
              } else {
                alert('Target tidak sesuai')
              }
            }
            if (target.grade === 'ALL') {
              if (data.from === 'FIELD') { this.FIELD(data) }
              this.clearEffect(data)
            }
          }
        }
      } else {
        if (data.who === this.turn) { // TARGET PLAYER SELF
          const target = this.effect.player.target
          if (target.who === 'SELF') {
            if (data.from === 'HAND') {
              const card = this.player.hand[data.index]
              if (card.name.search(target.name) >= 0) {
                this.HAND(data)
                if (data.RES.todo === 'GET AUTO POWER') {
                  this.GAP({ who: data.who, index: data.RES.index, gain: data.RES.gain })
                }
                if (data.RES.todo === 'search') {
                  this.DECK({ who: data.who, todo: data.RES.todo, RESEFF: data.RES.effect.todo, filter: true, filterSearch: data.RES.effect.target.filterName, filterNotName: data.RES.effect.target.filterNotName })
                }
                this.clearEffect(data)
                if (data.RES.todo === 'TARGET OPPONENT UNIT') {
                  alert('Effect actived, choose opponent unit')
                  this.effect.player = data.RES.effect
                }
              } else {
                alert('Target tidak sesuai')
              }
            }
            if (data.from === 'FIELD') {
              const unit = this.player.field[data.index]
              if (data.todo === 'UNIT CANNOT DESTROY') {
                alert(`${unit.card.name} Cannot be destroy this turn !`)
              }
              if (data.RES.todo === 'DAMAGE TO OPPONENT') {
                this.DMG({ who: 'Opponent', deal: unit.totalPow })
              }
              this.FIELD(data)
              if (data.RES.todo === 'pick') {
                this.DROP({ who: data.who, todo: data.RES.todo, RESEFF: data.RES.effect.todo })
              }
              this.clearEffect(data)
            }
          }
        } else { // TARGET BY OPPONENT
          const BF = this.player.field
          const target = this.effect.opponent.target
          if (target.isTarget) {
            if (target.grade === '2 OR LESS') {
              if (BF[data.index].card.grade <= 2) {
                if (data.from === 'FIELD') { this.FIELD(data) }
                this.clearEffect(data)
              } else {
                alert('Target tidak sesuai')
              }
            }
            if (target.grade === 'EQUAL 1') {
              if (BF[data.index].card.grade === 1) {
                if (data.from === 'FIELD') { this.FIELD(data) }
                this.clearEffect(data)
              } else {
                alert('Target tidak sesuai')
              }
            }
            if (target.grade === 'ALL') {
              if (data.from === 'FIELD') { this.FIELD(data) }
              this.clearEffect(data)
            }
          }
        }
      }
    },
    shuffle (data) {
      const deck = data.deck
      const shuffle = []
      while (deck.length > 0) {
        const index = Math.floor(Math.random() * deck.length) // RANDOM
        const card = deck[index] // RANDOM CARD
        shuffle.push(card)
        deck.splice(index, 1)
      }
      if (data.who === 'Player') { this.player.deck.deck = shuffle }
      if (data.who === 'Opponent') { this.opponent.deck.deck = shuffle }
    },
    draw (data) {
      let deck = []
      let hand = []
      let notif = ''
      if (data.who === 'Player') {
        deck = this.player.deck.deck
        hand = this.player.hand
        notif = 'You Lose'
      }
      if (data.who === 'Opponent') {
        deck = this.opponent.deck.deck
        hand = this.opponent.hand
        notif = 'You Win'
      }
      if (hand.length < 12) {
        hand.push(deck[0])
        deck.splice(0, 1)
        this.EFCONT({ who: data.who, event: 'DRAW A CARD' })
        this.gameover({ deck: deck, notif: notif })
      } else {
        this.Toast('error', 'Maksimal 12 Kartu Ditangan')
        this.DECK({ who: data.who, todo: 'mill' })
      }
    },
    mill (data) {
      if (data.who === 'Player') {
        data.drop = this.player.drop
        data.deck = this.player.deck.deck
      } else {
        data.drop = this.opponent.drop
        data.deck = this.opponent.deck.deck
      }
      data.drop.push(data.deck[0])
      data.deck.splice(0, 1)
      const index = data.drop.length - 1
      const card = data.drop[index]
      this.EFAUTO({ who: data.who, code: card.code, index: index, stat: 'EFDROP' })
      this.EFCONT({ who: data.who, event: 'SEND TO DROP' })
      this.gameover(data)
    },
    search (data) { // Search Deck
      let cards = []
      if (!data.filter) {
        cards = data.deck
      } else {
        if (data.filterGrade === 'EQUAL 1') {
          data.deck.map((card) => {
            if (card.grade === 1) {
              cards.push(card)
            }
          })
        }
        if (data.filterRaceOrSpecial) {
          data.deck.map((card) => {
            if (card.type.race === data.race || card.type.special === data.special) {
              cards.push(card)
            }
          })
        }
        if (data.filterRace) {
          data.deck.map((card) => {
            if (card.type.race === data.race) {
              cards.push(card)
            }
          })
          if (data.filterNotName) {
            const notCards = []
            cards.map((card) => {
              if (card.name !== data.filterNotName) {
                notCards.push(card)
              }
            })
            cards = notCards
          }
        }
        if (data.filterJob) {
          data.deck.map((card) => {
            if (card.type.job === data.job) {
              cards.push(card)
            }
          })
        }
        if (data.filterName === true) {
          data.deck.map((card) => {
            if (card.name === data.name) {
              cards.push(card)
            }
          })
        }
        if (data.filterSearch) {
          data.deck.map((card) => {
            if (card.name.search(data.filterSearch) >= 0) {
              cards.push(card)
            }
          })
          if (data.filterNotName) {
            const notCards = []
            cards.map((card) => {
              if (card.name !== data.filterNotName) {
                notCards.push(card)
              }
            })
            cards = notCards
          }
        }
      }
      this.info = {
        isOpen: true,
        who: data.who,
        zone: 'DECK',
        card: cards,
        todo: data.RESEFF,
        uindex: data.index
      }
    },
    pick (data) { // Search Deck
      let cards = []
      if (!data.filter) {
        cards = data.drop
      } else {
        if (data.filterGrade === 'EQUAL 1') {
          data.drop.map((card) => {
            if (card.grade === 1) {
              cards.push(card)
            }
          })
        }
        if (data.filterName === true) {
          data.drop.map((card) => {
            if (card.name === data.name) {
              cards.push(card)
            }
          })
        }
      }
      if (cards.length > 0) {
        this.info = {
          isOpen: true,
          who: data.who,
          zone: 'DROP',
          card: cards,
          todo: data.RESEFF,
          uindex: data.index
        }
      }
    },
    choose (data) { // choose an unit
      let cards = []
      if (!data.filter) {
        cards = data.BF
      } else {
        if (data.filterGrade === 'EQUAL 1') {
          data.BF.map((unit) => {
            if (unit.card.grade === 1) {
              cards.push(unit.card)
            }
          })
        }
      }
      if (cards.length > 0) {
        this.info = {
          isOpen: true,
          who: data.who,
          zone: 'FIELD',
          card: cards,
          todo: data.RESEFF,
          uindex: data.index
        }
      }
    },
    select (data) { // Select Card Hand
      let cards = []
      if (!data.filter) {
        cards = data.hand
      }
      this.info = {
        isOpen: true,
        who: data.who,
        zone: 'HAND',
        card: cards,
        todo: data.RESEFF,
        uindex: data.index
      }
    },
    card (data) {
      if (data.from === 'DECK') { this.DECK(data) }
      if (data.from === 'HAND') { this.HAND(data) }
      if (data.from === 'FIELD') { this.FIELD(data) }
      if (data.from === 'DROP') { this.DROP(data) }
    },
    addToHand (data) {
      let cards = []
      let hand = []
      if (data.from === 'DECK') { cards = data.deck }
      if (data.who === 'Player') { hand = this.player.hand }
      if (data.who === 'Opponent') { hand = this.opponent.hand }
      const card = cards[data.index]
      hand.push(card)
      cards.splice(data.index, 1)
      if (data.from === 'DECK') { this.DECK({ who: data.who, todo: 'shuffle' }) }
      this.closeInfo()
    },
    handToDeck (data) {
      const card = data.hand[data.index]
      if (data.who === 'Player') { this.player.deck.deck.push(card) }
      if (data.who === 'Opponent') { this.opponent.deck.deck.push(card) }
      data.hand.splice(data.index, 1)
      this.closeInfo()
    },
    handToField (data) {
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.hand[data.index]
      this.call(data)
      if (data.who === 'Player') { this.player.hand.splice(data.index, 1) }
      if (data.who === 'Opponent') { this.opponent.hand.splice(data.index, 1) }
    },
    handToDrop (data) { // DISCARD
      const card = data.hand[data.index]
      let drop = []
      if (data.who === 'Player') { drop = this.player.drop }
      if (data.who === 'Opponent') { drop = this.opponent.drop }
      data.hand.splice(data.index, 1)
      drop.push(card)
      const index = drop.length - 1
      const unit = drop[index]
      this.EFAUTO({ who: data.who, code: unit.code, index: index, stat: 'EFDROP' })
      this.closeInfo()
    },
    deckToField (data) {
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.deck[data.index]
      this.call(data)
      if (data.who === 'Player') { this.player.deck.deck.splice(data.index, 1) }
      if (data.who === 'Opponent') { this.opponent.deck.deck.splice(data.index, 1) }
      if (data.from === 'DECK') { this.DECK({ who: data.who, todo: 'shuffle' }) }
      this.closeInfo()
    },
    unitToDrop (data) {
      data.drop.push(data.unit)
      if (data.who === 'Player') { this.player.field.splice(data.index, 1) }
      if (data.who === 'Opponent') { this.opponent.field.splice(data.index, 1) }
      this.closeInfo()
      const index = data.drop.length - 1
      const unit = data.drop[index]
      this.EFAUTO({ who: data.who, code: unit.code, index: index, stat: 'EFDROP' })
      this.EFAUTO({ who: data.who, code: unit.code, index: index, stat: 'EFDSBT' })
      this.EFCONT({ who: data.who, event: 'SEND TO DROP' })
      this.EFCONT({ who: data.who, event: 'COUNT UNIT ON FIELD' })
    },
    fieldToDrop (data) {
      console.log('FIELD TO DROP')
      console.log(data)
      let isEdwar = false
      data.BF.map((unit) => {
        if (unit.card.name === 'Edward Newgate') {
          isEdwar = true
        }
      })
      data.unit = data.BF[data.index].card
      if (data.who === 'Player') { data.drop = this.player.drop }
      if (data.who === 'Opponent') { data.drop = this.opponent.drop }
      if (isEdwar) {
        if (data.unit.code === '078') { // Diamond Jozu
          alert('unit cannot be destroy')
        } else {
          if (!data.BF[data.index].cannotDestroy) {
            this.unitToDrop(data)
          } else {
            alert('unit cannot be destroy')
          }
        }
      } else {
        if (!data.BF[data.index].cannotDestroy) {
          this.unitToDrop(data)
        } else {
          alert('unit cannot be destroy')
        }
      }
    },
    fieldToBind (data) {
      data.unit = data.BF[data.index].card
      let bind = []
      if (data.who === 'Player') { bind = this.player.bind }
      if (data.who === 'Opponent') { bind = this.opponent.bind }
      bind.push(data.unit)
      if (data.who === 'Player') { this.player.field.splice(data.index, 1) }
      if (data.who === 'Opponent') { this.opponent.field.splice(data.index, 1) }
      this.closeInfo()
      this.EFCONT({ who: data.who, event: 'COUNT UNIT ON FIELD' })
    },
    fieldToHand (data) {
      data.unit = data.BF[data.index].card
      let hand = []
      if (data.who === 'Player') { hand = this.player.hand }
      if (data.who === 'Opponent') { hand = this.opponent.hand }
      hand.push(data.unit)
      if (data.who === 'Player') { this.player.field.splice(data.index, 1) }
      if (data.who === 'Opponent') { this.opponent.field.splice(data.index, 1) }
      this.closeInfo()
      this.EFCONT({ who: data.who, event: 'COUNT UNIT ON FIELD' })
    },
    fieldToDeck (data) {
      data.unit = data.BF[data.index].card
      let deck = []
      if (data.who === 'Player') { deck = this.player.deck.deck }
      if (data.who === 'Opponent') { deck = this.opponent.deck.deck }
      deck.push(data.unit)
      if (data.who === 'Player') { this.player.field.splice(data.index, 1) }
      if (data.who === 'Opponent') { this.opponent.field.splice(data.index, 1) }
      this.closeInfo()
      this.EFCONT({ who: data.who, event: 'COUNT UNIT ON FIELD' })
    },
    unitToRest (data) {
      data.unit = data.BF[data.index]
      data.unit.position = 'Rest'
      this.EFCONT({ who: data.who, event: 'UNIT TO REST' })
      this.closeInfo()
    },
    unitToStand (data) {
      data.unit = data.BF[data.index]
      data.unit.position = 'Stand'
      this.EFCONT({ who: data.who, event: 'UNIT TO STAND' })
      this.EFCONT({ who: data.who, event: 'UNIT TO REST' })
      this.closeInfo()
    },
    unitCannotDestroy (data) {
      console.log('UNIT CANNOT DESTORY')
      console.log(data)
      data.unit = data.BF[data.index]
      data.unit.cannotDestroy = true
      this.closeInfo()
    },
    dropToHand (data) {
      data.unit = data.drop[data.index]
      let hand = []
      if (data.who === 'Player') { hand = this.player.hand }
      if (data.who === 'Opponent') { hand = this.opponent.hand }
      if (hand.length < 12) {
        hand.push(data.unit)
        if (data.who === 'Player') { this.player.drop.splice(data.index, 1) }
        if (data.who === 'Opponent') { this.opponent.drop.splice(data.index, 1) }
      } else {
        alert('Cards Hand is Full')
      }
      this.closeInfo()
    },
    dropToBind (data) {
      data.unit = data.drop[data.index]
      let bind = []
      if (data.who === 'Player') { bind = this.player.bind }
      if (data.who === 'Opponent') { bind = this.opponent.bind }
      bind.push(data.unit)
      if (data.who === 'Player') { this.player.drop.splice(data.index, 1) }
      if (data.who === 'Opponent') { this.opponent.drop.splice(data.index, 1) }
      this.closeInfo()
    },
    dropToDeck (data) {
      data.unit = data.drop[data.index]
      let deck = []
      if (data.who === 'Player') { deck = this.player.deck.deck }
      if (data.who === 'Opponent') { deck = this.opponent.deck.deck }
      deck.push(data.unit)
      if (data.who === 'Player') { this.player.drop.splice(data.index, 1) }
      if (data.who === 'Opponent') { this.opponent.drop.splice(data.index, 1) }
      this.closeInfo()
    },
    dropToField (data) {
      data.unit = data.drop[data.index]
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      if (data.BF.length < 6) {
        this.call(data)
        const index = data.BF.length - 1
        this.EFAUTO({ who: data.who, code: data.BF[index].card.code, index: index, stat: 'EFCALDR' })
        if (data.who === 'Player') { this.player.drop.splice(data.index, 1) }
        if (data.who === 'Opponent') { this.opponent.drop.splice(data.index, 1) }
      }
      this.closeInfo()
    },
    call (data) {
      if (data.BF.length < 6) {
        data.BF.push({
          card: data.unit,
          position: 'Stand',
          gainAuto: 0,
          gaintCont: 0,
          totalPow: data.unit.power,
          otherCont: [],
          OPT: false, // One Per Turn,
          cannotDestroy: false
        })
        const index = data.BF.length - 1
        const unit = data.BF[index].card
        this.EFAUTO({ who: data.who, code: unit.code, index: index, stat: 'EFCAL' })
        this.EFCONT({ who: data.who, event: 'COUNT UNIT ON FIELD' })
      } else {
        this.Toast('error', 'Field Penuh')
        this.closeInfo()
      }
    },
    callEvo (data) {
      this.$swal.fire({
        title: `Aktifkan Effek ${data.name}?`,
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          data.todo = 'FIELD TO DECK'
          this.FIELD(data)
          this.randomCall(data)
        }
      })
    },
    randomCall (data) {
      const cards = []
      if (data.who === 'Player') { data.deck = this.player.deck.deck }
      if (data.who === 'Opponent') { data.deck = this.opponent.deck.deck }
      for (let i = 0; i < data.deck.length; i++) {
        if (data.deck[i].grade === data.grade && data.deck[i].name === data.name) {
          cards.push({ card: data.deck[i], index: i })
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        const unit = cards[index]
        data.todo = 'DECK TO FIELD'
        data.index = unit.index
        this.DECK(data)
      } else {
        alert('Target tidak ditemukan')
      }
    },
    randomCallBack (data) {
      const cards = []
      let deck = []
      let BF = []
      if (data.who === 'Player') {
        deck = this.player.deck.deck
        BF = this.player.field
      } else {
        deck = this.opponent.deck.deck
        BF = this.opponent.field
      }
      for (let i = 0; i < deck.length; i++) {
        if (deck[i].name === data.name && deck[i].grade <= data.grade) {
          cards.push({ card: deck[i], index: i })
        }
      }
      if (cards.length > 0) {
        const random = Math.floor(Math.random() * cards.length)
        BF[data.index] = {
          card: cards[random].card,
          position: 'Stand',
          gainAuto: 0,
          gaintCont: 0,
          totalPow: cards[random].card.power,
          otherCont: [],
          OPT: false
        }
        deck.splice(cards[random].index, 1)
        const index = BF.length - 1
        const unit = BF[index].card
        this.EFAUTO({ who: 'Player', code: unit.code, index: index, stat: 'EFCAL' })
        this.EFCONT({ who: 'Player', event: 'COUNT UNIT ON FIELD' })
      } else {
        BF.splice(data.index, 1)
      }
    },
    EFOPT (data) {
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        data.unit.OPT = true
      } else {
        alert('Effect One Per Turn')
      }
    },
    COST (data) {
      if (data.COST === 'PAY LIFE POINTS') {
        this.DMG({ who: data.who, deal: data.pay })
      }
      if (data.COST === 'MILL') {
        this.DECK({ who: data.who, todo: 'mill' })
      }
    },
    RESEF (data) {
      if (data.RESEFF === 'GET AUTO POWER') {
        this.GAP(data)
      }
      if (data.RESEFF === 'GET LOTS OF AUTO POWER') {
        for (let i = 0; i < data.units.length; i++) {
          data.index = data.units[i].index
          this.GAP(data)
        }
      }
      if (data.RESEFF === 'UNIT TO REST') {
        this.unitToRest({ who: data.op, BF: data.BFOP, index: data.units[data.IndexOP].index })
      }
      if (data.RESEFF === 'UNIT TO STAND') {
        data.todo = 'UNIT TO STAND'
        this.FIELD(data)
      }
      if (data.RESEFF === 'OTHER UNIT TO STAND') {
        this.FIELD({
          who: data.who,
          index: data.otherIndex,
          todo: 'UNIT TO STAND'
        })
      }
      if (data.RESEFF === 'DESTROY THE WEAK') {
        if (data.who === 'Player') {
          data.BFOP = this.opponent.field
          data.dropOp = this.opponent.drop
        } else {
          data.BFOP = this.player.field
          data.dropOp = this.player.drop
        }
        const units = []
        data.BFOP.map((card) => { // NOT DESTROY UNIT
          if (card.totalPow >= data.unit.totalPow) {
            units.push(card)
          }
        })
        data.BFOP.map((card) => { // DESTROY UNIT
          if (card.totalPow < data.unit.totalPow) {
            data.dropOp.push(card.card)
          }
        })
        if (data.who === 'Player') { this.opponent.field = units }
        if (data.who === 'Opponent') { this.player.field = units }
      }
    },
    DMG (data) {
      if (data.who === 'Player') {
        this.player.life -= data.deal
        if (this.player.life <= 0) {
          alert('You Lose Duel')
          this.rematch()
          // this.$router.replace({
          //   name: 'Home'
          // })
        }
      } else {
        this.opponent.life -= data.deal
        if (this.opponent.life <= 0) {
          alert('You Win Duel')
          this.rematch()
          // this.$router.replace({
          //   name: 'Home'
          // })
        }
      }
    },
    HEAL (data) {
      if (data.who === 'Player') {
        this.player.life += data.heal
      } else {
        this.opponent.life += data.heal
      }
      this.EFCONT({ who: data.who, event: 'GAIN LIFE POINT' })
    },
    GAP (data) { // Gain Auto Power
      let unit = {}
      if (data.who === 'Player') { unit = this.player.field[data.index] }
      if (data.who === 'Opponent') { unit = this.opponent.field[data.index] }
      unit.gainAuto += data.gain
      unit.totalPow = unit.card.power + unit.gaintCont + unit.gainAuto
      if (unit.otherCont.length > 0) {
        unit.otherCont.map((other) => {
          unit.totalPow += other.gain
        })
      }
    },
    GCP (data) { // Gain Cont Power
      let unit = {}
      if (data.who === 'Player') { unit = this.player.field[data.index] }
      if (data.who === 'Opponent') { unit = this.opponent.field[data.index] }
      unit.gaintCont = data.gain
      unit.totalPow = unit.card.power + unit.gaintCont + unit.gainAuto
      if (unit.otherCont.length > 0) {
        unit.otherCont.map((other) => {
          unit.totalPow += other.gain
        })
      }
    },
    powerStack (data) {
      let unit = {}
      if (data.who === 'Player') {
        unit = this.player.field[data.index]
      } else {
        unit = this.opponent.field[data.index]
      }
      console.log('UNIT')
      console.log(unit)
      console.log(data)
      data.gain += unit.gaintCont // (Stuck)
      this.GCP(data)
    },
    ALLUNIT (units, code, gain) {
      units.map((unit) => {
        if (unit.otherCont.length > 0) {
          let isCode = false
          unit.otherCont.map((other) => {
            if (other.code.search(code) >= 0) {
              isCode = true
            }
            if (isCode) {
              this.OTHER(unit, code, gain)
            } else {
              this.GETOP(unit, code, gain)
              this.POWER(unit)
            }
          })
        } else {
          this.GETOP(unit, code, gain)
          this.POWER(unit)
        }
        this.POWER(unit)
      })
    },
    POWER (unit) { // TOTAL POWER
      unit.totalPow = unit.card.power + unit.gaintCont + unit.gainAuto
      unit.otherCont.map((other) => {
        unit.totalPow += other.gain
      })
    },
    OTHER (unit, code, gain) { // INCREASE OR DECREASE OTHER POWER
      unit.otherCont.map((other) => {
        if (other.code === code) {
          other.gain = gain
        }
      })
    },
    GETOP (unit, code, gain) { // GET OTHER POWER
      unit.otherCont.push({ code: code, gain: gain })
    },
    EFCONT (data) { // EFFECT CONT
      if (data.event === 'COUNT UNIT ON FIELD') { this.EFFIELD(data) }
      if (data.event === 'SEND TO DROP') { this.EFSTD(data) }
      if (data.event === 'DRAW A CARD') { this.EFDRW(data) }
      if (data.event === 'GAIN LIFE POINT') { this.EFHEAL(data) }
      if (data.event === 'UNIT TO REST') { this.EFREST(data) }
      if (data.event === 'UNIT TO STAND') { this.EFSTAND(data) }
    },
    EFFIELD (data) {
      let BF = []
      let BFOP = []
      let op = ''
      if (data.who === 'Player') {
        BF = this.player.field
        BFOP = this.opponent.field
        op = 'Opponent'
      } else {
        BF = this.opponent.field
        BFOP = this.player.field
        op = 'Player'
      }
      for (let i = 0; i < BF.length; i++) {
        if (BF[i].card.code === '019') { this.EF019({ who: data.who, index: i }) }
        if (BF[i].card.code === '031') { this.EF031({ who: data.who, index: i }) }
        if (BF[i].card.code === '035') { this.EF035({ who: data.who, index: i }) }
        if (BF[i].card.code === '043') { this.EF043({ who: data.who, index: i }) }
        if (BF[i].card.code === '064') { this.EF064({ who: data.who, index: i }) }
        if (BF[i].card.code === '065') { this.EF065({ who: data.who, index: i }) }
        if (BF[i].card.code === '085') { this.EF085({ who: data.who, index: i }) }
      }
      for (let i = 0; i < BFOP.length; i++) {
        if (BFOP[i].card.code === '019') { this.EF019({ who: op, index: i }) }
        if (BFOP[i].card.code === '031') { this.EF031({ who: op, index: i }) }
        if (BFOP[i].card.code === '035') { this.EF035({ who: op, index: i }) }
        if (BFOP[i].card.code === '043') { this.EF043({ who: op, index: i }) }
        if (BFOP[i].card.code === '064') { this.EF064({ who: op, index: i }) }
        if (BFOP[i].card.code === '085') { this.EF085({ who: op, index: i }) }
      }
    },
    EFSTD (data) { // SEND TO DROP
      let BF = []
      if (data.who === 'Player') {
        data.who = 'Opponent'
        BF = this.opponent.field
      } else {
        data.who = 'Player'
        BF = this.player.field
      }
      for (let i = 0; i < BF.length; i++) {
        if (BF[i].card.code === '012') { this.EF012({ who: data.who, index: i }) }
        if (BF[i].card.code === '042') { this.EF042({ who: data.who, index: i }) }
        if (BF[i].card.code === '062') { this.EF062({ who: data.who, index: i }) }
        if (BF[i].card.code === '069') { this.EF069({ who: data.who, index: i }) }
      }
    },
    EFDRW (data) { // DRAW A CARD
      let BF = []
      if (data.who === 'Player') {
        BF = this.player.field
      } else {
        BF = this.opponent.field
      }
      for (let i = 0; i < BF.length; i++) {
        if (BF[i].card.code === '013') { this.EF013({ who: data.who, index: i }) }
      }
    },
    EFHEAL (data) {
      let BF = []
      if (data.who === 'Player') {
        BF = this.player.field
      } else {
        BF = this.opponent.field
      }
      for (let i = 0; i < BF.length; i++) {
        if (BF[i].card.code === '014') { this.EF014({ who: data.who, index: i }) }
      }
    },
    EFREST (data) { // REST UNIT
      let BF = []
      if (data.who === 'Player') {
        data.who = 'Opponent'
        BF = this.opponent.field
      } else {
        data.who = 'Player'
        BF = this.player.field
      }
      for (let i = 0; i < BF.length; i++) {
        if (BF[i].card.code === '043') { this.EF043({ who: data.who, index: i }) }
      }
    },
    EFSTAND (data) { // STAND UNIT
      let BF = []
      if (data.who === 'Player') {
        BF = this.player.field
      } else {
        BF = this.opponent.field
      }
      for (let i = 0; i < BF.length; i++) {
        if (BF[i].card.code === '044') { this.EF044({ who: data.who, index: i }) }
      }
    },
    EFACT (data) { // EFFECT ACT
      if (data.code === '017') { this.EF017({ who: data.who, index: data.index }) }
      if (data.code === '022') { this.EF022({ who: data.who, index: data.index }) }
      if (data.code === '023') { this.EF023({ who: data.who, index: data.index }) }
      if (data.code === '024') { this.EF024({ who: data.who, index: data.index }) }
      if (data.code === '026') { this.EF026({ who: data.who, index: data.index }) }
      if (data.code === '028') { this.EF028({ who: data.who, index: data.index }) }
      if (data.code === '031') { this.EF031ACT({ who: data.who, index: data.index }) }
      if (data.code === '033') { this.EF033({ who: data.who, index: data.index }) }
      if (data.code === '037') { this.EF037({ who: data.who, index: data.index }) }
      if (data.code === '038') { this.EF038({ who: data.who, index: data.index }) }
      if (data.code === '040') { this.EF040({ who: data.who, index: data.index }) }
      if (data.code === '042') { this.EF042ACT({ who: data.who, index: data.index }) }
      if (data.code === '043') { this.EF043ACT({ who: data.who, index: data.index }) }
      if (data.code === '045') { this.EF045({ who: data.who, index: data.index }) }
      if (data.code === '046') { this.EF046({ who: data.who, index: data.index }) }
      if (data.code === '049') { this.EF049({ who: data.who, index: data.index }) }
      if (data.code === '051') { this.EF051({ who: data.who, index: data.index }) }
      if (data.code === '052') { this.EF052ACT({ who: data.who, index: data.index }) }
      if (data.code === '054') { this.EF054({ who: data.who, index: data.index }) }
      if (data.code === '072') { this.EF072({ who: data.who, index: data.index }) }
      if (data.code === '073') { this.EF073({ who: data.who, index: data.index }) }
      if (data.code === '074') { this.EF074({ who: data.who, index: data.index }) }
      if (data.code === '075') { this.EF075({ who: data.who, index: data.index }) }
      if (data.code === '080') { this.EF080({ who: data.who, index: data.index }) }
      if (data.code === '081') { this.EF081({ who: data.who, index: data.index }) }
      if (data.code === '083') { this.EF083({ who: data.who, index: data.index }) }
      if (data.code === '084') { this.EF084({ who: data.who, index: data.index }) }
      if (data.code === '086') { this.EF086({ who: data.who, index: data.index }) }
    },
    EFAUTO (data) { // EFFECT AUTO
      if (data.stat === 'EFATK') { this.EFATK(data) }
      if (data.stat === 'EFDEF') { this.EFDEF(data) }
      if (data.stat === 'EFCAL') { this.EFCAL(data) }
      if (data.stat === 'EFDROP') { this.EFDROP(data) }
      if (data.stat === 'EFDSBT') { this.EFDSBT(data) }
      if (data.stat === 'EFCALDR') { this.EFCALDR(data) } // CALL FROM DROP
      if (data.stat === 'EFEPCALL') { this.EFEPCALL(data) }
      if (data.stat === 'EFEP') { this.EFEP(data) }
      if (data.stat === 'EFEPDROP') { this.EFEPDROP(data) }
    },
    EFATK (data) {
      this.EFATKstack(data)
      if (data.code === '001') {
        this.EF001(data)
      } else if (data.code === '002') {
        this.EF002(data)
      } else if (data.code === '021') {
        this.EF021(data)
      } else if (data.code === '028') {
        this.EF028(data)
      } else if (data.code === '044') {
        this.EF044AUTO(data)
      } else if (data.code === '050') {
        this.EF050AUTO(data)
      } else if (data.code === '053') {
        this.EF053(data)
      } else if (data.code === '060') {
        this.EF060(data)
      } else if (data.code === '061') {
        this.EF061(data)
      } else if (data.code === '067') {
        this.EF067(data)
      } else if (data.code === '070') {
        this.EF070(data)
      } else if (data.code === '071') {
        this.EF071(data)
      } else if (data.code === '076') {
        this.EF076(data)
      } else if (data.code === '079') {
        this.EF079(data)
      } else if (data.code === '082') {
        this.EF082(data)
      } else {
        this.confirmBlock(data)
      }
    },
    EFATKstack (data) {
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      for (let i = 0; i < data.BF.length; i++) {
        if (data.BF[i].card.code === '068') {
          if (data.unit.card.type.job === 'Fighter') {
            this.EF068({ who: data.who, index: i, unit: data.BF[i] })
          }
        }
      }
    },
    EFDEF (data) {
      if (data.code === '001') { this.EF001({ who: data.who, index: data.index.def }) }
      if (data.code === '003') { this.EF003({ who: data.who, index: data.index.def }) }
      if (data.code === '018') { this.EF018({ who: data.who, index: data.index.def }) }
      if (data.code === '047') { this.EF047({ who: data.who, index: data.index.def }) }
      if (data.code === '048') { this.EF048({ who: data.who, index: data.index.def }) }
      if (data.code === '069') { this.EF069AUTO({ who: data.who, index: data.index.def }) }
    },
    EFCAL (data) {
      if (data.code === '004') { this.EF004({ who: data.who, index: data.index }) }
      if (data.code === '005') { this.EF005({ who: data.who, index: data.index }) }
      if (data.code === '006') { this.EF006({ who: data.who, index: data.index }) }
      if (data.code === '007') { this.EF007({ who: data.who, index: data.index }) }
      if (data.code === '008') { this.EF008({ who: data.who, index: data.index }) }
      if (data.code === '010') { this.EF010({ who: data.who, index: data.index }) }
      if (data.code === '015') { this.EF015({ who: data.who, index: data.index }) }
      if (data.code === '016') { this.EF016({ who: data.who, index: data.index }) }
      if (data.code === '020') { this.EF020({ who: data.who, index: data.index }) }
      if (data.code === '029') { this.EF029({ who: data.who, index: data.index }) }
      if (data.code === '030') { this.EF030({ who: data.who, index: data.index }) }
      if (data.code === '041') { this.EF041({ who: data.who, index: data.index }) }
      if (data.code === '055') { this.EF055({ who: data.who, index: data.index }) }
    },
    EFDROP (data) { // SEND TO DROP
      if (data.code === '009') { this.EF009({ who: data.who, index: data.index }) }
      if (data.code === '011') { this.EF011({ who: data.who, index: data.index }) }
      if (data.code === '025') { this.EF025({ who: data.who, index: data.index }) }
      if (data.code === '027') { this.EF027({ who: data.who, index: data.index }) }
      if (data.code === '036') { this.EF036({ who: data.who, index: data.index }) }
      if (data.code === '056') { this.EF056({ who: data.who, index: data.index }) }
      if (data.code === '057') { this.EF057({ who: data.who, index: data.index }) }
      if (data.code === '077') { this.EF077({ who: data.who, index: data.index }) }
    },
    EFDSBT (data) { // DESTROY BY BATTLE
      if (data.code === '032') { this.EF032({ who: data.who, index: data.index }) }
    },
    EFCALDR (data) {
      if (data.code === '034') { this.EF034({ who: data.who, index: data.index }) }
    },
    EFEPCALL (data) {
      let BF = []
      let deck = []
      if (data.who === 'Player') {
        BF = this.player.field
        deck = this.player.deck.deck
      } else {
        BF = this.opponent.field
        deck = this.opponent.deck.deck
      }
      for (let i = 0; i < BF.length; i++) {
        if (BF[i].card.code === '039') { deck.push(BF[i].card) }
        if (BF[i].card.code === '050') { deck.push(BF[i].card) }
        if (BF[i].card.code === '052') { deck.push(BF[i].card) }
      }
      for (let i = 0; i < BF.length; i++) {
        if (BF[i].card.code === '039') { this.EF039({ who: data.who, index: i }) }
        if (BF[i].card.code === '050') { this.EF050({ who: data.who, index: i }) }
        if (BF[i].card.code === '052') { this.EF052({ who: data.who, index: i }) }
      }
    },
    EFEP (data) {
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      for (let i = 0; i < data.BF.length; i++) {
        if (data.BF[i].card.code === '058') { this.EF058({ who: data.who, index: i }) }
        if (data.BF[i].card.code === '070') { this.EF070EP({ who: data.who, index: i }) }
      }
    },
    EFEPDROP (data) { // EP FROM DROP
      let drop = []
      if (data.who === 'Player') {
        drop = this.player.drop
      } else {
        drop = this.opponent.drop
      }
      for (let i = 0; i < drop.length; i++) {
        if (drop[i].code === '066') { this.EF066({ who: data.who, index: i }) }
      }
    },
    optionalEFATK (data) {
      this.$swal.fire({
        title: `Aktifkan Effek ${data.unitname}?`,
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          this.COST(data)
          this.RESEF(data)
          if (data.who === 'Player') { this.player.atk = data.unit.totalPow }
          if (data.who === 'Opponent') { this.opponent.atk = data.unit.totalPow }
          this.confirmBlock(data)
        } else {
          this.confirmBlock(data)
        }
      })
    },
    // UNIT EFFECT CODE
    EF001 (data) { // Monkey D. Luffy
      data.gain = 1000
      this.GAP(data)
      if (data.who === 'Player') {
        if (this.player.phase === 'BP') {
          this.player.atk = data.unit.totalPow
        }
      }
      if (data.who === 'Opponent') {
        if (this.opponent.phase === 'BP') {
          this.opponent.atk = data.unit.totalPow
        }
      }
      if (data.stat === 'EFATK') { this.confirmBlock(data) }
    },
    EF002 (data) { // Roronoa Zoro
      data.gain = 1000
      this.GAP(data)
      data.COST = 'PAY LIFE POINTS'
      data.pay = 500
      data.RESEFF = 'GET AUTO POWER'
      this.optionalEFATK(data)
    },
    EF003 (data) { // Vinsmoke Sanji
      data.gain = 2000
      this.GAP(data)
    },
    EF004 (data) { // Nami
      this.DECK({ who: data.who, todo: 'draw' })
    },
    EF005 (data) { // Usopp
      this.$swal.fire({
        title: 'Aktifkan Effek Usopp?',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          data.todo = 'search'
          data.filter = true
          data.filterGrade = 'EQUAL 1'
          data.RESEFF = 'ADD TO HAND'
          this.DECK(data)
        }
      })
    },
    EF006 (data) { // Chopper
      this.HEAL({ who: data.who, heal: 2000 })
    },
    EF007 (data) { // Nico Robin
      for (let i = 0; i < 2; i++) {
        this.DECK({ who: data.who, todo: 'draw' })
      }
      const cards = []
      if (data.who === 'Player') { data.hand = this.player.hand }
      if (data.who === 'Opponent') { data.hand = this.opponent.hand }
      for (let i = 0; i < data.hand.length; i++) {
        cards.push({ card: data.hand[i], index: i })
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        const unit = cards[index]
        data.todo = 'HAND TO DECK'
        data.index = unit.index
        this.HAND(data)
      } else {
        alert('Target tidak ditemukan')
      }
    },
    EF008 (data) { // Franky
      alert('Franky effect, choose opponent unit')
      const effect = {
        active: true,
        todo: 'FIELD TO DROP',
        target: {
          who: 'OTHER',
          isTarget: true,
          grade: 'EQUAL 1'
        }
      }
      if (data.who === 'Player') {
        this.effect.player = effect
      } else {
        this.effect.opponent = effect
      }
    },
    EF009 (data) { // Brook
      const cards = []
      if (data.who === 'Player') { data.deck = this.player.deck.deck }
      if (data.who === 'Opponent') { data.deck = this.opponent.deck.deck }
      for (let i = 0; i < data.deck.length; i++) {
        if (data.deck[i].name === 'Brook') {
          cards.push({ card: data.deck[i], index: i })
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        const unit = cards[index]
        data.todo = 'DECK TO FIELD'
        data.index = unit.index
        this.DECK(data)
      } else {
        alert('Target tidak ditemukan')
      }
    },
    EF010 (data) { // Jinbei
      alert('Jinbei effect, choose opponent unit')
      const effect = {
        active: true,
        todo: 'FIELD TO HAND',
        target: {
          who: 'OTHER',
          isTarget: true,
          grade: '2 OR LESS'
        }
      }
      if (data.who === 'Player') {
        this.effect.player = effect
      } else {
        this.effect.opponent = effect
      }
    },
    EF011 (data) { // Brook
      this.DROP({ who: data.who, index: data.index, todo: 'DROP TO BIND' })
      const cards = []
      if (data.who === 'Player') { data.drop = this.player.drop }
      if (data.who === 'Opponent') { data.drop = this.opponent.drop }
      for (let i = 0; i < data.drop.length; i++) {
        if (data.drop[i].name === 'Brook') {
          cards.push({ card: data.drop[i], index: i })
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        const unit = cards[index]
        data.todo = 'DROP TO FIELD'
        data.index = unit.index
        this.DROP(data)
      } else {
        alert('Target tidak ditemukan')
      }
    },
    EF012 (data) { // Franky
      data.gain = 500
      this.powerStack(data)
    },
    EF013 (data) { // Nico Robin
      data.gain = 500
      this.powerStack(data)
    },
    EF014 (data) { // Chopper
      if (data.who === 'Player') {
        this.player.life += 2000
      } else {
        this.opponent.life += 2000
      }
    },
    EF015 (data) { // Usopp
      const cards = []
      if (data.who === 'Player') { data.deck = this.player.deck.deck }
      if (data.who === 'Opponent') { data.deck = this.opponent.deck.deck }
      for (let i = 0; i < data.deck.length; i++) {
        if (data.deck[i].grade === 1 && data.deck[i].name !== 'Usopp') {
          cards.push({ card: data.deck[i], index: i })
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        const unit = cards[index]
        data.todo = 'DECK TO FIELD'
        data.index = unit.index
        this.DECK(data)
      } else {
        alert('Target tidak ditemukan')
      }
    },
    EF016 (data) { // Nami
      alert('Nami effect, choose opponent unit')
      const effect = {
        active: true,
        todo: 'FIELD TO BIND',
        target: {
          who: 'OTHER',
          isTarget: true,
          grade: 'EQUAL 1'
        }
      }
      if (data.who === 'Player') {
        this.effect.player = effect
      } else {
        this.effect.opponent = effect
      }
    },
    EF017 (data) { // Vinsmoke Sanji
      alert('Sanji effect, discard a card')
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        const effect = {
          active: true,
          todo: 'HAND TO DROP',
          target: {
            who: 'SELF',
            isTarget: true,
            grade: '',
            name: ''
          },
          RES: {
            todo: 'GET AUTO POWER',
            gain: 2000,
            index: data.index
          }
        }
        if (data.who === 'Player') {
          this.effect.player = effect
        } else {
          this.effect.opponent = effect
        }
      }
      this.EFOPT(data)
    },
    EF018 (data) { // Roronoa Zoro
      data.gain = 2000
      this.GAP(data)
      let life = ''
      if (data.who === 'Player') {
        life = this.player.life
      } else {
        life = this.opponent.life
      }
      if (life > 500) {
        this.DMG({ who: data.who, deal: 500 })
        data.gain = 1000
        this.GAP(data)
      }
    },
    EF019 (data) { // Monkey D. Luffy
      let BF = []
      let count = 0
      if (data.who === 'Player') {
        BF = this.player.field
      } else {
        BF = this.opponent.field
      }
      BF.map((unit) => {
        if (unit.card.grade < 3) {
          count += 1
        }
      })
      data.gain = 500 * count
      this.GCP(data)
    },
    EF020 (data) { // Vivi
      this.$swal.fire({
        title: 'Aktifkan Effek Nefertari Vivi?',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          data.todo = 'FIELD TO DECK'
          this.FIELD(data)
          const cards = []
          if (data.who === 'Player') { data.deck = this.player.deck.deck }
          if (data.who === 'Opponent') { data.deck = this.opponent.deck.deck }
          for (let i = 0; i < data.deck.length; i++) {
            if (data.deck[i].grade === 1 && data.deck[i].name !== 'Nefertari Vivi') {
              cards.push({ card: data.deck[i], index: i })
            }
          }
          if (cards.length > 0) {
            const index = Math.floor(Math.random() * cards.length)
            const unit = cards[index]
            data.todo = 'DECK TO FIELD'
            data.index = unit.index
            this.DECK(data)
          } else {
            alert('Target tidak ditemukan')
          }
        }
      })
    },
    EF021 (data) { // Vinsmoke Yonji
      data.gain = 0
      let BF = []
      if (data.who === 'Player') {
        BF = this.player.field
      } else {
        BF = this.opponent.field
      }
      let vinsmoke = 0
      BF.map((unit) => {
        if (unit.card.name.search('Vinsmoke') >= 0) {
          vinsmoke += 1
        }
      })
      if (vinsmoke > 1) {
        data.gain = 1500
      }
      data.COST = ''
      data.RESEFF = 'GET AUTO POWER'
      this.optionalEFATK(data)
    },
    EF022 (data) { // Vinsmoke Sanji
      alert('Sanji effect, discard a card')
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        const effect = {
          active: true,
          todo: 'HAND TO DROP',
          target: {
            who: 'SELF',
            isTarget: true,
            grade: '',
            name: 'Vinsmoke'
          },
          RES: {
            todo: 'GET AUTO POWER',
            gain: 3000,
            index: data.index
          }
        }
        if (data.who === 'Player') {
          this.effect.player = effect
        } else {
          this.effect.opponent = effect
        }
      }
      this.EFOPT(data)
    },
    EF023 (data) { // Vinsmoke Niji
      alert('Niji effect, discard a card')
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        const effect = {
          active: true,
          todo: 'HAND TO DROP',
          target: {
            who: 'SELF',
            isTarget: true,
            grade: '',
            name: 'Vinsmoke'
          },
          RES: {
            todo: 'TARGET OPPONENT UNIT',
            effect: {
              active: true,
              todo: 'FIELD TO BIND',
              target: {
                who: 'OTHER',
                isTarget: true,
                grade: 'EQUAL 1'
              }
            }
          }
        }
        if (data.who === 'Player') {
          this.effect.player = effect
        } else {
          this.effect.opponent = effect
        }
      }
      this.EFOPT(data)
    },
    EF024 (data) { // Vinsmoke Ichiji
      alert('Ichiji effect, discard a card')
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        const effect = {
          active: true,
          todo: 'HAND TO DROP',
          target: {
            who: 'SELF',
            isTarget: true,
            grade: '',
            name: 'Vinsmoke'
          },
          RES: {
            todo: 'TARGET OPPONENT UNIT',
            effect: {
              active: true,
              todo: 'FIELD TO DROP',
              target: {
                who: 'OTHER',
                isTarget: true,
                grade: 'EQUAL 1'
              }
            }
          }
        }
        if (data.who === 'Player') {
          this.effect.player = effect
        } else {
          this.effect.opponent = effect
        }
      }
      this.EFOPT(data)
    },
    EF025 (data) { // Vinsmoke Reiju
      let BF = []
      if (data.who === 'Player') { BF = this.player.field }
      if (data.who === 'Opponent') { BF = this.opponent.field }
      this.DROP({ who: data.who, index: data.index, todo: 'DROP TO DECK' })
      for (let i = 0; i < BF.length; i++) {
        if (BF[i].card.name.search('Vinsmoke') >= 0) {
          this.GAP({ who: data.who, index: i, gain: 1000 })
        }
      }
    },
    EF026 (data) { // Vinsmoke Judge
      alert('Judge effect, discard a card')
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        const effect = {
          active: true,
          todo: 'HAND TO DROP',
          target: {
            who: 'SELF',
            isTarget: true,
            grade: '',
            name: 'Vinsmoke'
          },
          RES: {
            todo: 'search',
            effect: {
              active: true,
              todo: 'DECK TO FIELD',
              target: {
                who: 'SELF',
                isTarget: true,
                filterName: 'Vinsmoke',
                filterNotName: 'Vinsmoke Judge'
              }
            }
          }
        }
        if (data.who === 'Player') {
          this.effect.player = effect
        } else {
          this.effect.opponent = effect
        }
      }
      this.EFOPT(data)
    },
    EF027 (data) { // Vinsmoke Sora
      this.DROP({ who: data.who, index: data.index, todo: 'DROP TO DECK' })
      for (let i = 0; i < 2; i++) {
        const cards = []
        if (data.who === 'Player') { data.drop = this.player.drop }
        if (data.who === 'Opponent') { data.drop = this.opponent.drop }
        for (let i = 0; i < data.drop.length; i++) {
          if (data.drop[i].name.search('Vinsmoke') >= 0) {
            cards.push({ card: data.drop[i], index: i })
          }
        }
        if (cards.length > 0) {
          const index = Math.floor(Math.random() * cards.length)
          const unit = cards[index]
          data.todo = 'DROP TO HAND'
          data.index = unit.index
          this.DROP(data)
        } else {
          alert('Target tidak ditemukan')
        }
      }
    },
    EF028 (data) { // Smoker
      let phase = ''
      data.pay = 500
      data.COST = 'PAY LIFE POINTS'
      data.RESEFF = 'UNIT TO REST'
      if (data.who === 'Player') { phase = this.player.phase }
      if (data.who === 'Opponent') { phase = this.opponent.phase }
      if (phase === 'MP1' || phase === 'MP2') { // ACT OPT
        if (data.who === 'Player') { data.BF = this.player.field }
        if (data.who === 'Opponent') { data.BF = this.opponent.field }
        data.unit = data.BF[data.index]
        if (data.unit.OPT === false) {
          alert('Smoker effect, Choose opponent unit')
          this.COST(data)
          const effect = {
            active: true,
            todo: 'UNIT TO REST',
            target: {
              who: 'OTHER',
              isTarget: true,
              grade: '2 OR LESS'
            }
          }
          if (data.who === 'Player') {
            this.effect.player = effect
          } else {
            this.effect.opponent = effect
          }
        }
        this.EFOPT(data)
      }
      if (phase === 'BP') { // AUTO ATK
        data.units = []
        if (data.who === 'Player') {
          data.op = 'Opponent'
          data.BFOP = this.opponent.field
        }
        if (data.who === 'Opponent') {
          data.op = 'Player'
          data.BFOP = this.player.field
        }
        for (let i = 0; i < data.BFOP.length; i++) {
          if (data.BFOP[i].position === 'Stand' && data.BFOP[i].card.grade <= 2) {
            data.units.push({ unit: data.BFOP[i], index: i })
          }
        }
        if (data.units.length > 0) {
          data.IndexOP = Math.floor(Math.random() * data.units.length)
        }
        this.optionalEFATK(data)
      }
    },
    EF029 (data) { // Tama
      this.$swal.fire({
        title: 'Aktifkan Effek Tama?',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          data.todo = 'search'
          data.filter = true
          data.filterRaceOrSpecial = true
          data.race = 'Beast'
          data.special = 'Zoan'
          data.RESEFF = 'ADD TO HAND'
          this.DECK(data)
        }
      })
    },
    EF030 (data) { // Kozuki Momonosuke
      this.$swal.fire({
        title: 'Aktifkan Effek Kozuki Momonosuke?',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          data.todo = 'search'
          data.filter = true
          data.filterJob = true
          data.job = 'Swordman'
          data.RESEFF = 'ADD TO HAND'
          this.DECK(data)
        }
      })
    },
    EF031ACT (data) { // Sir Crocodile EFFECT ACTIVE
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        alert('Sir Crocodile effect')
        this.DECK({ who: data.who, todo: 'mill' })
        data.gain = 1000
        this.GAP(data)
      }
      this.EFOPT(data)
    },
    EF031 (data) { // Sir Crocodile EFFECT CONTINUE
      let unit = {}
      let copy = 0
      let BF = []
      let BFOP = []
      let count = 0
      if (data.who === 'Player') {
        BF = this.player.field
        BFOP = this.opponent.field
        unit = this.player.field[data.index]
      } else {
        BF = this.opponent.field
        BFOP = this.player.field
        unit = this.opponent.field[data.index]
      }
      BF.map((card) => {
        if (card.card.code === unit.card.code) {
          copy += 1
        }
      })
      BF.map((card) => {
        if (card.card.grade < 3) {
          count += copy
        }
      })
      this.ALLUNIT(BFOP, '031', (-500 * count))
    },
    EF032 (data) { // Buggy
      data.todo = 'DROP TO HAND'
      this.DROP(data)
    },
    EF033 (data) { // Gecko Moria
      alert('Gecko Moria effect, send unit to drop zone')
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        data.COST = 'PAY LIFE POINTS'
        data.pay = 1000
        this.COST(data)
        const effect = {
          active: true,
          todo: 'FIELD TO DROP',
          target: {
            who: 'SELF',
            isTarget: true,
            isField: true,
            grade: '',
            name: ''
          },
          RES: {
            todo: 'pick',
            effect: {
              active: true,
              todo: 'DROP TO FIELD',
              target: {
                who: 'SELF',
                isTarget: true
              }
            }
          }
        }
        if (data.who === 'Player') {
          this.effect.player = effect
        } else {
          this.effect.opponent = effect
        }
      }
      this.EFOPT(data)
    },
    EF034 (data) { // Monkey D. Luffy
      let drop = []
      if (data.who === 'Player') {
        drop = this.player.drop
      } else {
        drop = this.opponent.drop
      }
      data.COST = 'PAY LIFE POINTS'
      data.pay = 500
      this.COST(data)
      data.gain = (500 * drop.length)
      this.GAP(data)
    },
    EF035 (data) { // Fisher Tiger
      let unit = {}
      let copy = 0
      let BF = []
      const BFFISH = []
      if (data.who === 'Player') {
        BF = this.player.field
        unit = this.player.field[data.index]
      } else {
        BF = this.opponent.field
        unit = this.opponent.field[data.index]
      }
      BF.map((card) => {
        if (card.card.code === unit.card.code) {
          copy += 1
        }
      })
      BF.map((card) => {
        if (card.card.type.race === 'Fishman') {
          BFFISH.push(card)
        }
      })
      this.ALLUNIT(BFFISH, '035', (500 * copy))
    },
    EF036 (data) { // Hody Jones
      data.todo = 'DROP TO HAND'
      this.DROP(data)
    },
    EF037 (data) { // Donquixote Doflamingo
      alert('Donquixote Doflamingo effect, discard opponent hand card')
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        if (data.who === 'Player') {
          data.op = 'Opponent'
          data.hand = this.opponent.hand
        } else {
          data.op = 'Player'
          data.hand = this.player.hand
        }
        if (data.hand.length > 0) {
          const index = Math.floor(Math.random() * data.hand.length)
          this.HAND({ who: data.op, index: index, todo: 'HAND TO DROP' })
          data.gain = 1000
          this.GAP(data)
        }
      }
      this.EFOPT(data)
    },
    EF038 (data) { // Chopper
      data.name = 'Tony Tony Chopper'
      data.grade = 3
      this.callEvo(data)
    },
    EF039 (data) { // Chopper
      data.grade = 2
      data.name = 'Tony Tony Chopper'
      this.randomCallBack(data)
    },
    EF040 (data) { // Jack
      data.name = 'Jack'
      data.grade = 3
      this.callEvo(data)
    },
    EF041 (data) { // Aladdin
      alert('Aladdin effect, choose opponent unit')
      const effect = {
        active: true,
        todo: 'FIELD TO HAND',
        target: {
          who: 'OTHER',
          isTarget: true,
          grade: 'EQUAL 1'
        }
      }
      if (data.who === 'Player') {
        this.effect.player = effect
      } else {
        this.effect.opponent = effect
      }
    },
    EF042 (data) { // Akainu Effect Cont
      data.gain = 500
      this.powerStack(data)
    },
    EF042ACT (data) { // Akainu
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        alert('Akainu effect, choose opponent unit')
        const effect = {
          active: true,
          todo: 'FIELD TO DROP',
          target: {
            who: 'OTHER',
            isTarget: true,
            grade: 'ALL'
          }
        }
        if (data.who === 'Player') {
          this.effect.player = effect
        } else {
          this.effect.opponent = effect
        }
      }
      this.EFOPT(data)
    },
    EF043 (data) { // Aokiji Effect Cont
      let BFOP = []
      let count = 0
      if (data.who === 'Player') {
        BFOP = this.opponent.field
      } else {
        BFOP = this.player.field
      }
      BFOP.map((unit) => {
        if (unit.position === 'Rest') {
          count += 1
        }
      })
      data.gain = (500 * count)
      this.GCP(data)
    },
    EF043ACT (data) { // Aokiji Effect Act
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        alert('Aokiji effect, choose opponent unit')
        const effect = {
          active: true,
          todo: 'UNIT TO REST',
          target: {
            who: 'OTHER',
            isTarget: true,
            grade: 'ALL'
          }
        }
        if (data.who === 'Player') {
          this.effect.player = effect
        } else {
          this.effect.opponent = effect
        }
      }
      this.EFOPT(data)
    },
    EF044 (data) { // Kizaru Effect Cont
      data.gain = 500
      this.powerStack(data)
    },
    EF044AUTO (data) { // Kizaru Effect Auto
      data.COST = ''
      if (data.unit.OPT === false) {
        data.RESEFF = 'UNIT TO STAND'
        this.optionalEFATK(data)
      } else {
        data.RESEFF = ''
        this.optionalEFATK(data)
      }
      this.EFOPT(data)
    },
    EF045 (data) { // Trafalgal D. Water Law
      alert('Trafalgal D. Water Law effect, send unit to drop zone')
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        const effect = {
          active: true,
          todo: 'FIELD TO DROP',
          target: {
            who: 'SELF',
            isTarget: true,
            isField: true,
            grade: '',
            name: ''
          },
          RES: {
            todo: 'DAMAGE TO OPPONENT'
          }
        }
        if (data.who === 'Player') {
          this.effect.player = effect
        } else {
          this.effect.opponent = effect
        }
      }
      this.EFOPT(data)
    },
    EF046 (data) { // Bartholomew Kuma
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        alert('Bartholomew Kuma effect, choose opponent unit')
        const effect = {
          active: true,
          todo: 'FIELD TO DECK',
          target: {
            who: 'OTHER',
            isTarget: true,
            grade: 'ALL'
          }
        }
        if (data.who === 'Player') {
          this.effect.player = effect
        } else {
          this.effect.opponent = effect
        }
      }
      this.EFOPT(data)
    },
    EF047 (data) { // Charlotte Cracker
      data.gain = 2000
      this.GAP(data)
      let life = ''
      if (data.who === 'Player') {
        life = this.player.life
      } else {
        life = this.opponent.life
      }
      if (life > 500) {
        this.DMG({ who: data.who, deal: 500 })
        let BF = []
        let count = 0
        if (data.who === 'Player') {
          BF = this.opponent.field
        } else {
          BF = this.player.field
        }
        BF.map((unit) => {
          count += 1
        })
        data.gain = (500 * count)
        this.GAP(data)
      }
    },
    EF048 (data) { // Bartolomeo
      let BF = []
      let copy = 0
      if (data.who === 'Player') {
        BF = this.player.field
      } else {
        BF = this.opponent.field
      }
      BF.map((unit) => {
        if (unit.card.name === 'Monkey D. Luffy') {
          copy += 1
        }
      })
      if (copy > 0) {
        data.gain = 3500
        this.GAP(data)
      }
    },
    EF049 (data) { // Inuarashi
      data.name = 'Inuarashi'
      data.grade = 3
      this.callEvo(data)
    },
    EF050 (data) { // Inuarashi
      data.grade = 2
      data.name = 'Inuarashi'
      this.randomCallBack(data)
    },
    EF050AUTO (data) { // Inuarashi Sulong
      let count = 0
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.BF.map((unit) => { if (unit.card.type.race === 'Beast') { count += 1 } })
      data.pay = 500
      data.gain = (500 * count)
      data.COST = 'PAY LIFE POINTS'
      data.RESEFF = 'GET AUTO POWER'
      this.optionalEFATK(data)
    },
    EF051 (data) { // Nekomamushi
      data.name = 'Nekomamushi'
      data.grade = 3
      this.callEvo(data)
    },
    EF052 (data) { // Nekomamushi
      data.grade = 2
      data.name = 'Nekomamushi'
      this.randomCallBack(data)
    },
    EF052ACT (data) { // Nekomamushi Sulong
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        this.$swal.fire({
          title: 'Aktifkan Effek Nekomamushi?',
          showCancelButton: true,
          confirmButtonText: 'YES',
          cancelButtonText: 'NO'
        }).then((result) => {
          if (result.isConfirmed) {
            data.todo = 'search'
            data.filter = true
            data.filterRace = true
            data.race = 'Beast'
            data.filterNotName = 'Nekomamushi'
            data.RESEFF = 'ADD TO HAND'
            this.DECK(data)
          }
        })
      }
      this.EFOPT(data)
    },
    EF053 (data) { // Uta
      let count = 0
      const BF = this.player.field
      const BFOP = this.opponent.field
      BF.map((unit) => { if (unit.position === 'Rest') { count += 1 } })
      BFOP.map((unit) => { if (unit.position === 'Rest') { count += 1 } })
      data.pay = 500
      data.gain = (500 * count)
      data.COST = 'PAY LIFE POINTS'
      data.RESEFF = 'GET AUTO POWER'
      this.optionalEFATK(data)
    },
    EF054 (data) { // Gordon
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        alert('Gordon effect')
        data.todo = 'UNIT TO REST'
        this.FIELD(data)
        const effect = {
          active: true,
          todo: 'UNIT TO REST',
          target: {
            who: 'OTHER',
            isTarget: true,
            grade: 'EQUAL 1'
          }
        }
        if (data.who === 'Player') {
          this.effect.player = effect
        } else {
          this.effect.opponent = effect
        }
      }
      this.EFOPT(data)
    },
    EF055 (data) { // Arlong
      this.$swal.fire({
        title: 'Aktifkan Effek Arlong?',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          data.todo = 'search'
          data.filter = true
          data.filterRace = true
          data.race = 'Fishman'
          data.RESEFF = 'ADD TO HAND'
          this.DECK(data)
        }
      })
    },
    EF056 (data) { // Brook
      this.DMG({ who: data.who, deal: 500 })
      const cards = []
      if (data.who === 'Player') { data.drop = this.player.drop }
      if (data.who === 'Opponent') { data.drop = this.opponent.drop }
      for (let i = 0; i < data.drop.length; i++) {
        cards.push({ card: data.drop[i], index: i })
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        const unit = cards[index]
        data.todo = 'DROP TO FIELD'
        data.index = unit.index
        this.DROP(data)
      } else {
        alert('Target tidak ditemukan')
      }
    },
    EF057 (data) { // Basil Hawkins
      this.DMG({ who: data.who, deal: 1000 })
      const cards = []
      if (data.who === 'Player') { data.deck = this.player.deck.deck }
      if (data.who === 'Opponent') { data.deck = this.opponent.deck.deck }
      for (let i = 0; i < data.deck.length; i++) {
        cards.push({ card: data.deck[i], index: i })
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        const unit = cards[index]
        data.todo = 'DECK TO FIELD'
        data.index = unit.index
        this.DECK(data)
      } else {
        alert('Target tidak ditemukan')
      }
    },
    EF058 (data) { // Jack
      data.gain = 1000
      this.powerStack(data)
    },
    EF060 (data) { // Coby
      let count = 0
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.BF.map((unit) => { if (unit.card.type.job === 'Fighter') { count += 1 } })
      data.gain = (500 * count)
      data.COST = ''
      data.RESEFF = 'GET AUTO POWER'
      this.optionalEFATK(data)
    },
    EF061 (data) { // Eustass Kid
      this.DECK({ who: data.who, todo: 'mill' })
      data.COST = ''
      if (data.who === 'Player') { data.drop = this.player.drop }
      if (data.who === 'Opponent') { data.drop = this.opponent.drop }
      const index = data.drop.length - 1
      data.gain = data.drop[index].power
      data.RESEFF = 'GET AUTO POWER'
      this.optionalEFATK(data)
    },
    EF062 (data) { // Fujitora
      if (data.who === 'Player') {
        this.DMG({ who: 'Opponent', deal: 500 })
      } else {
        this.DMG({ who: 'Player', deal: 500 })
      }
    },
    EF064 (data) { // Kaido
      let unit = {}
      let copy = 0
      let BF = []
      const BFZOAN = []
      if (data.who === 'Player') {
        BF = this.player.field
        unit = this.player.field[data.index]
      } else {
        BF = this.opponent.field
        unit = this.opponent.field[data.index]
      }
      BF.map((card) => {
        if (card.card.code === unit.card.code) {
          copy += 1
        }
      })
      BF.map((card) => {
        if (card.card.type.special === 'Zoan') {
          BFZOAN.push(card)
        }
      })
      this.ALLUNIT(BFZOAN, '064', (500 * copy))
    },
    EF065 (data) { // Kaido
      let BF = []
      let count = 0
      if (data.who === 'Player') {
        BF = this.player.field
      } else {
        BF = this.opponent.field
      }
      BF.map((unit) => {
        if (unit.card.type.special === 'Zoan') {
          count += 1
        }
      })
      data.gain = 500 * count
      this.GCP(data)
    },
    EF066 (data) { // Marco
      data.todo = 'DROP TO FIELD'
      this.DROP(data)
      data.heal = 2000
      this.HEAL(data)
    },
    EF067 (data) { // Dracule Mihawk
      data.pay = 500
      data.COST = 'PAY LIFE POINTS'
      data.RESEFF = 'DESTROY THE WEAK'
      this.optionalEFATK(data)
    },
    EF068 (data) { // Monkey D. Garp
      data.gain = 1000
      this.powerStack(data)
    },
    EF069 (data) { // Portgas D. Ace
      if (data.who === 'Player') {
        this.DMG({ who: 'Opponent', deal: 500 })
      } else {
        this.DMG({ who: 'Player', deal: 500 })
      }
    },
    EF069AUTO (data) { // Portgas D. Ace
      let who = ''
      let index = ''
      if (data.who === 'Player') {
        who = 'Opponent'
        index = this.opponent.indexATK
      }
      if (data.who === 'Opponent') {
        who = 'Player'
        index = this.player.indexATK
      }
      this.FIELD({ who: who, index: index, todo: 'FIELD TO DROP' })
      if (data.who === 'Player') { this.opponent.atk = 0 }
      if (data.who === 'Opponent') { this.player.atk = 0 }
    },
    EF070 (data) { // Edward Newgate
      data.pay = 500
      data.gain = 5000
      data.COST = 'PAY LIFE POINTS'
      data.RESEFF = 'GET AUTO POWER'
      this.optionalEFATK(data)
    },
    EF070EP (data) { // Edward Newgate (EP)
      this.DMG({ who: data.who, deal: 500 })
    },
    EF071 (data) { // Bohemian
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      const units = []
      for (let i = 0; i < data.BF.length; i++) {
        if (data.BF[i].card.name === 'Edward Newgate' && data.BF[i].position === 'Rest') {
          units.push({ unit: data.BF[i], index: i })
        }
      }
      if (units.length > 0) { data.otherIndex = units[0].index }
      data.pay = 500
      data.gain = 5000
      data.COST = 'PAY LIFE POINTS'
      data.RESEFF = 'OTHER UNIT TO STAND'
      this.optionalEFATK(data)
    },
    EF072 (data) { // Squard
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        alert('Squard effect')
        data.COST = 'PAY LIFE POINTS'
        data.pay = 500
        this.COST(data)
        data.todo = 'pick'
        data.filter = true
        data.filterName = true
        data.name = 'Edward Newgate'
        data.RESEFF = 'DROP TO HAND'
        this.DROP(data)
      }
      this.EFOPT(data)
    },
    EF073 (data) { // Haruta
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        alert('Haruta effect')
        data.COST = 'PAY LIFE POINTS'
        data.pay = 500
        this.COST(data)
        data.todo = 'search'
        data.filter = true
        data.filterName = true
        data.name = 'Edward Newgate'
        data.RESEFF = 'ADD TO HAND'
        this.DECK(data)
      }
      this.EFOPT(data)
    },
    EF074 (data) { // Kingdew
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        alert('Kingdew effect')
        const units = []
        for (let i = 0; i < data.BF.length; i++) {
          if (data.BF[i].card.name === 'Edward Newgate') {
            units.push({ unit: data.BF[i], index: i })
          }
        }
        if (units.length > 0) {
          this.GAP({ who: data.who, index: units[0].index, gain: 1000 })
        }
      }
      this.EFOPT(data)
    },
    EF075 (data) { // Curiel
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        const units = []
        for (let i = 0; i < data.BF.length; i++) {
          if (data.BF[i].card.name === 'Edward Newgate') {
            units.push({ unit: data.BF[i], index: i })
          }
        }
        if (units.length > 0) {
          alert('Curiel effect, choose opponent unit')
          const effect = {
            active: true,
            todo: 'FIELD TO DROP',
            target: {
              who: 'OTHER',
              isTarget: true,
              grade: 'ALL'
            }
          }
          if (data.who === 'Player') {
            this.effect.player = effect
          } else {
            this.effect.opponent = effect
          }
        }
      }
      this.EFOPT(data)
    },
    EF076 (data) { // Blenheim
      data.units = []
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      for (let i = 0; i < data.BF.length; i++) {
        if (data.BF[i].card.name === 'Edward Newgate') {
          data.units.push({ unit: data.BF[i], index: i })
        }
      }
      data.pay = 500
      data.gain = 1000
      data.COST = 'PAY LIFE POINTS'
      data.RESEFF = 'GET LOTS OF AUTO POWER'
      this.optionalEFATK(data)
    },
    EF077 (data) { // Thatch
      const cards = []
      if (data.who === 'Player') { data.drop = this.player.drop }
      if (data.who === 'Opponent') { data.drop = this.opponent.drop }
      for (let i = 0; i < data.drop.length; i++) {
        if (data.drop[i].name === 'Edward Newgate') {
          cards.push({ card: data.drop[i], index: i })
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        const unit = cards[index]
        data.todo = 'DROP TO FIELD'
        data.index = unit.index
        this.DROP(data)
      } else {
        alert('Target tidak ditemukan')
      }
    },
    EF079 (data) { // Cavendish
      if (data.unit.OPT === false) {
        data.pay = 500
        data.COST = 'PAY LIFE POINTS'
        data.RESEFF = 'UNIT TO STAND'
        this.optionalEFATK(data)
      } else {
        data.RESEFF = ''
        this.optionalEFATK(data)
      }
      this.EFOPT(data)
    },
    EF080 (data) { // Bartolomeo
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        alert('Bartolomeo effect, choose your unit')
        const effect = {
          active: true,
          todo: 'UNIT CANNOT DESTROY',
          target: {
            who: 'SELF',
            isTarget: true,
            isField: true,
            grade: '',
            name: ''
          },
          RES: {
            todo: 'UNIT CANNOT DESTROY'
          }
        }
        if (data.who === 'Player') {
          this.effect.player = effect
        } else {
          this.effect.opponent = effect
        }
      }
      this.EFOPT(data)
    },
    EF081 (data) { // Don Sai
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        alert('Don Sai effect')
        data.COST = 'PAY LIFE POINTS'
        data.pay = 500
        this.COST(data)
        for (let i = 0; i < data.BF.length; i++) {
          if (data.BF[i].card.grade === 2) {
            this.GAP({ who: data.who, index: i, gain: 1000 })
          }
        }
      }
      this.EFOPT(data)
    },
    EF082 (data) { // Ideo
      data.units = []
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      for (let i = 0; i < data.BF.length; i++) {
        if (data.BF[i].card.grade === 2) {
          data.units.push({ unit: data.BF[i], index: i })
        }
      }
      data.gain = 500
      data.COST = ''
      data.RESEFF = 'GET LOTS OF AUTO POWER'
      this.optionalEFATK(data)
    },
    EF083 (data) { // Leo
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        alert('Leo effect')
        data.COST = 'PAY LIFE POINTS'
        data.pay = 500
        this.COST(data)
        let op = ''
        let BFOP = []
        if (data.who === 'Player') {
          op = 'Opponent'
          BFOP = this.opponent.field
        }
        if (data.who === 'Opponent') {
          op = 'Player'
          BFOP = this.player.field
        }
        const index = Math.floor(Math.random() * BFOP.length)
        this.FIELD({ who: op, index: index, todo: 'UNIT TO REST' })
      }
      this.EFOPT(data)
    },
    EF084 (data) { // Monkey D. Luffy
      alert('Monkey D. Luffy effect')
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        let deck = []
        const cards = []
        if (data.who === 'Player') { deck = this.player.deck.deck }
        if (data.who === 'Opponent') { deck = this.opponent.deck.deck }
        for (let i = 0; i < deck.length; i++) {
          if (deck[i].text.search('Commander SHP') >= 0 && deck[i].name !== 'Monkey D. Luffy') {
            cards.push({ card: deck[i], index: i })
          }
        }
        const index = Math.floor(Math.random() * cards.length)
        this.DECK({ who: data.who, index: cards[index].index, todo: 'DECK TO FIELD' })
      }
      this.EFOPT(data)
    },
    EF085 (data) { // Denjiro
      let count = 0
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.BF.map((unit) => { if (unit.card.name.search('Kozuki') >= 0) { count += 1 } })
      data.gain = 500 * count
      this.GCP(data)
    },
    EF086 (data) { // Baby 5
      alert('Baby 5 effect')
      if (data.who === 'Player') { data.BF = this.player.field }
      if (data.who === 'Opponent') { data.BF = this.opponent.field }
      data.unit = data.BF[data.index]
      if (data.unit.OPT === false) {
        let copy = 0
        data.BF.map((unit) => { if (unit.card.name.search('Don Sai') >= 0) { copy += 1 } })
        if (copy > 0) {
          data.unit.card.grade = 2
          data.gain = 1500
          this.GAP(data)
        }
      }
      this.EFOPT(data)
    },
    EF087 (data) {}
  },
  created () {
    this.parseDP()
    this.DECK({ who: 'Player', todo: 'shuffle' })
    this.DECK({ who: 'Opponent', todo: 'shuffle' })
    for (let i = 0; i < 5; i++) {
      this.DECK({ who: 'Player', todo: 'draw' })
      this.DECK({ who: 'Opponent', todo: 'draw' })
    }
    this.FIRST()
  },
  updated () {
  }
}
</script>
