<template>
  <div class="col-12 h-10vh d-flex justify-content-center">
    <div v-for="i in data.player.hand.length" :key="i">
      <img
        :class="`h-10vh w-auto cursor-pointer`"
        :src="data.player.hand[i - 1].imageM"
        @click.prevent="onClick(i - 1)"
        @mouseover.prevent="mouseover(data.player.hand[i - 1])"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hand-Card-Player',
  props: ['data'],
  data () {},
  methods: {
    mouseover (data) {
      this.$emit('onDisplay', data)
    },
    onClick (index) {
      if (this.data.turn === 'player' && (this.data.phase === 'MP1' || this.data.phase === 'MP2')) {
        this.call(index)
      }
    },
    call (index) {
      this.$emit('call', { who: 'player', index: index })
    }
  }
}
</script>
