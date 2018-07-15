<template>
  <div class=""
    @click="clicked"
    >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    clicked: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
  div {
    font-family: Arizonia;
    font-size: 1.5rem;
    border: 1.8px solid #888;
    text-align: center;
    word-wrap: break-word;
    padding: 1rem;
  }
  div:hover {
    border: 1.8px solid #911;
  }
</style>
