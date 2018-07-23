<template>
  <div>
  <div class="card">
    <div class="card-header d-flex justify-content-center">
      {{ question }}
    </div>

    <div
      v-for="row of answers.length / 2"
      :key="row - 1"
      class="row"
      >
      <div
        v-for="col of [0, 1]"
        :key="col"
        class="col-6 d-flex justify-content-center"
        >
        
        <transition
          name="fade"
          appear
          @before-enter="beforeEnter"
          @enter="enter"
          :css="false"
          >
          <button
            class="btn btn-primary answer"
            @click="result(question, answers[(row - 1) * 2 + col], answer)"
            :data-delay="(row - 1) * 2 + col"
            >
            {{ answers[(row - 1) * 2 + col] }}
          </button>
        </transition>

        
      </div>
    </div>
   
  </div> 
   <!-- <transition
      name="fade"
      appear
      >
      <div class="testDiv"></div>
    </transition> -->
  </div> 
  
</template>

<script>
export default {
  
  props: {
    result: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    answers: [],
    answer: '',
    answerCount: 6,
    question: ''
  }),
  methods: {
    buttonClicked() {

    },
    getNaturalNumber(min, max) {
      return min + Math.floor(Math.random() * (max - min));
    },
    getNewOperand() {
      return this.getNaturalNumber(-100, 100);
    },
    getOperation() {
      const val = Math.floor(Math.random() * 5);
      switch(val) {
        case 0: return '+';
        case 1: return '-';
        case 2: return '*';
        //case 3: return '/';
        case 4: return '%';
        default: return '+';
      }
    },
    setData() {
      const operand1 = this.getNewOperand();
      const operand2 = this.getNewOperand();
      const operation = this.getOperation();

      this.question = operand1 + ' ' + operation + ' ' + operand2;
      this.answer = Math.round(eval(this.question));

      const answerPos = this.getNaturalNumber(0, this.answerCount);

      for(let i = 0; i < this.answerCount; ++i) {
        if(operation === '*') {
          this.answers[i] = this.getNaturalNumber(-10000, 10000);
        }
        else {
          this.answers[i] = this.getNaturalNumber(-100, 100);
        }
      }
      this.answers[answerPos] = this.answer;
    },
    beforeEnter(el) {
      el.style.opacity=0;
      
    },
    enter(el, done) {
      
      let currentOpacity = 0;

      setTimeout(() => {
        
        let interval = setInterval(() => {
          
          currentOpacity += 0.05;
          el.style.opacity = currentOpacity;

          //el.style.opacity = el.style.opacity + '0.05';
          console.log('el.style.opacity', el.style.opacity)
          if(currentOpacity >= 1) {
            clearInterval(interval);
            done();
          }
        }, 10);
      }, el.dataset.delay * 200);
    }
  },
  created() {
    this.setData();
  },
  beforeUpdate() {
    //this.setData();
  }

}
</script>

<style scoped>


.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  opacity: 1;
  transition: opacity 3s;
}

.testDiv {
  background-color: red;
  height: 200px;
  width: 200px;
}



.answer {
  margin: 0.5rem;
}

</style>
