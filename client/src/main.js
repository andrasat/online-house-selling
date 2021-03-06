// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA09vITwgidmNn0c4R3dCP5Jkp2T1IDzbI'
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})