<template>
  <div class="alert alert-warning" role="alert">
  <h4 class="alert-heading">Quote Limit reached!</h4>
  <p>You have reached the maximum number of {{ limit }} quotes.</p>
  <p>To add new quotes, delete one ore more existing quotes by clicking on them.</p>
</div>
</template>

<script>
export default {
  props: {
    limit: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
