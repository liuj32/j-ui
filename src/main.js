import Vue from 'vue'
import Element from './index'
import App from './App.vue'
import router from './router'
import store from './store'
import './components/theme-chalk/src/index.scss'

Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
