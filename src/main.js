import Vue from 'vue'
import './plugins/axios'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/base'
import vuetify from '@/plugins/vuetify'


Vue.config.productionTip = false
new Vue({
  el:"#app",
  store,
  router,
  components: { App },
  vuetify,
  template: '<App/>'
})
