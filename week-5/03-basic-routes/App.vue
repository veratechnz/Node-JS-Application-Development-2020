<template>
  <div id="app">
    <div id="nav">
      <!-- This is a route pattern that links to the about.vue page in the 'views' folder -->
      <router-link to = "/about">About</router-link>
      <!-- This is a route pattern that links to the home.vue page in the 'views' folder -->
      <router-link to = "/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
