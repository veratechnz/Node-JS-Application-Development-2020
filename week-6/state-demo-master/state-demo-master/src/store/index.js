import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // This is the current state values
  state: {
    componentA: 'ComponentA message from store original...',
    componentB: 'ComponentB message from store original...',
    number: 157,
    empty: '',
    userLoggedIn: false,
    goDark: false,
    goPink: false
  },
  // These help us get the state values
  getters: {
    getComponentA: function (state) {
      return state.componentA
    },
    getComponentB: function (state) {
      return state.componentB
    },
    getGoPink: function (state) {
      return state.goPink
    }
  },
  // This changes the state...
  mutations: {
    // state is the ref to the state prop above and payload is the value
    changeTheComponentAMessage (state, payload) {
      state.componentA = payload
    },
    // state is the ref to the state prop above and payload is the value
    changeGoPink (state, payload) {
      state.goPink = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
