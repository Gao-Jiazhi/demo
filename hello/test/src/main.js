// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import less from 'less'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'

import '@/assets/common.less'

import dataV from '@jiaminghi/data-view'
import store from '@/store/index.js'


// Vue.use(dataV)

Vue.config.productionTip = false
Vue.use(ElementUI).use(dataV).use(less)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
