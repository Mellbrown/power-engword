import Vue from 'vue'
import Vuex from 'vuex'
import { database } from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: 'user'
  },
  mutations: {

  },
  getters: {
    userdb (state) {
      return database().ref(`user/${state.user}`)
    }
  },
  actions: {

  }
})
