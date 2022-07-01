import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books:[],
    id:1
  },
  getters: {
  },
  mutations: {
    idCount(state){
      state.id++
    }
  },
  actions: {
  },
  modules: {
  }
})
