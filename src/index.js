import Vue from 'vue'
import VueSocketio from 'vue-socket.io';
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from './store';

const protocol = location.protocol;
const slashes = protocol.concat("//");
const host = slashes.concat(window.location.hostname);
const port = parseInt(process.env.PORT) || 80;

let url;
if(port === 80 || port === 443) {
  url = host;
} else {
  url = host.concat(':'+port);
}

console.log('Connecting on  '+url)

Vue.use(VueSocketio, url, store);
Vue.use(BootstrapVue);

const app = new Vue({
  el: '#app',
  store,
  data: {
    currentRoute: window.location.pathname
  },
  components: {
    App: App
  },
  render: h => h(App),
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})