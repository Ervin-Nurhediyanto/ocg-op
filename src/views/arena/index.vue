<template>
  <div class="row h-100vh d-flex align-content-center m-0 p-0 bg-op">
    <ArenaInfo
      :info="info"
      :data="data"
      :turn="turn"
      :phases="phases"
      :player="player"
      :opponent="opponent"
      v-on:OD="OD"
      v-on:BCP="BCP"
      v-on:AFD="AFD"
      v-on:HTD="HTD"
      v-on:UDF="UDF"
      v-on:UTR="UTR"
      v-on:UBF="UBF"
      v-on:DTF="DTF"
      v-on:FTH="FTH"
      v-on:FTD="FTD"
      v-on:DRTF="DRTF"
      v-on:DRTH="DRTH"
      v-on:ACT017="ACT017"
      v-on:ACT022="ACT022"
      v-on:ACT023="ACT023"
      v-on:ACT024="ACT024"
      v-on:ACT026="ACT026"
      v-on:ACT033="ACT033"
      v-on:ACT045="ACT045"
    />
    <ArenaBattle
      :data="data"
      :info="info"
      :turn="turn"
      :phases="phases"
      :player="player"
      :opponent="opponent"
      v-on:openDeck="openDeck"
      v-on:openBind="openBind"
      v-on:openDrop="openDrop"
      v-on:CFH="CFH"
      v-on:OD="OD"
      v-on:onATK="onATK"
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
  name: 'Arena',
  props: ['data'],
  data () {
    return {
      phases: ['SP', 'DP', 'MP1', 'BP', 'MP2', 'EP'],
      turn: 'Player',
      cTurn: 0,
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
          //   CON: false // Continu Effect
          // }
        ],
        atk: 0,
        def: 0,
        indexATK: '',
        indexDEF: ''
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
        indexDEF: ''
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
    openDeck (data) {
      if (this.info.isOpen === false) {
        if (data === 'Player') {
          this.info = {
            isOpen: true,
            who: data,
            zone: 'Deck',
            card: this.player.deck.deck,
            todo: ''
          }
        } else {
          this.info = {
            isOpen: true,
            who: data,
            zone: 'Deck',
            card: this.opponent.deck.deck,
            todo: ''
          }
        }
      } else {
        this.closeInfo()
      }
    },
    openBind (data) {
      if (this.info.isOpen === false) {
        if (data === 'Player') {
          this.info = {
            isOpen: true,
            who: data,
            zone: 'Bind',
            card: this.player.bind,
            todo: ''
          }
        } else {
          this.info = {
            isOpen: true,
            who: data,
            zone: 'Bind',
            card: this.opponent.bind,
            todo: ''
          }
        }
      } else {
        this.closeInfo()
      }
    },
    openDrop (data) {
      if (this.info.isOpen === false) {
        if (data === 'Player') {
          this.info = {
            isOpen: true,
            who: data,
            zone: 'Drop',
            card: this.player.drop,
            todo: ''
          }
        } else {
          this.info = {
            isOpen: true,
            who: data,
            zone: 'Drop',
            card: this.opponent.drop,
            todo: ''
          }
        }
      } else {
        this.closeInfo()
      }
    },
    closeInfo () {
      this.info = { isOpen: false, who: '', zone: '', card: [], todo: '' }
    },
    DPS () { // Deck Player Shuffle
      const DP = this.player.deck.deck
      const DPS = []
      while (DP.length > 0) {
        const IR = Math.floor(Math.random() * DP.length) // Index Random
        const CR = DP[IR] // Card Random
        DPS.push(CR)
        DP.splice(IR, 1)
      }
      this.player.deck.deck = DPS
    },
    DOS () { // Deck Opponent Shuffle
      const DO = this.opponent.deck.deck
      const DOS = []
      while (DO.length > 0) {
        const IR = Math.floor(Math.random() * DO.length) // Index Random
        const CR = DO[IR] // Card Random
        DOS.push(CR)
        DO.splice(IR, 1)
      }
      this.opponent.deck.deck = DOS
    },
    ODP () { // Opening Draw Player
      for (let i = 0; i < 5; i++) {
        const DP = this.player.deck.deck
        const HP = this.player.hand
        HP.push(DP[0])
        DP.splice(0, 1)
      }
    },
    ODO () { // Opening Draw Opponent
      for (let i = 0; i < 5; i++) {
        const DO = this.opponent.deck.deck
        const HO = this.opponent.hand
        HO.push(DO[0])
        DO.splice(0, 1)
      }
    },
    RFT () { // Random First Turn
      const FT = ['Player', 'Opponent']
      const RFT = Math.floor(Math.random() * FT.length)
      alert(`${FT[RFT]} First Turn`)
      this.turn = FT[RFT]
      this.CP(FT[RFT], 'SP')
    },
    BCP (data) { // Button Change Phase
      this.CP(data.who, data.phase)
    },
    CP (who, phase) { // Change Phase
      if (who === 'Player') {
        this.player.phase = phase
      } else {
        this.opponent.phase = phase
      }
      if (phase === 'SP') {
        this.SP(who)
        setTimeout(() => this.CP(who, 'DP'), 500)
      }
      if (phase === 'DP') {
        this.DP(who)
        setTimeout(() => this.CP(who, 'MP1'), 500)
      }
      if (phase === 'BP') {
        if (this.cTurn === 0) {
          alert('First Turn Cannot ATK')
          setTimeout(() => this.CP(who, 'EP'), 500)
        }
      }
      if (phase === 'EP') {
        this.EP(who)
      }
    },
    EP (who) { // End Phase
      const PBF = this.player.field
      PBF.map((unit) => {
        unit.totalPow -= unit.gainAuto
        unit.gainAuto = 0
        unit.OPT = false
      })
      const OBF = this.opponent.field
      OBF.map((unit) => {
        unit.totalPow -= unit.gainAuto
        unit.gainAuto = 0
        unit.OPT = false
      })
      this.EFAUTO({ who: who, stat: 'EFENDPHASE' })
      if (who === 'Player') {
        this.turn = 'Opponent'
        setTimeout(() => this.CP('Opponent', 'SP'), 500)
        this.cTurn += 1
      } else {
        this.turn = 'Player'
        setTimeout(() => this.CP('Player', 'SP'), 500)
        this.cTurn += 1
      }
    },
    SP (who) { // Standby Phase
      if (who === 'Player') {
        const BF = this.player.field
        BF.map((unit) => {
          unit.position = 'Stand'
          this.EFCONT({ who: 'Player', event: 'UNIT TO STAND' })
          this.EFCONT({ who: 'Player', event: 'UNIT TO REST' })
        })
      } else {
        const BF = this.opponent.field
        BF.map((unit) => {
          unit.position = 'Stand'
          this.EFCONT({ who: 'Opponent', event: 'UNIT TO STAND' })
          this.EFCONT({ who: 'Opponent', event: 'UNIT TO REST' })
        })
      }
    },
    DP (who) { // Draw Phase
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
      let deck = []
      let hand = []
      let drop = []
      let notif = ''
      if (who === 'Player') {
        deck = this.player.deck.deck
        hand = this.player.hand
        drop = this.player.drop
        notif = 'You Lose'
      } else {
        deck = this.opponent.deck.deck
        hand = this.opponent.hand
        drop = this.opponent.drop
        notif = 'You Win'
      }
      if (hand.length < 12) {
        hand.push(deck[0])
        deck.splice(0, 1)
        this.EFCONT({ who: who, event: 'DRAW A CARD' })
        if (deck.length === 0) {
          Toast('error', notif)
          this.$router.replace({
            name: 'Home'
          })
        }
      } else {
        Toast('error', 'Maksimal 12 Kartu Ditangan')
        drop.push(deck[0])
        deck.splice(0, 1)
        const ID = drop.length - 1
        const UD = drop[ID]
        this.EFAUTO({ who: who, code: UD.code, index: ID, stat: 'EFDROP' })
        this.EFCONT({ who: who, event: 'SEND TO DROP' })
        if (deck.length === 0) {
          Toast('error', notif)
          this.$router.replace({
            name: 'Home'
          })
        }
      }
    },
    OD (data) { // On Display
      this.display = data
    },
    onATK (data) {
      if (data.who === 'Player') {
        const unit = this.player.field[data.index]
        this.player.indexATK = data.index
        if (unit.position === 'Stand') {
          unit.position = 'Rest'
          this.EFCONT({ who: 'Player', event: 'UNIT TO REST' })
          this.EFAUTO({ who: 'Player', code: unit.card.code, index: data.index, stat: 'EFATK' })
          this.player.atk = unit.totalPow
        }
      } else {
        const unit = this.opponent.field[data.index]
        this.opponent.indexATK = data.index
        if (unit.position === 'Stand') {
          unit.position = 'Rest'
          this.EFCONT({ who: 'Opponent', event: 'UNIT TO REST' })
          this.EFAUTO({ who: 'Opponent', code: unit.card.code, index: data.index, stat: 'EFATK' })
          this.opponent.atk = unit.totalPow
        }
      }
    },
    onDef (data) {
      if (data.who.def === 'Player') {
        const BF = this.player.field
        const units = {}
        for (let i = 0; i < BF.length; i++) {
          const unit = BF[i]
          if (i === 0 && unit.position === 'Stand') { units.u0 = unit.card.name }
          if (i === 1 && unit.position === 'Stand') { units.u1 = unit.card.name }
          if (i === 2 && unit.position === 'Stand') { units.u2 = unit.card.name }
          if (i === 3 && unit.position === 'Stand') { units.u3 = unit.card.name }
          if (i === 4 && unit.position === 'Stand') { units.u4 = unit.card.name }
          if (i === 5 && unit.position === 'Stand') { units.u5 = unit.card.name }
        }
        this.$swal.fire({
          title: 'Select Unit to Block',
          input: 'select',
          inputOptions: { units },
          showCancelButton: true,
          inputValidator: (value) => {
            let index = ''
            if (value === 'u0') { index = 0 }
            if (value === 'u1') { index = 1 }
            if (value === 'u2') { index = 2 }
            if (value === 'u3') { index = 3 }
            if (value === 'u4') { index = 4 }
            if (value === 'u5') { index = 5 }
            data.index.def = index
            const unit = BF[index]
            unit.position = 'Rest'
            this.EFCONT({ who: 'Player', event: 'UNIT TO REST' })
            this.EFAUTO({ who: 'Player', code: unit.card.code, index: index, stat: 'EFDEF' })
            this.player.def = unit.totalPow
            this.onRB(data)
          }
        }).then((res) => {
          if (res.dismiss === 'cancel') {
            this.DMG({ who: 'Player', deal: this.opponent.atk })
            this.opponent.atk = 0
          }
        })
      } else {
        const BF = this.opponent.field
        const units = {}
        for (let i = 0; i < BF.length; i++) {
          const unit = BF[i]
          if (i === 0 && unit.position === 'Stand') { units.u0 = unit.card.name }
          if (i === 1 && unit.position === 'Stand') { units.u1 = unit.card.name }
          if (i === 2 && unit.position === 'Stand') { units.u2 = unit.card.name }
          if (i === 3 && unit.position === 'Stand') { units.u3 = unit.card.name }
          if (i === 4 && unit.position === 'Stand') { units.u4 = unit.card.name }
          if (i === 5 && unit.position === 'Stand') { units.u5 = unit.card.name }
        }
        this.$swal.fire({
          title: 'Select Unit to Block',
          input: 'select',
          inputOptions: { units },
          showCancelButton: true,
          inputValidator: (value) => {
            let index = ''
            if (value === 'u0') { index = 0 }
            if (value === 'u1') { index = 1 }
            if (value === 'u2') { index = 2 }
            if (value === 'u3') { index = 3 }
            if (value === 'u4') { index = 4 }
            if (value === 'u5') { index = 5 }
            data.index.def = index
            const unit = BF[index]
            unit.position = 'Rest'
            this.EFCONT({ who: 'Opponent', event: 'UNIT TO REST' })
            this.EFAUTO({ who: 'Opponent', code: unit.card.code, index: index, stat: 'EFDEF' })
            this.opponent.def = unit.totalPow
            this.onRB(data)
          }
        }).then((res) => {
          if (res.dismiss === 'cancel') {
            this.DMG({ who: 'Opponent', deal: this.player.atk })
            this.player.atk = 0
          }
        })
      }
    },
    onRB (data) { // Rest Battle
      if (data.who.atk === 'Player') {
        const ATK = this.player.atk
        const DEF = this.opponent.def
        if (ATK > DEF) {
          this.UDF({ who: 'Opponen', index: data.index.def })
        } else if (ATK < DEF) {
          this.UDF({ who: 'Player', index: data.index.atk })
        } else if (ATK === DEF) {
          this.UDF({ who: 'Opponen', index: data.index.def })
          this.UDF({ who: 'Player', index: data.index.atk })
        }
        this.player.atk = 0
        this.opponent.def = 0
      } else {
        const ATK = this.opponent.atk
        const DEF = this.player.def
        if (ATK > DEF) {
          this.UDF({ who: 'Player', index: data.index.def })
        } else if (ATK < DEF) {
          this.UDF({ who: 'Opponen', index: data.index.atk })
        } else if (ATK === DEF) {
          this.UDF({ who: 'Player', index: data.index.def })
          this.UDF({ who: 'Opponen', index: data.index.atk })
        }
        this.opponent.atk = 0
        this.player.def = 0
      }
    },
    ADD (data) { // Add Card
      this.info = {
        isOpen: true,
        who: data.who,
        zone: data.zone,
        card: data.card,
        todo: data.todo,
        uindex: data.uindex
      }
    },
    AFD (data) { // Add From Deck
      if (data.who === 'Player') {
        const deck = this.player.deck.deck
        const card = deck[data.index]
        this.player.hand.push(card)
        deck.splice(data.index, 1)
        this.DPS()
      } else {
        const deck = this.opponent.deck.deck
        const card = deck[data.index]
        this.opponent.hand.push(card)
        deck.splice(data.index, 1)
        this.DOS()
      }
      this.closeInfo()
    },
    HTD (data) { // Hand to Deck
      if (data.who === 'Player') {
        const hand = this.player.hand
        const card = hand[data.index]
        this.player.deck.deck.push(card)
        hand.splice(data.index, 1)
      } else {
        const hand = this.opponent.hand
        const card = hand[data.index]
        this.opponent.deck.deck.push(card)
        hand.splice(data.index, 1)
      }
      this.closeInfo()
    },
    DTF (data) { // Deck to Field
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
      if (data.who === 'Player') {
        const deck = this.player.deck.deck
        const card = deck[data.index]
        const BF = this.player.field
        if (BF.length < 6) {
          BF.push({
            card: card,
            position: 'Stand',
            gainAuto: 0,
            gaintCont: 0,
            totalPow: card.power,
            otherCont: [],
            OPT: false, // One Per Turn
            CON: false // Continu Effect
          })
          deck.splice(data.index, 1)
          this.DPS()
          this.closeInfo()
          const index = BF.length - 1
          const unit = BF[index].card
          this.EFAUTO({ who: 'Player', code: unit.code, index: index, stat: 'EFCAL' })
          this.EFCONT({ who: 'Player', event: 'COUNT UNIT ON FIELD' })
        } else {
          Toast('error', 'Field Penuh')
          this.closeInfo()
        }
      } else {
        const deck = this.opponent.deck.deck
        const card = deck[data.index]
        const BF = this.opponent.field
        if (BF.length < 6) {
          BF.push({
            card: card,
            position: 'Stand',
            gainAuto: 0,
            gaintCont: 0,
            totalPow: card.power,
            otherCont: [],
            OPT: false, // One Per Turn
            CON: false // Continu Effect
          })
          deck.splice(data.index, 1)
          this.DOS()
          this.closeInfo()
          const index = BF.length - 1
          const unit = BF[index].card
          this.EFAUTO({ who: 'Opponent', code: unit.code, index: index, stat: 'EFCAL' })
          this.EFCONT({ who: 'Opponent', event: 'COUNT UNIT ON FIELD' })
        } else {
          Toast('error', 'Field Penuh')
          this.closeInfo()
        }
      }
    },
    CFH (data) { // Call From Hand
      if (data.who === 'Player') {
        const BF = this.player.field
        const HP = this.player.hand
        const unit = this.player.hand[data.index]
        BF.push({
          card: unit,
          position: 'Stand',
          gainAuto: 0,
          gaintCont: 0,
          totalPow: unit.power,
          otherCont: [],
          OPT: false, // One Per Turn
          CON: false // Continu Effect
        })
        this.EFAUTO({ who: 'Player', code: unit.code, index: data.index, stat: 'EFCAL' })
        this.EFCONT({ who: 'Player', event: 'COUNT UNIT ON FIELD' })
        HP.splice(data.index, 1)
      } else {
        const BF = this.opponent.field
        const HO = this.opponent.hand
        const unit = this.opponent.hand[data.index]
        BF.push({
          card: unit,
          position: 'Stand',
          gainAuto: 0,
          gaintCont: 0,
          totalPow: unit.power,
          otherCont: [],
          OPT: false, // One Per Turn
          CON: false // Continu Effect
        })
        this.EFAUTO({ who: 'Opponent', code: unit.code, index: data.index, stat: 'EFCAL' })
        this.EFCONT({ who: 'Opponent', event: 'COUNT UNIT ON FIELD' })
        HO.splice(data.index, 1)
      }
    },
    UTR (data) { // UNIT TO REST
      let BF = []
      let unit = {}
      if (data.who === 'Player') {
        BF = this.player.field
        unit = BF[data.index]
      } else {
        BF = this.opponent.field
        unit = BF[data.index]
      }
      unit.position = 'Rest'
      this.EFCONT({ who: 'Opponent', event: 'UNIT TO REST' })
      this.closeInfo()
    },
    UDF (data) { // Unit Destroy on Field
      let BF = []
      let DZ = []
      let unit = {}
      if (data.who === 'Player') {
        BF = this.player.field
        DZ = this.player.drop
        unit = this.player.field[data.index].card
      } else {
        BF = this.opponent.field
        DZ = this.opponent.drop
        unit = this.opponent.field[data.index].card
      }
      DZ.push(unit)
      BF.splice(data.index, 1)
      this.closeInfo()
      const ID = DZ.length - 1
      const UD = DZ[ID]
      this.EFAUTO({ who: data.who, code: UD.code, index: ID, stat: 'EFDROP' })
      this.EFAUTO({ who: data.who, code: UD.code, index: ID, stat: 'EFDSBT' })
      this.EFCONT({ who: data.who, event: 'SEND TO DROP' })
      this.EFCONT({ who: data.who, event: 'COUNT UNIT ON FIELD' })
    },
    UBF (data) { // Unit Field to Bind
      let BF = []
      let bind = []
      let unit = {}
      if (data.who === 'Player') {
        BF = this.player.field
        bind = this.player.bind
        unit = this.player.field[data.index].card
      } else {
        BF = this.opponent.field
        bind = this.opponent.bind
        unit = this.opponent.field[data.index].card
      }
      bind.push(unit)
      BF.splice(data.index, 1)
      this.closeInfo()
      this.EFCONT({ who: data.who, event: 'COUNT UNIT ON FIELD' })
      // const ID = bind.length - 1
      // const UB = bind[IB]
      // this.EFAUTO({ who: data.who, code: UB.code, index: ID, stat: 'EFBIND' })
      // this.EFCONT({ who: data.who, event: 'SEND TO BIND' })
    },
    FTH (data) { // Field to Hand
      let BF = []
      let DZ = []
      let hand = []
      let unit = {}
      if (data.who === 'Player') {
        BF = this.player.field
        DZ = this.player.drop
        hand = this.player.hand
        unit = this.player.field[data.index].card
      } else {
        BF = this.opponent.field
        DZ = this.opponent.drop
        hand = this.opponent.hand
        unit = this.opponent.field[data.index].card
      }
      if (hand.length < 12) {
        hand.push(unit)
        BF.splice(data.index, 1)
        this.EFCONT({ who: data.who, event: 'COUNT UNIT ON FIELD' })
      } else {
        DZ.push(unit)
        BF.splice(data.index, 1)
      }
      this.closeInfo()
    },
    FTD (data) { // FIELD TO DECK
      let BF = []
      let deck = []
      let unit = {}
      if (data.who === 'Player') {
        BF = this.player.field
        deck = this.player.deck.deck
        unit = BF[data.index].card
      } else {
        BF = this.opponent.field
        deck = this.opponent.deck.deck
        unit = BF[data.index].card
      }
      deck.push(unit)
      BF.splice(data.index, 1)
      this.closeInfo()
    },
    DRTH (data) { // DROP TO HAND
      let drop = []
      let hand = []
      let card = {}
      if (data.who === 'Player') {
        drop = this.player.drop
        hand = this.player.hand
        card = this.player.drop[data.index]
      } else {
        drop = this.opponent.drop
        hand = this.opponent.hand
        card = this.opponent.drop[data.index]
      }
      if (hand.length < 12) {
        hand.push(card)
        drop.splice(data.index, 1)
      } else {
        alert('Cards Hand is Full')
      }
      this.closeInfo()
    },
    DRTB (data) { // Drop to Bind
      let drop = []
      let bind = []
      if (data.who === 'Player') {
        drop = this.player.drop
        bind = this.player.bind
      } else {
        drop = this.opponent.drop
        bind = this.opponent.bind
      }
      const unit = drop[data.index]
      bind.push(unit)
      drop.splice(data.index, 1)
    },
    DRTD (data) { // Drop to Deck
      let drop = []
      let deck = []
      if (data.who === 'Player') {
        drop = this.player.drop
        deck = this.player.deck.deck
      } else {
        drop = this.opponent.drop
        deck = this.opponent.deck.deck
      }
      const unit = drop[data.index]
      deck.push(unit)
      drop.splice(data.index, 1)
    },
    DRTF (data) { // Drop to Field
      console.log('DROP TO FIELD')
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
      if (data.who === 'Player') {
        const drop = this.player.drop
        const card = drop[data.index]
        const BF = this.player.field
        if (BF.length < 6) {
          BF.push({
            card: card,
            position: 'Stand',
            gainAuto: 0,
            gaintCont: 0,
            totalPow: card.power,
            otherCont: [],
            OPT: false, // One Per Turn
            CON: false // Continu Effect
          })
          drop.splice(data.index, 1)
          this.closeInfo()
          const index = BF.length - 1
          const unit = BF[index]
          console.log(unit)
          console.log(index)
          this.EFAUTO({ who: 'Player', code: unit.card.code, index: index, stat: 'EFCAL' })
          this.EFAUTO({ who: 'Player', code: unit.card.code, index: index, stat: 'EFCALDR' })
          this.EFCONT({ who: 'Player', event: 'COUNT UNIT ON FIELD' })
        } else {
          Toast('error', 'Field Penuh')
          this.closeInfo()
        }
      } else {
        const drop = this.opponent.drop
        const card = drop[data.index]
        const BF = this.opponent.field
        if (BF.length < 6) {
          BF.push({
            card: card,
            position: 'Stand',
            gainAuto: 0,
            gaintCont: 0,
            totalPow: card.power,
            otherCont: [],
            OPT: false, // One Per Turn
            CON: false // Continu Effect
          })
          drop.splice(data.index, 1)
          this.closeInfo()
          const index = BF.length - 1
          const unit = BF[index]
          this.EFAUTO({ who: 'Opponent', code: unit.code, index: index, stat: 'EFCAL' })
          this.EFAUTO({ who: 'Opponent', code: unit.card.code, index: index, stat: 'EFCALDR' })
          this.EFCONT({ who: 'Opponent', event: 'COUNT UNIT ON FIELD' })
        } else {
          Toast('error', 'Field Penuh')
          this.closeInfo()
        }
      }
    },
    TARGETSELF (data) { // TARGET SELF UNIT
      let unit = {}
      if (data.who === 'Player') {
        unit = this.player.field[data.index]
      } else {
        unit = this.opponent.field[data.index]
      }
      if (data.todo === 'STAND UNIT') {
        unit.position = 'Stand'
        this.EFCONT({ who: data.who, event: 'UNIT TO STAND' })
      }
    },
    TARGETOWNER (data) { // TARGET NOT SELF UNIT
      const cards = []
      let BF = []
      if (data.who === 'Player') {
        BF = this.player.field
        data.who = 'Player'
      } else {
        BF = this.opponent.field
        data.who = 'Opponent'
      }
      for (let i = 0; i < BF.length; i++) {
        if (i !== data.index) {
          cards.push(BF[i].card)
        } else {
          cards.push({})
        }
      }
      this.ADD({ who: data.who, zone: 'FIELD', card: cards, todo: data.todo, uindex: data.index })
    },
    TARGETALL (data) { // TARGET ALL
      const cards = []
      let BF = []
      if (data.who === 'Player') {
        BF = this.player.field
      } else {
        BF = this.opponent.field
      }
      BF.map((unit) => {
        cards.push(unit.card)
      })
      this.ADD({ who: data.who, zone: 'FIELD', card: cards, todo: data.todo, uindex: data.index })
    },
    TARGETG2LESS (data) {
      const cards = []
      let BF = []
      if (data.who === 'Player') {
        BF = this.opponent.field
        data.who = 'Opponent'
      } else {
        BF = this.player.field
        data.who = 'Player'
      }
      BF.map((unit) => {
        if (unit.card.grade < 3) {
          cards.push(unit.card)
        } else {
          cards.push({})
        }
      })
      if (cards.length > 0) {
        this.ADD({ who: data.who, zone: 'FIELD', card: cards, todo: data.todo })
      } else {
        // alert('Tidak ada target')
      }
    },
    TARGETG1 (data) { // Target G1 on Battle Field
      const cards = []
      let BF = []
      if (data.who === 'Player') {
        BF = this.opponent.field
        data.who = 'Opponent'
      } else {
        BF = this.player.field
        data.who = 'Player'
      }
      BF.map((unit) => {
        if (unit.card.grade === 1) {
          cards.push(unit.card)
        } else {
          cards.push({})
        }
      })
      if (cards.length > 0) {
        this.ADD({ who: data.who, zone: 'FIELD', card: cards, todo: data.todo })
      } else {
        // alert('Tidak ada target')
      }
    },
    TARGETDECK (data) { // Target Deck by Name
      const cards = []
      let deck = []
      if (data.who === 'Player') {
        deck = this.player.deck.deck
      } else {
        deck = this.opponent.deck.deck
      }
      deck.map((unit) => {
        if (unit.name.search(data.search) >= 0) {
          if (data.notSearch !== '') {
            if (unit.name !== data.notSearch) {
              cards.push(unit)
            }
          } else {
            cards.push(unit)
          }
        }
      })
      this.ADD({ who: data.who, zone: data.zone, card: cards, todo: data.todo })
    },
    TARGETDECKNG (data) { // TARGET DECK BY NAME AND GRADE
      const cards = []
      let deck = []
      if (data.who === 'Player') {
        deck = this.player.deck.deck
      } else {
        deck = this.opponent.deck.deck
      }
      deck.map((unit) => {
        if (unit.name.search(data.name) >= 0 && unit.grade === data.grade) {
          cards.push(unit)
        }
      })
      if (cards.length > 0) {
        this.ADD({ who: data.who, zone: 'FIELD', card: cards, todo: data.todo })
      } else {
        alert('Tidak ada target')
      }
    },
    TARGETDECKNGLESS (data) { // TARGET DECK BY NAME AND GRADE
      const cards = []
      let deck = []
      if (data.who === 'Player') {
        deck = this.player.deck.deck
      } else {
        deck = this.opponent.deck.deck
      }
      deck.map((unit) => {
        if (unit.name.search(data.name) >= 0 && unit.grade <= data.grade) {
          cards.push(unit)
        }
      })
      if (cards.length > 0) {
        this.ADD({ who: data.who, zone: 'FIELD', card: cards, todo: data.todo })
      } else {
        alert('Tidak ada target')
      }
    },
    TARGETDROP (data) { // Target Drop
      const cards = []
      let drop = []
      if (data.who === 'Player') {
        drop = this.player.drop
      } else {
        drop = this.opponent.drop
      }
      drop.map((unit) => {
        if (unit.name.search(data.search) >= 0) {
          if (data.notSearch !== '') {
            if (unit.name !== data.notSearch) {
              cards.push(unit)
            }
          } else {
            cards.push(unit)
          }
        }
      })
      this.ADD({ who: data.who, zone: 'DROP', card: cards, todo: data.todo })
    },
    TARGETHAND (data) { // Target Card Hand
      let cards = []
      if (data.who === 'Player') {
        cards = this.player.hand
      } else {
        cards = this.opponent.hand
      }
      this.ADD({ who: data.who, zone: 'HAND', card: cards, todo: data.todo, uindex: data.index })
    },
    Discard (data) { // Hand to Drop
      let hand = []
      let drop = []
      if (data.who === 'Player') {
        hand = this.player.hand
        drop = this.player.drop
      } else {
        hand = this.opponent.hand
        drop = this.opponent.drop
      }
      const unit = hand[data.index]
      drop.push(unit)
      hand.splice(data.index, 1)
      const ID = drop.length - 1
      const UD = drop[ID]
      this.EFAUTO({ who: data.who, code: UD.code, index: ID, stat: 'EFDROP' })
      this.EFCONT({ who: data.who, event: 'SEND TO DROP' })
    },
    DMG (data) {
      if (data.who === 'Player') {
        this.player.life -= data.deal
        if (this.player.life <= 0) {
          alert('You Lose Duel')
          this.$router.replace({
            name: 'Home'
          })
        }
      } else {
        this.opponent.life -= data.deal
        if (this.opponent.life <= 0) {
          alert('You Win Duel')
          this.$router.replace({
            name: 'Home'
          })
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
      if (data.who === 'Player') {
        const unit = this.player.field[data.index]
        unit.gainAuto += data.gain
        unit.totalPow = unit.card.power + unit.gaintCont + unit.gainAuto
        if (unit.otherCont.length > 0) {
          unit.otherCont.map((other) => {
            unit.totalPow += other.gain
          })
        }
      } else {
        const unit = this.opponent.field[data.index]
        unit.gainAuto += data.gain
        unit.totalPow = unit.card.power + unit.gaintCont + unit.gainAuto
        if (unit.otherCont.length > 0) {
          unit.otherCont.map((other) => {
            unit.totalPow += other.gain
          })
        }
      }
    },
    GCP (data) { // Gain Cont Power
      if (data.who === 'Player') {
        const unit = this.player.field[data.index]
        unit.gaintCont = data.gain
        unit.totalPow = unit.card.power + unit.gaintCont + unit.gainAuto
        if (unit.otherCont.length > 0) {
          unit.otherCont.map((other) => {
            unit.totalPow += other.gain
          })
        }
      } else {
        const unit = this.opponent.field[data.index]
        unit.gaintCont = data.gain
        unit.totalPow = unit.card.power + unit.gaintCont + unit.gainAuto
        if (unit.otherCont.length > 0) {
          unit.otherCont.map((other) => {
            unit.totalPow += other.gain
          })
        }
      }
    },
    EFCONT (data) { // Effect Cont
      console.log('EFF CONT')
      console.log(data)
      if (data.event === 'SEND TO DROP') { this.EFSTD(data) }
      if (data.event === 'DRAW A CARD') { this.EFDRW(data) }
      if (data.event === 'GAIN LIFE POINT') { this.EFHEAL(data) }
      if (data.event === 'COUNT UNIT ON FIELD') { this.EFFIELD(data) }
      if (data.event === 'UNIT TO REST') { this.EFREST(data) }
      if (data.event === 'UNIT TO STAND') { this.EFSTAND(data) }
    },
    EFFIELD (data) {
      console.log('EFF FIELD')
      console.log(data)
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
      }
      for (let i = 0; i < BFOP.length; i++) {
        if (BFOP[i].card.code === '019') { this.EF019({ who: op, index: i }) }
        if (BFOP[i].card.code === '031') { this.EF031({ who: op, index: i }) }
        if (BFOP[i].card.code === '035') { this.EF035({ who: op, index: i }) }
        if (BFOP[i].card.code === '043') { this.EF043({ who: op, index: i }) }
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
      console.log('EFF STAND')
      console.log(data)
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
    EFACT (data) { // Effect Act
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
    },
    ACTDSC (data) {
      let unit = {}
      if (data.who === 'Player') {
        unit = this.player.field[data.uindex]
      } else {
        unit = this.opponent.field[data.uindex]
      }
      if (unit.OPT === false) {
        this.Discard({ who: data.who, index: data.index })
        unit.OPT = true
        this.closeInfo()
        this.RESDSC(data)
      } else {
        alert('Effect One Per Turn')
        this.closeInfo()
      }
    },
    RESDSC (data) {
      if (data.code === '017') { this.RES017(data) }
      if (data.code === '022') { this.RES022(data) }
      if (data.code === '023') { this.RES023(data) }
      if (data.code === '024') { this.RES024(data) }
      if (data.code === '026') { this.RES026(data) }
    },
    RES017 (data) {
      this.GAP({ who: data.who, index: data.uindex, gain: 2000 })
    },
    RES022 (data) {
      this.GAP({ who: data.who, index: data.uindex, gain: 3000 })
    },
    RES023 (data) {
      data.zone = 'FIELD'
      data.todo = 'BIND UNIT'
      this.TARGETG1(data)
    },
    RES024 (data) {
      data.zone = 'FIELD'
      data.todo = 'DESTROY UNIT'
      this.TARGETG1(data)
    },
    RES026 (data) {
      data.zone = 'DECK'
      data.todo = 'DECK TO FIELD'
      data.search = 'Vinsmoke'
      data.notSearch = 'Vinsmoke Judge'
      this.TARGETDECK(data)
    },
    ACTOPT (data) {
      console.log('ACT OPT')
      console.log(data)
      let unit = {}
      if (data.who === 'Player') {
        unit = this.player.field[data.uindex]
      } else {
        unit = this.opponent.field[data.uindex]
      }
      if (unit.OPT === false) {
        const costs = data.costs
        costs.map((cost) => {
          if (cost === 'FIELD TO DROP') { this.UDF(data) }
          if (cost === 'PAY LIFE POINTS') { this.DMG({ who: data.who, deal: data.pay }) }
        })
        unit.OPT = true
        this.closeInfo()
        const rests = data.rests
        rests.map((rest) => {
          if (rest === 'DEAL DAMAGE') {
            if (data.target === 'OPPONENT') {
              let BF = []
              let deal = ''
              let who = ''
              if (data.who === 'Player') {
                who = 'Opponent'
                BF = this.player.field
              } else {
                who = 'Player'
                BF = this.opponent.field
              }
              deal = BF[data.index].totalPow
              this.DMG({ who: who, deal: deal })
            }
          }
          if (rest === 'FIELD TO DROP') { this.UDF(data) }
          if (rest === 'FIELD TO DECK') {
            if (data.who === 'Player') {
              data.who = 'Opponent'
            } else {
              data.who = 'Player'
            }
            if (data.target === 'ALL') {
              this.TARGETALL(data)
            }
          }
          if (rest === 'DROP TO FIELD') {
            data.todo = 'DROP TO FIELD'
            this.TARGETDROP(data)
          }
          if (rest === 'GET AUTO POWER') {
            this.GAP(data)
          }
          if (rest === 'DISCARD RANDOM OP') {
            let who = ''
            if (data.who === 'Player') {
              who = 'Opponent'
            } else {
              who = 'Player'
            }
            this.DISCARDRANDOM({ who: who })
          }
          if (rest === 'DESTROY UNIT') {
            if (data.who === 'Player') {
              data.who = 'Opponent'
            } else {
              data.who = 'Player'
            }
            if (data.target === 'ALL') {
              this.TARGETALL(data)
            }
          }
          if (rest === 'UNIT TO REST') {
            if (data.who === 'Player') {
              data.who = 'Opponent'
            } else {
              data.who = 'Player'
            }
            if (data.target === 'ALL') {
              this.TARGETALL(data)
            }
          }
          if (rest === 'STAND UNIT') {
            if (data.target === 'SELF') {
              this.TARGETSELF(data)
            }
          }
        })
      } else {
        alert('Effect One Per Turn')
        this.closeInfo()
      }
    },
    ACT017 (data) { // Vinsmoke Sanji
      data.code = '017'
      this.ACTDSC(data)
    },
    ACT022 (data) { // Vinsmoke Sanji
      data.code = '022'
      this.ACTDSC(data)
    },
    ACT023 (data) { // Vinsmoke Niji
      data.code = '023'
      this.ACTDSC(data)
    },
    ACT024 (data) { // Vinsmoke Ichiji
      data.code = '024'
      this.ACTDSC(data)
    },
    ACT026 (data) { // Vinsmoke Judge
      data.code = '026'
      this.ACTDSC(data)
    },
    ACT033 (data) { // Gecko Moria
      data.costs = ['FIELD TO DROP', 'PAY LIFE POINTS']
      data.pay = 1000
      data.rests = ['DROP TO FIELD']
      this.ACTOPT(data)
    },
    ACT045 (data) {
      data.costs = ['PAY LIFE POINTS']
      data.pay = 500
      data.rests = ['DEAL DAMAGE', 'FIELD TO DROP']
      data.target = 'OPPONENT'
      this.ACTOPT(data)
    },
    EFAUTO (data) { // Effect Auto
      console.log('EFF AUTO')
      console.log(data)
      if (data.stat === 'EFATK') { this.EFATK(data) }
      if (data.stat === 'EFDEF') { this.EFDEF(data) }
      if (data.stat === 'EFCAL') { this.EFCAL(data) }
      if (data.stat === 'EFDROP') { this.EFDROP(data) }
      if (data.stat === 'EFDSBT') { this.EFDSBT(data) }
      if (data.stat === 'EFCALDR') { this.EFCALDR(data) } // Call From Drop
      if (data.stat === 'EFENDPHASE') { this.EFENDPHASE(data) }
    },
    EFATK (data) {
      if (data.code === '001') { this.EF001({ who: data.who, index: data.index }) }
      if (data.code === '002') { this.EF002({ who: data.who, index: data.index }) }
      if (data.code === '021') { this.EF021({ who: data.who, index: data.index }) }
      if (data.code === '028') { this.EF028({ who: data.who, index: data.index }) }
      if (data.code === '044') { this.EF044AUTO({ who: data.who, index: data.index }) }
      if (data.code === '050') { this.EF050AUTO({ who: data.who, index: data.index }) }
    },
    EFDEF (data) {
      if (data.code === '001') { this.EF001({ who: data.who, index: data.index }) }
      if (data.code === '003') { this.EF003({ who: data.who, index: data.index }) }
      if (data.code === '018') { this.EF018({ who: data.who, index: data.index }) }
      if (data.code === '047') { this.EF047({ who: data.who, index: data.index }) }
      if (data.code === '048') { this.EF048({ who: data.who, index: data.index }) }
    },
    EFCALDR (data) {
      if (data.code === '034') { this.EF034({ who: data.who, index: data.index }) }
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
    },
    EFDROP (data) { // Send to Drop
      if (data.code === '009') { this.EF009({ who: data.who, index: data.index }) }
      if (data.code === '011') { this.EF011({ who: data.who, index: data.index }) }
      if (data.code === '025') { this.EF025({ who: data.who, index: data.index }) }
      if (data.code === '027') { this.EF027({ who: data.who, index: data.index }) }
      if (data.code === '036') { this.EF036({ who: data.who, index: data.index }) }
    },
    EFDSBT (data) { // Effect Destroy by Battle
      if (data.code === '032') { this.EF032({ who: data.who, index: data.index }) }
    },
    EFENDPHASE (who) { // Effect End Phase
      let BF = []
      let BFOP = []
      let op = ''
      if (who === 'Player') {
        BF = this.player.field
        BFOP = this.opponent.field
        op = 'Opponent'
      } else {
        BF = this.opponent.field
        BFOP = this.player.field
        op = 'Player'
      }
      for (let i = 0; i < BF.length; i++) {
        if (BF[i].card.code === '039') { this.EF039({ who: who, index: i }) }
        if (BF[i].card.code === '050') { this.EF050({ who: who, index: i }) }
      }
      for (let i = 0; i < BFOP.length; i++) {
        if (BFOP[i].card.code === '039') { this.EF039({ who: op, index: i }) }
        if (BFOP[i].card.code === '050') { this.EF050({ who: op, index: i }) }
      }
    },
    EF001 (data) { // Monkey D. Luffy
      data.gain = 1000
      this.GAP(data)
    },
    EF002 (data) { // Roronoa Zoro
      data.gain = 1000
      this.GAP(data)
      this.$swal.fire({
        title: 'Aktifkan Effek Roronoa Zoro?',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          this.DMG({ who: data.who, deal: 500 })
          data.gain = 1000
          this.GAP(data)
        }
      })
    },
    EF003 (data) { // Vinsmoke Sanji
      data.gain = 2000
      this.GAP(data)
    },
    EF004 (data) { // Nami
      this.DP(data.who)
    },
    EF005 (data) { // Usopp
      const cards = []
      let deck = []
      if (data.who === 'Player') {
        deck = this.player.deck.deck
      } else {
        deck = this.opponent.deck.deck
      }
      deck.map((unit) => {
        if (unit.grade === 1) {
          cards.push(unit)
        }
      })
      this.ADD({ who: data.who, zone: 'DECK', card: cards, todo: 'ADD TO HAND' })
    },
    EF006 (data) { // Chopper
      this.HEAL({ who: data.who, heal: 2000 })
    },
    EF007 (data) { // Nico Robin
      for (let i = 0; i < 2; i++) {
        this.DP(data.who)
      }
      let cards = []
      if (data.who === 'Player') {
        cards = this.player.hand
      } else {
        cards = this.opponent.hand
      }
      this.ADD({ who: data.who, zone: 'HAND', card: cards, todo: 'HAND TO DECK' })
    },
    EF008 (data) { // Franky
      const cards = []
      let BF = []
      if (data.who === 'Player') {
        BF = this.opponent.field
        data.who = 'Opponent'
      } else {
        BF = this.player.field
        data.who = 'Player'
      }
      BF.map((unit) => {
        if (unit.card.grade === 1) {
          cards.push(unit.card)
        } else {
          cards.push({})
        }
      })
      this.ADD({ who: data.who, zone: 'FIELD', card: cards, todo: 'DESTROY UNIT' })
    },
    EF009 (data) { // Brook
      const cards = []
      let deck = []
      if (data.who === 'Player') {
        deck = this.player.deck.deck
      } else {
        deck = this.opponent.deck.deck
      }
      deck.map((unit) => {
        if (unit.name === 'Brook') {
          cards.push(unit)
        }
      })
      this.ADD({ who: data.who, zone: 'DECK', card: cards, todo: 'DECK TO FIELD' })
    },
    EF010 (data) { // Jinbei
      data.todo = 'FIELD TO HAND'
      this.TARGETG2LESS(data)
    },
    EF011 (data) { // Brook
      this.DRTB({ who: data.who, index: data.index })
      const cards = []
      let drop = []
      if (data.who === 'Player') {
        drop = this.player.drop
      } else {
        drop = this.opponent.drop
      }
      drop.map((unit) => {
        if (unit.name === 'Brook') {
          cards.push(unit)
        }
      })
      this.ADD({ who: data.who, zone: 'DROP', card: cards, todo: 'DROP TO FIELD' })
    },
    EF012 (data) { // Franky
      data.gain = 500
      let unit = {}
      if (data.who === 'Player') {
        unit = this.player.field[data.index]
      } else {
        unit = this.opponent.field[data.index]
      }
      data.gain += unit.gaintCont
      this.GCP(data)
    },
    EF013 (data) { // Nico Robin
      data.gain = 500
      let unit = {}
      if (data.who === 'Player') {
        unit = this.player.field[data.index]
      } else {
        unit = this.opponent.field[data.index]
      }
      data.gain += unit.gaintCont
      this.GCP(data)
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
      let deck = []
      if (data.who === 'Player') {
        deck = this.player.deck.deck
      } else {
        deck = this.opponent.deck.deck
      }
      deck.map((unit) => {
        if (unit.grade === 1 && unit.grade !== 'Usopp') {
          cards.push(unit)
        }
      })
      this.ADD({ who: data.who, zone: 'DECK', card: cards, todo: 'DECK TO FIELD' })
    },
    EF016 (data) { // Nami
      const cards = []
      let BF = []
      if (data.who === 'Player') {
        BF = this.opponent.field
        data.who = 'Opponent'
      } else {
        BF = this.player.field
        data.who = 'Player'
      }
      BF.map((unit) => {
        if (unit.card.grade === 1) {
          cards.push(unit.card)
        } else {
          cards.push({})
        }
      })
      this.ADD({ who: data.who, zone: 'FIELD', card: cards, todo: 'BIND UNIT' })
    },
    EF017 (data) { // Vinsmoke Sanji
      data.todo = 'ACT017'
      this.TARGETHAND(data)
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
          const index = BF.length - 1
          this.UBF({ who: data.who, index: index })
          deck.map((unit) => {
            if (unit.grade === 1 && unit.name !== 'Nefertari Vivi') {
              cards.push(unit)
            }
          })
          this.ADD({ who: data.who, zone: 'DECK', card: cards, todo: 'DECK TO FIELD' })
        }
      })
    },
    EF021 (data) { // Vinsmoke Yonji
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
        this.GAP(data)
      }
    },
    EFVSM (data) { // Effect Vinsmoke (Discard)
      const cards = []
      let hand
      if (data.who === 'Player') {
        hand = this.player.hand
      } else {
        hand = this.opponent.hand
      }
      hand.map((card) => {
        if (card.name.search('Vinsmoke') >= 0) {
          cards.push(card)
        } else {
          cards.push({})
        }
      })
      this.ADD({ who: data.who, zone: 'HAND', card: cards, todo: data.todo, uindex: data.index })
    },
    EF022 (data) { // Vinsmoke Sanji
      data.todo = 'ACT022'
      this.EFVSM(data)
    },
    EF023 (data) { // Vinsmoke Niji
      data.todo = 'ACT023'
      this.EFVSM(data)
    },
    EF024 (data) { // Vinsmoke Ichiji
      data.todo = 'ACT024'
      this.EFVSM(data)
    },
    EF025 (data) { // Vinsmoke Reiju
      let BF = []
      let drop
      if (data.who === 'Player') {
        BF = this.player.field
        drop = this.player.drop
      } else {
        BF = this.opponent.field
        drop = this.opponent.drop
      }
      this.DRTD({ who: data.who, index: drop.length - 1 })
      for (let i = 0; i < BF.length; i++) {
        if (BF[i].card.name.search('Vinsmoke') >= 0) {
          this.GAP({ who: data.who, index: i, gain: 1000 })
        }
      }
    },
    EF026 (data) { // Vinsmoke Judge
      data.todo = 'ACT026'
      this.EFVSM(data)
    },
    EF027 (data) { // Vinsmoke Sora
      let drop
      if (data.who === 'Player') {
        drop = this.player.drop
      } else {
        drop = this.opponent.drop
      }
      this.DRTD({ who: data.who, index: drop.length - 1 })
      data.search = 'Vinsmoke'
      data.notSearch = ''
      data.zone = 'DROP'
      data.todo = 'DROP TO HAND'
      this.TARGETDROP(data)
    },
    EF028 (data) { // Smoker
      let phase = ''
      let unit = {}
      if (this.turn === 'Player') {
        phase = this.player.phase
        unit = this.player.field[data.index]
      } else {
        phase = this.opponent.phase
        unit = this.opponent.field[data.index]
      }
      data.zone = 'FIELD'
      data.todo = 'UNIT TO REST'
      if (phase === 'MP1' || phase === 'MP2') {
        if (unit.OPT === false) {
          this.DMG({ who: data.who, deal: 500 })
          this.TARGETG2LESS(data)
          unit.OPT = true
        } else {
          alert('Effect One Per Turn')
        }
      }
      if (phase === 'BP') {
        this.$swal.fire({
          title: 'Aktifkan Effek Smoker?',
          showCancelButton: true,
          confirmButtonText: 'YES',
          cancelButtonText: 'NO'
        }).then((result) => {
          if (result.isConfirmed) {
            this.DMG({ who: data.who, deal: 500 })
            this.TARGETG2LESS(data)
          }
        })
      }
    },
    EF029 (data) { // Tama
      const cards = []
      let deck = []
      if (data.who === 'Player') {
        deck = this.player.deck.deck
      } else {
        deck = this.opponent.deck.deck
      }
      deck.map((unit) => {
        if (unit.type.race === 'Beast' || unit.type.special === 'Zoan') {
          cards.push(unit)
        }
      })
      this.ADD({ who: data.who, zone: 'DECK', card: cards, todo: 'ADD TO HAND' })
    },
    EF030 (data) { // Kozuki Momonosuke
      const cards = []
      let deck = []
      if (data.who === 'Player') {
        deck = this.player.deck.deck
      } else {
        deck = this.opponent.deck.deck
      }
      deck.map((unit) => {
        if (unit.type.job === 'Swordman') {
          cards.push(unit)
        }
      })
      this.ADD({ who: data.who, zone: 'DECK', card: cards, todo: 'ADD TO HAND' })
    },
    EF031ACT (data) { // Sir Crocodile EFFECT ACTIVE
      let unit = {}
      let drop = []
      let deck = []
      let notif = ''
      if (this.turn === 'Player') {
        unit = this.player.field[data.index]
        drop = this.player.drop
        deck = this.player.deck.deck
        notif = 'You Lose Duel'
      } else {
        unit = this.opponent.field[data.index]
        drop = this.player.drop
        deck = this.player.deck.deck
        notif = 'You Win Duel'
      }
      if (unit.OPT === false) {
        drop.push(deck[0])
        deck.splice(0, 1)
        data.gain = 1000
        this.GAP(data)
        if (deck.length === 0) {
          alert(notif)
          this.$router.replace({
            name: 'Home'
          })
        }
        unit.OPT = true
      } else {
        alert('Effect One Per Turn')
      }
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
      this.DRTH(data)
    },
    EF033 (data) { // Gecko Moria
      data.todo = 'ACT033'
      this.TARGETOWNER(data)
    },
    EF034 (data) { // Monkey D. Luffy
      let drop = []
      if (data.who === 'Player') {
        drop = this.player.drop
      } else {
        drop = this.opponent.drop
      }
      this.DMG({ who: data.who, deal: 500 })
      data.gain = (500 * drop.length)
      this.GAP(data)
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
      this.DRTH(data)
    },
    DISCARDRANDOM (data) { // Discard Random
      let hand = []
      if (data.who === 'Player') {
        hand = this.player.hand
      } else {
        hand = this.opponent.hand
      }
      const index = Math.floor(Math.random() * hand.length)
      this.Discard({ who: data.who, index: index })
    },
    EF037 (data) { // Donquixote Doflamingo
      data.uindex = data.index
      data.costs = []
      data.rests = ['GET AUTO POWER']
      data.gain = 1000
      let hand = []
      if (data.who === 'Player') {
        hand = this.opponent.hand
      } else {
        hand = this.player.hand
      }
      if (hand.length > 0) {
        data.rests.push('DISCARD RANDOM OP')
      }
      this.ACTOPT(data)
    },
    EF038 (data) { // Chopper
      this.FTD(data)
      data.todo = 'DECK TO FIELD'
      data.name = 'Tony Tony Chopper'
      data.grade = 3
      this.TARGETDECKNG(data)
    },
    EF039 (data) { // Chopper
      this.FTD(data)
      data.todo = 'DECK TO FIELD'
      data.name = 'Tony Tony Chopper'
      data.grade = 2
      this.TARGETDECKNGLESS(data)
    },
    EF040 (data) { // Jack
      this.FTD(data)
      data.todo = 'DECK TO FIELD'
      data.name = 'Jack'
      data.grade = 3
      this.TARGETDECKNG(data)
    },
    EF041 (data) { // Aladdin
      data.todo = 'FIELD TO HAND'
      this.TARGETG1(data)
    },
    EF042 (data) { // Akainu Effect Cont
      data.gain = 500
      let unit = {}
      if (data.who === 'Player') {
        unit = this.player.field[data.index]
      } else {
        unit = this.opponent.field[data.index]
      }
      data.gain += unit.gaintCont
      this.GCP(data)
    },
    EF042ACT (data) { // Akainu
      data.uindex = data.index
      data.todo = 'DESTROY UNIT'
      data.costs = []
      data.rests = ['DESTROY UNIT']
      data.target = 'ALL'
      this.ACTOPT(data)
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
      data.uindex = data.index
      data.todo = 'UNIT TO REST'
      data.costs = []
      data.rests = ['UNIT TO REST']
      data.target = 'ALL'
      this.ACTOPT(data)
    },
    EF044 (data) { // Kizaru Effect Cont
      console.log('KIZARUUU')
      console.log(data)
      data.gain = 500
      let unit = {}
      if (data.who === 'Player') {
        unit = this.player.field[data.index]
      } else {
        unit = this.opponent.field[data.index]
      }
      data.gain += unit.gaintCont
      this.GCP(data)
    },
    EF044AUTO (data) { // Kizaru Effect Auto
      this.$swal.fire({
        title: 'Aktifkan Effek Kizaru ?',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          data.uindex = data.index
          data.todo = 'STAND UNIT'
          data.costs = []
          data.rests = ['STAND UNIT']
          data.target = 'SELF'
          this.ACTOPT(data)
        }
      })
    },
    EF045 (data) { // Trafalgal D. Water Law
      data.todo = 'ACT045'
      this.TARGETOWNER(data)
    },
    EF046 (data) { // Bartholomew Kuma
      data.uindex = data.index
      data.todo = 'FIELD TO DECK'
      data.costs = []
      data.rests = ['FIELD TO DECK']
      data.target = 'ALL'
      this.ACTOPT(data)
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
      this.FTD(data)
      data.todo = 'DECK TO FIELD'
      data.name = 'Inuarashi'
      data.grade = 3
      this.TARGETDECKNG(data)
    },
    EFSULONG (data) { // EFFECT SULONG
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
        if (deck[i].name === data.name && deck[i].grade === 2) {
          cards.push({ card: deck[i], index: i })
        }
      }
      if (cards.length > 0) {
        const random = Math.floor(Math.random() * cards.length)
        if (BF.length < 6) {
          BF.push({
            card: cards[random].card,
            position: 'Stand',
            gainAuto: 0,
            gaintCont: 0,
            totalPow: cards[random].power,
            otherCont: [],
            OPT: false, // One Per Turn
            CON: false // Continu Effect
          })
          deck.splice(cards[random].index, 1)
          if (data.who === 'Player') { this.DPS() }
          if (data.who === 'Opponent') { this.DOS() }
          const index = BF.length - 1
          const unit = BF[index].card
          this.EFAUTO({ who: 'Player', code: unit.code, index: index, stat: 'EFCAL' })
          this.EFCONT({ who: 'Player', event: 'COUNT UNIT ON FIELD' })
        } else {
          alert('Field Penuh')
          this.closeInfo()
        }
      }
    },
    EF050 (data) { // Inuarashi Sulong END PHASE
      data.name = 'Inuarashi'
      this.FTD(data)
      this.EFSULONG(data)
    },
    EF050AUTO (data) { // Inuarashi Sulong AUTO ATK
      let BF = []
      let count = 0
      if (data.who === 'Player') {
        BF = this.player.field
      } else {
        BF = this.opponent.field
      }
      BF.map((unit) => {
        if (unit.card.type.race === 'Beast') {
          count += 1
        }
      })
      this.DMG({ who: data.who, deal: 500 })
      data.gain = (500 * count)
      this.GAP(data)
    }
  },
  created () {
    this.parseDP()
    this.DPS() // Shuffle Deck Player
    this.DOS()
    this.ODP()
    this.ODO()
    this.RFT()
  },
  updated () {
    if (this.turn === 'Player') {
      if (this.player.phase === 'BP') {
        if (this.player.atk !== 0) {
          let OPU = 0
          this.opponent.field.map((U) => {
            if (U.position === 'Stand') { OPU += 1 }
          })
          if (OPU > 0) {
            if (this.info.isOpen !== true) {
              this.onDef({
                who: {
                  atk: 'Player',
                  def: 'Opponent'
                },
                index: {
                  atk: this.player.indexATK,
                  def: 0
                }
              })
            }
          } else {
            this.DMG({ who: 'Opponent', deal: this.player.atk })
            this.player.atk = 0
          }
        }
      }
    } else {
      if (this.opponent.phase === 'BP') {
        if (this.opponent.atk !== 0) {
          let PLU = 0
          this.player.field.map((U) => {
            if (U.position === 'Stand') { PLU += 1 }
          })
          if (PLU > 0) {
            if (this.info.isOpen !== true) {
              this.onDef({
                who: {
                  atk: 'Opponent',
                  def: 'Player'
                },
                index: {
                  atk: this.opponent.indexATK,
                  def: 0
                }
              })
            }
          } else {
            this.DMG({ who: 'Player', deal: this.opponent.atk })
            this.opponent.atk = 0
          }
        }
      }
    }
  }
}
</script>
