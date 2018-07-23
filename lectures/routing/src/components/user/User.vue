<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <button
      class="btn btn-primary"
      @click="navigateToHome"
      >
      Go To Home
    </button>
    <hr>
    <p>Loaded ID: {{ $route.params.id }}</p>
    <p>Loaded ID: {{ id }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id: this.$route.params.id
    };
  },
  watch: {
    '$route'(to, from) {
      this.id = to.params.id;
    }
  },
  methods: {
    navigateToHome() {
      //this.$router.push('/');
      this.$router.push({
        name: 'home'
      });
    }
  },
  updated(){
    console.log('user updated');  
  }
}
</script>

<style scoped>

</style>
