<template>
  <div class="col-3 p-0 h-100vh p-0">
    <img :src="data.imageM" class="d-flex d-xl-none h-70vh w-auto"/>
    <div class="d-none d-xl-flex row m-0 h-100vh w-100 justify-content-center align-content-center">
      <div class="col-12 p-2 h-70vh">
        <div class="h-100 w-100 m-0 p-1 border border-2 rounded shadow-box-3 bg-card-normal">
          <div class="p-1 d-flex justify-content-between border border-2 rounded bg-white">
            <span class="">{{ data.name }}</span>
            <span class="px-2 dot shadow"><b>{{ data.grade }}</b></span>
          </div>
          <div class="h-35vh mt-1 p-1 d-flex justify-content-center border border-2 rounded shadow-box-inset-1">
            <img :src="data.image" class="h-100 w-auto"/>
          </div>
          <div class="h-18vh mt-1 p-1 border border-2 rounded shadow-box-inset-1">
            <div class="">
              <span>{{ data.type.race }}</span>
              <span v-if="data.type.job !== ''">/</span>
              <span>{{ data.type.job }}</span>
              <span v-if="data.type.special !== ''">/</span>
              <span>{{ data.type.special }}</span>
              <hr class="m-0 my-1"/>
            </div>
            <div class="m-0 font-12px">{{ data.text }}</div>
          </div>
          <div class="h-5vh mt-1 p-1 border border-2 rounded shadow-box-inset-1"><b>Power : {{ data.power }}</b></div>
        </div>
      </div>
      <div class="h-20vh p-2 font-14px shadow-box-inset-10 bg-white">
        <div>{{ data.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Arena Display',
  props: ['data']
}
</script>

<!-- <template>
  <div class="col-3">
    <div class="w-100">
      <Card :data="data.arena.display"/>
    </div>
  </div>
</template>

<script>
import Card from '../../edit/C-Edit-Display.vue'

export default {
  name: 'Arena Display',
  props: ['data'],
  data () {
    return {
    }
  },
  components: {
    Card
  },
  methods: {
  }
}
</script> -->
