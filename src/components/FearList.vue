<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <h1>First page: Fear list</h1>
          <blockquote class="blockquote">
            <p class="mb-0">
              The first page is right here. "What if I ...?" This is whatever you fear, 
              whatever is causing you anxiety, whatever you're putting off. 
              It could be asking someone out, ending a relationship, asking for a 
              promotion, quitting a job, starting a company. It could be anything. 
              For me, it was taking my first vacation in four years and stepping away 
              from my business for a month to go to London, where I could stay in a friend's 
              room for free, to either remove myself as a bottleneck in the business or shut it down.</p>
            <footer class="blockquote-footer">Tim Ferris</footer>
          </blockquote>
        </b-col>
      </b-row>

      <b-row>

        <b-col>
          <transition name="fade">
            <b-alert v-show="!hasEnoughFears" show variant="info">
              Ideally, you should have arond 10 to 20 fears.
            </b-alert>
          </transition>

          <p class="text-center">
            <a href="#" role="button" class="btn btn-primary btn-lg" v-on:click.prevent="addFear">Add fear</a>
          </p>

          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Define</th>
                <th scope="col">Prevent</th>
                <th scope="col">Repair</th>
                <th scope="col"></th>
              </tr>
            </thead>
          
            <transition-group name="list" tag="tbody">
              <FearItem
                v-for="(fear, key, index) in fears"
                v-bind:initalFear="fear"
                v-bind:index="index"
                v-bind:key="key"
                v-bind:fearKey="key"
                v-on:removeFear="removeFear(key)"></FearItem>
            </transition-group>
            
          </table>
          
        </b-col>

      </b-row>

    </b-container>
  </div>
</template>

<script>
import FearItem from './FearItem.vue'

export default {
  computed: {
    fears: function () {
      return this.$store.state.fears;
    },
    hasEnoughFears () {
      return this.$store.getters.hasEnoughFears;
    }
  },
  methods: {
    addFear () {
      this.$store.commit('addFear')
      this.$socket.emit('set fears', this.fears);
    },
    removeFear: function(key) {
      this.$store.commit('removeFear', key)
      this.$socket.emit('set fears', this.fears);
    }
  },
  components: {
    FearItem: FearItem
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 0.3s;
}
.list-enter  {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
