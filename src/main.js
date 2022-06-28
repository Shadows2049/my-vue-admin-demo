// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAnimXYZ from '@animxyz/vue'
import '@animxyz/core' // Import css here if you haven't elsewhere
import Particles from "particles.vue";

Vue.use(Particles);
Vue.use(VueAnimXYZ)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
