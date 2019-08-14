import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  data: {
    links: [
      { name: 'About', path: '/about' },
      { name: 'Card 1', path: '/card1' },
      { name: 'Card 2', path: '/card2' },
      { name: 'Card 3', path: '/card3' },
      { name: 'Structure', path: '/structure' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Contacts', path: '/contacts' },
      { name: 'Map', path: '/map' },
      { name: 'YouTube', path: '/clip' }
    ]
  },
  render: h => h(App)
}).$mount('#app01')
