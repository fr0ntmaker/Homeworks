<template>
  <kendo-calendar :value="new Date()">KENDO-CAL</kendo-calendar>
</template>

<script>
import Vue from 'vue'

import { Calendar } from '@progress/kendo-dateinputs-vue-wrapper'

Vue.component(Calendar.name, Calendar)

export default {
  name: 'Calendar'
}
</script>

<style scoped>

</style>
