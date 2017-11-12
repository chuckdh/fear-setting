<template>
  <tr>
    <th scope="row">{{ index + 1 }}</th>
    <td>
      <div class="form-group">
        <input class="form-control" v-model="define" placeholder="Define">
      </div>
    </td>
    <td>
      <div class="form-group">
        <textarea class="form-control" v-model="prevent" placeholder="Prevent" rows="3"></textarea>
      </div>
    </td>
    <td>
      <div class="form-group">
        <textarea class="form-control" v-model="repair" placeholder="Repair" rows="3"></textarea>
      </div>
    </td>
    <td><a href="#" role="button" class="btn btn-danger btn-sm" v-on:click.prevent="$emit('removeFear')">Remove</a></td>
  </tr>
</template>

<script>
export default {
  props: ['initalFear', 'index', 'fearKey'],
  data: function () {
    return { 
      key: this.fearKey,
    }
  },
  computed: {
    fear () {
      return this.initalFear
    },
    define: {
      get () {
        return this.fear.define; 
      },
      set (defineValue) {
        this.$store.commit("updateFear", {
          id: this.key, 
          prop: 'define', 
          value: defineValue
        });
        this.$socket.emit('set fears', this.$store.state.fears);
      }
    },
    prevent: {
      get () { 
        return this.fear.prevent; 
      },
      set (preventValue) { 
        this.$store.commit("updateFear", {
          id: this.key, 
          prop: 'prevent', 
          value: preventValue
        });
        this.$socket.emit('set fears', this.$store.state.fears);
      }
    },
    repair: {
      get () { 
        return this.fear.repair; 
      },
      set (repairValue) { 
        this.$store.commit("updateFear", {
          id: this.key, 
          prop: 'repair', 
          value: repairValue
        });
        this.$socket.emit('set fears', this.$store.state.fears);
      }
    },
  }
}
</script>