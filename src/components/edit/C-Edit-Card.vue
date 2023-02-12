<template>
  <div>
    <div class="row h-5vh m-0 p-1">
      <div class="col-2 col-xl">
        <button class="d-flex justify-content-center btn btn-primary m-0 w-100 font-weight-bold font-12px" @click.prevent="sortName">
          Name
        </button>
      </div>
      <div class="col-2 col-xl">
        <button class="d-flex justify-content-center btn btn-primary m-0 w-100 font-weight-bold font-12px" @click.prevent="sortGrade">
          Grade
        </button>
      </div>
      <div class="col-2 col-xl">
        <button class="d-flex justify-content-center btn btn-primary m-0 w-100 font-weight-bold font-12px" @click.prevent="sortPower">
          Power
        </button>
      </div>
      <div class="col-2 col-xl">
        <button class="d-flex justify-content-center btn btn-primary m-0 w-100 font-weight-bold font-12px" @click.prevent="sortRace">
          Race
        </button>
      </div>
      <div class="col-2 col-xl">
        <button class="d-flex justify-content-center btn btn-primary m-0 w-100 font-weight-bold font-12px" @click.prevent="sortJob">
          Job
        </button>
      </div>
      <div class="col-2 col-xl">
        <button class="d-flex justify-content-center btn btn-primary m-0 w-100 font-weight-bold font-12px" @click.prevent="sortSpecial">
          Special
        </button>
      </div>
    </div>
    <div class="row h-95vh m-0 p-2 overflow scrollbar-none">
      <div v-for="i in data.length" :key="i" class="col-2 h-20vh my-1 d-flex justify-content-center">
        <Card
          :image="data[i - 1].imageM"
          :data="data[i - 1]"
          v-on:addToDeck="addToDeck"
          v-on:changeDisplay="changeDisplay"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../image/Card-Mini.vue'

export default {
  name: 'Edit-Card',
  props: ['data'],
  components: {
    Card
  },
  methods: {
    changeDisplay (data) {
      this.$emit('changeDisplay', data)
    },
    addToDeck (data) {
      this.$emit('addToDeck', data)
    },
    sortName () {
      this.$emit('sortData', 'name')
    },
    sortGrade () {
      this.$emit('sortData', 'grade')
    },
    sortPower () {
      this.$emit('sortData', 'power')
    },
    sortRace () {
      this.$emit('sortData', 'race')
    },
    sortJob () {
      this.$emit('sortData', 'job')
    },
    sortSpecial () {
      this.$emit('sortData', 'special')
    }
  }
}
</script>
