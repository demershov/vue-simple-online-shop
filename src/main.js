import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  created() {
    var config = {
      apiKey: "AIzaSyCeM0Z1Pd2q3h1RyOas4iQA1JSFVM3WyNY",
      authDomain: "onlinestorevue-dafe6.firebaseapp.com",
      databaseURL: "https://onlinestorevue-dafe6.firebaseio.com",
      projectId: "onlinestorevue-dafe6",
      storageBucket: "onlinestorevue-dafe6.appspot.com",
      messagingSenderId: "78945940005"
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    }),
    this.$store.dispatch('fetchProducts')
  },
}).$mount('#app')
