<template>
  <b-container>
      <b-row>
        <b-col>
          <h1>Third page: Cost of Inaction</h1>
          <blockquote class="blockquote">
            <p class="mb-0">
              Page three. <b>This might be the most important</b>, so don't skip it: 
              "The Cost of Inaction." Humans are very good at considering what might 
              go wrong if we try something new, say, ask for a raise. What we don't
               often consider is the atrocious cost of the status quo -- not changing 
               anything. So you should ask yourself, if I avoid this action or decision 
               and actions and decisions like it, what might my life look like in, say, 
               six months, 12 months, three years? Any further out, it starts to seem 
               intangible. And really get detailed -- again, emotionally, 
               financially, physically, whatever.
              </p>
            <footer class="blockquote-footer">Tim Ferris</footer>
          </blockquote>
        </b-col>
      </b-row>

      <b-row>

        <b-col>
          <b-alert v-show="!hasFears()" show variant="warning">
            You did not fill out your fears on the first page yet. You should do that first.
          </b-alert>
          <b-alert v-show="!hasBenefits()" show variant="warning">
            You did not write down your possible benefits on the second page yet. You should do that first.
          </b-alert>

          <div class="form-group">
            <label for="costOfInaction">Write down the cost of your inaction here.</label>
            <textarea v-model="cost" class="form-control" id="costOfInaction" rows="10"></textarea>
          </div>
        </b-col>

      </b-row>

    </b-container>
</template>

<script>
export default {
  computed: {
    cost: {
      get () { 
        return this.$store.state.cost; 
      },
      set (newCostValue) { 
        this.$store.commit("setCost", newCostValue );
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
