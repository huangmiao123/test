// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueJsonp from 'vue-jsonp'
import Vuex from 'vuex'
import store from './store'
Vue.prototype.$http = axios // 将axios挂载到Vue实例中的$ajax上面,在项目中的任何位置通过this.$http使用
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.use(VueJsonp)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
