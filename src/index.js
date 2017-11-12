import Vue from 'vue'
import VueSocketio from 'vue-socket.io';
import BootstrapVue from 'bootstrap-vue'
import VLink from './components/VLink.vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from './store';

Vue.use(VueSocketio, 'http://localhost:3000', store);
Vue.use(BootstrapVue);

const app = new Vue({
  el: '#app',
  store,
  data: {
    currentRoute: window.location.pathname
  },
  components: {
    VLink: VLink,
    App: App
  },
  render: h => h(App),
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})