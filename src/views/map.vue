<template>
  <div id="vueapp" class="vue-app">
    <kendo-map :center="[43.240123, 76.958552]"
               :zoom="13"
               style="width: 100%; height: 500px;">

      <kendo-map-layer :type="'tile'"
                       :url-template="'https://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png'"
                       :subdomains="['a', 'b', 'c']"
                       :attribution="'&copy; <a href=\'https://osm.org/copyright\'>OpenStreetMap contributors</a>'">
      </kendo-map-layer>
      <kendo-map-marker :location="[43.240979, 76.927420]"></kendo-map-marker>
      <kendo-map-marker :location="[43.240123, 76.958552]"></kendo-map-marker>
      <kendo-map-marker :location="[43.249801, 76.947483]"></kendo-map-marker>
    </kendo-map>
  </div>
</template>
<!--43.240979, 76.927420-->
<!--https://yandex.kz/maps/162/almaty/?ll=76.930219%2C43.241817&z=16-->
<script>
import Vue from 'vue'
import { MapInstaller } from
  '@progress/kendo-map-vue-wrapper'

Vue.use(MapInstaller)

export default {
  name: 'app-map'
}
</script>

<style scoped>

</style>
