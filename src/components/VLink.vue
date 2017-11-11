<template>
  <b-nav-item
    v-bind:href="href"
    v-bind:active="isActive"
    v-on:click="go"
  >
    <slot></slot>
  </b-nav-item>
</template>

<script>
  import routes from '../routes'
  export default {
    props: {
      href: {
        type:String,
        required: true 
      }
    },
    computed: {
      isActive () {
        return this.href === this.$root.currentRoute
      }
    },
    methods: {
      go (event) {
        event.preventDefault()
        this.$root.currentRoute = this.href
        window.history.pushState(
          null,
          routes[this.href],
          this.href
        )
      }
    }
  }
</script>