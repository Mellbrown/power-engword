import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import firebase from 'firebase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import windowEvent from '@/comp/small/windowEvent'
import userRef from '@/comp/small/userRef'
import cvtInput from '@/comp/base/cvtInput'
import modal from '@/comp/base/modal'
import editlist from '@/comp/base/editlist'

import '@/util.scss'

var config = {
  apiKey: 'AIzaSyAf58mwBcVfROhZ3Jz7ciBuIKjozafQPzw',
  authDomain: 'power-engword.firebaseapp.com',
  databaseURL: 'https://power-engword.firebaseio.com',
  projectId: 'power-engword',
  storageBucket: 'power-engword.appspot.com',
  messagingSenderId: '207025311379'
}

firebase.initializeApp(config)

library.add(fas)
Vue.component('icon', FontAwesomeIcon)
Vue.component('window-event', windowEvent)
Vue.component('user-ref', userRef)
Vue.component('modal', modal)
Vue.component('cvt-input', cvtInput)
Vue.component('editlist', editlist)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
