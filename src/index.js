import Vue from 'vue'
import VueSocketio from 'vue-socket.io';
import BootstrapVue from 'bootstrap-vue'
import VLink from './components/VLink.vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from './store';

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
console.log('Connectiong on  '+'//'+host+':'+port)

Vue.use(VueSocketio, '//'+host+':'+port, store);
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