<template>
  <div class="col-8 h-40vh">
    <!-- BACK ROW UNIT -->
    <div class="row h-20vh">
      <div
        class="col-4 bg-circle"
        @click.prevent="onClick('unit B1')"
      >
        <div class="row h-20vh d-flex justify-content-center align-content-center">
          <img
            :class="`h-15vh w-auto cursor-pointer ${data.opponent.field.back.unitB1.position}`"
            :src="data.opponent.field.back.unitB1.card.imageM"
            @click.prevent="moveOrACT('unit B1')"
            @mouseover.prevent="mouseover(data.opponent.field.back.unitB1.card)"
          />
          <span v-if="data.opponent.field.back.unitB1.isUnit" class="text-center text-white shadow-text-2">
            <b>Power : {{ data.opponent.field.back.unitB1.power }}</b>
          </span>
        </div>
      </div>
      <div
        class="col-4 bg-circle-2"
        @click.prevent="onClick('unit B2')"
      >
        <div class="row h-20vh d-flex justify-content-center align-content-center">
          <img
            :class="`h-15vh w-auto cursor-pointer ${data.opponent.field.back.unitB2.position}`"
            :src="data.opponent.field.back.unitB2.card.imageM"
            @click.prevent="moveOrACT('unit B2')"
            @mouseover.prevent="mouseover(data.opponent.field.back.unitB2.card)"
          />
          <span v-if="data.opponent.field.back.unitB2.isUnit" class="text-center text-white shadow-text-2">
            <b>Power : {{ data.opponent.field.back.unitB2.power }}</b>
          </span>
        </div>
      </div>
      <div
        class="col-4 bg-circle"
        @click.prevent="onClick('unit B3')"
      >
        <div class="row h-20vh d-flex justify-content-center align-content-center">
          <img
            :class="`h-15vh w-auto cursor-pointer ${data.opponent.field.back.unitB3.position}`"
            :src="data.opponent.field.back.unitB3.card.imageM"
            @click.prevent="moveOrACT('unit B3')"
            @mouseover.prevent="mouseover(data.opponent.field.back.unitB3.card)"
          />
          <span v-if="data.opponent.field.back.unitB3.isUnit" class="text-center text-white shadow-text-2">
            <b>Power : {{ data.opponent.field.back.unitB3.power }}</b>
          </span>
        </div>
      </div>
    </div>
    <!-- FRONT ROW UNIT -->
    <div class="row h-20vh">
      <div
        class="col-4 bg-circle-2"
        @click.prevent="onClick('unit F1')"
      >
        <div class="row h-20vh d-flex justify-content-center align-content-center">
          <img
            :class="`h-15vh w-auto cursor-pointer ${data.opponent.field.front.unitF1.position}`"
            :src="data.opponent.field.front.unitF1.card.imageM"
            @click.prevent="moveOrACT('unit F1')"
            @mouseover.prevent="mouseover(data.opponent.field.front.unitF1.card)"
          />
          <span v-if="data.opponent.field.front.unitF1.isUnit" class="text-center text-white shadow-text-2">
            <b>Power : {{ data.opponent.field.front.unitF1.power }}</b>
          </span>
        </div>
      </div>
      <div
        class="col-4 bg-circle"
        @click.prevent="onClick('unit F2')"
      >
        <div class="row h-20vh d-flex justify-content-center align-content-center">
          <img
            :class="`h-15vh w-auto cursor-pointer ${data.opponent.field.front.unitF2.position}`"
            :src="data.opponent.field.front.unitF2.card.imageM"
            @click.prevent="moveOrACT('unit F2')"
            @mouseover.prevent="mouseover(data.opponent.field.front.unitF2.card)"
          />
          <span v-if="data.opponent.field.front.unitF2.isUnit" class="text-center text-white shadow-text-2">
            <b>Power : {{ data.opponent.field.front.unitF2.power }}</b>
          </span>
        </div>
      </div>
      <div
        class="col-4 bg-circle-2"
        @click.prevent="onClick('unit F3')"
      >
        <div class="row h-20vh d-flex justify-content-center align-content-center">
          <img
            :class="`h-15vh w-auto cursor-pointer ${data.opponent.field.front.unitF3.position}`"
            :src="data.opponent.field.front.unitF3.card.imageM"
            @click.prevent="moveOrACT('unit F3')"
            @mouseover.prevent="mouseover(data.opponent.field.front.unitF3.card)"
          />
          <span v-if="data.opponent.field.front.unitF3.isUnit" class="text-center text-white shadow-text-2">
            <b>Power : {{ data.opponent.field.front.unitF3.power }}</b>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Field-Opponent',
  props: ['data'],
  data () {},
  methods: {
    mouseover (data) {
      this.$emit('onDisplay', data)
    },
    onClick (location) {
      if (this.data.opponent.todo === 'call from hand') {
        let unit = {}
        if (location === 'unit F1') { unit = this.data.opponent.field.front.unitF1 }
        if (location === 'unit F2') { unit = this.data.opponent.field.front.unitF2 }
        if (location === 'unit F3') { unit = this.data.opponent.field.front.unitF3 }
        if (location === 'unit B1') { unit = this.data.opponent.field.back.unitB1 }
        if (location === 'unit B2') { unit = this.data.opponent.field.back.unitB2 }
        if (location === 'unit B3') { unit = this.data.opponent.field.back.unitB3 }
        if (!unit.isUnit) { this.$emit('callFromHand', { who: 'opponent', location: location }) }
      }
      if (this.data.turn === 'opponent' && this.data.phase === 'BP') {
        let unit = {}
        if (location === 'unit F1') { unit = this.data.opponent.field.front.unitF1 }
        if (location === 'unit F2') { unit = this.data.opponent.field.front.unitF2 }
        if (location === 'unit F3') { unit = this.data.opponent.field.front.unitF3 }
        if (unit.position === 'Stand') {
          this.$emit('unitATK', { who: 'opponent', location: location })
        }
      }
      if (this.data.turn === 'player' && this.data.phase === 'BP') {
        if (this.data.opponent.todo === 'unit to block') {
          let unit = {}
          if (location === 'unit F1') { unit = this.data.opponent.field.front.unitF1 }
          if (location === 'unit F2') { unit = this.data.opponent.field.front.unitF2 }
          if (location === 'unit F3') { unit = this.data.opponent.field.front.unitF3 }
          if (unit.position === 'Stand') {
            this.$emit('unitDEF', { who: 'opponent', location: location })
          }
        }
      }
      if (this.data.opponent.todo === 'destroy unit G1') {
        let unit = {}
        if (location === 'unit F1') { unit = this.data.opponent.field.front.unitF1 }
        if (location === 'unit F2') { unit = this.data.opponent.field.front.unitF2 }
        if (location === 'unit F3') { unit = this.data.opponent.field.front.unitF3 }
        if (location === 'unit B1') { unit = this.data.opponent.field.back.unitB1 }
        if (location === 'unit B2') { unit = this.data.opponent.field.back.unitB2 }
        if (location === 'unit B3') { unit = this.data.opponent.field.back.unitB3 }
        if (unit.card.grade === 1) {
          this.$emit('destroy', { who: 'opponent', location: location })
        }
      }
      if (this.data.opponent.todo === 'destroy unit G2 or less') {
        let unit = {}
        if (location === 'unit F1') { unit = this.data.opponent.field.front.unitF1 }
        if (location === 'unit F2') { unit = this.data.opponent.field.front.unitF2 }
        if (location === 'unit F3') { unit = this.data.opponent.field.front.unitF3 }
        if (location === 'unit B1') { unit = this.data.opponent.field.back.unitB1 }
        if (location === 'unit B2') { unit = this.data.opponent.field.back.unitB2 }
        if (location === 'unit B3') { unit = this.data.opponent.field.back.unitB3 }
        if (unit.card.grade <= 2) {
          this.$emit('destroy', { who: 'opponent', location: location })
        }
      }
      if (this.data.opponent.todo === 'destroy unit') {
        let unit = {}
        if (location === 'unit F1') { unit = this.data.opponent.field.front.unitF1 }
        if (location === 'unit F2') { unit = this.data.opponent.field.front.unitF2 }
        if (location === 'unit F3') { unit = this.data.opponent.field.front.unitF3 }
        if (location === 'unit B1') { unit = this.data.opponent.field.back.unitB1 }
        if (location === 'unit B2') { unit = this.data.opponent.field.back.unitB2 }
        if (location === 'unit B3') { unit = this.data.opponent.field.back.unitB3 }
        if (unit.isUnit) {
          this.$emit('destroy', { who: 'opponent', location: location })
        }
      }
      if (this.data.opponent.todo === 'bind unit G1') {
        let unit = {}
        if (location === 'unit F1') { unit = this.data.opponent.field.front.unitF1 }
        if (location === 'unit F2') { unit = this.data.opponent.field.front.unitF2 }
        if (location === 'unit F3') { unit = this.data.opponent.field.front.unitF3 }
        if (location === 'unit B1') { unit = this.data.opponent.field.back.unitB1 }
        if (location === 'unit B2') { unit = this.data.opponent.field.back.unitB2 }
        if (location === 'unit B3') { unit = this.data.opponent.field.back.unitB3 }
        if (unit.card.grade === 1) {
          this.$emit('bind', { who: 'opponent', location: location })
        }
      }
      if (this.data.opponent.todo === 'bind unit G2 or less') {
        let unit = {}
        if (location === 'unit F1') { unit = this.data.opponent.field.front.unitF1 }
        if (location === 'unit F2') { unit = this.data.opponent.field.front.unitF2 }
        if (location === 'unit F3') { unit = this.data.opponent.field.front.unitF3 }
        if (location === 'unit B1') { unit = this.data.opponent.field.back.unitB1 }
        if (location === 'unit B2') { unit = this.data.opponent.field.back.unitB2 }
        if (location === 'unit B3') { unit = this.data.opponent.field.back.unitB3 }
        if (unit.card.grade <= 2) {
          this.$emit('bind', { who: 'opponent', location: location })
        }
      }
      if (this.data.opponent.todo === 'bind unit') {
        let unit = {}
        if (location === 'unit F1') { unit = this.data.opponent.field.front.unitF1 }
        if (location === 'unit F2') { unit = this.data.opponent.field.front.unitF2 }
        if (location === 'unit F3') { unit = this.data.opponent.field.front.unitF3 }
        if (location === 'unit B1') { unit = this.data.opponent.field.back.unitB1 }
        if (location === 'unit B2') { unit = this.data.opponent.field.back.unitB2 }
        if (location === 'unit B3') { unit = this.data.opponent.field.back.unitB3 }
        if (unit.isUnit) {
          this.$emit('bind', { who: 'opponent', location: location })
        }
      }
      if (this.data.opponent.todo === 'put into hand unit G2 or less') {
        let unit = {}
        if (location === 'unit F1') { unit = this.data.opponent.field.front.unitF1 }
        if (location === 'unit F2') { unit = this.data.opponent.field.front.unitF2 }
        if (location === 'unit F3') { unit = this.data.opponent.field.front.unitF3 }
        if (location === 'unit B1') { unit = this.data.opponent.field.back.unitB1 }
        if (location === 'unit B2') { unit = this.data.opponent.field.back.unitB2 }
        if (location === 'unit B3') { unit = this.data.opponent.field.back.unitB3 }
        if (unit.card.grade <= 2) {
          this.$emit('FIELD_TO_HAND', { who: 'opponent', location: location })
        }
      }
      if (this.data.opponent.todo === 'put into hand unit G1') {
        let unit = {}
        if (location === 'unit F1') { unit = this.data.opponent.field.front.unitF1 }
        if (location === 'unit F2') { unit = this.data.opponent.field.front.unitF2 }
        if (location === 'unit F3') { unit = this.data.opponent.field.front.unitF3 }
        if (location === 'unit B1') { unit = this.data.opponent.field.back.unitB1 }
        if (location === 'unit B2') { unit = this.data.opponent.field.back.unitB2 }
        if (location === 'unit B3') { unit = this.data.opponent.field.back.unitB3 }
        if (unit.card.grade === 1) {
          this.$emit('FIELD_TO_HAND', { who: 'opponent', location: location })
        }
      }
      if (this.data.opponent.todo === 'rest unit') {
        let unit = {}
        if (location === 'unit F1') { unit = this.data.opponent.field.front.unitF1 }
        if (location === 'unit F2') { unit = this.data.opponent.field.front.unitF2 }
        if (location === 'unit F3') { unit = this.data.opponent.field.front.unitF3 }
        if (location === 'unit B1') { unit = this.data.opponent.field.back.unitB1 }
        if (location === 'unit B2') { unit = this.data.opponent.field.back.unitB2 }
        if (location === 'unit B3') { unit = this.data.opponent.field.back.unitB3 }
        if (unit.isUnit) {
          this.$emit('rest', { who: 'opponent', location: location })
        }
      }
      if (this.data.opponent.todo === 'rest unit G2 or less') {
        let unit = {}
        if (location === 'unit F1') { unit = this.data.opponent.field.front.unitF1 }
        if (location === 'unit F2') { unit = this.data.opponent.field.front.unitF2 }
        if (location === 'unit F3') { unit = this.data.opponent.field.front.unitF3 }
        if (location === 'unit B1') { unit = this.data.opponent.field.back.unitB1 }
        if (location === 'unit B2') { unit = this.data.opponent.field.back.unitB2 }
        if (location === 'unit B3') { unit = this.data.opponent.field.back.unitB3 }
        if (unit.card.grade <= 2) {
          this.$emit('rest', { who: 'opponent', location: location })
        }
      }
      if (this.data.opponent.todo === 'change position') {
        let unit = {}
        if (location === 'unit F1') { unit = this.data.opponent.field.front.unitF1 }
        if (location === 'unit F2') { unit = this.data.opponent.field.front.unitF2 }
        if (location === 'unit F3') { unit = this.data.opponent.field.front.unitF3 }
        if (location === 'unit B1') { unit = this.data.opponent.field.back.unitB1 }
        if (location === 'unit B2') { unit = this.data.opponent.field.back.unitB2 }
        if (location === 'unit B3') { unit = this.data.opponent.field.back.unitB3 }
        if (unit.isUnit) {
          this.$emit('move', { who: 'opponent', location: location })
        }
      }
      if (this.data.opponent.todo === 'unit to deck') {
        let unit = {}
        if (location === 'unit F1') { unit = this.data.opponent.field.front.unitF1 }
        if (location === 'unit F2') { unit = this.data.opponent.field.front.unitF2 }
        if (location === 'unit F3') { unit = this.data.opponent.field.front.unitF3 }
        if (location === 'unit B1') { unit = this.data.opponent.field.back.unitB1 }
        if (location === 'unit B2') { unit = this.data.opponent.field.back.unitB2 }
        if (location === 'unit B3') { unit = this.data.opponent.field.back.unitB3 }
        if (unit.isUnit) {
          this.$emit('FIELD_TO_DECK', { who: 'opponent', location: location })
        }
      }
    },
    moveOrACT (location) {
      if (this.data.turn === 'opponent' && (this.data.phase === 'MP1' || this.data.phase === 'MP2')) {
        let unit = {}
        if (location === 'unit F1') { unit = this.data.opponent.field.front.unitF1 }
        if (location === 'unit F2') { unit = this.data.opponent.field.front.unitF2 }
        if (location === 'unit F3') { unit = this.data.opponent.field.front.unitF3 }
        if (location === 'unit B1') { unit = this.data.opponent.field.back.unitB1 }
        if (location === 'unit B2') { unit = this.data.opponent.field.back.unitB2 }
        if (location === 'unit B3') { unit = this.data.opponent.field.back.unitB3 }
        if (unit.isUnit) { this.$emit('moveOrACT', { who: 'opponent', location: location }) }
      }
    }
  }
}
</script>
