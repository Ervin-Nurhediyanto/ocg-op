<template>
  <span
    v-if="turn === 'Opponent' && opponent.phase === phases[i - 1]"
    class="w-100 text-center font-12px bg-info"
  >
    <b>{{ phases[i - 1] }}</b>
  </span>
</template>

<script>
export default {
  name: 'Arena Info Opponent Phase Active',
  props: ['turn', 'phases', 'opponent', 'i'],
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
