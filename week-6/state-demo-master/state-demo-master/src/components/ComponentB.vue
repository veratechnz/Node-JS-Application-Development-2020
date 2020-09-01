<template>
  <div class="com-b" v-bind:class="{ pinkbg: goPink }">
    <h1>{{stateMsg}}</h1>
    <button type="button" name="button" @click="changeState">Change State</button>
    <button type="button" name="button" @click="goPinkChange">Go Pink</button>
  </div>
</template>

<script>
// 1. Importing the state access to the component...Give us the store/state !!!!
import store from '../store'

export default {
  name: 'ComponentB',
  data () {
    return {
      msg: 'another message from the component data...',
      stateMsg: store.getters.getComponentB,
      goPink: store.getters.goPink
    }
  },
  methods: {
    changeState: function () {
      // This is using a mutation to change the state value
      this.$store.commit('changeTheComponentAMessage', ' This is a real call component message state change from a Component B click event')
    },
    goPinkChange: function () {
      // This is using a mutation to change the state value
      this.$store.commit('changeGoPink', true)
    }
  },
  // Here we use computed and 'watch' in conjuction to watch
  // if the state changes
  computed: {
    componentTitleChange () {
      // It is watching getComponentA state via the getter
      // getComponentA
      return this.$store.getters.getComponentA
    },
    goPinkChanged () {
      // It is watching getComponentA state via the getter
      // getComponentA
      return this.$store.getters.getGoPink
    }
  },
  watch: {
    // This watch function is watching the getComponentA state
    // for any change
    componentTitleChange (state) {
      // When the change happens, this code will run
      // Update the component data object with the new state value
      this.stateMsg = state
    },
    goPinkChanged (state) {
      // It is watching goPink state via the getter
      // getComponentA
      this.goPink = state
    }
  } // watch ENDS
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
.com-b {
  border: 1px solid #efefef;
  width: 44%;
  float: left;
  padding: 1em;
  margin-right: 0.5em;
}
.pinkbg {
  background-color: pink;
}
</style>
