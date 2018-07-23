<template>
  <div>
    <h3>Edit the User</h3>
    <p>Local: {{ $route.query.local }}</p>
    <p>Q: {{ $route.query.q }}</p>
    <hr>
    <button
      class="btn btn-primary"
      @click="confirmed = true"
      >
      Confirm
    </button>
    <hr>
    <div :style="{height: '700px', backgroundColor: 'red', width: '300px'}"></div>
    <p id="data">Some extra data</p>
  </div>
</template>
<script>
export default {
  data(){
    return {
      confirmed: false
    };
  },
  beforeRouteLeave(to, from, next) {
    // Leave Guard
    if(this.confirmed) {
      next();
    }
    else {
      if(confirm('Are you sure')) {
        next();
      }
      else {
        next(false);
      }
    }
    
  }
}
</script>

<style scoped>

</style>
