<template>
  <div>
    <button class="btn btn-primary" @click="increment(10)">Increment</button>
    <button class="btn btn-primary" @click="decrement(5)">Decrement</button>
  </div>
</template>

<script>

  import { mapMutations } from 'vuex';

  export default {
    methods: {
      // increment() {
      //   //this.$emit('updated', 1);
      //   //this.$store.state.counter++;
      //   this.$store.commit('increment');
      // },
      // decrement() {
      //   //this.$emit('updated', -1);
      //   //this.$store.state.counter--;
      //   this.$store.commit('decrement');
      // }
      ...mapMutations([
        'increment',
        'decrement'
      ])
    }
  }
</script>