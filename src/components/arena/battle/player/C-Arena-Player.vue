<template>
  <div class="h-50vh">
    <div class="row m-0 h-50vh">
      <Field
        v-on:onDisplay="onDisplay"
        v-on:unit="unit"
        :effect="effect"
        :info="info"
        :turn="turn"
        :phases="phases"
        :player="player"
        :opponent="opponent"
        v-on:openDeck="openDeck"
        v-on:openBind="openBind"
        v-on:openDrop="openDrop"
        v-on:onATK="onATK"
        v-on:onDEF="onDEF"
        v-on:EFACT="EFACT"
      />
      <Hand
        v-on:onDisplay="onDisplay"
        v-on:HAND="HAND"
        v-on:unit="unit"
        :effect="effect"
        :info="info"
        :turn="turn"
        :phases="phases"
        :player="player"
        :opponent="opponent"
        v-on:EFAUTO="EFAUTO"
        v-on:EFCONT="EFCONT"
      />
    </div>
  </div>
</template>

<script>
import Field from './C-Arena-Field.vue'
import Hand from './C-Arena-Hand.vue'

export default {
  name: 'Arena Player',
  props: ['info', 'turn', 'phases', 'player', 'opponent', 'effect'],
  data () {
    return {}
  },
  components: {
    Field,
    Hand
  },
  methods: {
    onDisplay (data) { // On Display
      this.$emit('onDisplay', data)
    },
    openDeck (data) {
      this.$emit('openDeck', data)
    },
    openBind (data) {
      this.$emit('openBind', data)
    },
    openDrop (data) {
      this.$emit('openDrop', data)
    },
    HAND (data) {
      this.$emit('HAND', data)
    },
    unit (data) {
      this.$emit('unit', data)
    },
    // Old COde
    // CFH (data) { // Call From Hand
    //   this.$emit('CFH', data)
    // },
    onATK (data) {
      this.$emit('onATK', data)
    },
    onDEF (data) {
      this.$emit('onDEF', data)
    },
    EFAUTO (data) { // Effect AUTO
      this.$emit('EFAUTO', data)
    },
    EFCONT (data) { // Effect CONT
      this.$emit('EFCONT', data)
    },
    EFACT (data) { // Effect ACT
      this.$emit('EFACT', data)
    }
  }
}
</script>
