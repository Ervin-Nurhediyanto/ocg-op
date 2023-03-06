<template>
  <div class="row m-0 h-50vh">
    <div class="col-2 h-40vh">
      <div class="row">
        <BIND
          :data="data"
          v-on:openZone="openZone"
        />
        <MANA :data="data"/>
      </div>
    </div>
    <FIELD
      :data="data"
      v-on:callFromHand="callFromHand"
      v-on:unitATK="unitATK"
      v-on:unitDEF="unitDEF"
      v-on:moveOrACT="moveOrACT"
      v-on:onDisplay="onDisplay"
      v-on:destroy="destroy"
      v-on:bind="bind"
      v-on:rest="rest"
      v-on:move="move"
      v-on:FIELD_TO_HAND="FIELD_TO_HAND"
      v-on:FIELD_TO_DECK="FIELD_TO_DECK"
    />
    <div class="col-2 h-40vh">
      <div class="row">
        <DECK :data="data"/>
        <DROP
          :data="data"
          v-on:openZone="openZone"
        />
      </div>
    </div>
    <HAND
      :data="data"
      v-on:call="call"
      v-on:onDisplay="onDisplay"
    />
  </div>
</template>

<script>
import DECK from './deck.vue'
import DROP from './drop-zone.vue'
import BIND from './bind-zone.vue'
import MANA from './mana-zone.vue'
import HAND from './hand-card.vue'
import FIELD from './field.vue'

export default {
  name: 'Arena-Player',
  props: ['data'],
  data () {},
  components: {
    DECK,
    DROP,
    BIND,
    MANA,
    HAND,
    FIELD
  },
  methods: {
    onDisplay (data) {
      this.$emit('onDisplay', data)
    },
    call (data) {
      this.$emit('call', data)
    },
    callFromHand (data) {
      this.$emit('callFromHand', data)
    },
    unitATK (data) {
      this.$emit('unitATK', data)
    },
    unitDEF (data) {
      this.$emit('unitDEF', data)
    },
    moveOrACT (data) {
      this.$emit('moveOrACT', data)
    },
    openZone (data) {
      this.$emit('openZone', data)
    },
    destroy (data) {
      this.$emit('destroy', data)
    },
    bind (data) {
      this.$emit('bind', data)
    },
    rest (data) {
      this.$emit('rest', data)
    },
    move (data) {
      this.$emit('move', data)
    },
    FIELD_TO_HAND (data) {
      this.$emit('FIELD_TO_HAND', data)
    },
    FIELD_TO_DECK (data) {
      this.$emit('FIELD_TO_DECK', data)
    }
  }
}
</script>
