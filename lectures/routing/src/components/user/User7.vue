<template>
  <div>
    <h1>The User Page 7</h1>
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
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push('/')
    }
  },
  created(){
    console.log('this.id', this.id);
  },
  updated(){
    console.log('user7 updated');
  }
}
</script>

<style scoped>

</style>
