<template>
  <div>
    <p>Counter is: {{ doubleCounterR }}</p>
    <p>Number of clicks: {{ stringCounterR }}</p>
    <!-- <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks: {{ stringCounter }}</p> -->
    <!-- <p>Counter is: {{ counter }}</p>
    <p>Number of clicks: {{ clicks }}</p> -->
  </div>
</template>

<script>

  import { mapGetters } from 'vuex';
  import * as types from '../store/types';

  export default {
      //props: ['counter']
      computed: {
        // counter() {
        //   //return this.$store.state.counter * 2;
        //   return this.$store.getters.doubleCounter;
        // },
        // clicks() {
        //   return this.$store.getters.stringCounter;
        // }
        // ...mapGetters([
        //   'doubleCounter',
        //   'stringCounter'
        // ]),
        // ...mapGetters({
        //   doubleCounterR: 'doubleCounter',
        //   stringCounterR: 'stringCounter'
        // })
        ...mapGetters({
          doubleCounterR: types.DOUBLE_COUNTER,
          stringCounterR: types.STRING_COUNTER
        })

      }
  }
</script>