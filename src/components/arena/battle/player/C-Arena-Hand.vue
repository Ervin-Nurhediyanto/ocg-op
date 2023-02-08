<template>
  <div class="col-12 p-0 h-20vh">
    <div class="row m-0 h-20vh d-flex justify-content-center">
      <div v-for="i in player.hand.length" :key="i" class="col-1 p-0 h-15vh d-flex justify-content-center align-content-center border border-2">
        <img
          :class="`h-15vh w-auto `"
          :src="player.hand[i - 1].imageM"
          @click.prevent="onClick(i - 1)"
          @mouseover.prevent="mouseover(player.hand[i - 1])"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Arena Player Hand',
  props: ['info', 'turn', 'phases', 'player', 'opponent'],
  methods: {
    mouseover (data) {
      this.$emit('OD', data) // On Display
    },
    onClick (index) {
      if (this.info.isOpen === true) {
        alert('Selesaikan Efek kartu !!!')
      } else {
        const unit = this.player.hand[index]
        const phase = this.player.phase
        if (phase === 'MP1' || phase === 'MP2') {
          this.$swal.fire({
            title: `Call ${unit.name} ?`,
            showCancelButton: true,
            confirmButtonText: 'YES',
            cancelButtonText: 'NO'
          }).then((result) => {
            if (result.isConfirmed) {
              this.callUnit(unit, index)
            }
          })
        }
      }
    },
    callUnit (unit, index) {
      if (unit.grade === 1) {
        this.callUnitG1(index)
      }
      if (unit.grade === 2) {
        this.callUnitG2(index)
      }
      if (unit.grade === 3) {
        this.callUnitG3(index)
      }
    },
    callUnitG1 (index) {
      const Toast = (icon, title) => {
        this.$swal.mixin().fire({
          icon: icon,
          title: title,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        })
      }
      const BF = this.player.field
      if (BF.length < 6) {
        this.$emit('CFH', { who: 'Player', index: index }) // Call From Hand
        this.$emit('EFCONT', { who: 'Player', event: 'COUNT UNIT ON FIELD' })
      } else {
        Toast('error', 'Field Penuh')
      }
    },
    callUnitG2 (index) {
      const Toast = (icon, title) => {
        this.$swal.mixin().fire({
          icon: icon,
          title: title,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        })
      }
      const BF = this.player.field
      if (BF.length > 0) {
        this.tributeOneUnit(index)
      } else {
        Toast('error', 'Unit G2 perlu tribute 1 unit di Field')
      }
    },
    callUnitG3 (index) {
      const Toast = (icon, title) => {
        this.$swal.mixin().fire({
          icon: icon,
          title: title,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        })
      }
      const BF = this.player.field
      if (BF.length > 1) {
        this.tributeTwoUnit(index)
      } else {
        Toast('error', 'Unit G3 perlu tribute 2 unit di Field')
      }
    },
    tributeOneUnit (index) {
      const BF = this.player.field
      const DZ = this.player.drop
      const units = {}
      for (let i = 0; i < BF.length; i++) {
        if (i === 0) { units.u0 = BF[i].card.name }
        if (i === 1) { units.u1 = BF[i].card.name }
        if (i === 2) { units.u2 = BF[i].card.name }
        if (i === 3) { units.u3 = BF[i].card.name }
        if (i === 4) { units.u4 = BF[i].card.name }
        if (i === 5) { units.u5 = BF[i].card.name }
      }
      this.$swal.fire({
        title: '<strong><u>Tribute unit pertama</u></strong>',
        input: 'select',
        inputOptions: { units },
        inputValidator: (value) => {
          let IT = '' // Index Tribute
          if (value === 'u0') { IT = 0 }
          if (value === 'u1') { IT = 1 }
          if (value === 'u2') { IT = 2 }
          if (value === 'u3') { IT = 3 }
          if (value === 'u4') { IT = 4 }
          if (value === 'u5') { IT = 5 }
          const UT = this.player.field[IT].card // Unit Tribute
          DZ.push(UT)
          BF.splice(IT, 1)
          this.$emit('CFH', { who: 'Player', index: index }) // Call From Hand
          this.$emit('EFCONT', { who: 'Player', event: 'COUNT UNIT ON FIELD' })
          this.UDE('Player')
        }
      })
    },
    tributeTwoUnit (index) {
      const BF = this.player.field
      const DZ = this.player.drop
      const units = {}
      for (let i = 0; i < BF.length; i++) {
        if (i === 0) { units.u0 = BF[i].card.name }
        if (i === 1) { units.u1 = BF[i].card.name }
        if (i === 2) { units.u2 = BF[i].card.name }
        if (i === 3) { units.u3 = BF[i].card.name }
        if (i === 4) { units.u4 = BF[i].card.name }
        if (i === 5) { units.u5 = BF[i].card.name }
      }
      this.$swal.fire({
        title: '<strong><u>Tribute unit</u></strong>',
        input: 'select',
        inputOptions: { units },
        inputValidator: (value) => {
          let IT = '' // Index Tribute
          if (value === 'u0') { IT = 0 }
          if (value === 'u1') { IT = 1 }
          if (value === 'u2') { IT = 2 }
          if (value === 'u3') { IT = 3 }
          if (value === 'u4') { IT = 4 }
          if (value === 'u5') { IT = 5 }
          const UT = this.player.field[IT].card // Unit Tribute
          DZ.push(UT)
          BF.splice(IT, 1)
          this.UDE('Player')
          const units2 = {}
          for (let i = 0; i < BF.length; i++) {
            if (i === 0) { units2.u0 = BF[i].card.name }
            if (i === 1) { units2.u1 = BF[i].card.name }
            if (i === 2) { units2.u2 = BF[i].card.name }
            if (i === 3) { units2.u3 = BF[i].card.name }
            if (i === 4) { units2.u4 = BF[i].card.name }
            if (i === 5) { units2.u5 = BF[i].card.name }
          }
          this.$swal.fire({
            title: '<strong><u>Tribute unit kedua</u></strong>',
            input: 'select',
            inputOptions: { units2 },
            inputValidator: (value) => {
              let IT2 = '' // Index Tribute
              if (value === 'u0') { IT2 = 0 }
              if (value === 'u1') { IT2 = 1 }
              if (value === 'u2') { IT2 = 2 }
              if (value === 'u3') { IT2 = 3 }
              if (value === 'u4') { IT2 = 4 }
              if (value === 'u5') { IT2 = 5 }
              const UT2 = this.player.field[IT2].card // Unit2 Tribut2e
              DZ.push(UT2)
              BF.splice(IT2, 1)
              this.$emit('CFH', { who: 'Player', index: index }) // Call From Hand
              this.$emit('EFCONT', { who: 'Player', event: 'COUNT UNIT ON FIELD' })
              this.UDE('Player')
            }
          })
        }
      })
    },
    UDE (who) { // Unit Drop Zone Effect
      let unit = {}
      let index = ''
      if (who === 'Player') {
        index = this.player.drop.length - 1
        unit = this.player.drop[index]
      } else {
        index = this.opponent.drop.length - 1
        unit = this.opponent.drop[index]
      }
      this.$emit('EFAUTO', { who: who, code: unit.code, index: index, stat: 'EFDROP' })
      this.$emit('EFCONT', { who: who, event: 'SEND TO DROP' })
    }
  }
}
</script>
