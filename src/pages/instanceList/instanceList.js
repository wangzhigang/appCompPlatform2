// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import instanceList from './instanceList.vue'
import router from '../../router/routerAppDetail.js'
import axios from 'axios'
import qs from 'qs'

import iView from 'iview'
import statusManitor from '../../vuex/statusManitor.js'
import 'iview/dist/styles/iview.css'

Vue.prototype.$axios = axios
Vue.prototype.qs = qs
Vue.config.productionTip = false

Vue.use(router)
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#instanceList',
  store: statusManitor,
  render: h => h(instanceList)
})
