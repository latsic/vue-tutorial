<template>
  <div>
    
    <div class="title-container">
      <div class="card">
        <div class="card-header d-flex justify-content-center">
          Math Quiz
        </div>
      </div>
    </div>


    <div class="question-container">
      <transition
        mode="out-in"
        name="flip"
        >
        <app-question
          v-if="showQuestion"
          :result="answer"
          >
        </app-question>
        <app-Result
          v-else
          :question="question"
          :chosenAnswer="givenAnswer"
          :correctAnswer="correctAnswer"
          :clicked="() => showQuestion = true"
          >
        </app-Result>
      </transition>
    </div>
  </div>
</template>

<script>

import Question from './components/Question';
import Result from './components/Result';

export default {
  components: {
    appQuestion: Question,
    appResult: Result
  },
  data: () => ({
    question: '',
    givenAnswer: 0,
    correctAnswer: 0,
    showQuestion: true
  }),
  methods: {
    answer(question, givenAnswer, correctAnswer) {
      this.question = question;
      this.givenAnswer = givenAnswer;
      this.correctAnswer = correctAnswer;
      this.showQuestion = false;
    }
  }
}
</script>

<style scoped>
  .title-container {
    margin: 40px 40px;
    /* border: 1px solid blue; */
  }
  .question-container {
    margin: 40px 40px;
    /* border: 1px solid blue; */
  }

  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 0.5s;
  }
  .fade-leave {

  }
  .fade-leave-active {
    transition: opacity 0.5s;
    opacity: 0;
  }
  .size-enter{
    width: 0;
  }
  .size-enter-active {
    transition: width 2s;
    width: 100%;
  }
  .size-leave {
    width: 100%;
  }
  .size-leave-active {
    transition: width 2s;
    width: 0;
  }


  .scale1-enter {
    transform: scaleX(-1);
    
    /* opacity: 0; */
  }

  .scale1-enter-active {
    transform: scaleX(1.0);
    transition: all 3s;

    /* transition: opacity 1.5s; */
  }


  .flip-enter {

  }

  .flip-enter-active {
    animation: flip-in 1s ease-out forwards;
  }

  .flip-leave {

  }
  .flip-leave-active {
    animation: flip-out 1s ease-out forwards;
  }

  @keyframes flip-out {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(90deg)
    }
  }

  @keyframes flip-in {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }




  /* .scale1-leave {
    transform: scaleX(1.0);
  } */

  /* .scale1-leave-active {
    transform: scaleX(0.2);
    transition: transform 2s;
  } */


</style>
