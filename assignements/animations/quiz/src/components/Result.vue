<template>
<div
    class="card"
    :class="{
      'bg-success': chosenAnswer === correctAnswer,
      'bg-danger': chosenAnswer !== correctAnswer}"
    @click="clicked"
    >
    <div class="card-header d-flex justify-content-center">
      {{ question }}
    </div>

    <div
      class="row"
      >
      <div
        class="col-12 d-flex justify-content-center"
        >
        Your Answer: {{ chosenAnswer }}
      </div>
      <div
        class="col-12 d-flex justify-content-center"
        >
        Correct Answer: {{ correctAnswer }}
      </div>
    </div>
  </div>      
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true
    },
    chosenAnswer: {
      type: Number,
      required: true
    },
    correctAnswer: {
      type: Number,
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

</style>
