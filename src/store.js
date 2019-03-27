import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    action_title: '',
    user: 'user'
  },
  mutations: {
    setActionTitle (state, title) {
      state.action_title = title
    }
  },
  actions: {

  }
})
