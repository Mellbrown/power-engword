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

import '@/util.scss'

var config = {
  apiKey: 'AIzaSyAf58mwBcVfROhZ3Jz7ciBuIKjozafQPzw',
  authDomain: 'power-engword.firebaseapp.com',
  databaseURL: 'https://power-engword.firebaseio.com',
  projectId: 'power-engword',
  storageBucket: 'power-engword.appspot.com',
  messagingSenderId: '207025311379'
};
firebase.initializeApp(config);

library.add(fas)
Vue.component('icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
