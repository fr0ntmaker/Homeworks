<template>
  <div>
    <b-list-group>
      <b-list-group-item exact to="/about" active>About</b-list-group-item>
      <b-list-group-item to="/card1">Card 1</b-list-group-item>
      <b-list-group-item to="/card2">Card 2</b-list-group-item>
      <b-list-group-item to="/card3">Card 3</b-list-group-item>
      <b-list-group-item to="/structure">Structure</b-list-group-item>
      <b-list-group-item>Gallery</b-list-group-item>
      <b-list-group-item>Contacts</b-list-group-item>
      <b-list-group-item to="/map">Map</b-list-group-item>
      <b-list-group-item to="/clip">YouTube</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
