<template>
  <span
    v-if="turn === 'Player' && player.phase === phases[i - 1]"
    class="w-100 text-center font-14px bg-danger"
  >
    <b>{{ phases[i - 1] }}</b>
  </span>
</template>

<script>
export default {
  name: 'Arena Info Player Phase Active',
  props: ['turn', 'phases', 'player', 'i'],
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>
