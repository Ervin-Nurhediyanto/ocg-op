<template>
  <div class="col-11 p-0">
    <div class="row h-5vh d-felx justify-content-center m-0 py-1 text-white shadow-text-2">
      {{ data.info.who }} {{ data.info.todo }}
    </div>
    <div class="row h-75vh m-0 p-0">
      <div
        class="col p-0"
        v-for="i in data.info.cards.length"
        :key="i"
      >
        <img
          :class="`h-10vh w-auto cursor-pointer`"
          :src="data.info.cards[i - 1].imageM"
          @click.prevent="onClick(i - 1)"
          @mouseover.prevent="mouseover(data.info.cards[i - 1])"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Open Zone',
  props: ['data'],
  data () {},
  methods: {
    mouseover (data) {
      this.$emit('onDisplay', data)
    }
  }
}
</script>
