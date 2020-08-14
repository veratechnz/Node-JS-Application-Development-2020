<template>
  <div class="sample">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Sample',
  data () {
    return {
      msg: 'The Sample Component zzz'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
