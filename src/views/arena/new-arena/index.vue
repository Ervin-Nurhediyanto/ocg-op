<template>
  <div class="row m-0 h-100vh bg-op-2">
    <INFO
      :data="data"
      v-on:onDisplay="onDisplay"
      v-on:changePhase="changePhase"
    />
    <ARENA
      :data="data"
      v-on:onDisplay="onDisplay"
      v-on:call="call"
      v-on:callFromHand="callFromHand"
      v-on:unitATK="unitATK"
      v-on:unitDEF="unitDEF"
      v-on:moveOrACT="moveOrACT"
      v-on:openZone="openZone"
      v-on:destroy="destroy"
      v-on:bind="bind"
      v-on:rest="rest"
      v-on:move="move"
      v-on:FIELD_TO_HAND="FIELD_TO_HAND"
      v-on:FIELD_TO_DECK="FIELD_TO_DECK"
    />
    <DISPLAY
      :data="data"
    />
  </div>
</template>

<script>
import INFO from './info/index.vue'
import ARENA from './arena/index.vue'
import DISPLAY from './display/index.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'New-Arena',
  data () {
    return {
      data: {
        info: {
          who: '',
          todo: '',
          cards: []
        },
        display: {},
        turn: 'player',
        phase: 'SP',
        player: {
          life: 8000,
          todo: '',
          unit: {}, // Unit to Call
          unitATK: {},
          unitDEF: {},
          mana: {
            use: 0,
            max: 0
          },
          deck: [],
          drop: [],
          bind: [],
          hand: [],
          field: {
            front: {
              unitF1: {
                isUnit: false,
                card: {},
                position: 'Stand',
                power: 0,
                gain: {
                  auto: 0,
                  cont: 0
                },
                onePerTurn: false
              },
              unitF2: {
                isUnit: false,
                card: {},
                position: 'Stand',
                power: 0,
                gain: {
                  auto: 0,
                  cont: 0
                },
                onePerTurn: false
              },
              unitF3: {
                isUnit: false,
                card: {},
                position: 'Stand',
                power: 0,
                gain: {
                  auto: 0,
                  cont: 0
                },
                onePerTurn: false
              }
            },
            back: {
              unitB1: {
                isUnit: false,
                card: {},
                position: 'Stand',
                power: 0,
                gain: {
                  auto: 0,
                  cont: 0
                },
                onePerTurn: false
              },
              unitB2: {
                isUnit: false,
                card: {},
                position: 'Stand',
                power: 0,
                gain: {
                  auto: 0,
                  cont: 0
                },
                onePerTurn: false
              },
              unitB3: {
                isUnit: false,
                card: {},
                position: 'Stand',
                power: 0,
                gain: {
                  auto: 0,
                  cont: 0
                },
                onePerTurn: false
              }
            }
          }
        },
        opponent: {
          life: 8000,
          todo: '',
          unit: {}, // Unit to Call
          unitATK: {},
          unitDEF: {},
          mana: {
            use: 0,
            max: 0
          },
          deck: [],
          drop: [],
          bind: [],
          hand: [],
          field: {
            front: {
              unitF1: {
                isUnit: false,
                card: {},
                position: 'Stand',
                power: 0,
                gain: {
                  auto: 0,
                  cont: 0
                },
                onePerTurn: false
              },
              unitF2: {
                isUnit: false,
                card: {},
                position: 'Stand',
                power: 0,
                gain: {
                  auto: 0,
                  cont: 0
                },
                onePerTurn: false
              },
              unitF3: {
                isUnit: false,
                card: {},
                position: 'Stand',
                power: 0,
                gain: {
                  auto: 0,
                  cont: 0
                },
                onePerTurn: false
              }
            },
            back: {
              unitB1: {
                isUnit: false,
                card: {},
                position: 'Stand',
                power: 0,
                gain: {
                  auto: 0,
                  cont: 0
                },
                onePerTurn: false
              },
              unitB2: {
                isUnit: false,
                card: {},
                position: 'Stand',
                power: 0,
                gain: {
                  auto: 0,
                  cont: 0
                },
                onePerTurn: false
              },
              unitB3: {
                isUnit: false,
                card: {},
                position: 'Stand',
                power: 0,
                gain: {
                  auto: 0,
                  cont: 0
                },
                onePerTurn: false
              }
            }
          }
        }
      }
    }
  },
  components: {
    INFO,
    ARENA,
    DISPLAY
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
    parse (data, who) {
      const parse = JSON.parse(data, (key, value) => {
        if (typeof value === 'string') {
          return value
        }
        return value
      })
      if (who === 'player') {
        this.data.player.deck = parse.deck
      } else {
        this.data.opponent.deck = parse.deck
      }
    },
    Toast (icon, title) {
      this.$swal.mixin().fire({
        icon: icon,
        title: title,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      })
    },
    onDisplay (data) {
      this.data.display = data
    },
    FIRST () {
      const user = ['player', 'opponent']
      // const user = ['player', 'player']
      const index = Math.floor(Math.random() * user.length)
      alert(`${user[index]} First Turn`)
      this.data.turn = user[index]
      this.changePhase({ who: user[index], phase: 'SP' })
    },
    changePhase (data) {
      this.handleChangePhase(data)
    },
    handleChangePhase (data) {
      this.data.phase = data.phase
      if (data.phase === 'SP') {
        this.SP(data)
        setTimeout(() => this.changePhase({ who: data.who, phase: 'DP' }), 500)
      }
      if (data.phase === 'DP') {
        this.DP(data)
        setTimeout(() => this.changePhase({ who: data.who, phase: 'MP1' }), 500)
      }
      if (data.phase === 'BP') {
        this.BP(data)
      }
      if (data.phase === 'EP') {
        this.EP(data)
        if (data.who === 'player') {
          this.data.turn = 'opponent'
          setTimeout(() => this.changePhase({ who: 'opponent', phase: 'SP' }), 500)
        } else {
          this.data.turn = 'player'
          setTimeout(() => this.changePhase({ who: 'player', phase: 'SP' }), 500)
        }
      }
    },
    SP (data) {
      this.addMana(data)
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.front.unitF1.position = 'Stand'
      data.front.unitF2.position = 'Stand'
      data.front.unitF3.position = 'Stand'
      data.back.unitB1.position = 'Stand'
      data.back.unitB2.position = 'Stand'
      data.back.unitB3.position = 'Stand'
      this.EFF_CONT(data)
    },
    DP (data) {
      this.draw(data)
    },
    BP (data) {
      this.EFF_AUTO({ who: data.who, condition: 'AUTO ON BP' })
      this.EFF_AUTO({ who: data.who, condition: 'AUTO ON BP OP' })
    },
    EP (data) {
      // PLAYER
      // CLEAR POWER
      this.data.player.field.front.unitF1.power -= this.data.player.field.front.unitF1.gain.auto
      this.data.player.field.front.unitF1.gain.auto = 0
      this.data.player.field.front.unitF2.power -= this.data.player.field.front.unitF2.gain.auto
      this.data.player.field.front.unitF2.gain.auto = 0
      this.data.player.field.front.unitF3.power -= this.data.player.field.front.unitF3.gain.auto
      this.data.player.field.front.unitF3.gain.auto = 0
      this.data.player.field.back.unitB1.power -= this.data.player.field.back.unitB1.gain.auto
      this.data.player.field.back.unitB1.gain.auto = 0
      this.data.player.field.back.unitB2.power -= this.data.player.field.back.unitB2.gain.auto
      this.data.player.field.back.unitB2.gain.auto = 0
      this.data.player.field.back.unitB3.power -= this.data.player.field.back.unitB3.gain.auto
      this.data.player.field.back.unitB3.gain.auto = 0
      // CLEAR ACT
      this.data.player.field.front.unitF1.onePerTurn = false
      this.data.player.field.front.unitF2.onePerTurn = false
      this.data.player.field.front.unitF3.onePerTurn = false
      this.data.player.field.back.unitB1.onePerTurn = false
      this.data.player.field.back.unitB2.onePerTurn = false
      this.data.player.field.back.unitB3.onePerTurn = false
      // OPPONENT
      // CLEAR POWER
      this.data.opponent.field.front.unitF1.power -= this.data.opponent.field.front.unitF1.gain.auto
      this.data.opponent.field.front.unitF1.gain.auto = 0
      this.data.opponent.field.front.unitF2.power -= this.data.opponent.field.front.unitF2.gain.auto
      this.data.opponent.field.front.unitF2.gain.auto = 0
      this.data.opponent.field.front.unitF3.power -= this.data.opponent.field.front.unitF3.gain.auto
      this.data.opponent.field.front.unitF3.gain.auto = 0
      this.data.opponent.field.back.unitB1.power -= this.data.opponent.field.back.unitB1.gain.auto
      this.data.opponent.field.back.unitB1.gain.auto = 0
      this.data.opponent.field.back.unitB2.power -= this.data.opponent.field.back.unitB2.gain.auto
      this.data.opponent.field.back.unitB2.gain.auto = 0
      this.data.opponent.field.back.unitB3.power -= this.data.opponent.field.back.unitB3.gain.auto
      this.data.opponent.field.back.unitB3.gain.auto = 0
      // CLEAR ACT
      this.data.opponent.field.front.unitF1.onePerTurn = false
      this.data.opponent.field.front.unitF2.onePerTurn = false
      this.data.opponent.field.front.unitF3.onePerTurn = false
      this.data.opponent.field.back.unitB1.onePerTurn = false
      this.data.opponent.field.back.unitB2.onePerTurn = false
      this.data.opponent.field.back.unitB3.onePerTurn = false
      this.EFF_AUTO({ who: data.who, condition: 'AUTO ON END TURN' })
      this.EFF_AUTO({ who: data.who, condition: 'AUTO ON END DROP' })
    },
    addMana (data) {
      if (data.who === 'player') {
        data.mana = this.data.player.mana
      } else {
        data.mana = this.data.opponent.mana
      }
      data.mana.max += 1
      data.mana.use = data.mana.max
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
      if (data.who === 'player') { this.data.player.deck = shuffle }
      if (data.who === 'opponent') { this.data.opponent.deck = shuffle }
    },
    draw (data) {
      if (data.who === 'player') {
        data.deck = this.data.player.deck
        data.hand = this.data.player.hand
      } else {
        data.deck = this.data.opponent.deck
        data.hand = this.data.opponent.hand
      }
      data.hand.push(data.deck[0])
      data.deck.splice(0, 1)
      if (data.deck.length === 0) {
        if (data.who === 'player') {
          this.Toast('error', 'YOU LOSE')
        } else {
          this.Toast('success', 'YOU WIN')
        }
      }
    },
    call (data) {
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      this.$swal.fire({
        title: `Call ${data.hand[data.index].name} ?`,
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          if (data.who === 'player') {
            data.mana = this.data.player.mana.use
            if (this.data.player.hand[data.index].grade <= data.mana) {
              this.Toast('info', 'Pilih Lokasi')
              this.data.player.todo = 'call from hand'
              this.data.player.unit = {
                card: this.data.player.hand[data.index],
                index: data.index
              }
            } else {
              this.Toast('error', 'Mana tidak cukup !!!')
            }
          } else {
            data.mana = this.data.opponent.mana.use
            if (this.data.opponent.hand[data.index].grade <= data.mana) {
              this.Toast('info', 'Pilih Lokasi')
              this.data.opponent.todo = 'call from hand'
              this.data.opponent.unit = {
                card: this.data.opponent.hand[data.index],
                index: data.index
              }
            } else {
              this.Toast('error', 'Mana tidak cukup !!!')
            }
          }
        }
      })
    },
    callFromHand (data) {
      if (data.who === 'player') {
        data.card = this.data.player.unit.card
      } else {
        data.card = this.data.opponent.unit.card
      }
      const unit = {
        isUnit: true,
        card: data.card,
        position: 'Stand',
        power: data.card.power,
        gain: {
          auto: 0,
          cont: 0
        },
        onePerTurn: false
      }
      if (data.who === 'player') {
        data.field = this.data.player.field
        data.hand = this.data.player.hand
        if (data.location === 'unit F1') {
          data.field.front.unitF1 = unit
          data.hand.splice(this.data.player.unit.index, 1)
        }
        if (data.location === 'unit F2') {
          data.field.front.unitF2 = unit
          data.hand.splice(this.data.player.unit.index, 1)
        }
        if (data.location === 'unit F3') {
          data.field.front.unitF3 = unit
          data.hand.splice(this.data.player.unit.index, 1)
        }
        if (data.location === 'unit B1') {
          data.field.back.unitB1 = unit
          data.hand.splice(this.data.player.unit.index, 1)
        }
        if (data.location === 'unit B2') {
          data.field.back.unitB2 = unit
          data.hand.splice(this.data.player.unit.index, 1)
        }
        if (data.location === 'unit B3') {
          data.field.back.unitB3 = unit
          data.hand.splice(this.data.player.unit.index, 1)
        }
        this.EFF_AUTO({ who: data.who, location: data.location, unit: this.data.player.unit, condition: 'AUTO ON FIELD' })
        this.data.player.todo = ''
        this.data.player.unit = {}
        this.data.player.mana.use -= unit.card.grade
      } else {
        data.field = this.data.opponent.field
        data.hand = this.data.opponent.hand
        if (data.location === 'unit F1') {
          data.field.front.unitF1 = unit
          data.hand.splice(this.data.opponent.unit.index, 1)
        }
        if (data.location === 'unit F2') {
          data.field.front.unitF2 = unit
          data.hand.splice(this.data.opponent.unit.index, 1)
        }
        if (data.location === 'unit F3') {
          data.field.front.unitF3 = unit
          data.hand.splice(this.data.opponent.unit.index, 1)
        }
        if (data.location === 'unit B1') {
          data.field.back.unitB1 = unit
          data.hand.splice(this.data.opponent.unit.index, 1)
        }
        if (data.location === 'unit B2') {
          data.field.back.unitB2 = unit
          data.hand.splice(this.data.opponent.unit.index, 1)
        }
        if (data.location === 'unit B3') {
          data.field.back.unitB3 = unit
          data.hand.splice(this.data.opponent.unit.index, 1)
        }
        this.EFF_AUTO({ who: data.who, location: data.location, unit: this.data.opponent.unit, condition: 'AUTO ON FIELD' })
        this.data.opponent.todo = ''
        this.data.opponent.unit = {}
        this.data.opponent.mana.use -= unit.card.grade
      }
      this.EFF_CONT(data)
    },
    callFromDeck (data) {
      const unit = {
        isUnit: true,
        card: data.card,
        position: 'Stand',
        power: data.card.power,
        gain: {
          auto: 0,
          cont: 0
        },
        onePerTurn: false
      }
      if (data.who === 'player') {
        data.field = this.data.player.field
        data.deck = this.data.player.deck
        if (data.location === 'unit F1') {
          data.field.front.unitF1 = unit
        }
        if (data.location === 'unit F2') {
          data.field.front.unitF2 = unit
        }
        if (data.location === 'unit F3') {
          data.field.front.unitF3 = unit
        }
        if (data.location === 'unit B1') {
          data.field.back.unitB1 = unit
        }
        if (data.location === 'unit B2') {
          data.field.back.unitB2 = unit
        }
        if (data.location === 'unit B3') {
          data.field.back.unitB3 = unit
        }
        data.deck.splice(data.index, 1)
        this.EFF_AUTO({ who: data.who, location: data.location, unit: unit, condition: 'AUTO ON FIELD' })
      } else {
        data.field = this.data.opponent.field
        data.deck = this.data.opponent.deck
        if (data.location === 'unit F1') {
          data.field.front.unitF1 = unit
        }
        if (data.location === 'unit F2') {
          data.field.front.unitF2 = unit
        }
        if (data.location === 'unit F3') {
          data.field.front.unitF3 = unit
        }
        if (data.location === 'unit B1') {
          data.field.back.unitB1 = unit
        }
        if (data.location === 'unit B2') {
          data.field.back.unitB2 = unit
        }
        if (data.location === 'unit B3') {
          data.field.back.unitB3 = unit
        }
        data.deck.splice(data.index, 1)
        this.EFF_AUTO({ who: data.who, location: data.location, unit: unit, condition: 'AUTO ON FIELD' })
      }
      this.EFF_CONT(data)
      this.shuffle({ who: data.who, deck: data.deck })
    },
    callFromDrop (data) {
      const unit = {
        isUnit: true,
        card: data.card,
        position: 'Stand',
        power: data.card.power,
        gain: {
          auto: 0,
          cont: 0
        },
        onePerTurn: false
      }
      if (data.who === 'player') {
        data.field = this.data.player.field
        data.drop = this.data.player.drop
        if (data.location === 'unit F1') {
          data.field.front.unitF1 = unit
        }
        if (data.location === 'unit F2') {
          data.field.front.unitF2 = unit
        }
        if (data.location === 'unit F3') {
          data.field.front.unitF3 = unit
        }
        if (data.location === 'unit B1') {
          data.field.back.unitB1 = unit
        }
        if (data.location === 'unit B2') {
          data.field.back.unitB2 = unit
        }
        if (data.location === 'unit B3') {
          data.field.back.unitB3 = unit
        }
        data.drop.splice(data.index, 1)
        this.EFF_AUTO({ who: data.who, location: data.location, unit: unit, condition: 'AUTO ON FIELD' })
      } else {
        data.field = this.data.opponent.field
        data.drop = this.data.opponent.drop
        if (data.location === 'unit F1') {
          data.field.front.unitF1 = unit
        }
        if (data.location === 'unit F2') {
          data.field.front.unitF2 = unit
        }
        if (data.location === 'unit F3') {
          data.field.front.unitF3 = unit
        }
        if (data.location === 'unit B1') {
          data.field.back.unitB1 = unit
        }
        if (data.location === 'unit B2') {
          data.field.back.unitB2 = unit
        }
        if (data.location === 'unit B3') {
          data.field.back.unitB3 = unit
        }
        data.drop.splice(data.index, 1)
        this.EFF_AUTO({ who: data.who, location: data.location, unit: unit, condition: 'AUTO ON FIELD' })
      }
      this.EFF_CONT(data)
    },
    callFromBind (data) {
      const unit = {
        isUnit: true,
        card: data.card,
        position: 'Stand',
        power: data.card.power,
        gain: {
          auto: 0,
          cont: 0
        },
        onePerTurn: false
      }
      if (data.who === 'player') {
        data.field = this.data.player.field
        data.bind = this.data.player.bind
        if (data.location === 'unit F1') {
          data.field.front.unitF1 = unit
        }
        if (data.location === 'unit F2') {
          data.field.front.unitF2 = unit
        }
        if (data.location === 'unit F3') {
          data.field.front.unitF3 = unit
        }
        if (data.location === 'unit B1') {
          data.field.back.unitB1 = unit
        }
        if (data.location === 'unit B2') {
          data.field.back.unitB2 = unit
        }
        if (data.location === 'unit B3') {
          data.field.back.unitB3 = unit
        }
        data.bind.splice(data.index, 1)
        this.EFF_AUTO({ who: data.who, location: data.location, unit: unit, condition: 'AUTO ON FIELD' })
      } else {
        data.field = this.data.opponent.field
        data.bind = this.data.opponent.bind
        if (data.location === 'unit F1') {
          data.field.front.unitF1 = unit
        }
        if (data.location === 'unit F2') {
          data.field.front.unitF2 = unit
        }
        if (data.location === 'unit F3') {
          data.field.front.unitF3 = unit
        }
        if (data.location === 'unit B1') {
          data.field.back.unitB1 = unit
        }
        if (data.location === 'unit B2') {
          data.field.back.unitB2 = unit
        }
        if (data.location === 'unit B3') {
          data.field.back.unitB3 = unit
        }
        data.bind.splice(data.index, 1)
        this.EFF_AUTO({ who: data.who, location: data.location, unit: unit, condition: 'AUTO ON FIELD' })
      }
      this.EFF_CONT(data)
    },
    CALL_FROM_DECK_BY_NAME (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.openLocation = []
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
      if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
      if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
      if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
      if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
      if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
      if (data.openLocation.length > 0) {
        const index = Math.floor(Math.random() * data.openLocation.length)
        data.location = data.openLocation[index]
        data.todo = 'CALL FROM DECK'
        this.SEARCH_DECK_FOR_NAME(data)
      }
    },
    CALL_NORMAL_FROM_DECK (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.openLocation = []
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
      if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
      if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
      if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
      if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
      if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
      if (data.openLocation.length > 0) {
        const index = Math.floor(Math.random() * data.openLocation.length)
        data.location = data.openLocation[index]
        data.todo = 'CALL FROM DECK'
        this.SEARCH_DECK_NORMAL(data)
      }
    },
    CALL_FROM_HAND_BY_RACE_AND_GRADE (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.openLocation = []
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
      if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
      if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
      if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
      if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
      if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
      if (data.openLocation.length > 0) {
        const index = Math.floor(Math.random() * data.openLocation.length)
        data.location = data.openLocation[index]
        data.todo = 'CALL FROM HAND'
        this.SEARCH_HAND_FOR_RACE_AND_GRADE(data)
      }
    },
    moveOrACT (data) {
      if (data.who === 'player') {
        data.user = this.data.player
      } else {
        data.user = this.data.opponent
      }
      data.field = data.user.field
      data.front = data.field.front
      data.back = data.field.back
      if (data.location === 'unit F1') {
        data.unit = data.front.unitF1
      }
      if (data.location === 'unit F2') {
        data.unit = data.front.unitF2
      }
      if (data.location === 'unit F3') {
        data.unit = data.front.unitF3
      }
      if (data.location === 'unit B1') {
        data.unit = data.back.unitB1
      }
      if (data.location === 'unit B2') {
        data.unit = data.back.unitB2
      }
      if (data.location === 'unit B3') {
        data.unit = data.back.unitB3
      }
      this.checkACT(data)
    },
    checkACT (data) {
      data.option = {
        move: 'MOVE'
      }
      if (
        data.unit.card.code === '002' ||
        data.unit.card.code === '003' ||
        data.unit.card.code === '017' ||
        data.unit.card.code === '021' ||
        data.unit.card.code === '022' ||
        data.unit.card.code === '023' ||
        data.unit.card.code === '024' ||
        data.unit.card.code === '025' ||
        data.unit.card.code === '026' ||
        data.unit.card.code === '027' ||
        data.unit.card.code === '028' ||
        data.unit.card.code === '031' ||
        data.unit.card.code === '033' ||
        data.unit.card.code === '037' ||
        data.unit.card.code === '038' ||
        data.unit.card.code === '040' ||
        data.unit.card.code === '042' ||
        data.unit.card.code === '043' ||
        data.unit.card.code === '045' ||
        data.unit.card.code === '046' ||
        data.unit.card.code === '049' ||
        data.unit.card.code === '051' ||
        data.unit.card.code === '054' ||
        data.unit.card.code === '062' ||
        data.unit.card.code === '071' ||
        data.unit.card.code === '072' ||
        data.unit.card.code === '073' ||
        data.unit.card.code === '080' ||
        data.unit.card.code === '081' ||
        data.unit.card.code === '083' ||
        data.unit.card.code === '084' ||
        data.unit.card.code === '087' ||
        data.unit.card.code === '088' ||
        data.unit.card.code === '089' ||
        data.unit.card.code === '090' ||
        data.unit.card.code === '091' ||
        data.unit.card.code === '092' ||
        data.unit.card.code === '093' ||
        data.unit.card.code === '096' ||
        data.unit.card.code === '097' ||
        data.unit.card.code === '098' ||
        data.unit.card.code === '099' ||
        data.unit.card.code === '100' ||
        data.unit.card.code === '105' ||
        data.unit.card.code === '110' ||
        data.unit.card.code === '111' ||
        data.unit.card.code === '118' ||
        data.unit.card.code === '119' ||
        data.unit.card.code === '120'
      ) {
        data.option.act = 'ACT'
      }
      this.$swal.fire({
        title: '<strong><u>SELECT ONE</u></strong>',
        input: 'select',
        inputOptions: data.option,
        showCancelButton: true,
        inputValidator: (value) => {
          if (value === 'move') {
            this.move(data)
          }
          if (value === 'act') {
            this.EFF_ACT(data)
          }
        }
      })
    },
    move (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      if (data.location === 'unit F1' || data.location === 'unit B1') {
        if (data.who === 'player') {
          this.data.player.field.front.unitF1 = data.unitB1
          this.data.player.field.back.unitB1 = data.unitF1
        } else {
          this.data.opponent.field.front.unitF1 = data.unitB1
          this.data.opponent.field.back.unitB1 = data.unitF1
        }
      }
      if (data.location === 'unit F2' || data.location === 'unit B2') {
        if (data.who === 'player') {
          this.data.player.field.front.unitF2 = data.unitB2
          this.data.player.field.back.unitB2 = data.unitF2
        } else {
          this.data.opponent.field.front.unitF2 = data.unitB2
          this.data.opponent.field.back.unitB2 = data.unitF2
        }
      }
      if (data.location === 'unit F3' || data.location === 'unit B3') {
        if (data.who === 'player') {
          this.data.player.field.front.unitF3 = data.unitB3
          this.data.player.field.back.unitB3 = data.unitF3
        } else {
          this.data.opponent.field.front.unitF3 = data.unitB3
          this.data.opponent.field.back.unitB3 = data.unitF3
        }
      }
    },
    unitATK (data) {
      if (data.who === 'player') {
        data.front = this.data.player.field.front
        data.target = 'opponent'
      } else {
        data.front = this.data.opponent.field.front
        data.target = 'player'
      }
      if (data.location === 'unit F1') {
        data.unitATK = data.front.unitF1
      }
      if (data.location === 'unit F2') {
        data.unitATK = data.front.unitF2
      }
      if (data.location === 'unit F3') {
        data.unitATK = data.front.unitF3
      }
      data.unitATK.position = 'Rest'
      if (data.who === 'player') {
        this.data.player.unitATK = {
          unit: data.unitATK,
          location: data.location
        }
      } else {
        this.data.opponent.unitATK = {
          unit: data.unitATK,
          location: data.location
        }
      }
      data.condition = 'AUTO ON ATK'
      this.EFF_AUTO(data)
    },
    unitDEF (data) {
      if (data.who === 'player') {
        data.front = this.data.player.field.front
        data.target = 'opponent'
      } else {
        data.front = this.data.opponent.field.front
        data.target = 'player'
      }
      if (data.location === 'unit F1') {
        data.unitDEF = data.front.unitF1
      }
      if (data.location === 'unit F2') {
        data.unitDEF = data.front.unitF2
      }
      if (data.location === 'unit F3') {
        data.unitDEF = data.front.unitF3
      }
      data.unitDEF.position = 'Rest'
      if (data.who === 'player') {
        this.data.player.unitDEF = {
          unit: data.unitDEF,
          location: data.location
        }
      } else {
        this.data.opponent.unitDEF = {
          unit: data.unitDEF,
          location: data.location
        }
      }
      data.condition = 'AUTO ON DEF'
      this.EFF_AUTO(data)
    },
    unitBlock (data) {
      let unitBlocks = 0
      if (data.who === 'player') {
        const front = this.data.opponent.field.front
        if (front.unitF1.isUnit) {
          if (front.unitF1.position === 'Stand') {
            unitBlocks += 1
          }
        }
        if (front.unitF2.isUnit) {
          if (front.unitF2.position === 'Stand') {
            unitBlocks += 1
          }
        }
        if (front.unitF3.isUnit) {
          if (front.unitF3.position === 'Stand') {
            unitBlocks += 1
          }
        }
        if (unitBlocks > 0) {
          this.$swal.fire({
            title: 'Block Attack ?',
            showCancelButton: true,
            confirmButtonText: 'YES',
            cancelButtonText: 'NO'
          }).then((result) => {
            if (result.isConfirmed) {
              this.Toast('info', 'Select unit to block')
              this.data.opponent.todo = 'unit to block'
            } else {
              this.damage({ who: data.target, damage: data.unitATK.power })
            }
          })
        } else {
          this.damage({ who: data.target, damage: data.unitATK.power })
        }
      } else {
        const front = this.data.player.field.front
        if (front.unitF1.isUnit) {
          if (front.unitF1.position === 'Stand') {
            unitBlocks += 1
          }
        }
        if (front.unitF2.isUnit) {
          if (front.unitF2.position === 'Stand') {
            unitBlocks += 1
          }
        }
        if (front.unitF3.isUnit) {
          if (front.unitF3.position === 'Stand') {
            unitBlocks += 1
          }
        }
        if (unitBlocks > 0) {
          this.$swal.fire({
            title: 'Block Attack ?',
            showCancelButton: true,
            confirmButtonText: 'YES',
            cancelButtonText: 'NO'
          }).then((result) => {
            if (result.isConfirmed) {
              this.Toast('info', 'Select unit to block')
              this.data.player.todo = 'unit to block'
            } else {
              this.damage({ who: data.target, damage: data.unitATK.power })
            }
          })
        } else {
          this.damage({ who: data.target, damage: data.unitATK.power })
        }
      }
    },
    resultBattle (data) {
      let unitATK = {}
      let unitDEF = {}
      if (data.who === 'player') {
        data.whoATK = 'opponent'
        unitATK = this.data.opponent.unitATK
        unitDEF = this.data.player.unitDEF
      } else {
        data.whoATK = 'player'
        unitATK = this.data.player.unitATK
        unitDEF = this.data.opponent.unitDEF
      }
      if (unitATK.unit.power > unitDEF.unit.power) {
        this.destroy({ who: data.who, location: unitDEF.location })
      }
      if (unitATK.unit.power < unitDEF.unit.power) {
        this.destroy({ who: data.whoATK, location: unitATK.location })
      }
      if (unitATK.unit.power === unitDEF.unit.power) {
        this.destroy({ who: data.who, location: unitDEF.location })
        this.destroy({ who: data.whoATK, location: unitATK.location })
      }
    },
    damage (data) {
      if (data.who === 'player') {
        this.data.player.life -= data.damage
        if (this.data.player.life <= 0) {
          alert('YOU LOSE')
        }
      } else {
        this.data.opponent.life -= data.damage
        if (this.data.opponent.life <= 0) {
          alert('YOU WIN')
        }
      }
      data.condition = 'AUTO ON DAMEGE'
      this.EFF_AUTO(data)
    },
    heal (data) {
      if (data.who === 'player') {
        this.data.player.life += data.heal
      } else {
        this.data.opponent.life += data.heal
      }
      data.condition = 'AUTO ON HEAL'
      this.EFF_AUTO(data)
    },
    FIELD_TO_HAND (data) {
      const unitEmpty = {
        isUnit: false,
        card: {},
        position: 'Stand',
        power: 0,
        gain: {
          auto: 0,
          cont: 0
        },
        onePerTurn: false
      }
      data.unit = {}
      if (data.who === 'player') {
        if (data.location === 'unit F1') {
          data.unit = this.data.player.field.front.unitF1
          this.data.player.hand.push(data.unit.card)
          this.data.player.field.front.unitF1 = unitEmpty
        }
        if (data.location === 'unit F2') {
          data.unit = this.data.player.field.front.unitF2
          this.data.player.hand.push(data.unit.card)
          this.data.player.field.front.unitF2 = unitEmpty
        }
        if (data.location === 'unit F3') {
          data.unit = this.data.player.field.front.unitF3
          this.data.player.hand.push(data.unit.card)
          this.data.player.field.front.unitF3 = unitEmpty
        }
        if (data.location === 'unit B1') {
          data.unit = this.data.player.field.back.unitB1
          this.data.player.hand.push(data.unit.card)
          this.data.player.field.back.unitB1 = unitEmpty
        }
        if (data.location === 'unit B2') {
          data.unit = this.data.player.field.back.unitB2
          this.data.player.hand.push(data.unit.card)
          this.data.player.field.back.unitB2 = unitEmpty
        }
        if (data.location === 'unit B3') {
          data.unit = this.data.player.field.back.unitB3
          this.data.player.hand.push(data.unit.card)
          this.data.player.field.back.unitB3 = unitEmpty
        }
      } else {
        if (data.location === 'unit F1') {
          data.unit = this.data.opponent.field.front.unitF1
          this.data.opponent.hand.push(data.unit.card)
          this.data.opponent.field.front.unitF1 = unitEmpty
        }
        if (data.location === 'unit F2') {
          data.unit = this.data.opponent.field.front.unitF2
          this.data.opponent.hand.push(data.unit.card)
          this.data.opponent.field.front.unitF2 = unitEmpty
        }
        if (data.location === 'unit F3') {
          data.unit = this.data.opponent.field.front.unitF3
          this.data.opponent.hand.push(data.unit.card)
          this.data.opponent.field.front.unitF3 = unitEmpty
        }
        if (data.location === 'unit B1') {
          data.unit = this.data.opponent.field.back.unitB1
          this.data.opponent.hand.push(data.unit.card)
          this.data.opponent.field.back.unitB1 = unitEmpty
        }
        if (data.location === 'unit B2') {
          data.unit = this.data.opponent.field.back.unitB2
          this.data.opponent.hand.push(data.unit.card)
          this.data.opponent.field.back.unitB2 = unitEmpty
        }
        if (data.location === 'unit B3') {
          data.unit = this.data.opponent.field.back.unitB3
          this.data.opponent.hand.push(data.unit.card)
          this.data.opponent.field.back.unitB3 = unitEmpty
        }
      }
      this.EFF_CONT(data)
    },
    FIELD_TO_DECK (data) {
      const unitEmpty = {
        isUnit: false,
        card: {},
        position: 'Stand',
        power: 0,
        gain: {
          auto: 0,
          cont: 0
        },
        onePerTurn: false
      }
      if (data.who === 'player') {
        data.field = this.data.player.field
        data.deck = this.data.player.deck
      } else {
        data.field = this.data.opponent.field
        data.deck = this.data.opponent.deck
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      if (data.location === 'unit F1') {
        data.deck.push(data.unitF1.card)
        if (data.who === 'player') {
          this.data.player.field.front.unitF1 = unitEmpty
        } else {
          this.data.opponent.field.front.unitF1 = unitEmpty
        }
      }
      if (data.location === 'unit F2') {
        data.deck.push(data.unitF2.card)
        if (data.who === 'player') {
          this.data.player.field.front.unitF2 = unitEmpty
        } else {
          this.data.opponent.field.front.unitF2 = unitEmpty
        }
      }
      if (data.location === 'unit F3') {
        data.deck.push(data.unitF3.card)
        if (data.who === 'player') {
          this.data.player.field.front.unitF3 = unitEmpty
        } else {
          this.data.opponent.field.front.unitF3 = unitEmpty
        }
      }
      if (data.location === 'unit B1') {
        data.deck.push(data.unitB1.card)
        if (data.who === 'player') {
          this.data.player.field.back.unitB1 = unitEmpty
        } else {
          this.data.opponent.field.back.unitB1 = unitEmpty
        }
      }
      if (data.location === 'unit B2') {
        data.deck.push(data.unitB2.card)
        if (data.who === 'player') {
          this.data.player.field.back.unitB2 = unitEmpty
        } else {
          this.data.opponent.field.back.unitB2 = unitEmpty
        }
      }
      if (data.location === 'unit B3') {
        data.deck.push(data.unitB3.card)
        if (data.who === 'player') {
          this.data.player.field.back.unitB3 = unitEmpty
        } else {
          this.data.opponent.field.back.unitB3 = unitEmpty
        }
      }
    },
    destroy (data) {
      const unitEmpty = {
        isUnit: false,
        card: {},
        position: 'Stand',
        power: 0,
        gain: {
          auto: 0,
          cont: 0
        },
        onePerTurn: false
      }
      data.unit = {}
      if (data.who === 'player') {
        if (data.location === 'unit F1') {
          data.unit = this.data.player.field.front.unitF1
          if (data.unit.card.code === '078') {
            this.Toast('info', 'Diamond Jozu cannot be destroy !!!')
          } else {
            this.data.player.drop.push(data.unit.card)
            this.data.player.field.front.unitF1 = unitEmpty
          }
        }
        if (data.location === 'unit F2') {
          data.unit = this.data.player.field.front.unitF2
          if (data.unit.card.code === '078') {
            this.Toast('info', 'Diamond Jozu cannot be destroy !!!')
          } else {
            this.data.player.drop.push(data.unit.card)
            this.data.player.field.front.unitF2 = unitEmpty
          }
        }
        if (data.location === 'unit F3') {
          data.unit = this.data.player.field.front.unitF3
          if (data.unit.card.code === '078') {
            this.Toast('info', 'Diamond Jozu cannot be destroy !!!')
          } else {
            this.data.player.drop.push(data.unit.card)
            this.data.player.field.front.unitF3 = unitEmpty
          }
        }
        if (data.location === 'unit B1') {
          data.unit = this.data.player.field.back.unitB1
          if (data.unit.card.code === '078') {
            this.Toast('info', 'Diamond Jozu cannot be destroy !!!')
          } else {
            this.data.player.drop.push(data.unit.card)
            this.data.player.field.back.unitB1 = unitEmpty
          }
        }
        if (data.location === 'unit B2') {
          data.unit = this.data.player.field.back.unitB2
          if (data.unit.card.code === '078') {
            this.Toast('info', 'Diamond Jozu cannot be destroy !!!')
          } else {
            this.data.player.drop.push(data.unit.card)
            this.data.player.field.back.unitB2 = unitEmpty
          }
        }
        if (data.location === 'unit B3') {
          data.unit = this.data.player.field.back.unitB3
          if (data.unit.card.code === '078') {
            this.Toast('info', 'Diamond Jozu cannot be destroy !!!')
          } else {
            this.data.player.drop.push(data.unit.card)
            this.data.player.field.back.unitB3 = unitEmpty
          }
        }
        this.data.player.todo = ''
      } else {
        if (data.location === 'unit F1') {
          data.unit = this.data.opponent.field.front.unitF1
          if (data.unit.card.code === '078') {
            this.Toast('info', 'Diamond Jozu cannot be destroy !!!')
          } else {
            this.data.opponent.drop.push(data.unit.card)
            this.data.opponent.field.front.unitF1 = unitEmpty
          }
        }
        if (data.location === 'unit F2') {
          data.unit = this.data.opponent.field.front.unitF2
          if (data.unit.card.code === '078') {
            this.Toast('info', 'Diamond Jozu cannot be destroy !!!')
          } else {
            this.data.opponent.drop.push(data.unit.card)
            this.data.opponent.field.front.unitF2 = unitEmpty
          }
        }
        if (data.location === 'unit F3') {
          data.unit = this.data.opponent.field.front.unitF3
          if (data.unit.card.code === '078') {
            this.Toast('info', 'Diamond Jozu cannot be destroy !!!')
          } else {
            this.data.opponent.drop.push(data.unit.card)
            this.data.opponent.field.front.unitF3 = unitEmpty
          }
        }
        if (data.location === 'unit B1') {
          data.unit = this.data.opponent.field.back.unitB1
          if (data.unit.card.code === '078') {
            this.Toast('info', 'Diamond Jozu cannot be destroy !!!')
          } else {
            this.data.opponent.drop.push(data.unit.card)
            this.data.opponent.field.back.unitB1 = unitEmpty
          }
        }
        if (data.location === 'unit B2') {
          data.unit = this.data.opponent.field.back.unitB2
          if (data.unit.card.code === '078') {
            this.Toast('info', 'Diamond Jozu cannot be destroy !!!')
          } else {
            this.data.opponent.drop.push(data.unit.card)
            this.data.opponent.field.back.unitB2 = unitEmpty
          }
        }
        if (data.location === 'unit B3') {
          data.unit = this.data.opponent.field.back.unitB3
          if (data.unit.card.code === '078') {
            this.Toast('info', 'Diamond Jozu cannot be destroy !!!')
          } else {
            this.data.opponent.drop.push(data.unit.card)
            this.data.opponent.field.back.unitB3 = unitEmpty
          }
        }
        this.data.opponent.todo = data.todo
      }
      if (data.unit.card.code !== '078') {
        this.EFF_AUTO({ who: data.who, location: data.location, unit: data.unit, condition: 'AUTO ON SEND TO DROP' })
        this.EFF_CONT(data)
      }
    },
    bind (data) {
      const unitEmpty = {
        isUnit: false,
        card: {},
        position: 'Stand',
        power: 0,
        gain: {
          auto: 0,
          cont: 0
        },
        onePerTurn: false
      }
      data.unit = {}
      if (data.who === 'player') {
        if (data.location === 'unit F1') {
          data.unit = this.data.player.field.front.unitF1
          this.data.player.bind.push(data.unit.card)
          this.data.player.field.front.unitF1 = unitEmpty
        }
        if (data.location === 'unit F2') {
          data.unit = this.data.player.field.front.unitF2
          this.data.player.bind.push(data.unit.card)
          this.data.player.field.front.unitF2 = unitEmpty
        }
        if (data.location === 'unit F3') {
          data.unit = this.data.player.field.front.unitF3
          this.data.player.bind.push(data.unit.card)
          this.data.player.field.front.unitF3 = unitEmpty
        }
        if (data.location === 'unit B1') {
          data.unit = this.data.player.field.back.unitB1
          this.data.player.bind.push(data.unit.card)
          this.data.player.field.back.unitB1 = unitEmpty
        }
        if (data.location === 'unit B2') {
          data.unit = this.data.player.field.back.unitB2
          this.data.player.bind.push(data.unit.card)
          this.data.player.field.back.unitB2 = unitEmpty
        }
        if (data.location === 'unit B3') {
          data.unit = this.data.player.field.back.unitB3
          this.data.player.bind.push(data.unit.card)
          this.data.player.field.back.unitB3 = unitEmpty
        }
        this.data.player.todo = data.todo
      } else {
        if (data.location === 'unit F1') {
          data.unit = this.data.opponent.field.front.unitF1
          this.data.opponent.bind.push(data.unit.card)
          this.data.opponent.field.front.unitF1 = unitEmpty
        }
        if (data.location === 'unit F2') {
          data.unit = this.data.opponent.field.front.unitF2
          this.data.opponent.bind.push(data.unit.card)
          this.data.opponent.field.front.unitF2 = unitEmpty
        }
        if (data.location === 'unit F3') {
          data.unit = this.data.opponent.field.front.unitF3
          this.data.opponent.bind.push(data.unit.card)
          this.data.opponent.field.front.unitF3 = unitEmpty
        }
        if (data.location === 'unit B1') {
          data.unit = this.data.opponent.field.back.unitB1
          this.data.opponent.bind.push(data.unit.card)
          this.data.opponent.field.back.unitB1 = unitEmpty
        }
        if (data.location === 'unit B2') {
          data.unit = this.data.opponent.field.back.unitB2
          this.data.opponent.bind.push(data.unit.card)
          this.data.opponent.field.back.unitB2 = unitEmpty
        }
        if (data.location === 'unit B3') {
          data.unit = this.data.opponent.field.back.unitB3
          this.data.opponent.bind.push(data.unit.card)
          this.data.opponent.field.back.unitB3 = unitEmpty
        }
        this.data.opponent.todo = data.todo
      }
      this.EFF_CONT(data)
    },
    rest (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      if (data.location === 'unit F1') {
        data.unit = data.front.unitF1
      }
      if (data.location === 'unit F2') {
        data.unit = data.front.unitF2
      }
      if (data.location === 'unit F3') {
        data.unit = data.front.unitF3
      }
      if (data.location === 'unit B1') {
        data.unit = data.back.unitB1
      }
      if (data.location === 'unit B2') {
        data.unit = data.back.unitB2
      }
      if (data.location === 'unit B3') {
        data.unit = data.back.unitB3
      }
      data.unit.position = 'Rest'
      this.data.player.todo = ''
      this.data.opponent.todo = ''
    },
    stand (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      if (data.location === 'unit F1') {
        data.unit = data.front.unitF1
      }
      if (data.location === 'unit F2') {
        data.unit = data.front.unitF2
      }
      if (data.location === 'unit F3') {
        data.unit = data.front.unitF3
      }
      if (data.location === 'unit B1') {
        data.unit = data.back.unitB1
      }
      if (data.location === 'unit B2') {
        data.unit = data.back.unitB2
      }
      if (data.location === 'unit B3') {
        data.unit = data.back.unitB3
      }
      data.unit.position = 'Stand'
      this.data.player.todo = ''
      this.data.opponent.todo = ''
    },
    discard (data) {
      if (data.who === 'player') {
        data.hand = this.data.player.hand
        this.data.player.drop.push(data.hand[data.index])
      } else {
        data.hand = this.data.opponent.hand
        this.data.opponent.drop.push(data.hand[data.index])
      }
      data.hand.splice(data.index, 1)
      this.EFF_AUTO({ who: data.who, condition: 'AUTO ON DISCARD' })
      this.EFF_AUTO({ who: data.who, condition: 'AUTO ON U DISCARD' })
      this.EFF_AUTO({ who: data.who, condition: 'AUTO ON OP DISCARD' })
    },
    openZone (data) {
      if (this.data.info.todo !== '') {
        this.data.info = {
          who: '',
          todo: '',
          cards: []
        }
      } else {
        if (data.who === 'player') {
          this.data.info.who = 'player'
          this.data.info.todo = data.todo
          if (data.zone === 'drop') {
            this.data.info.cards = this.data.player.drop
          }
          if (data.zone === 'bind') {
            this.data.info.cards = this.data.player.bind
          }
        } else {
          this.data.info.who = 'opponent'
          this.data.info.todo = data.todo
          if (data.zone === 'drop') {
            this.data.info.cards = this.data.opponent.drop
          }
          if (data.zone === 'bind') {
            this.data.info.cards = this.data.opponent.bind
          }
        }
      }
    },
    SEARCH_DECK_FOR_GRADE (data) {
      if (data.who === 'player') {
        data.deck = this.data.player.deck
      } else {
        data.deck = this.data.opponent.deck
      }
      const cards = []
      for (let i = 0; i < data.deck.length; i++) {
        if (data.deck[i].grade === data.grade) {
          cards.push(i)
        }
      }
      const index = Math.floor(Math.random() * cards.length)
      if (data.todo === 'DECK TO HAND') {
        this.DECK_TO_HAND({ who: data.who, index: cards[index] })
      }
    },
    SEARCH_DECK_FOR_GRADE_AND_NAME (data) {
      if (data.who === 'player') {
        data.deck = this.data.player.deck
      } else {
        data.deck = this.data.opponent.deck
      }
      const cards = []
      for (let i = 0; i < data.deck.length; i++) {
        if (data.deck[i].grade === data.grade && data.deck[i].name === data.name) {
          cards.push(i)
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        if (data.todo === 'CALL FROM DECK') {
          data.card = data.deck[cards[index]]
          data.index = cards[index]
          this.callFromDeck(data)
        }
        if (data.todo === 'DECK TO HAND') {
          this.DECK_TO_HAND({ who: data.who, index: cards[index] })
        }
      }
    },
    SEARCH_DECK_FOR_GRADE_AND_NOT_NAME (data) {
      if (data.who === 'player') {
        data.deck = this.data.player.deck
      } else {
        data.deck = this.data.opponent.deck
      }
      const cards = []
      for (let i = 0; i < data.deck.length; i++) {
        if (data.deck[i].grade === data.grade && data.deck[i].name !== data.notName) {
          cards.push(i)
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        if (data.todo === 'CALL FROM DECK') {
          data.card = data.deck[cards[index]]
          data.index = cards[index]
          this.callFromDeck(data)
        }
      }
    },
    SEARCH_DECK_NORMAL (data) {
      if (data.who === 'player') {
        data.deck = this.data.player.deck
      } else {
        data.deck = this.data.opponent.deck
      }
      const cards = []
      for (let i = 0; i < data.deck.length; i++) {
        if (data.deck[i].text === '') { cards.push(i) }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        if (data.todo === 'CALL FROM DECK') {
          data.card = data.deck[cards[index]]
          data.index = cards[index]
          this.callFromDeck(data)
        }
        if (data.todo === 'DECK TO HAND') {
          this.DECK_TO_HAND({ who: data.who, index: cards[index] })
        }
      }
    },
    SEARCH_DECK_FOR_NAME (data) {
      if (data.who === 'player') {
        data.deck = this.data.player.deck
      } else {
        data.deck = this.data.opponent.deck
      }
      const cards = []
      for (let i = 0; i < data.deck.length; i++) {
        if (data.deck[i].name.search(data.name) >= 0) {
          cards.push(i)
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        if (data.todo === 'CALL FROM DECK') {
          data.card = data.deck[cards[index]]
          data.index = cards[index]
          this.callFromDeck(data)
        }
        if (data.todo === 'DECK TO HAND') {
          this.DECK_TO_HAND({ who: data.who, index: cards[index] })
        }
      }
    },
    SEARCH_DECK_FOR_NAME_AND_NOT_NAME (data) {
      if (data.who === 'player') {
        data.deck = this.data.player.deck
      } else {
        data.deck = this.data.opponent.deck
      }
      const cards = []
      for (let i = 0; i < data.deck.length; i++) {
        if (data.deck[i].name.search(data.name) >= 0 && data.deck[i].name !== data.notName) {
          cards.push(i)
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        if (data.todo === 'CALL FROM DECK') {
          data.card = data.deck[cards[index]]
          data.index = cards[index]
          this.callFromDeck(data)
        }
      }
    },
    SEARCH_DECK_FOR_NAME_GRADE_LESS (data) {
      if (data.who === 'player') {
        data.deck = this.data.player.deck
      } else {
        data.deck = this.data.opponent.deck
      }
      const cards = []
      for (let i = 0; i < data.deck.length; i++) {
        if (data.deck[i].name.search(data.name) >= 0 && data.deck[i].grade <= data.grade) {
          cards.push(i)
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        if (data.todo === 'CALL FROM DECK') {
          data.card = data.deck[cards[index]]
          data.index = cards[index]
          this.callFromDeck(data)
        }
      }
    },
    SEARCH_DECK_FOR_TEXT_AND_GRADE (data) {
      if (data.who === 'player') {
        data.deck = this.data.player.deck
      } else {
        data.deck = this.data.opponent.deck
      }
      const cards = []
      for (let i = 0; i < data.deck.length; i++) {
        if (data.deck[i].text.search(data.text) >= 0 && data.deck[i].grade <= data.grade) {
          cards.push(i)
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        if (data.todo === 'CALL FROM DECK') {
          data.card = data.deck[cards[index]]
          data.index = cards[index]
          this.callFromDeck(data)
        }
        if (data.todo === 'DECK TO HAND') {
          this.DECK_TO_HAND({ who: data.who, index: cards[index] })
        }
      }
    },
    SEARCH_DECK_FOR_RACE_AND_GRADE_LESS (data) {
      if (data.who === 'player') {
        data.deck = this.data.player.deck
      } else {
        data.deck = this.data.opponent.deck
      }
      const cards = []
      for (let i = 0; i < data.deck.length; i++) {
        if (data.deck[i].type.race.search(data.race) >= 0 && data.deck[i].grade <= data.grade) {
          cards.push(i)
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        if (data.todo === 'DECK TO HAND') {
          this.DECK_TO_HAND({ who: data.who, index: cards[index] })
        }
      }
    },
    SEARCH_DECK_FOR_RACE_AND_NOT_NAME (data) {
      if (data.who === 'player') {
        data.deck = this.data.player.deck
      } else {
        data.deck = this.data.opponent.deck
      }
      const cards = []
      for (let i = 0; i < data.deck.length; i++) {
        if (data.deck[i].type.race.search(data.race) >= 0 && data.deck[i].name !== data.notName) {
          cards.push(i)
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        if (data.todo === 'CALL FROM DECK') {
          data.card = data.deck[cards[index]]
          data.index = cards[index]
          this.callFromDeck(data)
        }
        if (data.todo === 'DECK TO HAND') {
          this.DECK_TO_HAND({ who: data.who, index: cards[index] })
        }
      }
    },
    SEARCH_DECK_FOR_JOB (data) {
      if (data.who === 'player') {
        data.deck = this.data.player.deck
      } else {
        data.deck = this.data.opponent.deck
      }
      const cards = []
      for (let i = 0; i < data.deck.length; i++) {
        if (data.deck[i].type.job.search(data.job) >= 0) {
          cards.push(i)
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        if (data.todo === 'CALL FROM DECK') {
          data.card = data.deck[cards[index]]
          data.index = cards[index]
          this.callFromDeck(data)
        }
        if (data.todo === 'DECK TO HAND') {
          this.DECK_TO_HAND({ who: data.who, index: cards[index] })
        }
      }
    },
    SEARCH_DECK_FOR_JOB_AND_GRADE_LESS (data) {
      if (data.who === 'player') {
        data.deck = this.data.player.deck
      } else {
        data.deck = this.data.opponent.deck
      }
      const cards = []
      for (let i = 0; i < data.deck.length; i++) {
        if (data.deck[i].type.job.search(data.job) >= 0 && data.deck[i].grade <= data.grade) {
          cards.push(i)
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        if (data.todo === 'DECK TO HAND') {
          this.DECK_TO_HAND({ who: data.who, index: cards[index] })
        }
      }
    },
    SEARCH_DROP_FOR_NAME (data) {
      if (data.who === 'player') {
        data.drop = this.data.player.drop
        data.deck = this.data.player.deck
        data.hand = this.data.player.hand
      } else {
        data.drop = this.data.opponent.drop
        data.deck = this.data.opponent.deck
        data.hand = this.data.opponent.hand
      }
      const cards = []
      for (let i = 0; i < data.drop.length; i++) {
        if (data.drop[i].name.search(data.name) >= 0) {
          cards.push(i)
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        if (data.todo === 'CALL FROM DROP') {
          data.card = data.drop[cards[index]]
          data.index = cards[index]
          this.callFromDrop(data)
        }
        if (data.todo === 'DROP TO HAND') {
          data.hand.push(data.drop[cards[index]])
          data.drop.splice(cards[index], 1)
        }
        if (data.todo === 'DROP TO DECK') {
          data.deck.push(data.drop[cards[index]])
          data.drop.splice(cards[index], 1)
        }
        if (data.todo === 'ALL DROP TO DECK') {
          for (let i = 0; i < cards.length; i++) {
            data.deck.push(data.drop[cards[cards.length - i]])
            data.drop.splice(cards[cards.length - i], 1)
          }
        }
      }
    },
    SEARCH_DROP_FOR_NAME_AND_NOT_NAME (data) {
      if (data.who === 'player') {
        data.drop = this.data.player.drop
        data.deck = this.data.player.deck
        data.hand = this.data.player.hand
      } else {
        data.drop = this.data.opponent.drop
        data.deck = this.data.opponent.deck
        data.hand = this.data.opponent.hand
      }
      const cards = []
      for (let i = 0; i < data.drop.length; i++) {
        if (data.drop[i].name.search(data.name) >= 0 && data.drop[i].name !== data.notName) {
          cards.push(i)
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        if (data.todo === 'DROP TO HAND') {
          data.hand.push(data.drop[cards[index]])
          data.drop.splice(cards[index], 1)
        }
      }
    },
    SEARCH_DROP_FOR_RACE (data) {
      if (data.who === 'player') {
        data.drop = this.data.player.drop
        data.deck = this.data.player.deck
      } else {
        data.drop = this.data.opponent.drop
        data.deck = this.data.opponent.deck
      }
      const cards = []
      for (let i = 0; i < data.drop.length; i++) {
        if (data.drop[i].type.race.search(data.race) >= 0) {
          cards.push(i)
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        if (data.todo === 'CALL FROM DROP') {
          data.card = data.drop[cards[index]]
          data.index = cards[index]
          this.callFromDrop(data)
        }
        if (data.todo === 'DROP TO HAND') {
          data.hand.push(data.drop[cards[index]])
          data.drop.splice(cards[index], 1)
        }
      }
    },
    SEARCH_DROP_FOR_CODE (data) {
      if (data.who === 'player') {
        data.drop = this.data.player.drop
      } else {
        data.drop = this.data.opponent.drop
      }
      const cards = []
      for (let i = 0; i < data.drop.length; i++) {
        if (data.drop[i].code.search(data.code) >= 0) {
          cards.push(i)
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        if (data.todo === 'CALL FROM DROP') {
          data.card = data.drop[cards[index]]
          data.index = cards[index]
          this.callFromDrop(data)
        }
      }
    },
    SEARCH_BIND_FOR_NAME (data) {
      if (data.who === 'player') {
        data.bind = this.data.player.bind
        data.drop = this.data.player.drop
        data.deck = this.data.player.deck
        data.hand = this.data.player.hand
      } else {
        data.bind = this.data.opponent.bind
        data.drop = this.data.opponent.drop
        data.deck = this.data.opponent.deck
        data.hand = this.data.opponent.hand
      }
      const cards = []
      for (let i = 0; i < data.bind.length; i++) {
        if (data.bind[i].name.search(data.name) >= 0) {
          cards.push(i)
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        if (data.todo === 'CALL FROM BIND') {
          data.card = data.bind[cards[index]]
          data.index = cards[index]
          this.callFromBind(data)
        }
        if (data.todo === 'BIND TO HAND') {
          data.hand.push(data.bind[cards[index]])
          data.bind.splice(cards[index], 1)
        }
      }
    },
    SEARCH_HAND_FOR_RACE_AND_GRADE (data) {
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      const cards = []
      for (let i = 0; i < data.hand.length; i++) {
        if (data.hand[i].type.race.search(data.race) >= 0 && data.hand[i].grade === data.grade) {
          cards.push(i)
        }
      }
      if (cards.length > 0) {
        const index = Math.floor(Math.random() * cards.length)
        if (data.todo === 'CALL FROM HAND') {
          if (data.who === 'player') {
            this.data.player.unit = {
              card: data.hand[cards[index]],
              index: cards[index]
            }
          } else {
            this.data.opponent.unit = {
              card: data.hand[cards[index]],
              index: cards[index]
            }
          }
          this.callFromHand(data)
        }
      }
    },
    DECK_TO_HAND (data) {
      if (data.who === 'player') {
        data.hand = this.data.player.hand
        data.deck = this.data.player.deck
      } else {
        data.hand = this.data.opponent.hand
        data.deck = this.data.opponent.deck
      }
      data.hand.push(data.deck[data.index])
      data.deck.splice(data.index, 1)
      if (data.who === 'player') {
        this.shuffle({ who: 'player', deck: this.data.player.deck })
      } else {
        this.shuffle({ who: 'opponent', deck: this.data.opponent.deck })
      }
    },
    SELECT_ALL_YOUR_FIELD_BY_GRADE (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      data.locations = []
      if (data.unitF1.isUnit && data.unitF1.card.grade === data.grade) { data.locations.push({ location: 'unit F1' }) }
      if (data.unitF2.isUnit && data.unitF2.card.grade === data.grade) { data.locations.push({ location: 'unit F2' }) }
      if (data.unitF3.isUnit && data.unitF3.card.grade === data.grade) { data.locations.push({ location: 'unit F3' }) }
      if (data.unitB1.isUnit && data.unitB1.card.grade === data.grade) { data.locations.push({ location: 'unit B1' }) }
      if (data.unitB2.isUnit && data.unitB2.card.grade === data.grade) { data.locations.push({ location: 'unit B2' }) }
      if (data.unitB3.isUnit && data.unitB3.card.grade === data.grade) { data.locations.push({ location: 'unit B3' }) }
      if (data.todo === 'GAIN AUTO POWER') {
        data.locations.map((unit) => {
          this.AUTO_POWER({ who: data.who, location: unit.location, gain: data.gain })
        })
      }
    },
    SELECT_ALL_YOUR_FIELD_BY_RACE (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      data.locations = []
      if (data.unitF1.isUnit && data.unitF1.card.type.race.search(data.race) >= 0) { data.locations.push({ location: 'unit F1' }) }
      if (data.unitF2.isUnit && data.unitF2.card.type.race.search(data.race) >= 0) { data.locations.push({ location: 'unit F2' }) }
      if (data.unitF3.isUnit && data.unitF3.card.type.race.search(data.race) >= 0) { data.locations.push({ location: 'unit F3' }) }
      if (data.unitB1.isUnit && data.unitB1.card.type.race.search(data.race) >= 0) { data.locations.push({ location: 'unit B1' }) }
      if (data.unitB2.isUnit && data.unitB2.card.type.race.search(data.race) >= 0) { data.locations.push({ location: 'unit B2' }) }
      if (data.unitB3.isUnit && data.unitB3.card.type.race.search(data.race) >= 0) { data.locations.push({ location: 'unit B3' }) }
      if (data.todo === 'GAIN AUTO POWER') {
        data.locations.map((unit) => {
          this.AUTO_POWER({ who: data.who, location: unit.location, gain: data.gain })
        })
      }
    },
    SELECT_ALL_YOUR_FIELD_BY_SPECIAL (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      data.locations = []
      if (data.unitF1.isUnit && data.unitF1.card.type.special.search(data.special) >= 0) { data.locations.push({ location: 'unit F1' }) }
      if (data.unitF2.isUnit && data.unitF2.card.type.special.search(data.special) >= 0) { data.locations.push({ location: 'unit F2' }) }
      if (data.unitF3.isUnit && data.unitF3.card.type.special.search(data.special) >= 0) { data.locations.push({ location: 'unit F3' }) }
      if (data.unitB1.isUnit && data.unitB1.card.type.special.search(data.special) >= 0) { data.locations.push({ location: 'unit B1' }) }
      if (data.unitB2.isUnit && data.unitB2.card.type.special.search(data.special) >= 0) { data.locations.push({ location: 'unit B2' }) }
      if (data.unitB3.isUnit && data.unitB3.card.type.special.search(data.special) >= 0) { data.locations.push({ location: 'unit B3' }) }
      if (data.todo === 'GAIN AUTO POWER') {
        data.locations.map((unit) => {
          this.AUTO_POWER({ who: data.who, location: unit.location, gain: data.gain })
        })
      }
    },
    SELECT_ALL_YOUR_FIELD_BY_NAME (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      data.locations = []
      if (data.unitF1.isUnit && data.unitF1.card.name.search(data.name) >= 0) { data.locations.push({ location: 'unit F1' }) }
      if (data.unitF2.isUnit && data.unitF2.card.name.search(data.name) >= 0) { data.locations.push({ location: 'unit F2' }) }
      if (data.unitF3.isUnit && data.unitF3.card.name.search(data.name) >= 0) { data.locations.push({ location: 'unit F3' }) }
      if (data.unitB1.isUnit && data.unitB1.card.name.search(data.name) >= 0) { data.locations.push({ location: 'unit B1' }) }
      if (data.unitB2.isUnit && data.unitB2.card.name.search(data.name) >= 0) { data.locations.push({ location: 'unit B2' }) }
      if (data.unitB3.isUnit && data.unitB3.card.name.search(data.name) >= 0) { data.locations.push({ location: 'unit B3' }) }
      if (data.todo === 'GAIN AUTO POWER') {
        data.locations.map((unit) => {
          this.AUTO_POWER({ who: data.who, location: unit.location, gain: data.gain })
        })
      }
      if (data.todo === 'STAND UNIT') {
        data.locations.map((unit) => {
          this.stand({ who: data.who, location: unit.location })
        })
      }
    },
    SELECT_OP_FIELD (data) {
      const unit = []
      if (data.who === 'player') {
        data.field = this.data.opponent.field
      } else {
        data.field = this.data.player.field
      }
      data.front = data.field.front
      data.back = data.field.back
      if (data.front.unitF1.isUnit) { unit.push('unit F1') }
      if (data.front.unitF2.isUnit) { unit.push('unit F2') }
      if (data.front.unitF3.isUnit) { unit.push('unit F3') }
      if (data.back.unitB1.isUnit) { unit.push('unit B1') }
      if (data.back.unitB2.isUnit) { unit.push('unit B2') }
      if (data.back.unitB3.isUnit) { unit.push('unit B3') }
      if (unit.length > 0) {
        this.Toast('info', 'Pilih unit !!!')
        if (data.who === 'player') {
          this.data.opponent.todo = data.todo
        } else {
          this.data.player.todo = data.todo
        }
      }
    },
    SELECT_OP_FIELD_BY_GRADE (data) {
      const unit = []
      if (data.who === 'player') {
        data.field = this.data.opponent.field
      } else {
        data.field = this.data.player.field
      }
      data.front = data.field.front
      data.back = data.field.back
      if (data.front.unitF1.isUnit && data.front.unitF1.card.grade === data.grade) { unit.push('unit F1') }
      if (data.front.unitF2.isUnit && data.front.unitF2.card.grade === data.grade) { unit.push('unit F2') }
      if (data.front.unitF3.isUnit && data.front.unitF3.card.grade === data.grade) { unit.push('unit F3') }
      if (data.back.unitB1.isUnit && data.back.unitB1.card.grade === data.grade) { unit.push('unit B1') }
      if (data.back.unitB2.isUnit && data.back.unitB2.card.grade === data.grade) { unit.push('unit B2') }
      if (data.back.unitB3.isUnit && data.back.unitB3.card.grade === data.grade) { unit.push('unit B3') }
      if (unit.length > 0) {
        this.Toast('info', 'Pilih unit !!!')
        if (data.who === 'player') {
          this.data.opponent.todo = data.todo
        } else {
          this.data.player.todo = data.todo
        }
      }
    },
    SELECT_OP_FIELD_BY_GRADE_OR_LESS (data) {
      const unit = []
      if (data.who === 'player') {
        data.field = this.data.opponent.field
      } else {
        data.field = this.data.player.field
      }
      data.front = data.field.front
      data.back = data.field.back
      if (data.front.unitF1.isUnit && data.front.unitF1.card.grade <= data.grade) { unit.push('unit F1') }
      if (data.front.unitF2.isUnit && data.front.unitF2.card.grade <= data.grade) { unit.push('unit F2') }
      if (data.front.unitF3.isUnit && data.front.unitF3.card.grade <= data.grade) { unit.push('unit F3') }
      if (data.back.unitB1.isUnit && data.back.unitB1.card.grade <= data.grade) { unit.push('unit B1') }
      if (data.back.unitB2.isUnit && data.back.unitB2.card.grade <= data.grade) { unit.push('unit B2') }
      if (data.back.unitB3.isUnit && data.back.unitB3.card.grade <= data.grade) { unit.push('unit B3') }
      if (unit.length > 0) {
        this.Toast('info', 'Pilih unit !!!')
        if (data.who === 'player') {
          this.data.opponent.todo = data.todo
        } else {
          this.data.player.todo = data.todo
        }
      }
    },
    RANDOM_FIELD_OP_WITH_STAND_UNIT (data) {
      if (data.who === 'player') {
        data.target = 'opponent'
        data.field = this.data.opponent.field
      } else {
        data.target = 'player'
        data.field = this.data.player.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      const units = []
      if (data.unitF1.isUnit && data.unitF1.position === 'Stand') { units.push({ location: 'unit F1' }) }
      if (data.unitF2.isUnit && data.unitF2.position === 'Stand') { units.push({ location: 'unit F2' }) }
      if (data.unitF3.isUnit && data.unitF3.position === 'Stand') { units.push({ location: 'unit F3' }) }
      if (data.unitB1.isUnit && data.unitB1.position === 'Stand') { units.push({ location: 'unit B1' }) }
      if (data.unitB2.isUnit && data.unitB2.position === 'Stand') { units.push({ location: 'unit B2' }) }
      if (data.unitB3.isUnit && data.unitB3.position === 'Stand') { units.push({ location: 'unit B3' }) }
      if (units.length > 0) {
        const index = Math.floor(Math.random() * units.length)
        if (data.todo === 'destroy') {
          this.destroy({ who: data.target, location: units[index].location })
        }
        if (data.todo === 'rest') {
          this.rest({ who: data.target, location: units[index].location })
        }
      }
    },
    RANDOM_FIELD_OP_BY_GRADE_OR_LESS (data) {
      if (data.who === 'player') {
        data.target = 'opponent'
        data.field = this.data.opponent.field
      } else {
        data.target = 'player'
        data.field = this.data.player.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      const units = []
      if (data.unitF1.isUnit && data.unitF1.card.grade <= data.grade) { units.push({ location: 'unit F1' }) }
      if (data.unitF2.isUnit && data.unitF2.card.grade <= data.grade) { units.push({ location: 'unit F2' }) }
      if (data.unitF3.isUnit && data.unitF3.card.grade <= data.grade) { units.push({ location: 'unit F3' }) }
      if (data.unitB1.isUnit && data.unitB1.card.grade <= data.grade) { units.push({ location: 'unit B1' }) }
      if (data.unitB2.isUnit && data.unitB2.card.grade <= data.grade) { units.push({ location: 'unit B2' }) }
      if (data.unitB3.isUnit && data.unitB3.card.grade <= data.grade) { units.push({ location: 'unit B3' }) }
      if (units.length > 0) {
        const index = Math.floor(Math.random() * units.length)
        if (data.todo === 'destroy') {
          this.destroy({ who: data.target, location: units[index].location })
        }
        if (data.todo === 'bind') {
          this.bind({ who: data.target, location: units[index].location })
        }
      }
    },
    RANDOM_FIELD_BY_NAME (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      const units = []
      if (data.unitF1.isUnit && data.unitF1.card.name.search(data.name) >= 0) { units.push({ location: 'unit F1' }) }
      if (data.unitF2.isUnit && data.unitF2.card.name.search(data.name) >= 0) { units.push({ location: 'unit F2' }) }
      if (data.unitF3.isUnit && data.unitF3.card.name.search(data.name) >= 0) { units.push({ location: 'unit F3' }) }
      if (data.unitB1.isUnit && data.unitB1.card.name.search(data.name) >= 0) { units.push({ location: 'unit B1' }) }
      if (data.unitB2.isUnit && data.unitB2.card.name.search(data.name) >= 0) { units.push({ location: 'unit B2' }) }
      if (data.unitB3.isUnit && data.unitB3.card.name.search(data.name) >= 0) { units.push({ location: 'unit B3' }) }
      if (units.length > 0) {
        const index = Math.floor(Math.random() * units.length)
        if (data.todo === 'stand') {
          this.stand({ who: data.who, location: units[index].location })
        }
      }
    },
    RANDOM_FIELD_OP_BY_RACE (data) {
      if (data.who === 'player') {
        data.target = 'opponent'
        data.field = this.data.opponent.field
      } else {
        data.target = 'player'
        data.field = this.data.player.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      const units = []
      if (data.unitF1.isUnit && data.unitF1.card.type.race.search(data.race) >= 0) { units.push({ location: 'unit F1' }) }
      if (data.unitF2.isUnit && data.unitF2.card.type.race.search(data.race) >= 0) { units.push({ location: 'unit F2' }) }
      if (data.unitF3.isUnit && data.unitF3.card.type.race.search(data.race) >= 0) { units.push({ location: 'unit F3' }) }
      if (data.unitB1.isUnit && data.unitB1.card.type.race.search(data.race) >= 0) { units.push({ location: 'unit B1' }) }
      if (data.unitB2.isUnit && data.unitB2.card.type.race.search(data.race) >= 0) { units.push({ location: 'unit B2' }) }
      if (data.unitB3.isUnit && data.unitB3.card.type.race.search(data.race) >= 0) { units.push({ location: 'unit B3' }) }
      if (units.length > 0) {
        const index = Math.floor(Math.random() * units.length)
        if (data.todo === 'destroy') {
          this.destroy({ who: data.target, location: units[index].location })
        }
      }
    },
    AUTO_POWER (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      if (data.location === 'unit F1') {
        data.unit = data.field.front.unitF1
      }
      if (data.location === 'unit F2') {
        data.unit = data.field.front.unitF2
      }
      if (data.location === 'unit F3') {
        data.unit = data.field.front.unitF3
      }
      if (data.location === 'unit B1') {
        data.unit = data.field.back.unitB1
      }
      if (data.location === 'unit B2') {
        data.unit = data.field.back.unitB2
      }
      if (data.location === 'unit B3') {
        data.unit = data.field.back.unitB3
      }
      data.unit.gain.auto += data.gain
      data.unit.power = data.unit.card.power + data.unit.gain.auto + data.unit.gain.cont
    },
    CONT_POWER (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      if (data.location === 'unit F1') {
        data.unit = data.field.front.unitF1
      }
      if (data.location === 'unit F2') {
        data.unit = data.field.front.unitF2
      }
      if (data.location === 'unit F3') {
        data.unit = data.field.front.unitF3
      }
      if (data.location === 'unit B1') {
        data.unit = data.field.back.unitB1
      }
      if (data.location === 'unit B2') {
        data.unit = data.field.back.unitB2
      }
      if (data.location === 'unit B3') {
        data.unit = data.field.back.unitB3
      }
      data.unit.gain.cont = data.gain
      data.unit.power = data.unit.card.power + data.unit.gain.auto + data.unit.gain.cont
    },
    COUNT_POWER_WITH_OTHER_UNIT_NAME (data) {
      let count = 0
      let field = {}
      if (data.who === 'player') {
        field = this.data.player.field
      } else {
        field = this.data.opponent.field
      }
      const unitF1 = field.front.unitF1
      const unitF2 = field.front.unitF2
      const unitF3 = field.front.unitF3
      const unitB1 = field.back.unitB1
      const unitB2 = field.back.unitB2
      const unitB3 = field.back.unitB3
      if (unitF1.isUnit && unitF1.card.name.search(data.name) >= 0) { count += 1 }
      if (unitF2.isUnit && unitF2.card.name.search(data.name) >= 0) { count += 1 }
      if (unitF3.isUnit && unitF3.card.name.search(data.name) >= 0) { count += 1 }
      if (unitB1.isUnit && unitB1.card.name.search(data.name) >= 0) { count += 1 }
      if (unitB2.isUnit && unitB2.card.name.search(data.name) >= 0) { count += 1 }
      if (unitB3.isUnit && unitB3.card.name.search(data.name) >= 0) { count += 1 }
      if (count > 0) {
        this.CONT_POWER(data)
      } else {
        data.gain = 0
        this.CONT_POWER(data)
      }
    },
    CONT_GRADE (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      if (data.location === 'unit F1') {
        data.unit = data.field.front.unitF1
      }
      if (data.location === 'unit F2') {
        data.unit = data.field.front.unitF2
      }
      if (data.location === 'unit F3') {
        data.unit = data.field.front.unitF3
      }
      if (data.location === 'unit B1') {
        data.unit = data.field.back.unitB1
      }
      if (data.location === 'unit B2') {
        data.unit = data.field.back.unitB2
      }
      if (data.location === 'unit B3') {
        data.unit = data.field.back.unitB3
      }
      data.unit.card.grade = data.grade
      // data.unit.gain.cont = data.gain
      // data.unit.power = data.unit.card.power + data.unit.gain.auto + data.unit.gain.cont
    },
    COUNT_GRADE_WITH_OTHER_UNIT_NAME (data) {
      let count = 0
      let field = {}
      if (data.who === 'player') {
        field = this.data.player.field
      } else {
        field = this.data.opponent.field
      }
      const unitF1 = field.front.unitF1
      const unitF2 = field.front.unitF2
      const unitF3 = field.front.unitF3
      const unitB1 = field.back.unitB1
      const unitB2 = field.back.unitB2
      const unitB3 = field.back.unitB3
      if (unitF1.isUnit && unitF1.card.name.search(data.name) >= 0) { count += 1 }
      if (unitF2.isUnit && unitF2.card.name.search(data.name) >= 0) { count += 1 }
      if (unitF3.isUnit && unitF3.card.name.search(data.name) >= 0) { count += 1 }
      if (unitB1.isUnit && unitB1.card.name.search(data.name) >= 0) { count += 1 }
      if (unitB2.isUnit && unitB2.card.name.search(data.name) >= 0) { count += 1 }
      if (unitB3.isUnit && unitB3.card.name.search(data.name) >= 0) { count += 1 }
      if (count > 0) {
        this.CONT_GRADE(data)
      } else {
        data.grade = data.gradeOri
        this.CONT_GRADE(data)
      }
    },
    EFF_AUTO (data) {
      if (data.condition === 'AUTO ON ATK') { this.AUTO_ON_ATK(data) }
      if (data.condition === 'AUTO ON DEF') { this.AUTO_ON_DEF(data) }
      if (data.condition === 'AUTO ON FIELD') { this.AUTO_ON_FIELD(data) }
      if (data.condition === 'AUTO ON SEND TO DROP') { this.AUTO_ON_SEND_TO_DROP(data) }
      if (data.condition === 'AUTO ON HEAL') { this.AUTO_ON_HEAL(data) }
      if (data.condition === 'AUTO ON DAMEGE') { this.AUTO_ON_DAMAGE(data) }
      if (data.condition === 'AUTO ON DISCARD') { this.AUTO_ON_DISCARD(data) }
      if (data.condition === 'AUTO ON OP DISCARD') { this.AUTO_ON_OP_DISCARD(data) }
      if (data.condition === 'AUTO ON U DISCARD') { this.AUTO_ON_U_DISCARD(data) }
      if (data.condition === 'AUTO ON END TURN') { this.AUTO_ON_END_TURN(data) }
      if (data.condition === 'AUTO ON END DROP') { this.AUTO_ON_END_DROP(data) }
      if (data.condition === 'AUTO ON BP') { this.AUTO_ON_BP(data) }
      if (data.condition === 'AUTO ON BP OP') { this.AUTO_ON_BP_OP(data) }
      // this.EFF_AUTO({ who: data.who, location: data.location, unit: data.unit, condition: 'AUTO ON OP DISCARD' })
    },
    AUTO_ON_ATK (data) {
      if (data.unitATK.card.code === '001') {
        this.EFF001_ATK(data)
      } else if (data.unitATK.card.code === '002') {
        this.EFF002_ATK(data)
      } else if (data.unitATK.card.code === '012') {
        this.EFF012_ATK(data)
      } else if (data.unitATK.card.code === '017') {
        this.EFF017_ATK(data)
      } else if (data.unitATK.card.code === '036') {
        this.EFF036(data)
      } else if (data.unitATK.card.code === '050') {
        this.EFF050_ATK(data)
      } else if (data.unitATK.card.code === '052') {
        this.EFF052_ATK(data)
      } else if (data.unitATK.card.code === '053') {
        this.EFF053(data)
      } else if (data.unitATK.card.code === '058') {
        this.EFF058_ATK(data)
      } else if (data.unitATK.card.code === '060') {
        this.EFF060_ATK(data)
      } else if (data.unitATK.card.code === '061') {
        this.EFF061(data)
      } else if (data.unitATK.card.code === '070') {
        this.EFF070(data)
      } else if (data.unitATK.card.code === '079') {
        this.EFF079(data)
      } else if (data.unitATK.card.code === '082') {
        this.EFF082(data)
      } else if (data.unitATK.card.code === '106') {
        this.EFF106(data)
      } else if (data.unitATK.card.code === '107') {
        this.EFF107(data)
      } else {
        setTimeout(() => this.unitBlock(data), 1000)
      }
    },
    AUTO_ON_DEF (data) {
      if (data.unitDEF.card.code === '001') {
        this.EFF001_DEF(data)
      } else if (data.unitDEF.card.code === '003') {
        this.EFF003_DEF(data)
      } else if (data.unitDEF.card.code === '018') {
        this.EFF018(data)
      } else if (data.unitDEF.card.code === '038') {
        this.EFF038_DEF(data)
      } else if (data.unitDEF.card.code === '040') {
        this.EFF040_DEF(data)
      } else if (data.unitDEF.card.code === '047') {
        this.EFF047(data)
      } else if (data.unitDEF.card.code === '049') {
        this.EFF049_DEF(data)
      } else if (data.unitDEF.card.code === '051') {
        this.EFF051_DEF(data)
      } else if (data.unitDEF.card.code === '060') {
        this.EFF060_DEF(data)
      } else if (data.unitDEF.card.code === '069') {
        this.EFF069_DEF(data)
      } else if (data.unitDEF.card.code === '074') {
        this.EFF074_DEF(data)
      } else if (data.unitDEF.card.code === '087') {
        this.EFF087_DEF(data)
      } else if (data.unitDEF.card.code === '095') {
        this.EFF095(data)
      } else {
        setTimeout(() => this.resultBattle(data), 1000)
      }
    },
    AUTO_ON_FIELD (data) {
      if (data.unit.card.code === '004') { this.EFF004(data) }
      if (data.unit.card.code === '005') { this.EFF005(data) }
      if (data.unit.card.code === '006') { this.EFF006(data) }
      if (data.unit.card.code === '007') { this.EFF007(data) }
      if (data.unit.card.code === '008') { this.EFF008(data) }
      if (data.unit.card.code === '010') { this.EFF010(data) }
      if (data.unit.card.code === '015') { this.EFF015(data) }
      if (data.unit.card.code === '016') { this.EFF016(data) }
      if (data.unit.card.code === '020') { this.EFF020(data) }
      if (data.unit.card.code === '028') { this.EFF028_AUTO(data) }
      if (data.unit.card.code === '029') { this.EFF029(data) }
      if (data.unit.card.code === '030') { this.EFF030(data) }
      if (data.unit.card.code === '031') { this.EFF031_AUTO(data) }
      if (data.unit.card.code === '034') { this.EFF034_AUTO(data) }
      if (data.unit.card.code === '041') { this.EFF041(data) }
      if (data.unit.card.code === '042') { this.EFF042_AUTO(data) }
      if (data.unit.card.code === '043') { this.EFF043_AUTO(data) }
      if (data.unit.card.code === '044') { this.EFF044_AUTO(data) }
      if (data.unit.card.code === '055') { this.EFF055(data) }
      if (data.unit.card.code === '066') { this.EFF066(data) }
      if (data.unit.card.code === '069') { this.EFF069_AUTO(data) }
      if (data.unit.card.code === '094') { this.EFF094(data) }
      if (data.unit.card.code === '104') { this.EFF104(data) }
      if (data.unit.card.code === '120') { this.EFF120_AUTO(data) }
    },
    AUTO_ON_SEND_TO_DROP (data) {
      if (data.unit.card.code === '009') { this.EFF009(data) }
      if (data.unit.card.code === '011') { this.EFF011(data) }
      if (data.unit.card.code === '032') { this.EFF032(data) }
      if (data.unit.card.code === '044') { this.EFF044_DROP(data) }
      if (data.unit.card.code === '056') { this.EFF056(data) }
      if (data.unit.card.code === '057') { this.EFF057(data) }
      if (data.unit.card.code === '077') { this.EFF077(data) }
      if (data.unit.card.code === '115') { this.EFF115(data) }
      this.AUTO_UNIT_DESTROY_ON_HAND(data)
    },
    AUTO_UNIT_DESTROY_ON_HAND (data) {
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      for (let i = 0; i < data.hand.length; i++) {
        if (data.hand[i].code === '069') {
          data.index = i
          this.EFF069_HAND(data)
        }
      }
    },
    AUTO_ON_DAMAGE (data) {
      this.AUTO_ON_DAMAGE_FROM_HAND(data)
    },
    AUTO_ON_DAMAGE_FROM_HAND (data) {
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      for (let i = 0; i < data.hand.length; i++) {
        if (data.hand[i].code === '067') {
          data.index = i
          this.EFF067(data)
        }
        if (data.hand[i].code === '114') {
          data.index = i
          this.EFF114(data)
        }
      }
    },
    AUTO_ON_HEAL (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      data.code = []
      if (data.unitF1.isUnit) { data.code.push({ code: data.unitF1.card.code, location: 'unit F1' }) }
      if (data.unitF2.isUnit) { data.code.push({ code: data.unitF2.card.code, location: 'unit F2' }) }
      if (data.unitF3.isUnit) { data.code.push({ code: data.unitF3.card.code, location: 'unit F3' }) }
      if (data.unitB1.isUnit) { data.code.push({ code: data.unitB1.card.code, location: 'unit B1' }) }
      if (data.unitB2.isUnit) { data.code.push({ code: data.unitB2.card.code, location: 'unit B2' }) }
      if (data.unitB3.isUnit) { data.code.push({ code: data.unitB3.card.code, location: 'unit B3' }) }
      data.code.map((unit) => {
        if (unit.code === '014') { this.EFF014({ who: data.who, location: unit.location }) }
      })
    },
    AUTO_ON_DISCARD (data) {
      if (data.who === 'player') {
        data.drop = this.data.player.drop
      } else {
        data.drop = this.data.opponent.drop
      }
      const index = data.drop.length - 1
      if (data.drop[index].code === '021') { this.EFF021_AUTO(data) }
      if (data.drop[index].code === '023') { this.EFF023_AUTO(data) }
      if (data.drop[index].code === '024') { this.EFF024_AUTO(data) }
      if (data.drop[index].code === '025') { this.EFF025_AUTO(data) }
      if (data.drop[index].code === '026') { this.EFF026_AUTO(data) }
      if (data.drop[index].code === '027') { this.EFF027_AUTO(data) }
      if (data.drop[index].code === '075') { this.EFF075_AUTO(data) }
      if (data.drop[index].code === '076') { this.EFF076_AUTO(data) }
      if (data.drop[index].code === '108') { this.EFF108(data) }
      if (data.drop[index].code === '109') { this.EFF109(data) }
      if (data.drop[index].code === '116') { this.EFF116(data) }
      if (data.drop[index].code === '117') { this.EFF117(data) }
    },
    AUTO_ON_U_DISCARD (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      data.code = []
      if (data.unitF1.isUnit) { data.code.push({ code: data.unitF1.card.code, location: 'unit F1' }) }
      if (data.unitF2.isUnit) { data.code.push({ code: data.unitF2.card.code, location: 'unit F2' }) }
      if (data.unitF3.isUnit) { data.code.push({ code: data.unitF3.card.code, location: 'unit F3' }) }
      if (data.unitB1.isUnit) { data.code.push({ code: data.unitB1.card.code, location: 'unit B1' }) }
      if (data.unitB2.isUnit) { data.code.push({ code: data.unitB2.card.code, location: 'unit B2' }) }
      if (data.unitB3.isUnit) { data.code.push({ code: data.unitB3.card.code, location: 'unit B3' }) }
      data.code.map((unit) => {
        if (unit.code === '022') { this.EFF022_AUTO({ who: data.who, location: unit.location }) }
      })
    },
    AUTO_ON_OP_DISCARD (data) {
      if (data.who === 'player') {
        data.target = 'opponent'
        data.field = this.data.opponent.field
      } else {
        data.target = 'player'
        data.field = this.data.player.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      data.code = []
      if (data.unitF1.isUnit) { data.code.push({ code: data.unitF1.card.code, location: 'unit F1' }) }
      if (data.unitF2.isUnit) { data.code.push({ code: data.unitF2.card.code, location: 'unit F2' }) }
      if (data.unitF3.isUnit) { data.code.push({ code: data.unitF3.card.code, location: 'unit F3' }) }
      if (data.unitB1.isUnit) { data.code.push({ code: data.unitB1.card.code, location: 'unit B1' }) }
      if (data.unitB2.isUnit) { data.code.push({ code: data.unitB2.card.code, location: 'unit B2' }) }
      if (data.unitB3.isUnit) { data.code.push({ code: data.unitB3.card.code, location: 'unit B3' }) }
      data.code.map((unit) => {
        if (unit.code === '037') { this.EFF037_AUTO({ who: data.target, location: unit.location }) }
      })
    },
    AUTO_ON_BP (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      data.code = []
      if (data.unitF1.isUnit) { data.code.push({ code: data.unitF1.card.code, location: 'unit F1' }) }
      if (data.unitF2.isUnit) { data.code.push({ code: data.unitF2.card.code, location: 'unit F2' }) }
      if (data.unitF3.isUnit) { data.code.push({ code: data.unitF3.card.code, location: 'unit F3' }) }
      if (data.unitB1.isUnit) { data.code.push({ code: data.unitB1.card.code, location: 'unit B1' }) }
      if (data.unitB2.isUnit) { data.code.push({ code: data.unitB2.card.code, location: 'unit B2' }) }
      if (data.unitB3.isUnit) { data.code.push({ code: data.unitB3.card.code, location: 'unit B3' }) }
      data.code.map((unit) => {
        if (unit.code === '035') { this.EFF035({ who: data.who, location: unit.location }) }
        if (unit.code === '064') { this.EFF064({ who: data.who, location: unit.location }) }
      })
    },
    AUTO_ON_BP_OP (data) {
      if (data.who === 'player') {
        data.target = 'opponent'
        data.field = this.data.opponent.field
      } else {
        data.target = 'player'
        data.field = this.data.player.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      data.code = []
      if (data.unitF1.isUnit) { data.code.push({ code: data.unitF1.card.code, location: 'unit F1' }) }
      if (data.unitF2.isUnit) { data.code.push({ code: data.unitF2.card.code, location: 'unit F2' }) }
      if (data.unitF3.isUnit) { data.code.push({ code: data.unitF3.card.code, location: 'unit F3' }) }
      if (data.unitB1.isUnit) { data.code.push({ code: data.unitB1.card.code, location: 'unit B1' }) }
      if (data.unitB2.isUnit) { data.code.push({ code: data.unitB2.card.code, location: 'unit B2' }) }
      if (data.unitB3.isUnit) { data.code.push({ code: data.unitB3.card.code, location: 'unit B3' }) }
      data.code.map((unit) => {
        if (unit.code === '059') { this.EFF059({ who: data.target, location: unit.location }) }
      })
    },
    AUTO_ON_END_TURN (data) {
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      data.code = []
      if (data.unitF1.isUnit) { data.code.push({ code: data.unitF1.card.code, location: 'unit F1' }) }
      if (data.unitF2.isUnit) { data.code.push({ code: data.unitF2.card.code, location: 'unit F2' }) }
      if (data.unitF3.isUnit) { data.code.push({ code: data.unitF3.card.code, location: 'unit F3' }) }
      if (data.unitB1.isUnit) { data.code.push({ code: data.unitB1.card.code, location: 'unit B1' }) }
      if (data.unitB2.isUnit) { data.code.push({ code: data.unitB2.card.code, location: 'unit B2' }) }
      if (data.unitB3.isUnit) { data.code.push({ code: data.unitB3.card.code, location: 'unit B3' }) }
      data.code.map((unit) => {
        if (unit.code === '034') { this.EFF034_END({ who: data.who, location: unit.location }) }
        if (unit.code === '039') { this.EFF039({ who: data.who, location: unit.location }) }
        if (unit.code === '050') { this.EFF050_END({ who: data.who, location: unit.location }) }
        if (unit.code === '052') { this.EFF052_END({ who: data.who, location: unit.location }) }
        if (unit.code === '058') { this.EFF058_END({ who: data.who, location: unit.location }) }
        if (unit.code === '078') { this.EFF078({ who: data.who, location: unit.location }) }
        if (unit.code === '088') { this.EFF088_END({ who: data.who, location: unit.location }) }
      })
    },
    AUTO_ON_END_DROP (data) {
      if (data.who === 'player') {
        data.drop = this.data.player.drop
      } else {
        data.drop = this.data.opponent.drop
      }
      for (let i = 0; i < data.drop.length; i++) {
        if (data.drop[i].code === '066') { this.EFF066_DROP(data) }
        if (data.drop[i].code === '115') { this.EFF115_DROP({ who: data.who, index: i }) }
      }
    },
    EFF_ACT (data) {
      if (data.unit.onePerTurn) {
        alert('effect one per turn')
      } else {
        if (data.unit.card.code === '002') { this.EFF002_ACT(data) }
        if (data.unit.card.code === '003') { this.EFF003_ACT(data) }
        if (data.unit.card.code === '017') { this.EFF017_ACT(data) }
        if (data.unit.card.code === '021') { this.EFF021_ACT(data) }
        if (data.unit.card.code === '022') { this.EFF022_ACT(data) }
        if (data.unit.card.code === '023') { this.EFF023_ACT(data) }
        if (data.unit.card.code === '024') { this.EFF024_ACT(data) }
        if (data.unit.card.code === '025') { this.EFF025_ACT(data) }
        if (data.unit.card.code === '026') { this.EFF026_ACT(data) }
        if (data.unit.card.code === '027') { this.EFF027_ACT(data) }
        if (data.unit.card.code === '028') { this.EFF028_ACT(data) }
        if (data.unit.card.code === '031') { this.EFF031_ACT(data) }
        if (data.unit.card.code === '033') { this.EFF033(data) }
        if (data.unit.card.code === '037') { this.EFF037_ACT(data) }
        if (data.unit.card.code === '038') { this.EFF038_ACT(data) }
        if (data.unit.card.code === '040') { this.EFF040_ACT(data) }
        if (data.unit.card.code === '042') { this.EFF042_ACT(data) }
        if (data.unit.card.code === '043') { this.EFF043_ACT(data) }
        if (data.unit.card.code === '045') { this.EFF045(data) }
        if (data.unit.card.code === '046') { this.EFF046(data) }
        if (data.unit.card.code === '049') { this.EFF049_ACT(data) }
        if (data.unit.card.code === '051') { this.EFF051_ACT(data) }
        if (data.unit.card.code === '054') { this.EFF054(data) }
        if (data.unit.card.code === '062') { this.EFF062(data) }
        if (data.unit.card.code === '071') { this.EFF071_ACT(data) }
        if (data.unit.card.code === '072') { this.EFF072_ACT(data) }
        if (data.unit.card.code === '073') { this.EFF073_ACT(data) }
        if (data.unit.card.code === '080') { this.EFF080(data) }
        if (data.unit.card.code === '081') { this.EFF081(data) }
        if (data.unit.card.code === '083') { this.EFF083(data) }
        if (data.unit.card.code === '084') { this.EFF084(data) }
        if (data.unit.card.code === '087') { this.EFF087_ACT(data) }
        if (data.unit.card.code === '088') { this.EFF088_ACT(data) }
        if (data.unit.card.code === '089') { this.EFF089(data) }
        if (data.unit.card.code === '090') { this.EFF090(data) }
        if (data.unit.card.code === '091') { this.EFF091(data) }
        if (data.unit.card.code === '092') { this.EFF092(data) }
        if (data.unit.card.code === '093') { this.EFF093(data) }
        if (data.unit.card.code === '096') { this.EFF096(data) }
        if (data.unit.card.code === '097') { this.EFF097(data) }
        if (data.unit.card.code === '098') { this.EFF098(data) }
        if (data.unit.card.code === '099') { this.EFF099(data) }
        if (data.unit.card.code === '100') { this.EFF100(data) }
        if (data.unit.card.code === '105') { this.EFF105(data) }
        if (data.unit.card.code === '110') { this.EFF110(data) }
        if (data.unit.card.code === '111') { this.EFF111(data) }
        if (data.unit.card.code === '118') { this.EFF118(data) }
        if (data.unit.card.code === '119') { this.EFF119(data) }
        if (data.unit.card.code === '120') { this.EFF120_ACT(data) }
        data.unit.onePerTurn = true
      }
    },
    EFF_CONT (data) {
      this.CONT_PLAYER(data)
      this.CONT_OPPONENT(data)
    },
    CONT_PLAYER (data) {
      data.player = this.data.player
      data.FIELD_PLAYER = data.player.field
      data.FRONT_PLAYER = data.FIELD_PLAYER.front
      data.UNIT_F1_PLAYER = data.FRONT_PLAYER.unitF1
      data.UNIT_F2_PLAYER = data.FRONT_PLAYER.unitF2
      data.UNIT_F3_PLAYER = data.FRONT_PLAYER.unitF3
      data.BACK_PLAYER = data.FIELD_PLAYER.back
      data.UNIT_B1_PLAYER = data.BACK_PLAYER.unitB1
      data.UNIT_B2_PLAYER = data.BACK_PLAYER.unitB2
      data.UNIT_B3_PLAYER = data.BACK_PLAYER.unitB3
      data.CODE_PLAYER = []
      if (data.UNIT_F1_PLAYER.isUnit) { data.CODE_PLAYER.push({ code: data.UNIT_F1_PLAYER.card.code, location: 'unit F1' }) }
      if (data.UNIT_F2_PLAYER.isUnit) { data.CODE_PLAYER.push({ code: data.UNIT_F2_PLAYER.card.code, location: 'unit F2' }) }
      if (data.UNIT_F3_PLAYER.isUnit) { data.CODE_PLAYER.push({ code: data.UNIT_F3_PLAYER.card.code, location: 'unit F3' }) }
      if (data.UNIT_B1_PLAYER.isUnit) { data.CODE_PLAYER.push({ code: data.UNIT_B1_PLAYER.card.code, location: 'unit B1' }) }
      if (data.UNIT_B2_PLAYER.isUnit) { data.CODE_PLAYER.push({ code: data.UNIT_B2_PLAYER.card.code, location: 'unit B2' }) }
      if (data.UNIT_B3_PLAYER.isUnit) { data.CODE_PLAYER.push({ code: data.UNIT_B3_PLAYER.card.code, location: 'unit B3' }) }
      data.CODE_PLAYER.map((unit) => {
        if (unit.code === '012') { this.EFF012({ who: 'player', location: unit.location }) }
        if (unit.code === '013') { this.EFF013({ who: 'player', location: unit.location }) }
        if (unit.code === '019') { this.EFF019({ who: 'player', location: unit.location }) }
        if (unit.code === '048') { this.EFF048({ who: 'player', location: unit.location }) }
        if (unit.code === '065') { this.EFF065({ who: 'player', location: unit.location }) }
        if (unit.code === '068') { this.EFF068({ who: 'player', location: unit.location }) }
        if (unit.code === '071') { this.EFF071_CONT({ who: 'player', location: unit.location }) }
        if (unit.code === '072') { this.EFF072_CONT({ who: 'player', location: unit.location }) }
        if (unit.code === '073') { this.EFF073_CONT({ who: 'player', location: unit.location }) }
        if (unit.code === '074') { this.EFF074_CONT({ who: 'player', location: unit.location }) }
        if (unit.code === '075') { this.EFF075_CONT({ who: 'player', location: unit.location }) }
        if (unit.code === '076') { this.EFF076_CONT({ who: 'player', location: unit.location }) }
        if (unit.code === '085') { this.EFF085({ who: 'player', location: unit.location }) }
        if (unit.code === '086') { this.EFF086({ who: 'player', location: unit.location }) }
      })
    },
    CONT_OPPONENT (data) {
      data.opponent = this.data.opponent
      data.FIELD_OPPONENT = data.opponent.field
      data.FRONT_OPPONENT = data.FIELD_OPPONENT.front
      data.UNIT_F1_OPPONENT = data.FRONT_OPPONENT.unitF1
      data.UNIT_F2_OPPONENT = data.FRONT_OPPONENT.unitF2
      data.UNIT_F3_OPPONENT = data.FRONT_OPPONENT.unitF3
      data.BACK_OPPONENT = data.FIELD_OPPONENT.back
      data.UNIT_B1_OPPONENT = data.BACK_OPPONENT.unitB1
      data.UNIT_B2_OPPONENT = data.BACK_OPPONENT.unitB2
      data.UNIT_B3_OPPONENT = data.BACK_OPPONENT.unitB3
      data.CODE_OPPONENT = []
      if (data.UNIT_F1_OPPONENT.isUnit) { data.CODE_OPPONENT.push({ code: data.UNIT_F1_OPPONENT.card.code, location: 'unit F1' }) }
      if (data.UNIT_F2_OPPONENT.isUnit) { data.CODE_OPPONENT.push({ code: data.UNIT_F2_OPPONENT.card.code, location: 'unit F2' }) }
      if (data.UNIT_F3_OPPONENT.isUnit) { data.CODE_OPPONENT.push({ code: data.UNIT_F3_OPPONENT.card.code, location: 'unit F3' }) }
      if (data.UNIT_B1_OPPONENT.isUnit) { data.CODE_OPPONENT.push({ code: data.UNIT_B1_OPPONENT.card.code, location: 'unit B1' }) }
      if (data.UNIT_B2_OPPONENT.isUnit) { data.CODE_OPPONENT.push({ code: data.UNIT_B2_OPPONENT.card.code, location: 'unit B2' }) }
      if (data.UNIT_B3_OPPONENT.isUnit) { data.CODE_OPPONENT.push({ code: data.UNIT_B3_OPPONENT.card.code, location: 'unit B3' }) }
      data.CODE_OPPONENT.map((unit) => {
        if (unit.code === '012') { this.EFF012({ who: 'opponent', location: unit.location }) }
        if (unit.code === '013') { this.EFF013({ who: 'opponent', location: unit.location }) }
        if (unit.code === '019') { this.EFF019({ who: 'opponent', location: unit.location }) }
        if (unit.code === '048') { this.EFF048({ who: 'opponent', location: unit.location }) }
        if (unit.code === '065') { this.EFF065({ who: 'opponent', location: unit.location }) }
        if (unit.code === '068') { this.EFF068({ who: 'opponent', location: unit.location }) }
        if (unit.code === '071') { this.EFF071_CONT({ who: 'opponent', location: unit.location }) }
        if (unit.code === '072') { this.EFF072_CONT({ who: 'opponent', location: unit.location }) }
        if (unit.code === '073') { this.EFF073_CONT({ who: 'opponent', location: unit.location }) }
        if (unit.code === '074') { this.EFF074_CONT({ who: 'opponent', location: unit.location }) }
        if (unit.code === '075') { this.EFF075_CONT({ who: 'opponent', location: unit.location }) }
        if (unit.code === '076') { this.EFF076_CONT({ who: 'opponent', location: unit.location }) }
        if (unit.code === '085') { this.EFF085({ who: 'opponent', location: unit.location }) }
        if (unit.code === '086') { this.EFF086({ who: 'opponent', location: unit.location }) }
      })
    },
    COST (data) {
      if (data.cost === 'pay life') {
        this.damage({ who: data.who, damage: data.pay })
      }
      if (data.cost === 'discard') {
        if (data.who === 'player') {
          data.hand = this.data.player.hand
        } else {
          data.hand = this.data.opponent.hand
        }
        const cards = []
        for (let i = 0; i < data.hand.length; i++) {
          if (data.hand[i].name.search(data.discard) >= 0 && data.hand[i].name !== data.notName) {
            cards.push(i)
          }
        }
        const index = Math.floor(Math.random() * cards.length)
        this.discard({ who: data.who, index: cards[index] })
      }
      if (data.cost === 'pay life and discard') {
        if (data.who === 'player') {
          data.hand = this.data.player.hand
        } else {
          data.hand = this.data.opponent.hand
        }
        const cards = []
        for (let i = 0; i < data.hand.length; i++) {
          if (data.hand[i].name.search(data.discard) >= 0 && data.hand[i].name !== data.notName) {
            cards.push(i)
          }
        }
        const index = Math.floor(Math.random() * cards.length)
        this.discard({ who: data.who, index: cards[index] })
        this.damage({ who: data.who, damage: data.pay })
      }
      if (data.cost === 'bind from drop') {
        if (data.who === 'player') {
          data.drop = this.data.player.drop
          data.bind = this.data.player.bind
        } else {
          data.drop = this.data.opponent.drop
          data.bind = this.data.opponent.bind
        }
        const index = data.drop.length - 1
        data.bind.push(data.drop[index])
        data.drop.splice(index, 1)
      }
      if (data.cost === 'bind on field') {
        this.bind(data)
      }
    },
    // CARD EFFECT
    EFF001_ATK (data) { // Monkey D. Luffy
      data.unit = data.unitATK
      data.gain = 1000
      this.AUTO_POWER(data)
      setTimeout(() => this.unitBlock(data), 1000)
    },
    EFF001_DEF (data) { // Monkey D. Luffy
      data.unit = data.unitDEF
      data.gain = 2000
      this.AUTO_POWER(data)
      setTimeout(() => this.resultBattle(data), 1000)
    },
    EFF002_ATK (data) { // Roronoa Zoro
      data.unit = data.unitATK
      data.gain = 1000
      this.AUTO_POWER(data)
      setTimeout(() => this.unitBlock(data), 1000)
    },
    EFF002_ACT (data) { // Roronoa Zoro
      data.cost = 'pay life'
      data.pay = 500
      this.COST(data)
      data.gain = 1500
      this.AUTO_POWER(data)
    },
    EFF003_DEF (data) { // Vinsmoke Sanji
      data.unit = data.unitDEF
      data.gain = 2000
      this.AUTO_POWER(data)
      setTimeout(() => this.resultBattle(data), 1000)
    },
    EFF003_ACT (data) { // Vinsmoke Sanji
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      if (data.hand.length > 0) {
        data.cost = 'discard'
        data.discard = ''
        this.COST(data)
        data.gain = 1500
        this.AUTO_POWER(data)
      } else {
        this.Toast('error', 'Tidak ada kartu untuk discard !!!')
      }
    },
    EFF004 (data) { // Nami
      this.draw({ who: data.who })
    },
    EFF005 (data) { // Usopp
      data.grade = 1
      data.todo = 'DECK TO HAND'
      this.SEARCH_DECK_FOR_GRADE(data)
    },
    EFF006 (data) { // Tony Tony Chopper
      this.heal({ who: data.who, heal: 2000 })
    },
    EFF007 (data) { // Nico Robin
      if (data.who === 'player') { this.data.player.mana.max += 1 }
      if (data.who === 'opponent') { this.data.opponent.mana.max += 1 }
    },
    EFF008 (data) { // Franky
      data.todo = 'destroy unit G1'
      data.grade = 1
      this.SELECT_OP_FIELD_BY_GRADE(data)
    },
    EFF009 (data) { // Brook
      data.name = 'Brook'
      data.todo = 'CALL FROM DECK'
      this.SEARCH_DECK_FOR_NAME(data)
    },
    EFF010 (data) { // Jinbei
      data.todo = 'put into hand unit G2 or less'
      data.grade = 2
      this.SELECT_OP_FIELD_BY_GRADE_OR_LESS(data)
    },
    EFF011 (data) { // Brook
      data.cost = 'bind from drop'
      this.COST(data)
      data.name = 'Brook'
      data.todo = 'CALL FROM DROP'
      this.SEARCH_DROP_FOR_NAME(data)
    },
    EFF012 (data) { // Franky
      let count = 0
      let field = {}
      if (data.who === 'player') {
        field = this.data.opponent.field
      } else {
        field = this.data.player.field
      }
      const unitF1 = field.front.unitF1
      const unitF2 = field.front.unitF2
      const unitF3 = field.front.unitF3
      const unitB1 = field.back.unitB1
      const unitB2 = field.back.unitB2
      const unitB3 = field.back.unitB3
      if (!unitF1.isUnit) { count += 1 }
      if (!unitF2.isUnit) { count += 1 }
      if (!unitF3.isUnit) { count += 1 }
      if (!unitB1.isUnit) { count += 1 }
      if (!unitB2.isUnit) { count += 1 }
      if (!unitB3.isUnit) { count += 1 }
      data.gain = 500 * count
      this.CONT_POWER(data)
    },
    EFF012_ATK (data) { // Franky
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      const units = []
      if (data.unitF1.isUnit) { units.push({ location: 'unit F1' }) }
      if (data.unitF2.isUnit) { units.push({ location: 'unit F2' }) }
      if (data.unitF3.isUnit) { units.push({ location: 'unit F3' }) }
      if (data.unitB1.isUnit) { units.push({ location: 'unit B1' }) }
      if (data.unitB2.isUnit) { units.push({ location: 'unit B2' }) }
      if (data.unitB3.isUnit) { units.push({ location: 'unit B3' }) }
      if (units.length > 0) {
        const index = Math.floor(Math.random() * units.length)
        this.destroy({ who: data.who, location: units[index].location })
        // console.log(data)
        if (data.location !== units[index].location) {
          setTimeout(() => this.unitBlock(data), 1000)
        }
      }
    },
    EFF013 (data) { // Nico Robin
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
      } else {
        data.mana = this.data.opponent.mana.use
      }
      data.gain = 500 * data.mana
      this.CONT_POWER(data)
    },
    EFF014 (data) { // Tony Tony Chopper
      if (data.who === 'player') {
        this.data.player.life += 2000
      } else {
        this.data.opponent.life += 2000
      }
    },
    EFF015 (data) { // Usopp
      data.openLocation = []
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
      if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
      if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
      if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
      if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
      if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
      if (data.openLocation.length > 0) {
        const index = Math.floor(Math.random() * data.openLocation.length)
        data.grade = 1
        data.notName = 'Usopp'
        data.location = data.openLocation[index]
        data.todo = 'CALL FROM DECK'
        this.SEARCH_DECK_FOR_GRADE_AND_NOT_NAME(data)
      }
    },
    EFF016 (data) { // Nami
      data.todo = 'bind unit G1'
      data.grade = 1
      this.SELECT_OP_FIELD_BY_GRADE(data)
    },
    EFF017_ATK (data) { // Vinsmoke Sanji
      data.unit = data.unitATK
      data.gain = 1000
      this.AUTO_POWER(data)
      setTimeout(() => this.unitBlock(data), 1000)
    },
    EFF017_ACT (data) { // Vinsmoke Sanji
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      if (data.hand.length > 0) {
        data.cost = 'discard'
        data.discard = ''
        this.COST(data)
        data.gain = 1500
        this.AUTO_POWER(data)
      } else {
        this.Toast('error', 'Tidak ada kartu untuk discard !!!')
      }
    },
    EFF018 (data) { // Roronoa Zoro
      data.unit = data.unitDEF
      data.gain = 2000
      this.AUTO_POWER(data)
      this.$swal.fire({
        title: 'Aktifkan Efek Zoro ?',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          data.cost = 'pay life'
          data.pay = 500
          this.COST(data)
          data.gain = 1500
          this.AUTO_POWER(data)
          setTimeout(() => this.resultBattle(data), 1000)
        } else {
          setTimeout(() => this.resultBattle(data), 1000)
        }
      })
    },
    EFF019 (data) { // Monkey D. Luffy
      let count = 0
      let field = {}
      if (data.who === 'player') {
        field = this.data.player.field
      } else {
        field = this.data.opponent.field
      }
      const unitF1 = field.front.unitF1
      const unitF2 = field.front.unitF2
      const unitF3 = field.front.unitF3
      const unitB1 = field.back.unitB1
      const unitB2 = field.back.unitB2
      const unitB3 = field.back.unitB3
      if (unitF1.isUnit && unitF1.card.grade <= 2) { count += 1 }
      if (unitF2.isUnit && unitF2.card.grade <= 2) { count += 1 }
      if (unitF3.isUnit && unitF3.card.grade <= 2) { count += 1 }
      if (unitB1.isUnit && unitB1.card.grade <= 2) { count += 1 }
      if (unitB2.isUnit && unitB2.card.grade <= 2) { count += 1 }
      if (unitB3.isUnit && unitB3.card.grade <= 2) { count += 1 }
      data.gain = 500 * count
      this.CONT_POWER(data)
    },
    EFF020 (data) { // Nefertari Vivi
      this.$swal.fire({
        title: 'Aktifkan Efek Vivi ?',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          data.cost = 'bind on field'
          this.COST(data)
          data.grade = 1
          data.notName = 'Nefertari Vivi'
          data.todo = 'CALL FROM DECK'
          this.SEARCH_DECK_FOR_GRADE_AND_NOT_NAME(data)
        }
      })
    },
    EFF021_AUTO (data) { // Vinsmoke Yonji
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      if (data.unitF1.isUnit && data.unitF1.card.name.search('Vinsmoke') >= 0) {
        data.location = 'unit F1'
        data.gain = 1000
        this.AUTO_POWER(data)
      }
      if (data.unitF2.isUnit && data.unitF2.card.name.search('Vinsmoke') >= 0) {
        data.location = 'unit F2'
        data.gain = 1000
        this.AUTO_POWER(data)
      }
      if (data.unitF3.isUnit && data.unitF3.card.name.search('Vinsmoke') >= 0) {
        data.location = 'unit F3'
        data.gain = 1000
        this.AUTO_POWER(data)
      }
      if (data.unitB1.isUnit && data.unitB1.card.name.search('Vinsmoke') >= 0) {
        data.location = 'unit B1'
        data.gain = 1000
        this.AUTO_POWER(data)
      }
      if (data.unitB2.isUnit && data.unitB2.card.name.search('Vinsmoke') >= 0) {
        data.location = 'unit B2'
        data.gain = 1000
        this.AUTO_POWER(data)
      }
      if (data.unitB3.isUnit && data.unitB3.card.name.search('Vinsmoke') >= 0) {
        data.location = 'unit B3'
        data.gain = 1000
        this.AUTO_POWER(data)
      }
    },
    EFF021_ACT (data) { // Vinsmoke Yonji
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      if (data.hand.length > 0) {
        data.cost = 'discard'
        data.discard = 'Vinsmoke'
        this.COST(data)
        data.gain = 2000
        this.AUTO_POWER(data)
      } else {
        this.Toast('error', 'Tidak ada kartu untuk discard !!!')
      }
    },
    EFF022_AUTO (data) { // Vinsmoke Sanji
      data.gain = 1000
      this.AUTO_POWER(data)
    },
    EFF022_ACT (data) { // Vinsmoke Sanji
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      if (data.hand.length > 0) {
        data.cost = 'discard'
        data.discard = 'Vinsmoke'
        this.COST(data)
        data.gain = 2000
        this.AUTO_POWER(data)
      } else {
        this.Toast('error', 'Tidak ada kartu untuk discard !!!')
      }
    },
    EFF023_AUTO (data) { // Vinsmoke Niji
      if (data.who === 'player') {
        data.target = 'opponent'
        data.field = this.data.opponent.field
      } else {
        data.target = 'player'
        data.field = this.data.player.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      const units = []
      if (data.unitF1.isUnit && data.unitF1.card.grade <= 2) { units.push({ location: 'unit F1' }) }
      if (data.unitF2.isUnit && data.unitF2.card.grade <= 2) { units.push({ location: 'unit F2' }) }
      if (data.unitF3.isUnit && data.unitF3.card.grade <= 2) { units.push({ location: 'unit F3' }) }
      if (data.unitB1.isUnit && data.unitB1.card.grade <= 2) { units.push({ location: 'unit B1' }) }
      if (data.unitB2.isUnit && data.unitB2.card.grade <= 2) { units.push({ location: 'unit B2' }) }
      if (data.unitB3.isUnit && data.unitB3.card.grade <= 2) { units.push({ location: 'unit B3' }) }
      if (units.length > 0) {
        const index = Math.floor(Math.random() * units.length)
        this.bind({ who: data.target, location: units[index].location })
      }
    },
    EFF023_ACT (data) { // Vinsmoke Niji
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      if (data.hand.length > 0) {
        data.cost = 'discard'
        data.discard = 'Vinsmoke'
        this.COST(data)
        data.todo = 'bind unit G2 or less'
        data.grade = 2
        this.SELECT_OP_FIELD_BY_GRADE_OR_LESS(data)
      } else {
        this.Toast('error', 'Tidak ada kartu untuk discard !!!')
      }
    },
    EFF024_AUTO (data) { // Vinsmoke Ichiji
      if (data.who === 'player') {
        data.target = 'opponent'
        data.field = this.data.opponent.field
      } else {
        data.target = 'player'
        data.field = this.data.player.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      const units = []
      if (data.unitF1.isUnit && data.unitF1.card.grade <= 2) { units.push({ location: 'unit F1' }) }
      if (data.unitF2.isUnit && data.unitF2.card.grade <= 2) { units.push({ location: 'unit F2' }) }
      if (data.unitF3.isUnit && data.unitF3.card.grade <= 2) { units.push({ location: 'unit F3' }) }
      if (data.unitB1.isUnit && data.unitB1.card.grade <= 2) { units.push({ location: 'unit B1' }) }
      if (data.unitB2.isUnit && data.unitB2.card.grade <= 2) { units.push({ location: 'unit B2' }) }
      if (data.unitB3.isUnit && data.unitB3.card.grade <= 2) { units.push({ location: 'unit B3' }) }
      if (units.length > 0) {
        const index = Math.floor(Math.random() * units.length)
        this.destroy({ who: data.target, location: units[index].location })
      }
    },
    EFF024_ACT (data) { // Vinsmoke Ichiji
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      if (data.hand.length > 0) {
        data.cost = 'discard'
        data.discard = 'Vinsmoke'
        this.COST(data)
        data.todo = 'destroy unit G2 or less'
        data.grade = 2
        this.SELECT_OP_FIELD_BY_GRADE_OR_LESS(data)
      } else {
        this.Toast('error', 'Tidak ada kartu untuk discard !!!')
      }
    },
    EFF025_AUTO (data) { // Vinsmoke Reiju
      for (let i = 0; i < 2; i++) {
        this.draw({ who: data.who })
      }
    },
    EFF025_ACT (data) { // Vinsmoke Reiju
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      if (data.hand.length > 0) {
        data.cost = 'discard'
        data.discard = 'Vinsmoke'
        this.COST(data)
        this.EFF025_AUTO(data)
      } else {
        this.Toast('error', 'Tidak ada kartu untuk discard !!!')
      }
    },
    EFF026_AUTO (data) { // Vinsmoke Judge
      data.openLocation = []
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
      if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
      if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
      if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
      if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
      if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
      if (data.openLocation.length > 0) {
        const index = Math.floor(Math.random() * data.openLocation.length)
        data.name = 'Vinsmoke'
        data.grade = 2
        data.location = data.openLocation[index]
        data.todo = 'CALL FROM DECK'
        this.SEARCH_DECK_FOR_NAME_GRADE_LESS(data)
      }
    },
    EFF026_ACT (data) { // Vinsmoke Judge
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      if (data.hand.length > 0) {
        data.cost = 'discard'
        data.discard = 'Vinsmoke'
        this.COST(data)
        this.EFF026_AUTO(data)
      } else {
        this.Toast('error', 'Tidak ada kartu untuk discard !!!')
      }
    },
    EFF027_AUTO (data) { // Vinsmoke Sora
      for (let i = 0; i < 2; i++) {
        data.name = 'Vinsmoke'
        data.notName = 'Vinsmoke Sora'
        data.todo = 'DROP TO HAND'
        this.SEARCH_DROP_FOR_NAME_AND_NOT_NAME(data)
      }
    },
    EFF027_ACT (data) { // Vinsmoke Sora
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      if (data.hand.length > 0) {
        data.cost = 'discard'
        data.discard = 'Vinsmoke'
        data.notName = 'Vinsmoke Sora'
        this.COST(data)
        this.EFF027_AUTO(data)
      } else {
        this.Toast('error', 'Tidak ada kartu untuk discard !!!')
      }
    },
    EFF028_AUTO (data) { // Smoker
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
      } else {
        data.mana = this.data.opponent.mana.use
      }
      if (data.mana > 0) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 1
        } else {
          this.data.opponent.mana.use -= 1
        }
        data.todo = 'rest unit'
        this.SELECT_OP_FIELD(data)
      } else {
        this.Toast('error', 'Mana tidak cukup !!!')
      }
    },
    EFF028_ACT (data) { // Smoker
      data.cost = 'pay life'
      data.pay = 500
      this.COST(data)
      data.todo = 'rest unit G2 or less'
      this.SELECT_OP_FIELD(data)
    },
    EFF029 (data) { // Tama
      data.grade = 2
      data.race = 'Beast'
      data.todo = 'DECK TO HAND'
      this.SEARCH_DECK_FOR_RACE_AND_GRADE_LESS(data)
    },
    EFF030 (data) { // Kozuki Momonosuke
      data.grade = 2
      data.job = 'Swordman'
      data.todo = 'DECK TO HAND'
      this.SEARCH_DECK_FOR_JOB_AND_GRADE_LESS(data)
    },
    EFF031_AUTO (data) { // Sir Crocodile "Mr 0"
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
        data.target = 'opponent'
      } else {
        data.mana = this.data.opponent.mana.use
        data.target = 'player'
      }
      if (data.mana > 0) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 1
        } else {
          this.data.opponent.mana.use -= 1
        }
        data.locations = ['unit F1', 'unit F2', 'unit F3', 'unit B1', 'unit B2', 'unit B3']
        data.locations.map((location) => {
          this.AUTO_POWER({ who: data.target, location: location, gain: -500 })
        })
      } else {
        this.Toast('error', 'Mana tidak cukup !!!')
      }
    },
    EFF031_ACT (data) { // Sir Crocodile "Mr 0"
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
        data.target = 'opponent'
      } else {
        data.mana = this.data.opponent.mana.use
        data.target = 'player'
      }
      if (data.mana > 1) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 2
        } else {
          this.data.opponent.mana.use -= 2
        }
        data.locations = ['unit F1', 'unit F2', 'unit F3', 'unit B1', 'unit B2', 'unit B3']
        data.locations.map((location) => {
          this.AUTO_POWER({ who: data.target, location: location, gain: -500 })
        })
      } else {
        this.Toast('error', 'Mana tidak cukup !!!')
      }
    },
    EFF032 (data) { // Buggy
      data.name = 'Buggy'
      data.todo = 'CALL FROM DECK'
      this.SEARCH_DECK_FOR_NAME(data)
    },
    EFF033 (data) { // Gekko Moriah
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
      } else {
        data.mana = this.data.opponent.mana.use
      }
      if (data.mana > 0) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 1
        } else {
          this.data.opponent.mana.use -= 1
        }
        data.cost = 'pay life'
        data.pay = 1000
        this.COST(data)
        data.openLocation = []
        if (data.who === 'player') {
          data.field = this.data.player.field
        } else {
          data.field = this.data.opponent.field
        }
        data.front = data.field.front
        data.back = data.field.back
        data.unitF1 = data.front.unitF1
        data.unitF2 = data.front.unitF2
        data.unitF3 = data.front.unitF3
        data.unitB1 = data.back.unitB1
        data.unitB2 = data.back.unitB2
        data.unitB3 = data.back.unitB3
        if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
        if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
        if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
        if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
        if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
        if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
        if (data.openLocation.length > 0) {
          const index = Math.floor(Math.random() * data.openLocation.length)
          data.location = data.openLocation[index]
          data.race = 'Undead'
          data.todo = 'CALL FROM DROP'
          this.SEARCH_DROP_FOR_RACE(data)
        }
      } else {
        this.Toast('error', 'Mana tidak cukup !!!')
      }
    },
    EFF034_END (data) { // Monkey D. Luffy
      this.destroy(data)
    },
    EFF034_AUTO (data) { // Monkey D. Luffy
      data.cost = 'pay life'
      data.pay = 500
      this.COST(data)
      if (data.who === 'player') {
        data.drop = this.data.player.drop
      } else {
        data.drop = this.data.opponent.drop
      }
      data.gain = 500 * (data.drop.length)
      this.AUTO_POWER(data)
    },
    EFF035 (data) { // Fisher Tiger
      data.race = 'Fishman'
      data.gain = 500
      data.todo = 'GAIN AUTO POWER'
      this.SELECT_ALL_YOUR_FIELD_BY_RACE(data)
    },
    EFF036 (data) { // Hody Jones
      data.unit = data.unitATK
      data.gain = 1000
      this.AUTO_POWER(data)
      setTimeout(() => this.unitBlock(data), 1000)
    },
    EFF037_AUTO (data) { // Donquixote Doflamingo
      data.gain = 1000
      this.AUTO_POWER(data)
    },
    EFF037_ACT (data) { // Donquixote Doflamingo
      if (data.who === 'player') {
        data.target = 'opponent'
        data.hand = this.data.opponent.hand
      } else {
        data.target = 'player'
        data.hand = this.data.player.hand
      }
      if (data.hand.length > 0) {
        const index = Math.floor(Math.random() * data.hand.length)
        this.discard({ who: data.target, index: index })
      } else {
        this.Toast('error', 'Tidak ada kartu untuk discard !!!')
      }
    },
    EFF038_DEF (data) { // Tony Tony Chopper
      data.unit = data.unitDEF
      data.gain = 2000
      this.AUTO_POWER(data)
      setTimeout(() => this.resultBattle(data), 1000)
    },
    EFF038_ACT (data) { // Tony Tony Chopper
      this.FIELD_TO_DECK(data)
      data.grade = 3
      data.name = 'Tony Tony Chopper'
      data.todo = 'CALL FROM DECK'
      this.SEARCH_DECK_FOR_GRADE_AND_NAME(data)
    },
    EFF039 (data) { // Tony Tony Chopper
      this.FIELD_TO_DECK(data)
      data.grade = 2
      data.name = 'Tony Tony Chopper'
      data.todo = 'CALL FROM DECK'
      this.SEARCH_DECK_FOR_GRADE_AND_NAME(data)
    },
    EFF040_DEF (data) { // Jack
      data.cost = 'pay life'
      data.pay = 500
      this.COST(data)
      let unitATK = {}
      if (data.who === 'player') {
        data.target = 'opponent'
        data.field = this.data.opponent.field
        unitATK = this.data.opponent.unitATK
      } else {
        data.target = 'player'
        data.field = this.data.player.field
        unitATK = this.data.player.unitATK
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      const units = []
      if (data.unitF1.isUnit && data.unitF1.card.grade <= 2) { units.push({ location: 'unit F1' }) }
      if (data.unitF2.isUnit && data.unitF2.card.grade <= 2) { units.push({ location: 'unit F2' }) }
      if (data.unitF3.isUnit && data.unitF3.card.grade <= 2) { units.push({ location: 'unit F3' }) }
      if (data.unitB1.isUnit && data.unitB1.card.grade <= 2) { units.push({ location: 'unit B1' }) }
      if (data.unitB2.isUnit && data.unitB2.card.grade <= 2) { units.push({ location: 'unit B2' }) }
      if (data.unitB3.isUnit && data.unitB3.card.grade <= 2) { units.push({ location: 'unit B3' }) }
      if (units.length > 0) {
        const index = Math.floor(Math.random() * units.length)
        this.FIELD_TO_HAND({ who: data.target, location: units[index].location })
        if (unitATK.location !== units[index].location) {
          setTimeout(() => this.resultBattle(data), 1000)
        }
      }
    },
    EFF040_ACT (data) { // Jack
      this.FIELD_TO_DECK(data)
      data.grade = 3
      data.name = 'Jack'
      data.todo = 'CALL FROM DECK'
      this.SEARCH_DECK_FOR_GRADE_AND_NAME(data)
    },
    EFF041 (data) { // Aladdin
      data.todo = 'put into hand unit G1'
      data.grade = 1
      this.SELECT_OP_FIELD_BY_GRADE(data)
    },
    EFF042_AUTO (data) { // Akainu
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
        data.target = 'opponent'
        data.field = this.data.opponent.field
      } else {
        data.mana = this.data.opponent.mana.use
        data.target = 'player'
        data.field = this.data.player.field
      }
      if (data.mana > 0) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 1
        } else {
          this.data.opponent.mana.use -= 1
        }
        data.front = data.field.front
        data.back = data.field.back
        data.unitF1 = data.front.unitF1
        data.unitF2 = data.front.unitF2
        data.unitF3 = data.front.unitF3
        data.unitB1 = data.back.unitB1
        data.unitB2 = data.back.unitB2
        data.unitB3 = data.back.unitB3
        const units = []
        if (data.unitF1.isUnit) { units.push({ location: 'unit F1' }) }
        if (data.unitF2.isUnit) { units.push({ location: 'unit F2' }) }
        if (data.unitF3.isUnit) { units.push({ location: 'unit F3' }) }
        if (data.unitB1.isUnit) { units.push({ location: 'unit B1' }) }
        if (data.unitB2.isUnit) { units.push({ location: 'unit B2' }) }
        if (data.unitB3.isUnit) { units.push({ location: 'unit B3' }) }
        if (units.length > 0) {
          const index = Math.floor(Math.random() * units.length)
          this.destroy({ who: data.target, location: units[index].location })
        }
      } else {
        this.Toast('error', 'Mana tidak cukup !!!')
      }
    },
    EFF042_ACT (data) { // Akainu
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
      } else {
        data.mana = this.data.opponent.mana.use
      }
      if (data.mana > 2) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 3
        } else {
          this.data.opponent.mana.use -= 3
        }
        data.todo = 'destroy unit'
        this.SELECT_OP_FIELD(data)
      } else {
        this.Toast('error', 'Mana tidak cukup !!!')
      }
    },
    EFF043_AUTO (data) { // Aokiji
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
      } else {
        data.mana = this.data.opponent.mana.use
      }
      if (data.mana > 0) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 1
        } else {
          this.data.opponent.mana.use -= 1
        }
        data.todo = 'rest unit'
        this.SELECT_OP_FIELD(data)
      } else {
        this.Toast('error', 'Mana tidak cukup !!!')
      }
    },
    EFF043_ACT (data) { // Aokiji
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
      } else {
        data.mana = this.data.opponent.mana.use
      }
      if (data.mana > 2) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 2
        } else {
          this.data.opponent.mana.use -= 2
        }
        data.todo = 'rest unit'
        this.SELECT_OP_FIELD(data)
      } else {
        this.Toast('error', 'Mana tidak cukup !!!')
      }
    },
    EFF044_AUTO (data) { // Kizaru
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
        data.target = 'opponent'
        data.field = this.data.opponent.field
      } else {
        data.mana = this.data.opponent.mana.use
        data.target = 'player'
        data.field = this.data.player.field
      }
      if (data.mana > 0) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 1
        } else {
          this.data.opponent.mana.use -= 1
        }
        data.front = data.field.front
        data.back = data.field.back
        data.unitF1 = data.front.unitF1
        data.unitF2 = data.front.unitF2
        data.unitF3 = data.front.unitF3
        data.unitB1 = data.back.unitB1
        data.unitB2 = data.back.unitB2
        data.unitB3 = data.back.unitB3
        const units = []
        if (data.unitF1.isUnit) { units.push({ location: 'unit F1' }) }
        if (data.unitF2.isUnit) { units.push({ location: 'unit F2' }) }
        if (data.unitF3.isUnit) { units.push({ location: 'unit F3' }) }
        if (data.unitB1.isUnit) { units.push({ location: 'unit B1' }) }
        if (data.unitB2.isUnit) { units.push({ location: 'unit B2' }) }
        if (data.unitB3.isUnit) { units.push({ location: 'unit B3' }) }
        if (units.length > 0) {
          const index = Math.floor(Math.random() * units.length)
          this.destroy({ who: data.target, location: units[index].location })
        }
      } else {
        this.Toast('error', 'Mana tidak cukup !!!')
      }
    },
    EFF044_DROP (data) { // Kizaru
      data.name = 'Kizaru'
      data.todo = 'CALL FROM DECK'
      this.SEARCH_DECK_FOR_NAME(data)
    },
    EFF045 (data) { // Trafalgal D. Water Law
      data.cost = 'pay life'
      data.pay = 500
      this.COST(data)
      data.todo = 'change position'
      this.SELECT_OP_FIELD(data)
    },
    EFF046 (data) { // Bartholomew Kuma
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
      } else {
        data.mana = this.data.opponent.mana.use
      }
      if (data.mana > 2) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 3
        } else {
          this.data.opponent.mana.use -= 3
        }
        data.todo = 'unit to deck'
        this.SELECT_OP_FIELD(data)
      } else {
        this.Toast('error', 'Mana tidak cukup !!!')
      }
    },
    EFF047 (data) { // Charlotte Cracker
      data.unit = data.unitDEF
      data.gain = 2000
      this.AUTO_POWER(data)
      this.$swal.fire({
        title: 'Aktifkan Efek Charlotte Cracker ?',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          data.cost = 'pay life'
          data.pay = 500
          this.COST(data)
          data.gain = 1500
          this.AUTO_POWER(data)
          setTimeout(() => this.resultBattle(data), 1000)
        } else {
          setTimeout(() => this.resultBattle(data), 1000)
        }
      })
    },
    EFF048 (data) { // Bartolomeo
      let count = 0
      let field = {}
      if (data.who === 'player') {
        field = this.data.player.field
      } else {
        field = this.data.opponent.field
      }
      const unitF1 = field.front.unitF1
      const unitF2 = field.front.unitF2
      const unitF3 = field.front.unitF3
      const unitB1 = field.back.unitB1
      const unitB2 = field.back.unitB2
      const unitB3 = field.back.unitB3
      if (unitF1.isUnit && (unitF1.card.text.search('Commander SHP') >= 0 || unitF1.card.name.search('Monkey D. Luffy') >= 0)) { count += 1 }
      if (unitF2.isUnit && (unitF2.card.text.search('Commander SHP') >= 0 || unitF2.card.name.search('Monkey D. Luffy') >= 0)) { count += 1 }
      if (unitF3.isUnit && (unitF3.card.text.search('Commander SHP') >= 0 || unitF3.card.name.search('Monkey D. Luffy') >= 0)) { count += 1 }
      if (unitB1.isUnit && (unitB1.card.text.search('Commander SHP') >= 0 || unitB1.card.name.search('Monkey D. Luffy') >= 0)) { count += 1 }
      if (unitB2.isUnit && (unitB2.card.text.search('Commander SHP') >= 0 || unitB2.card.name.search('Monkey D. Luffy') >= 0)) { count += 1 }
      if (unitB3.isUnit && (unitB3.card.text.search('Commander SHP') >= 0 || unitB3.card.name.search('Monkey D. Luffy') >= 0)) { count += 1 }
      data.gain = 500 * count
      this.CONT_POWER(data)
    },
    EFF049_DEF (data) { // Inuarashi
      data.unit = data.unitDEF
      this.$swal.fire({
        title: 'Aktifkan Efek Inuarashi ?',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          data.cost = 'pay life'
          data.pay = 500
          this.COST(data)
          let count = 0
          let field = {}
          if (data.who === 'player') {
            field = this.data.player.field
          } else {
            field = this.data.opponent.field
          }
          const unitF1 = field.front.unitF1
          const unitF2 = field.front.unitF2
          const unitF3 = field.front.unitF3
          const unitB1 = field.back.unitB1
          const unitB2 = field.back.unitB2
          const unitB3 = field.back.unitB3
          if (unitF1.isUnit && unitF1.card.type.race.search('Beast') >= 0) { count += 1 }
          if (unitF2.isUnit && unitF2.card.type.race.search('Beast') >= 0) { count += 1 }
          if (unitF3.isUnit && unitF3.card.type.race.search('Beast') >= 0) { count += 1 }
          if (unitB1.isUnit && unitB1.card.type.race.search('Beast') >= 0) { count += 1 }
          if (unitB2.isUnit && unitB2.card.type.race.search('Beast') >= 0) { count += 1 }
          if (unitB3.isUnit && unitB3.card.type.race.search('Beast') >= 0) { count += 1 }
          data.gain = 500 * count
          this.AUTO_POWER(data)
          setTimeout(() => this.resultBattle(data), 1000)
        } else {
          setTimeout(() => this.resultBattle(data), 1000)
        }
      })
    },
    EFF049_ACT (data) { // Inuarashi
      this.FIELD_TO_DECK(data)
      data.grade = 3
      data.name = 'Inuarashi'
      data.todo = 'CALL FROM DECK'
      this.SEARCH_DECK_FOR_GRADE_AND_NAME(data)
    },
    EFF050_END (data) { // Inuarashi
      this.FIELD_TO_DECK(data)
      data.grade = 2
      data.name = 'Inuarashi'
      data.todo = 'CALL FROM DECK'
      this.SEARCH_DECK_FOR_GRADE_AND_NAME(data)
    },
    EFF050_ATK (data) { // Inuarashi
      data.unit = data.unitATK
      this.$swal.fire({
        title: 'Aktifkan Efek Inuarashi ?',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          data.cost = 'pay life'
          data.pay = 500
          this.COST(data)
          let count = 0
          let field = {}
          if (data.who === 'player') {
            field = this.data.player.field
          } else {
            field = this.data.opponent.field
          }
          const unitF1 = field.front.unitF1
          const unitF2 = field.front.unitF2
          const unitF3 = field.front.unitF3
          const unitB1 = field.back.unitB1
          const unitB2 = field.back.unitB2
          const unitB3 = field.back.unitB3
          if (unitF1.isUnit && unitF1.card.type.race.search('Beast') >= 0) { count += 1 }
          if (unitF2.isUnit && unitF2.card.type.race.search('Beast') >= 0) { count += 1 }
          if (unitF3.isUnit && unitF3.card.type.race.search('Beast') >= 0) { count += 1 }
          if (unitB1.isUnit && unitB1.card.type.race.search('Beast') >= 0) { count += 1 }
          if (unitB2.isUnit && unitB2.card.type.race.search('Beast') >= 0) { count += 1 }
          if (unitB3.isUnit && unitB3.card.type.race.search('Beast') >= 0) { count += 1 }
          data.gain = 500 * count
          this.AUTO_POWER(data)
          setTimeout(() => this.unitBlock(data), 1000)
        } else {
          setTimeout(() => this.unitBlock(data), 1000)
        }
      })
    },
    EFF051_DEF (data) { // Nekomamushi
      data.unit = data.unitDEF
      this.$swal.fire({
        title: 'Aktifkan Efek Inuarashi ?',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          data.cost = 'pay life'
          data.pay = 500
          this.COST(data)
          let count = 0
          let field = {}
          if (data.who === 'player') {
            field = this.data.player.field
          } else {
            field = this.data.opponent.field
          }
          const unitF1 = field.front.unitF1
          const unitF2 = field.front.unitF2
          const unitF3 = field.front.unitF3
          const unitB1 = field.back.unitB1
          const unitB2 = field.back.unitB2
          const unitB3 = field.back.unitB3
          if (unitF1.isUnit && unitF1.card.type.race.search('Beast') >= 0) { count += 1 }
          if (unitF2.isUnit && unitF2.card.type.race.search('Beast') >= 0) { count += 1 }
          if (unitF3.isUnit && unitF3.card.type.race.search('Beast') >= 0) { count += 1 }
          if (unitB1.isUnit && unitB1.card.type.race.search('Beast') >= 0) { count += 1 }
          if (unitB2.isUnit && unitB2.card.type.race.search('Beast') >= 0) { count += 1 }
          if (unitB3.isUnit && unitB3.card.type.race.search('Beast') >= 0) { count += 1 }
          data.gain = 500 * count
          this.AUTO_POWER(data)
          setTimeout(() => this.resultBattle(data), 1000)
        } else {
          setTimeout(() => this.resultBattle(data), 1000)
        }
      })
    },
    EFF051_ACT (data) { // Nekomamushi
      this.FIELD_TO_DECK(data)
      data.grade = 3
      data.name = 'Nekomamushi'
      data.todo = 'CALL FROM DECK'
      this.SEARCH_DECK_FOR_GRADE_AND_NAME(data)
    },
    EFF052_END (data) { // Nekomamushi
      this.FIELD_TO_DECK(data)
      data.grade = 2
      data.name = 'Nekomamushi'
      data.todo = 'CALL FROM DECK'
      this.SEARCH_DECK_FOR_GRADE_AND_NAME(data)
    },
    EFF052_ATK (data) { // Nekomamushi
      data.unit = data.unitATK
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
        data.target = 'opponent'
        data.field = this.data.opponent.field
      } else {
        data.mana = this.data.opponent.mana.use
        data.target = 'player'
        data.field = this.data.player.field
      }
      if (data.mana > 0) {
        this.$swal.fire({
          title: 'Aktifkan Efek Nekomamushi ?',
          showCancelButton: true,
          confirmButtonText: 'YES',
          cancelButtonText: 'NO'
        }).then((result) => {
          if (result.isConfirmed) {
            if (data.who === 'player') {
              this.data.player.mana.use -= 1
            } else {
              this.data.opponent.mana.use -= 1
            }
            data.front = data.field.front
            data.back = data.field.back
            data.unitF1 = data.front.unitF1
            data.unitF2 = data.front.unitF2
            data.unitF3 = data.front.unitF3
            data.unitB1 = data.back.unitB1
            data.unitB2 = data.back.unitB2
            data.unitB3 = data.back.unitB3
            const units = []
            if (data.unitF1.isUnit && data.unitF1.card.grade <= 2) { units.push({ location: 'unit F1' }) }
            if (data.unitF2.isUnit && data.unitF2.card.grade <= 2) { units.push({ location: 'unit F2' }) }
            if (data.unitF3.isUnit && data.unitF3.card.grade <= 2) { units.push({ location: 'unit F3' }) }
            if (data.unitB1.isUnit && data.unitB1.card.grade <= 2) { units.push({ location: 'unit B1' }) }
            if (data.unitB2.isUnit && data.unitB2.card.grade <= 2) { units.push({ location: 'unit B2' }) }
            if (data.unitB3.isUnit && data.unitB3.card.grade <= 2) { units.push({ location: 'unit B3' }) }
            if (units.length > 0) {
              const index = Math.floor(Math.random() * units.length)
              this.destroy({ who: data.target, location: units[index].location })
            }
            setTimeout(() => this.unitBlock(data), 1000)
          } else {
            setTimeout(() => this.unitBlock(data), 1000)
          }
        })
      } else {
        setTimeout(() => this.unitBlock(data), 1000)
      }
    },
    EFF053 (data) { // Uta
      let count = 0
      let field = {}
      let fieldOP = {}
      if (data.who === 'player') {
        field = this.data.player.field
        fieldOP = this.data.opponent.field
      } else {
        field = this.data.opponent.field
        fieldOP = this.data.player.field
      }
      const unitF1 = field.front.unitF1
      const unitF2 = field.front.unitF2
      const unitF3 = field.front.unitF3
      const unitB1 = field.back.unitB1
      const unitB2 = field.back.unitB2
      const unitB3 = field.back.unitB3
      if (unitF1.isUnit && unitF1.position === 'Rest') { count += 1 }
      if (unitF2.isUnit && unitF2.position === 'Rest') { count += 1 }
      if (unitF3.isUnit && unitF3.position === 'Rest') { count += 1 }
      if (unitB1.isUnit && unitB1.position === 'Rest') { count += 1 }
      if (unitB2.isUnit && unitB2.position === 'Rest') { count += 1 }
      if (unitB3.isUnit && unitB3.position === 'Rest') { count += 1 }
      const unitF1OP = fieldOP.front.unitF1
      const unitF2OP = fieldOP.front.unitF2
      const unitF3OP = fieldOP.front.unitF3
      const unitB1OP = fieldOP.back.unitB1
      const unitB2OP = fieldOP.back.unitB2
      const unitB3OP = fieldOP.back.unitB3
      if (unitF1OP.isUnit && unitF1OP.position === 'Rest') { count += 1 }
      if (unitF2OP.isUnit && unitF2OP.position === 'Rest') { count += 1 }
      if (unitF3OP.isUnit && unitF3OP.position === 'Rest') { count += 1 }
      if (unitB1OP.isUnit && unitB1OP.position === 'Rest') { count += 1 }
      if (unitB2OP.isUnit && unitB2OP.position === 'Rest') { count += 1 }
      if (unitB3OP.isUnit && unitB3OP.position === 'Rest') { count += 1 }
      this.$swal.fire({
        title: 'Aktifkan Efek Uta ?',
        showCancelButton: true,
        confirmButtonText: 'YES',
        cancelButtonText: 'NO'
      }).then((result) => {
        if (result.isConfirmed) {
          data.cost = 'pay life'
          data.pay = 500
          this.COST(data)
          data.gain = 500 * count
          this.AUTO_POWER(data)
          setTimeout(() => this.unitBlock(data), 1000)
        } else {
          setTimeout(() => this.unitBlock(data), 1000)
        }
      })
    },
    EFF054 (data) { // Gordon
      this.rest(data)
      if (data.who === 'player') {
        data.target = 'opponent'
        data.field = this.data.opponent.field
      } else {
        data.target = 'player'
        data.field = this.data.player.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      const units = []
      if (data.unitF1.isUnit && data.unitF1.card.grade === 1 && data.unitF1.position === 'Stand') { units.push({ location: 'unit F1' }) }
      if (data.unitF2.isUnit && data.unitF2.card.grade === 1 && data.unitF2.position === 'Stand') { units.push({ location: 'unit F2' }) }
      if (data.unitF3.isUnit && data.unitF3.card.grade === 1 && data.unitF3.position === 'Stand') { units.push({ location: 'unit F3' }) }
      if (data.unitB1.isUnit && data.unitB1.card.grade === 1 && data.unitB1.position === 'Stand') { units.push({ location: 'unit B1' }) }
      if (data.unitB2.isUnit && data.unitB2.card.grade === 1 && data.unitB2.position === 'Stand') { units.push({ location: 'unit B2' }) }
      if (data.unitB3.isUnit && data.unitB3.card.grade === 1 && data.unitB3.position === 'Stand') { units.push({ location: 'unit B3' }) }
      if (units.length > 0) {
        const index = Math.floor(Math.random() * units.length)
        this.rest({ who: data.target, location: units[index].location })
      }
    },
    EFF055 (data) { // Arlong
      data.grade = 3
      data.race = 'Fishman'
      data.todo = 'DECK TO HAND'
      this.SEARCH_DECK_FOR_RACE_AND_GRADE_LESS(data)
    },
    EFF056 (data) { // Brook
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
      } else {
        data.mana = this.data.opponent.mana.use
      }
      if (data.mana > 0) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 1
        } else {
          this.data.opponent.mana.use -= 1
        }
        data.cost = 'pay life'
        data.pay = 1000
        this.COST(data)
        data.openLocation = []
        if (data.who === 'player') {
          data.field = this.data.player.field
        } else {
          data.field = this.data.opponent.field
        }
        data.front = data.field.front
        data.back = data.field.back
        data.unitF1 = data.front.unitF1
        data.unitF2 = data.front.unitF2
        data.unitF3 = data.front.unitF3
        data.unitB1 = data.back.unitB1
        data.unitB2 = data.back.unitB2
        data.unitB3 = data.back.unitB3
        if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
        if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
        if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
        if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
        if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
        if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
        if (data.openLocation.length > 0) {
          const index = Math.floor(Math.random() * data.openLocation.length)
          data.location = data.openLocation[index]
          data.race = ''
          data.todo = 'CALL FROM DROP'
          this.SEARCH_DROP_FOR_RACE(data)
        }
      }
    },
    EFF057 (data) { // Basil Hawkins
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
      } else {
        data.mana = this.data.opponent.mana.use
      }
      if (data.mana > 0) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 1
        } else {
          this.data.opponent.mana.use -= 1
        }
        data.cost = 'pay life'
        data.pay = 1000
        this.COST(data)
        data.openLocation = []
        if (data.who === 'player') {
          data.field = this.data.player.field
        } else {
          data.field = this.data.opponent.field
        }
        data.front = data.field.front
        data.back = data.field.back
        data.unitF1 = data.front.unitF1
        data.unitF2 = data.front.unitF2
        data.unitF3 = data.front.unitF3
        data.unitB1 = data.back.unitB1
        data.unitB2 = data.back.unitB2
        data.unitB3 = data.back.unitB3
        if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
        if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
        if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
        if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
        if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
        if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
        if (data.openLocation.length > 0) {
          const index = Math.floor(Math.random() * data.openLocation.length)
          data.location = data.openLocation[index]
          data.name = ''
          data.todo = 'CALL FROM DECK'
          this.SEARCH_DECK_FOR_NAME(data)
        }
      }
    },
    EFF058_END (data) { // Jack
      this.FIELD_TO_DECK(data)
      data.grade = 2
      data.name = 'Jack'
      data.todo = 'CALL FROM DECK'
      this.SEARCH_DECK_FOR_GRADE_AND_NAME(data)
    },
    EFF058_ATK (data) { // Jack
      data.unit = data.unitATK
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
        data.target = 'opponent'
        data.field = this.data.opponent.field
      } else {
        data.mana = this.data.opponent.mana.use
        data.target = 'player'
        data.field = this.data.player.field
      }
      if (data.mana > 0) {
        this.$swal.fire({
          title: 'Aktifkan Efek Jack ?',
          showCancelButton: true,
          confirmButtonText: 'YES',
          cancelButtonText: 'NO'
        }).then((result) => {
          if (result.isConfirmed) {
            if (data.who === 'player') {
              this.data.player.mana.use -= 1
            } else {
              this.data.opponent.mana.use -= 1
            }
            data.front = data.field.front
            data.back = data.field.back
            data.unitF1 = data.front.unitF1
            data.unitF2 = data.front.unitF2
            data.unitF3 = data.front.unitF3
            data.unitB1 = data.back.unitB1
            data.unitB2 = data.back.unitB2
            data.unitB3 = data.back.unitB3
            const units = []
            if (data.unitF1.isUnit && data.unitF1.card.grade <= 2) { units.push({ location: 'unit F1' }) }
            if (data.unitF2.isUnit && data.unitF2.card.grade <= 2) { units.push({ location: 'unit F2' }) }
            if (data.unitF3.isUnit && data.unitF3.card.grade <= 2) { units.push({ location: 'unit F3' }) }
            if (data.unitB1.isUnit && data.unitB1.card.grade <= 2) { units.push({ location: 'unit B1' }) }
            if (data.unitB2.isUnit && data.unitB2.card.grade <= 2) { units.push({ location: 'unit B2' }) }
            if (data.unitB3.isUnit && data.unitB3.card.grade <= 2) { units.push({ location: 'unit B3' }) }
            if (units.length > 0) {
              const index = Math.floor(Math.random() * units.length)
              this.FIELD_TO_HAND({ who: data.target, location: units[index].location })
            }
            setTimeout(() => this.unitBlock(data), 1000)
          } else {
            setTimeout(() => this.unitBlock(data), 1000)
          }
        })
      } else {
        setTimeout(() => this.unitBlock(data), 1000)
      }
    },
    EFF059 (data) { // Boa Hancock
      console.log('BOA HANCOCK')
      console.log(data)
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
        data.target = 'opponent'
        data.field = this.data.opponent.field
      } else {
        data.mana = this.data.opponent.mana.use
        data.target = 'player'
        data.field = this.data.player.field
      }
      if (data.mana > 0) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 1
        } else {
          this.data.opponent.mana.use -= 1
        }
        data.front = data.field.front
        data.back = data.field.back
        data.unitF1 = data.front.unitF1
        data.unitF2 = data.front.unitF2
        data.unitF3 = data.front.unitF3
        data.unitB1 = data.back.unitB1
        data.unitB2 = data.back.unitB2
        data.unitB3 = data.back.unitB3
        const units = []
        if (data.unitF1.isUnit && data.unitF1.position === 'Stand') { units.push({ location: 'unit F1' }) }
        if (data.unitF2.isUnit && data.unitF2.position === 'Stand') { units.push({ location: 'unit F2' }) }
        if (data.unitF3.isUnit && data.unitF3.position === 'Stand') { units.push({ location: 'unit F3' }) }
        if (data.unitB1.isUnit && data.unitB1.position === 'Stand') { units.push({ location: 'unit B1' }) }
        if (data.unitB2.isUnit && data.unitB2.position === 'Stand') { units.push({ location: 'unit B2' }) }
        if (data.unitB3.isUnit && data.unitB3.position === 'Stand') { units.push({ location: 'unit B3' }) }
        if (units.length > 0) {
          const index = Math.floor(Math.random() * units.length)
          this.rest({ who: data.target, location: units[index].location })
        }
      }
    },
    EFF060_ATK (data) { // Coby
      data.unit = data.unitATK
      data.gain = 1000
      this.AUTO_POWER(data)
      setTimeout(() => this.unitBlock(data), 1000)
    },
    EFF060_DEF (data) { // Coby
      data.unit = data.unitDEF
      data.gain = 2000
      this.AUTO_POWER(data)
      setTimeout(() => this.resultBattle(data), 1000)
    },
    EFF061 (data) { // Eustass Kid
      data.unit = data.unitATK
      data.openLocation = []
      if (data.who === 'player') {
        data.target = 'opponent'
        data.field = this.data.opponent.field
        data.hand = this.data.opponent.hand
      } else {
        data.target = 'player'
        data.field = this.data.player.field
        data.hand = this.data.player.hand
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
      if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
      if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
      if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
      if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
      if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
      if (data.openLocation.length > 0) {
        const indexLocation = Math.floor(Math.random() * data.openLocation.length)
        if (data.hand.length > 0) {
          const indexHand = Math.floor(Math.random() * data.hand.length)
          if (data.who === 'player') {
            this.data.opponent.unit = {
              card: data.hand[indexHand],
              index: indexHand
            }
            this.data.opponent.mana.use += this.data.opponent.unit.card.grade
          } else {
            this.data.player.unit = {
              card: data.hand[indexHand],
              index: indexHand
            }
            this.data.player.mana.use += this.data.player.unit.card.grade
          }
          data.gain = data.hand[indexHand].power
          this.AUTO_POWER(data)
          this.callFromHand({ who: data.target, location: data.openLocation[indexLocation] })
          setTimeout(() => this.unitBlock(data), 1000)
        } else {
          data.gain = 3000
          this.AUTO_POWER(data)
          setTimeout(() => this.unitBlock(data), 1000)
        }
      } else {
        data.gain = 3000
        this.AUTO_POWER(data)
        setTimeout(() => this.unitBlock(data), 1000)
      }
    },
    EFF062 (data) { // Fujitora
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
        data.target = 'opponent'
        data.field = this.data.opponent.field
      } else {
        data.mana = this.data.opponent.mana.use
        data.target = 'player'
        data.field = this.data.player.field
      }
      if (data.mana > 0) {
        data.cost = 'pay life'
        data.pay = 500
        this.COST(data)
        if (data.who === 'player') {
          this.data.player.mana.use -= 1
        } else {
          this.data.opponent.mana.use -= 1
        }
        data.front = data.field.front
        data.back = data.field.back
        data.unitF1 = data.front.unitF1
        data.unitF2 = data.front.unitF2
        data.unitF3 = data.front.unitF3
        data.unitB1 = data.back.unitB1
        data.unitB2 = data.back.unitB2
        data.unitB3 = data.back.unitB3
        const units = []
        if (data.unitF1.isUnit) { units.push({ unit: data.unitF1, location: 'unit F1' }) }
        if (data.unitF2.isUnit) { units.push({ unit: data.unitF2, location: 'unit F2' }) }
        if (data.unitF3.isUnit) { units.push({ unit: data.unitF3, location: 'unit F3' }) }
        if (data.unitB1.isUnit) { units.push({ unit: data.unitB1, location: 'unit B1' }) }
        if (data.unitB2.isUnit) { units.push({ unit: data.unitB2, location: 'unit B2' }) }
        if (data.unitB3.isUnit) { units.push({ unit: data.unitB3, location: 'unit B3' }) }
        if (units.length > 0) {
          const index = Math.floor(Math.random() * units.length)
          data.gain = units[index].unit.power
          this.AUTO_POWER(data)
          this.destroy({ who: data.target, location: units[index].location })
        }
      } else {
        this.Toast('error', 'Mana tidak cukup !!!')
      }
    },
    EFF064 (data) { // Kaido
      data.special = 'Zoan'
      data.gain = 500
      data.todo = 'GAIN AUTO POWER'
      this.SELECT_ALL_YOUR_FIELD_BY_SPECIAL(data)
    },
    EFF065 (data) { // Kaido
      let count = 0
      let field = {}
      if (data.who === 'player') {
        field = this.data.player.field
      } else {
        field = this.data.opponent.field
      }
      const unitF1 = field.front.unitF1
      const unitF2 = field.front.unitF2
      const unitF3 = field.front.unitF3
      const unitB1 = field.back.unitB1
      const unitB2 = field.back.unitB2
      const unitB3 = field.back.unitB3
      if (unitF1.isUnit && unitF1.card.type.special.search('Zoan') >= 0) { count += 1 }
      if (unitF2.isUnit && unitF2.card.type.special.search('Zoan') >= 0) { count += 1 }
      if (unitF3.isUnit && unitF3.card.type.special.search('Zoan') >= 0) { count += 1 }
      if (unitB1.isUnit && unitB1.card.type.special.search('Zoan') >= 0) { count += 1 }
      if (unitB2.isUnit && unitB2.card.type.special.search('Zoan') >= 0) { count += 1 }
      if (unitB3.isUnit && unitB3.card.type.special.search('Zoan') >= 0) { count += 1 }
      data.gain = 500 * count
      this.CONT_POWER(data)
    },
    EFF066 (data) { // Marco
      this.heal({ who: data.who, heal: 2000 })
    },
    EFF066_DROP (data) { // Marco
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
        data.hand = this.data.player.hand
      } else {
        data.mana = this.data.opponent.mana.use
        data.hand = this.data.opponent.hand
      }
      if (data.mana > 0 && data.hand.length > 0) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 1
        } else {
          this.data.opponent.mana.use -= 1
        }
        data.cost = 'discard'
        data.discard = ''
        this.COST(data)
        data.openLocation = []
        if (data.who === 'player') {
          data.field = this.data.player.field
        } else {
          data.field = this.data.opponent.field
        }
        data.front = data.field.front
        data.back = data.field.back
        data.unitF1 = data.front.unitF1
        data.unitF2 = data.front.unitF2
        data.unitF3 = data.front.unitF3
        data.unitB1 = data.back.unitB1
        data.unitB2 = data.back.unitB2
        data.unitB3 = data.back.unitB3
        if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
        if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
        if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
        if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
        if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
        if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
        if (data.openLocation.length > 0) {
          const index = Math.floor(Math.random() * data.openLocation.length)
          data.location = data.openLocation[index]
          data.code = '066'
          data.todo = 'CALL FROM DROP'
          this.SEARCH_DROP_FOR_CODE(data)
        }
      }
    },
    EFF067 (data) { // Dracule Mihawk
      data.openLocation = []
      if (data.who === 'player') {
        data.field = this.data.player.field
        data.hand = this.data.player.hand
      } else {
        data.field = this.data.opponent.field
        data.hand = this.data.opponent.hand
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
      if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
      if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
      if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
      if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
      if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
      if (data.openLocation.length > 0) {
        const indexLocation = Math.floor(Math.random() * data.openLocation.length)
        if (data.who === 'player') {
          this.data.player.unit = {
            card: data.hand[data.index],
            index: data.index
          }
          this.data.player.mana.use += this.data.player.unit.card.grade
        } else {
          this.data.opponent.unit = {
            card: data.hand[data.index],
            index: data.index
          }
          this.data.opponent.mana.use += this.data.opponent.unit.card.grade
        }
        this.callFromHand({ who: data.who, location: data.openLocation[indexLocation] })
        this.EFF067_DESTROY(data)
      }
    },
    EFF067_DESTROY (data) { // Dracule Mihawk
      if (data.who === 'player') {
        data.target = 'opponent'
        data.field = this.data.opponent.field
      } else {
        data.target = 'player'
        data.field = this.data.player.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      const units = []
      if (data.unitF1.isUnit && data.unitF1.power <= data.damage) { units.push({ location: 'unit F1' }) }
      if (data.unitF2.isUnit && data.unitF2.power <= data.damage) { units.push({ location: 'unit F2' }) }
      if (data.unitF3.isUnit && data.unitF3.power <= data.damage) { units.push({ location: 'unit F3' }) }
      if (data.unitB1.isUnit && data.unitB1.power <= data.damage) { units.push({ location: 'unit B1' }) }
      if (data.unitB2.isUnit && data.unitB2.power <= data.damage) { units.push({ location: 'unit B2' }) }
      if (data.unitB3.isUnit && data.unitB3.power <= data.damage) { units.push({ location: 'unit B3' }) }
      if (units.length > 0) {
        for (let i = 0; i < units.length; i++) {
          this.destroy({ who: data.target, location: units[i].location })
        }
      }
    },
    EFF068 (data) { // Monkey D. Garp
      let count = 0
      let field = {}
      if (data.who === 'player') {
        field = this.data.player.field
      } else {
        field = this.data.opponent.field
      }
      const unitF1 = field.front.unitF1
      const unitF2 = field.front.unitF2
      const unitF3 = field.front.unitF3
      const unitB1 = field.back.unitB1
      const unitB2 = field.back.unitB2
      const unitB3 = field.back.unitB3
      if (unitF1.isUnit && unitF1.card.type.job.search('Fighter') >= 0) { count += 1 }
      if (unitF2.isUnit && unitF2.card.type.job.search('Fighter') >= 0) { count += 1 }
      if (unitF3.isUnit && unitF3.card.type.job.search('Fighter') >= 0) { count += 1 }
      if (unitB1.isUnit && unitB1.card.type.job.search('Fighter') >= 0) { count += 1 }
      if (unitB2.isUnit && unitB2.card.type.job.search('Fighter') >= 0) { count += 1 }
      if (unitB3.isUnit && unitB3.card.type.job.search('Fighter') >= 0) { count += 1 }
      data.gain = 500 * count
      this.CONT_POWER(data)
    },
    EFF069_HAND (data) { // Portgas D. Ace
      data.openLocation = []
      if (data.who === 'player') {
        data.field = this.data.player.field
        data.hand = this.data.player.hand
      } else {
        data.field = this.data.opponent.field
        data.hand = this.data.opponent.hand
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
      if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
      if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
      if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
      if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
      if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
      if (data.openLocation.length > 0) {
        const indexLocation = Math.floor(Math.random() * data.openLocation.length)
        if (data.who === 'player') {
          this.data.player.unit = {
            card: data.hand[data.index],
            index: data.index
          }
          this.data.player.mana.use += this.data.player.unit.card.grade
        } else {
          this.data.opponent.unit = {
            card: data.hand[data.index],
            index: data.index
          }
          this.data.opponent.mana.use += this.data.opponent.unit.card.grade
        }
        this.callFromHand({ who: data.who, location: data.openLocation[indexLocation] })
      }
    },
    EFF069_AUTO (data) { // Portgas D. Ace
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
        data.target = 'opponent'
        data.field = this.data.opponent.field
      } else {
        data.mana = this.data.opponent.mana.use
        data.target = 'player'
        data.field = this.data.player.field
      }
      if (data.mana > 0) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 1
        } else {
          this.data.opponent.mana.use -= 1
        }
        data.front = data.field.front
        data.back = data.field.back
        data.unitF1 = data.front.unitF1
        data.unitF2 = data.front.unitF2
        data.unitF3 = data.front.unitF3
        data.unitB1 = data.back.unitB1
        data.unitB2 = data.back.unitB2
        data.unitB3 = data.back.unitB3
        const units = []
        if (data.unitF1.isUnit) { units.push({ location: 'unit F1' }) }
        if (data.unitF2.isUnit) { units.push({ location: 'unit F2' }) }
        if (data.unitF3.isUnit) { units.push({ location: 'unit F3' }) }
        if (data.unitB1.isUnit) { units.push({ location: 'unit B1' }) }
        if (data.unitB2.isUnit) { units.push({ location: 'unit B2' }) }
        if (data.unitB3.isUnit) { units.push({ location: 'unit B3' }) }
        if (units.length > 0) {
          const index = Math.floor(Math.random() * units.length)
          this.destroy({ who: data.target, location: units[index].location })
        }
      }
    },
    EFF069_DEF (data) { // Portgas D. Ace
      let unitATK = {}
      if (data.who === 'player') {
        data.target = 'opponent'
        data.field = this.data.opponent.field
        unitATK = this.data.opponent.unitATK
      } else {
        data.target = 'player'
        data.field = this.data.player.field
        unitATK = this.data.player.unitATK
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      const units = []
      if (data.unitF1.isUnit) { units.push({ location: 'unit F1' }) }
      if (data.unitF2.isUnit) { units.push({ location: 'unit F2' }) }
      if (data.unitF3.isUnit) { units.push({ location: 'unit F3' }) }
      if (data.unitB1.isUnit) { units.push({ location: 'unit B1' }) }
      if (data.unitB2.isUnit) { units.push({ location: 'unit B2' }) }
      if (data.unitB3.isUnit) { units.push({ location: 'unit B3' }) }
      if (units.length > 0) {
        const index = Math.floor(Math.random() * units.length)
        this.destroy({ who: data.target, location: units[index].location })
        if (unitATK.location !== units[index].location) {
          setTimeout(() => this.resultBattle(data), 1000)
        }
      }
    },
    EFF070 (data) { // Edward Newgate "Shirohige"
      data.unit = data.unitATK
      data.gain = 1000
      this.AUTO_POWER(data)
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
        data.hand = this.data.player.hand
      } else {
        data.mana = this.data.opponent.mana.use
        data.hand = this.data.opponent.hand
      }
      if (data.mana > 0 && data.hand.length > 0) {
        this.$swal.fire({
          title: 'Aktifkan Efek Edward Newgate ?',
          showCancelButton: true,
          confirmButtonText: 'YES',
          cancelButtonText: 'NO'
        }).then((result) => {
          if (result.isConfirmed) {
            if (data.who === 'player') { this.data.player.mana.use -= 1 }
            if (data.who === 'opponent') { this.data.opponent.mana.use -= 1 }
            data.cost = 'pay life and discard'
            data.pay = 500
            data.discard = ''
            this.COST(data)
            data.gain = 4500
            this.AUTO_POWER(data)
            setTimeout(() => this.unitBlock(data), 1000)
          } else {
            setTimeout(() => this.unitBlock(data), 1000)
          }
        })
      } else {
        setTimeout(() => this.unitBlock(data), 1000)
      }
    },
    EFF071_CONT (data) { // Bohemian
      data.name = 'Edward Newgate "Shirohige"'
      data.gain = 1000
      this.COUNT_POWER_WITH_OTHER_UNIT_NAME(data)
    },
    EFF071_ACT (data) { // Bohemian
      data.cost = 'pay life'
      data.pay = 500
      this.COST(data)
      data.gain = 1500
      this.AUTO_POWER(data)
    },
    EFF072_CONT (data) { // Squard
      data.name = 'Edward Newgate "Shirohige"'
      data.gain = 1000
      this.COUNT_POWER_WITH_OTHER_UNIT_NAME(data)
    },
    EFF072_ACT (data) { // Squard
      data.cost = 'pay life'
      data.pay = 500
      this.COST(data)
      data.name = 'Edward Newgate "Shirohige"'
      data.todo = 'DROP TO HAND'
      this.SEARCH_DROP_FOR_NAME(data)
    },
    EFF073_CONT (data) { // Haruta
      data.name = 'Edward Newgate "Shirohige"'
      data.gain = 1000
      this.COUNT_POWER_WITH_OTHER_UNIT_NAME(data)
    },
    EFF073_ACT (data) { // Haruta
      data.cost = 'pay life'
      data.pay = 500
      this.COST(data)
      data.name = 'Edward Newgate "Shirohige"'
      data.todo = 'DECK TO HAND'
      this.SEARCH_DECK_FOR_NAME(data)
    },
    EFF074_CONT (data) { // Kingdew
      data.name = 'Edward Newgate "Shirohige"'
      data.gain = 1000
      this.COUNT_POWER_WITH_OTHER_UNIT_NAME(data)
    },
    EFF074_DEF (data) { // Kingdew
      data.unit = data.unitDEF
      data.gain = 2000
      this.AUTO_POWER(data)
      setTimeout(() => this.resultBattle(data), 1000)
    },
    EFF075_CONT (data) { // Curiel
      data.name = 'Edward Newgate "Shirohige"'
      data.gain = 1000
      this.COUNT_POWER_WITH_OTHER_UNIT_NAME(data)
    },
    EFF075_AUTO (data) { // Curiel
      data.grade = 2
      data.todo = 'destroy'
      this.RANDOM_FIELD_OP_BY_GRADE_OR_LESS(data)
    },
    EFF076_CONT (data) { // Blenheim
      data.name = 'Edward Newgate "Shirohige"'
      data.gain = 1000
      this.COUNT_POWER_WITH_OTHER_UNIT_NAME(data)
    },
    EFF076_AUTO (data) { // Blenheim
      data.name = 'Edward Newgate "Shirohige"'
      data.todo = 'stand'
      this.RANDOM_FIELD_BY_NAME(data)
    },
    EFF077 (data) { // Thatch
      if (data.who === 'player') { data.deck = this.data.player.deck }
      if (data.who === 'opponent') { data.deck = this.data.opponent.deck }
      const units = []
      data.deck.map((unit) => {
        if (unit.name === 'Edward Newgate "Shirohige"' || unit.name === 'Portgas D. Ace') {
          units.push(unit.name)
        }
      })
      const index = Math.floor(Math.random() * units.length)
      data.name = units[index]
      data.todo = 'CALL FROM DECK'
      this.SEARCH_DECK_FOR_NAME(data)
    },
    EFF078 (data) { // Diamond Jozu
      if (data.who === 'player') { data.hand = this.data.player.hand }
      if (data.who === 'opponent') { data.hand = this.data.opponent.hand }
      if (data.hand.length > 0) {
        data.cost = 'discard'
        data.discard = ''
        this.COST(data)
      } else {
        this.bind(data)
      }
    },
    EFF079 (data) { // Cavendish
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
      } else {
        data.mana = this.data.opponent.mana.use
      }
      if (data.mana > 0) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 1
        } else {
          this.data.opponent.mana.use -= 1
        }
        data.cost = 'pay life'
        data.pay = 500
        this.COST(data)
        setTimeout(() => this.stand(data), 1000)
        setTimeout(() => this.unitBlock(data), 1000)
      } else {
        setTimeout(() => this.unitBlock(data), 1000)
      }
    },
    EFF080 (data) { // Bartolomeo
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      if (data.hand.length > 0) {
        data.cost = 'discard'
        data.discard = ''
        this.COST(data)
        data.name = 'Monkey D. Luffy'
        data.todo = 'DECK TO HAND'
        this.SEARCH_DECK_FOR_NAME(data)
      } else {
        this.Toast('error', 'Tidak ada kartu untuk discard !!!')
      }
    },
    EFF081 (data) { // Don Sai
      data.cost = 'pay life'
      data.pay = 500
      this.COST(data)
      data.grade = 2
      data.gain = 1000
      data.todo = 'GAIN AUTO POWER'
      this.SELECT_ALL_YOUR_FIELD_BY_GRADE(data)
    },
    EFF082 (data) { // Ideo
      data.grade = 2
      data.gain = 500
      data.todo = 'GAIN AUTO POWER'
      this.SELECT_ALL_YOUR_FIELD_BY_GRADE(data)
      setTimeout(() => this.unitBlock(data), 1000)
    },
    EFF083 (data) { // Leo
      data.cost = 'pay life'
      data.pay = 500
      this.COST(data)
      data.todo = 'rest'
      this.RANDOM_FIELD_OP_WITH_STAND_UNIT(data)
    },
    EFF084 (data) { // Monkey D. Luffy
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
      } else {
        data.mana = this.data.opponent.mana.use
      }
      if (data.mana > 0) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 1
          data.field = this.data.player.field
        } else {
          this.data.opponent.mana.use -= 1
          data.field = this.data.opponent.field
        }
        data.openLocation = []
        data.front = data.field.front
        data.back = data.field.back
        data.unitF1 = data.front.unitF1
        data.unitF2 = data.front.unitF2
        data.unitF3 = data.front.unitF3
        data.unitB1 = data.back.unitB1
        data.unitB2 = data.back.unitB2
        data.unitB3 = data.back.unitB3
        if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
        if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
        if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
        if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
        if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
        if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
        if (data.openLocation.length > 0) {
          const index = Math.floor(Math.random() * data.openLocation.length)
          data.text = 'Commander SHP'
          data.grade = 2
          data.location = data.openLocation[index]
          data.todo = 'CALL FROM DECK'
          this.SEARCH_DECK_FOR_TEXT_AND_GRADE(data)
        }
      } else {
        this.Toast('error', 'Mana tidak cukup !!!')
      }
    },
    EFF085 (data) { // Denjiro
      data.name = 'Kozuki'
      data.gain = 1000
      this.COUNT_POWER_WITH_OTHER_UNIT_NAME(data)
    },
    EFF086 (data) { // Baby 5
      data.name = 'Don Sai'
      data.gain = 1000
      data.gradeOri = 1
      data.grade = 2
      this.COUNT_POWER_WITH_OTHER_UNIT_NAME(data)
      this.COUNT_GRADE_WITH_OTHER_UNIT_NAME(data)
    },
    EFF087_DEF (data) { // Carrot
      this.draw({ who: data.who })
      setTimeout(() => this.resultBattle(data), 1000)
    },
    EFF087_ACT (data) { // Carrot
      this.FIELD_TO_DECK(data)
      data.grade = 3
      data.name = 'Carrot'
      data.todo = 'CALL FROM DECK'
      this.SEARCH_DECK_FOR_GRADE_AND_NAME(data)
    },
    EFF088_END (data) { // Carrot
      this.FIELD_TO_DECK(data)
      data.grade = 2
      data.name = 'Carrot'
      data.todo = 'CALL FROM DECK'
      this.SEARCH_DECK_FOR_GRADE_AND_NAME(data)
    },
    EFF088_ACT (data) { // Carrot
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      if (data.hand.length > 0) {
        data.cost = 'discard'
        data.discard = ''
        this.COST(data)
        data.special = 'Sulong'
        data.gain = 1000
        data.todo = 'GAIN AUTO POWER'
        this.SELECT_ALL_YOUR_FIELD_BY_SPECIAL(data)
      } else {
        this.Toast('error', 'Tidak ada kartu untuk discard !!!')
      }
    },
    EFF089 (data) { // Charlotte Amande
      data.cost = 'pay life'
      data.pay = 500
      this.COST(data)
      data.name = 'Charlotte'
      data.gain = 1000
      data.todo = 'GAIN AUTO POWER'
      this.SELECT_ALL_YOUR_FIELD_BY_NAME(data)
    },
    EFF090 (data) { // Charlotte Flampe
      data.cost = 'bind on field'
      this.COST(data)
      data.name = 'Charlotte'
      data.gain = 1000
      data.todo = 'GAIN AUTO POWER'
      this.SELECT_ALL_YOUR_FIELD_BY_NAME(data)
    },
    EFF091 (data) { // Charlotte Brulee
      data.cost = 'bind on field'
      this.COST(data)
      data.grade = 2
      data.todo = 'bind'
      this.RANDOM_FIELD_OP_BY_GRADE_OR_LESS(data)
    },
    EFF092 (data) { // Charlotte Pudding
      data.cost = 'bind on field'
      this.COST(data)
      for (let i = 0; i < 2; i++) { this.draw({ who: data.who }) }
    },
    EFF093 (data) { // Charlotte Daifuku
      data.cost = 'bind on field'
      this.COST(data)
      data.name = 'Charlotte Daifuku'
      data.todo = 'CALL FROM DECK'
      this.SEARCH_DECK_FOR_NAME(data)
    },
    EFF094 (data) { // Charlotte Oven
      data.grade = 2
      data.todo = 'destroy'
      this.RANDOM_FIELD_OP_BY_GRADE_OR_LESS(data)
    },
    EFF095 (data) { // Charlotte Cracker
      data.cost = 'pay life'
      data.pay = 500
      this.COST(data)
      let unitATK = {}
      if (data.who === 'player') {
        data.target = 'opponent'
        data.field = this.data.opponent.field
        unitATK = this.data.opponent.unitATK
      } else {
        data.target = 'player'
        data.field = this.data.player.field
        unitATK = this.data.player.unitATK
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      const units = []
      if (data.unitF1.isUnit) { units.push({ location: 'unit F1' }) }
      if (data.unitF2.isUnit) { units.push({ location: 'unit F2' }) }
      if (data.unitF3.isUnit) { units.push({ location: 'unit F3' }) }
      if (data.unitB1.isUnit) { units.push({ location: 'unit B1' }) }
      if (data.unitB2.isUnit) { units.push({ location: 'unit B2' }) }
      if (data.unitB3.isUnit) { units.push({ location: 'unit B3' }) }
      if (units.length > 0) {
        const index = Math.floor(Math.random() * units.length)
        this.destroy({ who: data.target, location: units[index].location })
        if (unitATK.location !== units[index].location) {
          setTimeout(() => this.resultBattle(data), 1000)
        }
      }
    },
    EFF096 (data) { // Charlotte Smoothie
      data.cost = 'pay life'
      data.pay = 500
      this.COST(data)
      data.openLocation = []
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
      if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
      if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
      if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
      if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
      if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
      if (data.openLocation.length > 0) {
        const index = Math.floor(Math.random() * data.openLocation.length)
        data.location = data.openLocation[index]
        data.name = 'Charlotte'
        data.todo = 'CALL FROM BIND'
        this.SEARCH_BIND_FOR_NAME(data)
      }
    },
    EFF097 (data) { // Charlotte Katakuri
      data.cost = 'pay life'
      data.pay = 500
      this.COST(data)
      if (data.who === 'player') {
        data.bind = this.data.player.bind
      } else {
        data.bind = this.data.opponent.bind
      }
      let count = 0
      data.bind.map((unit) => {
        if (unit.name.search('Charlotte') >= 0) {
          count += 1
        }
      })
      data.gain = 500 * count
      this.AUTO_POWER(data)
    },
    EFF098 (data) { // Charlotte Linlin "Big Mom"
      data.cost = 'pay life'
      data.pay = 1000
      this.COST(data)
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.openLocation = []
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
      if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
      if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
      if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
      if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
      if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
      if (data.openLocation.length > 0) {
        const index = Math.floor(Math.random() * data.openLocation.length)
        data.name = 'Charlotte'
        data.notName = 'Charlotte Linlin "Big Mom"'
        data.location = data.openLocation[index]
        data.todo = 'CALL FROM DECK'
        this.SEARCH_DECK_FOR_NAME_AND_NOT_NAME(data)
      }
    },
    EFF099 (data) { // Shirahoshi
      data.cost = 'pay life'
      data.pay = 1000
      this.COST(data)
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.openLocation = []
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
      if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
      if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
      if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
      if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
      if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
      if (data.openLocation.length > 0) {
        const index = Math.floor(Math.random() * data.openLocation.length)
        data.race = 'Fishman'
        data.notName = 'Shirahoshi'
        data.location = data.openLocation[index]
        data.todo = 'CALL FROM DECK'
        this.SEARCH_DECK_FOR_RACE_AND_NOT_NAME(data)
      }
    },
    EFF100 (data) { // Kozuki Hiyori Komurasaki
      data.cost = 'pay life'
      data.pay = 1000
      this.COST(data)
      if (data.who === 'player') {
        data.field = this.data.player.field
      } else {
        data.field = this.data.opponent.field
      }
      data.openLocation = []
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
      if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
      if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
      if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
      if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
      if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
      if (data.openLocation.length > 0) {
        const index = Math.floor(Math.random() * data.openLocation.length)
        data.job = 'Swordman'
        data.location = data.openLocation[index]
        data.todo = 'CALL FROM DECK'
        this.SEARCH_DECK_FOR_JOB(data)
      }
    },
    EFF104 (data) { // Buggy
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      if (data.hand.length > 0) {
        data.cost = 'discard'
        data.discard = ''
        this.COST(data)
        this.CALL_FROM_DECK_BY_NAME({ who: data.who, name: 'Cabaji' })
        this.CALL_FROM_DECK_BY_NAME({ who: data.who, name: 'Mohji' })
      }
    },
    EFF105 (data) { // Cabaji
      data.cost = 'pay life'
      data.pay = 500
      this.COST(data)
      data.grade = 1
      data.gain = 1000
      data.todo = 'GAIN AUTO POWER'
      this.SELECT_ALL_YOUR_FIELD_BY_GRADE(data)
    },
    EFF106 (data) { // Mohji
      data.unit = data.unitATK
      data.gain = 1000
      this.AUTO_POWER(data)
      setTimeout(() => this.unitBlock(data), 1000)
    },
    EFF107 (data) { // Klahadore "Captain Kuro"
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      if (data.hand.length > 0) {
        this.$swal.fire({
          title: 'Aktifkan Efek Captain Kuro ?',
          showCancelButton: true,
          confirmButtonText: 'YES',
          cancelButtonText: 'NO'
        }).then((result) => {
          if (result.isConfirmed) {
            data.cost = 'pay life and discard'
            data.pay = 500
            data.discard = ''
            this.COST(data)
            this.CALL_FROM_DECK_BY_NAME({ who: data.who, name: 'Klahadore "Captain Kuro"' })
            setTimeout(() => this.unitBlock(data), 1000)
          } else {
            setTimeout(() => this.unitBlock(data), 1000)
          }
        })
      } else {
        setTimeout(() => this.unitBlock(data), 1000)
      }
    },
    EFF108 (data) { // Sham
      data.name = 'Klahadore "Captain Kuro"'
      data.gain = 1000
      data.todo = 'GAIN AUTO POWER'
      this.SELECT_ALL_YOUR_FIELD_BY_NAME(data)
    },
    EFF109 (data) { // Buchi
      data.name = 'Klahadore "Captain Kuro"'
      data.todo = 'STAND UNIT'
      this.SELECT_ALL_YOUR_FIELD_BY_NAME(data)
    },
    EFF110 (data) { // Jango
      data.name = ''
      data.todo = 'DROP TO DECK'
      this.SEARCH_DROP_FOR_NAME(data)
      this.draw({ who: data.who })
    },
    EFF111 (data) { // Don Krieg
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      if (data.hand.length > 0) {
        data.cost = 'discard'
        data.discard = ''
        this.COST(data)
        for (let i = 0; i < 2; i++) {
          this.CALL_NORMAL_FROM_DECK(data)
        }
      }
    },
    EFF114 (data) { // Dracule Mihawk
      data.openLocation = []
      if (data.who === 'player') {
        data.field = this.data.player.field
        data.hand = this.data.player.hand
      } else {
        data.field = this.data.opponent.field
        data.hand = this.data.opponent.hand
      }
      data.front = data.field.front
      data.back = data.field.back
      data.unitF1 = data.front.unitF1
      data.unitF2 = data.front.unitF2
      data.unitF3 = data.front.unitF3
      data.unitB1 = data.back.unitB1
      data.unitB2 = data.back.unitB2
      data.unitB3 = data.back.unitB3
      if (!data.unitF1.isUnit) { data.openLocation.push('unit F1') }
      if (!data.unitF2.isUnit) { data.openLocation.push('unit F2') }
      if (!data.unitF3.isUnit) { data.openLocation.push('unit F3') }
      if (!data.unitB1.isUnit) { data.openLocation.push('unit B1') }
      if (!data.unitB2.isUnit) { data.openLocation.push('unit B2') }
      if (!data.unitB3.isUnit) { data.openLocation.push('unit B3') }
      if (data.openLocation.length > 0) {
        const indexLocation = Math.floor(Math.random() * data.openLocation.length)
        if (data.who === 'player') {
          this.data.player.unit = {
            card: data.hand[data.index],
            index: data.index
          }
          this.data.player.mana.use += this.data.player.unit.card.grade
        } else {
          this.data.opponent.unit = {
            card: data.hand[data.index],
            index: data.index
          }
          this.data.opponent.mana.use += this.data.opponent.unit.card.grade
        }
        data.location = data.openLocation[indexLocation]
        this.callFromHand(data)
        this.EFF114_POWER(data)
      }
    },
    EFF114_POWER (data) { // Dracule Mihawk
      data.gain = data.damage
      this.CONT_POWER(data)
    },
    EFF115 (data) { // Arlong
      data.todo = 'destroy'
      data.race = 'Human'
      setTimeout(() => this.RANDOM_FIELD_OP_BY_RACE(data), 500)
    },
    EFF115_DROP (data) { // Arlong
      if (data.who === 'player') {
        data.hand = this.data.player.hand
        data.drop = this.data.player.drop
      } else {
        data.hand = this.data.opponent.hand
        data.drop = this.data.opponent.drop
      }
      if (data.hand.length > 0) {
        data.cost = 'discard'
        data.discard = ''
        this.COST(data)
        data.hand.push(data.drop[data.index])
        data.drop.splice(data.index, 1)
      }
    },
    EFF116 (data) { // Chew
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      if (data.hand.length > 0) {
        data.grade = 1
        data.race = 'Fishman'
        data.todo = 'CALL FROM HAND'
        setTimeout(() => this.CALL_FROM_HAND_BY_RACE_AND_GRADE(data), 500)
      }
    },
    EFF117 (data) { // Kuroobi
      data.grade = 1
      data.race = 'Fishman'
      data.todo = 'DECK TO HAND'
      this.SEARCH_DECK_FOR_RACE_AND_GRADE_LESS(data)
    },
    EFF118 (data) { // Hatchan
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      if (data.hand.length > 0) {
        data.cost = 'pay life and discard'
        data.discard = ''
        data.pay = 500
        this.COST(data)
        for (let i = 0; i < 2; i++) {
          data.race = 'Fishman'
          data.todo = 'DROP TO HAND'
          this.SEARCH_DROP_FOR_RACE(data)
        }
      }
    },
    EFF119 (data) { // Alvida
      if (data.who === 'player') {
        data.hand = this.data.player.hand
      } else {
        data.hand = this.data.opponent.hand
      }
      if (data.hand.length > 0) {
        data.cost = 'discard'
        data.discard = ''
        this.COST(data)
        this.CALL_FROM_DECK_BY_NAME({ who: data.who, name: 'Buggy' })
      }
    },
    EFF120_AUTO (data) { // Smoker
      if (data.who === 'player') {
        data.mana = this.data.player.mana.use
      } else {
        data.mana = this.data.opponent.mana.use
      }
      if (data.mana > 0) {
        if (data.who === 'player') {
          this.data.player.mana.use -= 1
        } else {
          this.data.opponent.mana.use -= 1
        }
        data.todo = 'rest unit'
        this.SELECT_OP_FIELD(data)
      } else {
        this.Toast('error', 'Mana tidak cukup !!!')
      }
    },
    EFF120_ACT (data) { // Smoker
      data.cost = 'pay life'
      data.pay = 500
      this.COST(data)
      data.gain = 1500
      this.AUTO_POWER(data)
    }
  },
  created () {
    this.parse(this.deckPlay, 'player')
    this.parse(this.deckOpponent, 'opponent')
    this.shuffle({ who: 'player', deck: this.data.player.deck })
    this.shuffle({ who: 'opponent', deck: this.data.opponent.deck })
    for (let i = 0; i < 5; i++) { // Max Hand Card 14
      this.draw({ who: 'player' })
      this.draw({ who: 'opponent' })
    }
    this.FIRST()
  }
}
</script>
