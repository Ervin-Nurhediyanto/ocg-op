<template>
  <div class="h-50vh">
    <div class="row m-0 h-50vh">
      <Field
        :info='info'
        :turn='turn'
        :phases="phases"
        :player="player"
        :opponent="opponent"
        v-on:openDeck="openDeck"
        v-on:openBind="openBind"
        v-on:openDrop="openDrop"
        v-on:OD="OD"
        v-on:onATK="onATK"
        v-on:EFACT="EFACT"
      />
      <Hand
        :info='info'
        :turn='turn'
        :phases="phases"
        :player="player"
        :opponent="opponent"
        v-on:CFH="CFH"
        v-on:OD="OD"
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
  props: ['info', 'turn', 'phases', 'player', 'opponent'],
  data () {
    return {
    }
  },
  components: {
    Field,
    Hand
  },
  methods: {
    openDeck (data) {
      this.$emit('openDeck', data)
    },
    openBind (data) {
      this.$emit('openBind', data)
    },
    openDrop (data) {
      this.$emit('openDrop', data)
    },
    CFH (data) { // Call From Hand
      this.$emit('CFH', data)
    },
    OD (data) { // On Display
      this.$emit('OD', data)
    },
    onATK (data) { // On Display
      this.$emit('onATK', data)
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
