<template>
  <li
    class="list-group-item"
    @click="serverSelected"
    >
    Server #{{ server.id }}, Status: {{ server.status }}
  </li>
</template>

<script>

  import { serverBus } from '../../main'

  export default {

    props: {
      server: {
        type: Object,
        required: true
      }
    },
    methods: {
      serverSelected() {
        serverBus.$emit('serverSelected', this.server);
      }
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
    border: 1px solid black;
    margin-top: 5px;
    cursor: pointer;
  }
</style>
