<template>
  <div class="h-50vh">
    <div class="row m-0 h-50vh">
      <Hand
        v-on:onDisplay="onDisplay"
        v-on:HAND="HAND"
        v-on:unit="unit"
        :effect='effect'
        :info='info'
        :turn='turn'
        :phases="phases"
        :player="player"
        :opponent="opponent"
        v-on:EFAUTO="EFAUTO"
        v-on:EFCONT="EFCONT"
      />
      <Field
        v-on:onDisplay="onDisplay"
        v-on:unit="unit"
        :effect='effect'
        :info='info'
        :turn='turn'
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
    </div>
  </div>
</template>

<script>
import Hand from './C-Arena-Hand.vue'
import Field from './C-Arena-Field.vue'

export default {
  name: 'Arena Opponent',
  props: ['info', 'turn', 'phases', 'player', 'opponent', 'effect'],
  data () {
    return {}
  },
  components: {
    Hand,
    Field
  },
  methods: {
    onDisplay (data) {
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
    HAND (data) { // Call From Hand
      this.$emit('HAND', data)
    },
    unit (data) {
      this.$emit('unit', data)
    },
    // OLD CODE
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
