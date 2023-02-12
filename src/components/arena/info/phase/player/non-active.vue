<template>
  <span
    v-if="turn === 'Player' && player.phase !== phases[i - 1]"
    class="w-100 text-center font-12px bg-white"
    @click.prevent="onClick(i - 1)"
  >
    <b>{{ phases[i - 1] }}</b>
  </span>
</template>

<script>
export default {
  name: 'Arena Info Player Phase Non Active',
  props: ['turn', 'phases', 'player', 'i'],
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    onClick (index) {
      this.$emit('changePhase', index)
    }
  }
}
</script>
