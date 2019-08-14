<template>
<div id="app01">
  <b-container>

    <b-row class="shadow-lg">
      <b-col cols="12">
        <appHeader> </appHeader>
      </b-col>
    </b-row>

    <b-row class="shadow-lg">
      <b-col cols="3">
        <appSidebar></appSidebar>
        <br>
        <Calendar></Calendar>
        <br>
      </b-col>

      <b-col cols="9" class="my-4">
        <b-row class="shadow-lg">
          <b-col>
            <router-view></router-view>
          </b-col>
        </b-row>

      </b-col>
    </b-row>

    <b-row class="shadow-lg">
      <b-col>
        <appFooter></appFooter>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
import appHeader from './components/header.vue'
import appSidebar from './components/sidebar.vue'
import appFooter from './components/footer.vue'
import Calendar from './views/calendar.vue'

export default {
  name: 'app01',
  components: {
    appHeader,
    appSidebar,
    appFooter,
    Calendar
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
