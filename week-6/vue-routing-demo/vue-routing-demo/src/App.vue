<template>
  <div id="app">
    <!-- Here we are importing the MainNav -->
    <MainNav/>
    <!-- router-view is the call to render the entire component from the router on the page. -->
    <!-- without router-view, there would be no views/pages/components rendered -->
    <router-view/>
  </div>
</template>
<script>
// Importing the component
import MainNav from '@/components/MainNav.vue'

// Importing another component
export default {
  name: 'app',
  components: {
    MainNav
  }
}

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
