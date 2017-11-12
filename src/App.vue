<template>
  <div id="app">

    <div v-if="!isConnected">Not connected....</div>

    <template v-else>
      <b-navbar toggleable="md" type="dark" variant="primary">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand>Fear-Setting online</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <VLink href="/">Welcome</VLink>
          <VLink href="/fear-list">1: The Fear List</VLink>
          <VLink href="/your-benefits">2: Your Benefits</VLink>
          <VLink href="/cost-of-inaction">3: The Cost of Inaction</VLink>
          <VLink href="/conclusion">Conclusion</VLink>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" @click.prevent>Connected: {{ connectedClients }}</b-nav-item>
          <b-nav-item href="https://github.com/chuckdh/fear-setting">Github</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container class="top-margin">
        <b-row>
            <b-col>

              <Welcome v-if="ViewComponent == 'Welcome'"></Welcome>
              <FearList v-else-if="ViewComponent == 'FearList'"></FearList>
              <YourBenefits v-else-if="ViewComponent == 'YourBenefits'"></YourBenefits>
              <CostOfInaction v-else-if="ViewComponent == 'CostOfInaction'"></CostOfInaction>
              <Conclusion v-else-if="ViewComponent == 'Conclusion'"></Conclusion>
              <LegalInformation v-else-if="ViewComponent == 'LegalInformation'"></LegalInformation>
              <template v-else>
                <b-alert show variant="danger">
                  <h1>404</h1>
                  <p>Sajnos ez az oldal nem létezik :(</p>
                </b-alert>
              </template>

            </b-col>
        </b-row>
    </b-container>

    <b-navbar class="navbar footer" toggleable="md">
      <b-navbar-nav>
        <VLink href="/terms-and-conditions">Terms And Conditions</VLink>
        <VLink href="/privacy-policy">Privacy Policy</VLink>
        <VLink href="/cookie-policy">Cookie Policy</VLink>
      </b-navbar-nav>
    </b-navbar>
    </template>

  </div>

</template>

<script>
import VLink from './components/VLink.vue'
import routes from './routes'

import Welcome from './components/Welcome.vue'
import FearList from './components/FearList.vue'
import YourBenefits from './components/YourBenefits.vue'
import CostOfInaction from './components/CostOfInaction.vue'
import Conclusion from './components/Conclusion.vue'
import LegalInformation from './components/LegalInformation.vue'

export default {
  name: 'app',
  sockets:{
    connect () {
      console.info('socket connected')
    },
    disconnect () {
      console.error('socket disconnected')
      this.$store.commit('disconnected')
    }
  },
  computed: {
    isConnected () {
      return this.$store.state.connected
    },
    connectedClients () {
      return this.$store.state.connectedClients
    },
    currentRoute () {
      return this.$root.currentRoute
    },
    ViewComponent () {
      return routes[this.currentRoute];
    }
  },
  components: {
    VLink: VLink,
    Welcome: Welcome,
    FearList: FearList,
    YourBenefits: YourBenefits,
    CostOfInaction: CostOfInaction,
    Conclusion: Conclusion,
    LegalInformation: LegalInformation
  }
}
</script>

<style lang="scss">
.top-margin {
  margin-top: 30px;
}
html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 60px; /* Margin bottom by footer height */
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px; /* Set the fixed height of the footer here */
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}
</style>