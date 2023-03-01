<template>
  <div class="col-12 h-10vh d-flex justify-content-center">
    <div v-for="i in data.opponent.hand.length" :key="i">
      <img
        :class="`h-10vh w-auto cursor-pointer`"
        :src="data.opponent.hand[i - 1].imageM"
        @click.prevent="onClick(i - 1)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hand-Card-Opponent',
  props: ['data'],
  data () {},
  methods: {
    onClick (index) {
      if (this.data.turn === 'opponent' && (this.data.phase === 'MP1' || this.data.phase === 'MP2')) {
        this.call(index)
      }
    },
    call (index) {
      this.$emit('call', { who: 'opponent', index: index })
    }
  }
}
</script>
