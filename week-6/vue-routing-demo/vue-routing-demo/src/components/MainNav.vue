<template>
  <div id="nav">
    <!-- router-link creates real a tag links to the associated pages/components  -->
    <!-- These components are stipulated in our vue router -->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/pricing">Pricing</router-link>
  </div>
</template>

<style lang="scss" scoped>
  #nav .active-nav {
    font-weight: 900;
    color: green;
  }
</style>
