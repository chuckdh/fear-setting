<template>
  <b-container>
      <b-row>
        <b-col>
          <h1>Conclusion</h1>
          
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <h2>Fears</h2>

          <b-alert v-if="!hasFears" show variant="warning">
            You need to fill out your fears first.
          </b-alert>

          <template v-else>

            <b-alert v-show="!hasEnoughFears" show variant="info">
              Ideally, you should have arond 10 to 20 fears.
            </b-alert>

            <table class="table table-striped table-sm table-responsive">
              
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Define</th>
                  <th scope="col">Prevent</th>
                  <th scope="col">Repair</th>
                </tr>
              </thead>
              
              <transition-group name="list" tag="tbody">
                <tr v-for="(fear, key, index) in fears" :key="key">
                  <th scope="row" class="col-1">{{ index + 1 }}</th>
                  <td>{{fear.define}}</td>
                  <td>{{fear.prevent}}</td>
                  <td>{{fear.repair}}</td>
                </tr>
              </transition-group>
              
            </table>

          </template>
          
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <h2>Possible benefits</h2>

          <transition name="fade">
            <b-alert v-if="!hasBenefits" show variant="warning">
              You did not write down your possible benefits on the second page yet. You should do that first.
            </b-alert>
            <div class="text-justify" v-else>
              {{benefits}}
            </div>
          </transition>

        </b-col>

        <b-col>
          <h2>The Cost of Inaction</h2>

          <transition name="fade">
            <b-alert v-if="!hasCost" show variant="warning">
              You did not write down your cost of inaction page yet. You should do that first.
            </b-alert>
            <div class="text-justify" v-else>
              {{cost}}
            </div>
          </transition>
          
        </b-col>
      </b-row>

    
    </b-container>
</template>

<script>
export default {
  computed: {
    fears: function () {
      return this.$store.state.fears;
    },
    benefits: function () {
      return this.$store.state.benefits;
    },
    cost: function () {
      return this.$store.state.cost;
    },
    hasBenefits () {
      return this.$store.getters.hasBenefits;
    },
    hasCost () {
      return this.$store.getters.hasCost;
    },
    hasFears () {
      return this.$store.getters.hasFears;
    },
    hasEnoughFears () {
      return this.$store.getters.hasEnoughFears;
    }
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
