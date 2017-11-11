import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VLink from './components/VLink.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  components: {
    VLink: VLink
  },
  render: h => h(App),
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})