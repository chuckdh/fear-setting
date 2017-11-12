import Vue from 'vue'
import VueSocketio from 'vue-socket.io';
import BootstrapVue from 'bootstrap-vue'
import VLink from './components/VLink.vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from './store';

const port = process.env.PORT || 3000;
console.log('Connectiong on port '+port)

Vue.use(VueSocketio, '//localhost:'+port, store);
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