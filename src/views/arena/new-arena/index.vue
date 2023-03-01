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
      v-on:FIELD_TO_HAND="FIELD_TO_HAND"
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
      // const user = ['player', 'opponent']
      const user = ['player', 'player']
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
        data.unit.card.code === '033'
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
        if (data.location === 'unit F1') {
          this.data.player.field.front.unitF1 = data.back.unitB1
          this.data.player.field.back.unitB1 = data.unit
        }
        if (data.location === 'unit F2') {
          this.data.player.field.front.unitF2 = data.back.unitB2
          this.data.player.field.back.unitB2 = data.unit
        }
        if (data.location === 'unit F3') {
          this.data.player.field.front.unitF3 = data.back.unitB3
          this.data.player.field.back.unitB3 = data.unit
        }
        if (data.location === 'unit B1') {
          this.data.player.field.back.unitB1 = data.front.unitF1
          this.data.player.field.front.unitF1 = data.unit
        }
        if (data.location === 'unit B2') {
          this.data.player.field.back.unitB2 = data.front.unitF2
          this.data.player.field.front.unitF2 = data.unit
        }
        if (data.location === 'unit B3') {
          this.data.player.field.back.unitB3 = data.front.unitF3
          this.data.player.field.front.unitF3 = data.unit
        }
      } else {
        if (data.location === 'unit F1') {
          this.data.opponent.field.front.unitF1 = data.back.unitB1
          this.data.opponent.field.back.unitB1 = data.unit
        }
        if (data.location === 'unit F2') {
          this.data.opponent.field.front.unitF2 = data.back.unitB2
          this.data.opponent.field.back.unitB2 = data.unit
        }
        if (data.location === 'unit F3') {
          this.data.opponent.field.front.unitF3 = data.back.unitB3
          this.data.opponent.field.back.unitB3 = data.unit
        }
        if (data.location === 'unit B1') {
          this.data.opponent.field.back.unitB1 = data.front.unitF1
          this.data.opponent.field.front.unitF1 = data.unit
        }
        if (data.location === 'unit B2') {
          this.data.opponent.field.back.unitB2 = data.front.unitF2
          this.data.opponent.field.front.unitF2 = data.unit
        }
        if (data.location === 'unit B3') {
          this.data.opponent.field.back.unitB3 = data.front.unitF3
          this.data.opponent.field.front.unitF3 = data.unit
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
          this.data.player.drop.push(data.unit.card)
          this.data.player.field.front.unitF1 = unitEmpty
        }
        if (data.location === 'unit F2') {
          data.unit = this.data.player.field.front.unitF2
          this.data.player.drop.push(data.unit.card)
          this.data.player.field.front.unitF2 = unitEmpty
        }
        if (data.location === 'unit F3') {
          data.unit = this.data.player.field.front.unitF3
          this.data.player.drop.push(data.unit.card)
          this.data.player.field.front.unitF3 = unitEmpty
        }
        if (data.location === 'unit B1') {
          data.unit = this.data.player.field.back.unitB1
          this.data.player.drop.push(data.unit.card)
          this.data.player.field.back.unitB1 = unitEmpty
        }
        if (data.location === 'unit B2') {
          data.unit = this.data.player.field.back.unitB2
          this.data.player.drop.push(data.unit.card)
          this.data.player.field.back.unitB2 = unitEmpty
        }
        if (data.location === 'unit B3') {
          data.unit = this.data.player.field.back.unitB3
          this.data.player.drop.push(data.unit.card)
          this.data.player.field.back.unitB3 = unitEmpty
        }
      } else {
        if (data.location === 'unit F1') {
          data.unit = this.data.opponent.field.front.unitF1
          this.data.opponent.drop.push(data.unit.card)
          this.data.opponent.field.front.unitF1 = unitEmpty
        }
        if (data.location === 'unit F2') {
          data.unit = this.data.opponent.field.front.unitF2
          this.data.opponent.drop.push(data.unit.card)
          this.data.opponent.field.front.unitF2 = unitEmpty
        }
        if (data.location === 'unit F3') {
          data.unit = this.data.opponent.field.front.unitF3
          this.data.opponent.drop.push(data.unit.card)
          this.data.opponent.field.front.unitF3 = unitEmpty
        }
        if (data.location === 'unit B1') {
          data.unit = this.data.opponent.field.back.unitB1
          this.data.opponent.drop.push(data.unit.card)
          this.data.opponent.field.back.unitB1 = unitEmpty
        }
        if (data.location === 'unit B2') {
          data.unit = this.data.opponent.field.back.unitB2
          this.data.opponent.drop.push(data.unit.card)
          this.data.opponent.field.back.unitB2 = unitEmpty
        }
        if (data.location === 'unit B3') {
          data.unit = this.data.opponent.field.back.unitB3
          this.data.opponent.drop.push(data.unit.card)
          this.data.opponent.field.back.unitB3 = unitEmpty
        }
      }
      this.EFF_AUTO({ who: data.who, location: data.location, unit: data.unit, condition: 'AUTO ON SEND TO DROP' })
      this.EFF_CONT(data)
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
        data.unit = data.back.unitF1
      }
      if (data.location === 'unit B2') {
        data.unit = data.back.unitF2
      }
      if (data.location === 'unit B3') {
        data.unit = data.back.unitF3
      }
      data.unit.position = 'Rest'
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
      } else {
        data.drop = this.data.opponent.drop
        data.deck = this.data.opponent.deck
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
    EFF_AUTO (data) {
      if (data.condition === 'AUTO ON ATK') { this.AUTO_ON_ATK(data) }
      if (data.condition === 'AUTO ON DEF') { this.AUTO_ON_DEF(data) }
      if (data.condition === 'AUTO ON FIELD') { this.AUTO_ON_FIELD(data) }
      if (data.condition === 'AUTO ON SEND TO DROP') { this.AUTO_ON_SEND_TO_DROP(data) }
      if (data.condition === 'AUTO ON HEAL') { this.AUTO_ON_HEAL(data) }
      if (data.condition === 'AUTO ON DISCARD') { this.AUTO_ON_DISCARD(data) }
      if (data.condition === 'AUTO ON END TURN') { this.AUTO_ON_END_TURN(data) }
      if (data.condition === 'AUTO ON BP') { this.AUTO_ON_BP(data) }
      // this.EFF_AUTO({ who: data.who, location: data.location, unit: data.unit, condition: 'AUTO ON BP' })
    },
    AUTO_ON_ATK (data) {
      if (data.unitATK.card.code === '001') {
        this.EFF001_ATK(data)
      } else if (data.unitATK.card.code === '002') {
        this.EFF002_ATK(data)
      } else if (data.unitATK.card.code === '017') {
        this.EFF017_ATK(data)
      } else if (data.unitATK.card.code === '036') {
        this.EFF036(data)
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
    },
    AUTO_ON_SEND_TO_DROP (data) {
      if (data.unit.card.code === '009') { this.EFF009(data) }
      if (data.unit.card.code === '011') { this.EFF011(data) }
      if (data.unit.card.code === '032') { this.EFF032(data) }
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
      console.log('ON DISCARD')
      console.log(data)
      if (data.who === 'player') {
        data.drop = this.data.player.drop
      } else {
        data.drop = this.data.opponent.drop
      }
      const index = data.drop.length - 1
      if (data.drop[index].code === '021') { this.EFF021_AUTO(data) }
      if (data.drop[index].code === '022') { this.EFF022_AUTO(data) }
      if (data.drop[index].code === '023') { this.EFF023_AUTO(data) }
      if (data.drop[index].code === '024') { this.EFF024_AUTO(data) }
      if (data.drop[index].code === '025') { this.EFF025_AUTO(data) }
      if (data.drop[index].code === '026') { this.EFF026_AUTO(data) }
      if (data.drop[index].code === '027') { this.EFF027_AUTO(data) }
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
      })
    },
    EFF_ACT (data) {
      if (data.unit.onePerTurn) {
        alert('effect one per turn')
      } else {
        if (data.unit.card.code === '002') { this.EFF002_ACT(data) }
        if (data.unit.card.code === '003') { this.EFF003_ACT(data) }
        if (data.unit.card.code === '017') { this.EFF017_ACT(data) }
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
      for (let i = 0; i < 1; i++) {
        data.name = 'Vinsmoke'
        data.todo = 'DECK TO HAND'
        this.SEARCH_DECK_FOR_NAME(data)
      }
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
        data.gain = 3000
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
      if (data.unitF1.isUnit) { units.push({ location: 'unit F1' }) }
      if (data.unitF2.isUnit) { units.push({ location: 'unit F2' }) }
      if (data.unitF3.isUnit) { units.push({ location: 'unit F3' }) }
      if (data.unitB1.isUnit) { units.push({ location: 'unit B1' }) }
      if (data.unitB2.isUnit) { units.push({ location: 'unit B2' }) }
      if (data.unitB3.isUnit) { units.push({ location: 'unit B3' }) }
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
        data.todo = 'bind unit'
        this.SELECT_OP_FIELD(data)
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
        data.todo = 'destroy unit'
        this.SELECT_OP_FIELD(data)
      } else {
        this.Toast('error', 'Tidak ada kartu untuk discard !!!')
      }
    },
    EFF025_AUTO (data) { // Vinsmoke Reiju
      for (let i = 0; i < 1; i++) {
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
        for (let i = 0; i < 1; i++) {
          this.draw({ who: data.who })
        }
      } else {
        this.Toast('error', 'Tidak ada kartu untuk discard !!!')
      }
    },
    EFF026_AUTO (data) { // Vinsmoke Judge
      setTimeout(() => {
        data.cost = 'bind from drop'
        this.COST(data)
        if (data.who === 'player') {
          data.drop = this.data.player.drop
        } else {
          data.drop = this.data.opponent.drop
        }
        if (data.drop.length > 0) {
          data.name = 'Vinsmoke'
          data.todo = 'ALL DROP TO DECK'
          this.SEARCH_DROP_FOR_NAME(data)
        }
      }, 1000)
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
          data.notName = 'Vinsmoke Judge'
          data.location = data.openLocation[index]
          data.todo = 'CALL FROM DECK'
          this.SEARCH_DECK_FOR_NAME_AND_NOT_NAME(data)
        }
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
        this.FIELD_TO_HAND(data)
        data.name = 'Vinsmoke'
        data.notName = 'Vinsmoke Judge'
        data.todo = 'CALL FROM DECK'
        this.SEARCH_DECK_FOR_NAME_AND_NOT_NAME(data)
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
    }
  },
  created () {
    this.parse(this.deckPlay, 'player')
    this.parse(this.deckOpponent, 'opponent')
    // this.shuffle({ who: 'player', deck: this.data.player.deck })
    this.shuffle({ who: 'opponent', deck: this.data.opponent.deck })
    for (let i = 0; i < 5; i++) { // Max Hand Card 14
      this.draw({ who: 'player' })
      this.draw({ who: 'opponent' })
    }
    this.FIRST()
  }
}
</script>
