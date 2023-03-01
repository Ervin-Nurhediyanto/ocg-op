<template>
  <div class="col-6 p-0">
    <OPPONENT
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
    <PLAYER
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
  </div>
</template>

<script>
import OPPONENT from './opponent/index.vue'
import PLAYER from './player/index.vue'

export default {
  name: 'Arena',
  props: ['data'],
  data () {},
  components: {
    PLAYER,
    OPPONENT
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
    FIELD_TO_HAND (data) {
      this.$emit('FIELD_TO_HAND', data)
    }
  }
}
</script>
