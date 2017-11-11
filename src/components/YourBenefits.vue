<template>
  <b-container>
      <b-row>
        <b-col>
          <h1>Second page: Your benefits</h1>
          <blockquote class="blockquote">
            <p class="mb-0">
              The second page is simple: What might be the benefits of an attempt or a 
              partial success? You can see we're playing up the fears and really 
              taking a conservative look at the upside. So if you attempted whatever 
              you're considering, might you build confidence, develop skills, emotionally, 
              financially, otherwise? What might be the benefits of, say, a base hit? 
              Spend 10 to 15 minutes on this.</p>
            <footer class="blockquote-footer">Tim Ferris</footer>
          </blockquote>
        </b-col>
      </b-row>

      <b-row>

        <b-col>
          <b-alert v-show="!hasFears()" show variant="warning">
            You did not fill out your fears on the first page yet. You should do that first.
          </b-alert>
          <b-alert v-show="hasFears() && !hasEnoughFears()" show variant="info">
            You should have arond 10 to 20 fears before you start this section.
          </b-alert>

          <div class="form-group">
            <label for="yourBenefits">Write down your possible benefits here.</label>
            <textarea v-model="benefits" class="form-control" id="yourBenefits" rows="10"></textarea>
          </div>
        </b-col>

      </b-row>

    </b-container>
</template>

<script>
export default {
  computed: {
    benefits: {
      get () { 
        return this.$store.state.benefits; 
      },
      set (newBenefitsValue) { 
        this.$store.commit("setBenefits", newBenefitsValue );
      }
    }
  },
  methods: {
    hasBenefits () {
      return this.$store.getters.hasBenefits;
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
