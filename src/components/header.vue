<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>Home-Work</b-navbar-brand>
    <b-navbar-nav>

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">РУС</b-dropdown-item>
            <b-dropdown-item href="#">КАЗ</b-dropdown-item>
            <b-dropdown-item href="#">ENG</b-dropdown-item>
            <b-dropdown-item href="#">FRA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
    </b-navbar-nav>

    </b-navbar>
  </div>
</template>

<!--<script>-->
<!--export default {-->
<!--  name: 'app-header',-->
<!--  props: {-->
<!--    msg: String-->
<!--  }-->
<!--}-->
<!--</script>-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
