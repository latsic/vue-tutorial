<template>
  <p>Counter is: {{ counter }}</p>
</template>

<script>

  import * as types from '../store/types';

  export default {
      //props: ['counter']
      computed: {
        counter() {
          //return this.$store.state.counter * 2;
          //return this.$store.getters.doubleCounter;
          return this.$store.getters[types.DOUBLE_COUNTER];
        }
      }
  }
</script>