<template>
  <div>
    <button class="btn btn-primary" @click="asyncIncrementDispatch({by: 50, duration: 500})">Increment</button>
    <button class="btn btn-primary" @click="asyncDecrement({by: 20, duration: 1500})">Decrement</button>
  </div>
</template>

<script>

  import { mapMutations } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    methods: {
      // increment() {
      //   this.$store.commit('increment');
      // },
      // decrement() {
      //   this.$store.commit('decrement');
      // }
      // ...mapMutations([
      //   'increment',
      //   'decrement'
      // ])
      ...mapActions([
        'asyncIncrement',
        'asyncDecrement'
      ]),
      asyncIncrementDispatch(){
        this.$store.dispatch('asyncIncrement', {by: 50, duration: 500});
      }
    }
  }
</script>