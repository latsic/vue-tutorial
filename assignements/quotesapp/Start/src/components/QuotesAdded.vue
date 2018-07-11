<template>
  <div>

    <h4>Quotes Added</h4>
    <div
      class="progress"
      style="height: 3rem">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{width:progress}"
        >
        
      </div>
      <p class="justify-content-center d-flex position-absolute w-100">{{count}} / {{ max }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  },
  computed: {
    progress() {
      console.log('this.count/this.max', this.count/this.max + '%');
      
      return 100 * this.count/this.max + '%';
    }
  }
}
</script>

<style scoped>
  h4 {
    text-align: center;
    color: red;
    margin-top: 1rem;
  }
  div {
    color: black;
    font-weight: bold;
    font-size: 2rem;
  }
</style>
