<template>
  <div id="app">

<b-navbar toggleable="md" type="dark" variant="primary">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand>Fear-Setting online</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <VLink href="/">Welcome</VLink>
      <VLink href="/fear-list">Fear list</VLink>
      <VLink href="/benefits">Benefits</VLink>
      <VLink href="/cost-of-inaction">The Cost of Inaction</VLink>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto">
      <b-nav-item href="https://github.com/chuckdh/fear-setting">Github</b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>


    <b-container class="bv-example-row">
        <b-row>
            <b-col>

              <Welcome v-if="ViewComponent == 'Welcome'"></Welcome>
              <FearList v-else-if="ViewComponent == 'FearList'"></FearList>
              <template v-else>
                404
              </template>

            </b-col>
        </b-row>
    </b-container>
  </div>

</template>

<script>
import Error404 from './errors/404.vue'
import VLink from './components/VLink.vue'
import routes from './routes'

import Welcome from './components/Welcome.vue'
import FearList from './components/fearList/FearList.vue'

export default {
  name: 'app',
  data() {
    return {

    };
  },
  computed: {
      currentRoute () {
        return this.$root.currentRoute
      },
      ViewComponent () {
        const matchingView = routes[this.currentRoute]
        console.log(matchingView);

        return matchingView;
      }
    },
  components: {
    VLink: VLink,
    Error404: Error404,
    Welcome: Welcome,
    FearList: FearList
  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>