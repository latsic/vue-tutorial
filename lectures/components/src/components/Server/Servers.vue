<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server
        v-for="server of servers"
        :server="server"
        :key="server.id"
        >
      </app-server>
    </ul>
  </div>  
</template>

<script>
import Server from './Server';
export default {
  components: {
    'app-server': Server
  },
  data: () => ({
    servers: [
      { id: 1, status: 'Normal'}, 
      { id: 2, status: 'Critical'}, 
      { id: 3, status: 'Critical'}, 
      { id: 4, status: 'Normal'}, 
      { id: 5, status: 'Critical'}, 
    ]
  }),
  methods: {
    setServerStatus(serverId, status) {
      for(let server of this.servers) {
        if(server.id === serverId) {
          server.status = status;
        }
      }
    },
    serverSelected(serverId, serverStatus) {
      this.$emit('aServerWasSelected', serverId, serverStatus);
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
