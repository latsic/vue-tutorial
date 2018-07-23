<template>
  <div>
    <button class="btn btn-primary" @click="incrementI({by: 7, rounds: 10, duration: 200})">IncrementI</button>
    <button class="btn btn-primary" @click="decrementI({by: 7, rounds: 10, duration: 200})">DecrementI</button>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'incrementI',
      'decrementI'
    ])
  }
}
</script>

<style scoped>

</style>
