import Vue from 'vue'
import VueSocketio from 'vue-socket.io';
import BootstrapVue from 'bootstrap-vue'
import VLink from './components/VLink.vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from './store';

const protocol = location.protocol;
const slashes = protocol.concat("//");
const host = slashes.concat(window.location.hostname);
const port = process.env.PORT || 3000;
const url = host.concat(':'+port);
console.log('Connectiong on  '+url)

Vue.use(VueSocketio, url, store);
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