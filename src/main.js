import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './vuex/store'
import * as firebase from 'firebase/app'
import Vuex from 'vuex'
import {config} from './firebaseConfig'
// Firebase App (the core Firebase SDK) is always required and must be listed first


// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics"

// Add the Firebase products that you want to use
import "firebase/auth"
import "firebase/firestore"



Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */

firebase.initializeApp(config)

const check = firebase.auth().onAuthStateChanged((user) => {
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store,
    created() {
      if (user) {
        store.dispatch('autoSignIn', user)
      }
    }
  })
  check()
})
