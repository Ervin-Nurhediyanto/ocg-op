<template>
  <div class="col-3 h-100vh p-0">
    <div class="row d-flex d-xl-none h-10vh m-0">
      <div class="col-12 text-white font-12px shadow-text-2"><b>{{ opponent.name }}</b></div>
      <div class="col-12 font-12px shadow-text-2"><b>Life:
        <span v-if="opponent.life <= 4000" class="text-danger">{{ opponent.life }}</span>
        <span v-else class="text-white">{{ opponent.life }}</span>
      </b></div>
    </div>
    <div class="row d-none d-xl-flex h-10vh m-0">
      <div class="col-12 text-white shadow-text-2"><b>{{ opponent.name }}</b></div>
      <div class="col-12 text-white shadow-text-2"><b>Life:
        <span v-if="opponent.life <= 4000" class="text-danger">{{ opponent.life }}</span>
        <span v-else class="text-white">{{ opponent.life }}</span>
      </b></div>
    </div>
    <div class="row h-80vh m-0">
      <Open
        v-if="info.isOpen === true"
        v-on:card="card"
        :info="info"
        :turn='turn'
        :phases="phases"
        :player="player"
        :opponent="opponent"
        v-on:OD="OD"
        v-on:AFD="AFD"
        v-on:HTD="HTD"
        v-on:UDF="UDF"
        v-on:UTR="UTR"
        v-on:UBF="UBF"
        v-on:DTF="DTF"
        v-on:FTH="FTH"
        v-on:FTD="FTD"
        v-on:DRTF="DRTF"
        v-on:DRTH="DRTH"
        v-on:ACT017="ACT017"
        v-on:ACT022="ACT022"
        v-on:ACT023="ACT023"
        v-on:ACT024="ACT024"
        v-on:ACT026="ACT026"
        v-on:ACT033="ACT033"
        v-on:ACT045="ACT045"
      />
      <!-- Chat Player -->
      <div v-else class="col-10 h-80vh px-2 text-white shadow-text-1"></div>
      <div class="col-2">
        <Phase
          v-on:changePhase="changePhase"
          :turn='turn'
          :phases="phases"
          :player="player"
          :opponent="opponent"
        />
      </div>
    </div>
    <div class="row d-flex d-xl-none h-10vh m-0">
      <div class="col-12 text-white font-12px shadow-text-2"><b>{{ player.name }}</b></div>
      <div class="col-12 text-white font-12px shadow-text-2"><b>Life:
        <span v-if="player.life <= 4000" class="text-danger">{{ player.life }}</span>
        <span v-else class="text-white">{{ player.life }}</span>
      </b></div>
    </div>
    <div class="row d-none d-xl-flex h-10vh m-0">
      <div class="col-12 text-white shadow-text-2"><b>{{ player.name }}</b></div>
      <div class="col-12 text-white shadow-text-2"><b>Life:
        <span v-if="player.life <= 4000" class="text-danger">{{ player.life }}</span>
        <span v-else class="text-white">{{ player.life }}</span>
      </b></div>
    </div>
  </div>
</template>

<script>
import Phase from './phase/C-Arena-Phase.vue'
import Open from './open/C-Arena-Open.vue'

export default {
  name: 'Arena Info',
  props: ['info', 'turn', 'phases', 'player', 'opponent'],
  data () {
    return {}
  },
  components: {
    Phase,
    Open
  },
  methods: {
    changePhase (data) {
      this.$emit('changePhase', data)
    },
    card (data) {
      this.$emit('card', data)
    },
    // OLD CODE
    OD (data) {
      this.$emit('OD', data)
    },
    AFD (data) {
      this.$emit('AFD', data)
    },
    HTD (data) {
      this.$emit('HTD', data)
    },
    UDF (data) {
      this.$emit('UDF', data)
    },
    FTD (data) {
      this.$emit('FTD', data)
    },
    UTR (data) {
      this.$emit('UTR', data)
    },
    UBF (data) {
      this.$emit('UBF', data)
    },
    DTF (data) {
      this.$emit('DTF', data)
    },
    FTH (data) {
      this.$emit('FTH', data)
    },
    DRTF (data) {
      this.$emit('DRTF', data)
    },
    DRTH (data) {
      this.$emit('DRTH', data)
    },
    ACT017 (data) {
      this.$emit('ACT017', data)
    },
    ACT022 (data) {
      this.$emit('ACT022', data)
    },
    ACT023 (data) {
      this.$emit('ACT023', data)
    },
    ACT024 (data) {
      this.$emit('ACT024', data)
    },
    ACT026 (data) {
      this.$emit('ACT026', data)
    },
    ACT033 (data) {
      this.$emit('ACT033', data)
    },
    ACT045 (data) {
      this.$emit('ACT045', data)
    }
  }
}
</script>
