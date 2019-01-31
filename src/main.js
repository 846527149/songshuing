// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'
import MetaInfo from 'vue-meta-info'
import VueLazyload from 'vue-lazyload'
import '../src/assets/css/base.css'
import '../src/assets/css/index.css'
Vue.config.productionTip = false
Vue.use(MetaInfo)
Vue.use(VueLazyload)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
