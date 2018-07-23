<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr>
        <app-counter></app-counter>
        <hr>
        <app-another-counter></app-another-counter>
        <hr>
        <app-counter-interval></app-counter-interval>
        <hr>
        <hr>
        <input type="text" :value="value" @input="updateValue">
        <p>{{ value }}</p>
        <input type="text" v-model="value1">
        <p>{{ value1 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
    import Counter from './components/Counter';
    import Result from './components/Result';
    import AnotherResult from './components/AnotherResult';
    import AnotherCounter from './components/AnotherCounter';
    import CounterInterval from './components/CounterInterval';

    export default {
      // data() {
      //   return {
      //     counter: 0
      //   }
      // },
      computed: {
        value() {
          return this.$store.getters.value;
        },
        value1: {
          get() {
            return this.$store.getters.value;
          },
          set(value) {
            this.$store.dispatch('updateValue', value);
          }
        }
      },
      methods: {
        updateValue(event) {
          this.$store.dispatch('updateValue', event.target.value)
        }
      },
      components: {
        appCounter: Counter,
        appResult: Result,
        appAnotherResult: AnotherResult,
        appAnotherCounter: AnotherCounter,
        appCounterInterval: CounterInterval
      }
    }
</script>
