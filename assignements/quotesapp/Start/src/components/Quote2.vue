<template>

  <!-- <div class="card bg-info align-items-center">
  <div class="card-body">
    {{ infoText }}
  </div> -->

  <div
    class="col col-sm-12 col-md-6 col-lg-4 col-xl-2 v-spacing"
    @click="clicked"
    >
    <div class="card bg-success align-items-center">
      <div class="card-body">
        <slot></slot>
      </div>
    </div> 
  </div>  
</template>

<script>
export default {
  props: {
    clicked: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
    .v-spacing {
        margin-bottom: 0.5rem;
    }
    div {
      font-family: Arizonia;
      font-size: 2.5rem;
      
      word-break:break-all
    }
</style>