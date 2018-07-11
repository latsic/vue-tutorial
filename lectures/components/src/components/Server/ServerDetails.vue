<template>
  <div class="col-xs-12 col-sm-6">
      <p
        v-if="!server"
        >
        Please select a server
      </p>
      <p
        v-else
        >
        Server #{{ server.id }} selected, Status: {{ server.status }}

        <button
          v-if="server.status == 'Critical'"
          @click="resetStatus"
          >
          Change to Normal
        </button>
        <button
          v-else
          @click="switchStatus"
          >
          Switch Server State
        </button>
      </p>
  </div>
</template>

<script>
import { serverBus } from '../../main';
export default {
  
  data: () => ({
    server: null
  }),
  created() {
    serverBus.$on('serverSelected', (server) => {
      this.server = server;
    });
  },
  methods: {
    resetStatus() {
      this.server.status = 'Normal';
    },
    switchStatus() {
      this.server.status === 'Critical'
        ? this.server.status = 'Normal'
        : this.server.status = 'Critical';
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>

