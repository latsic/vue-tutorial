import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    //counter: 0,
    value: 0,
  },
  getters,
  // getters: {
  //   // doubleCounter: state => {
  //   //   return state.counter * 2;
  //   // },
  //   // stringCounter: state => {
  //   //   return state.counter + ' clicks';
  //   // },
  //   value: state => {
  //     return state.value;
  //   }
  // },
  mutations,
  // mutations: {
  //   // increment: (state, payload) => {
  //   //   state.counter += payload;
  //   // },
  //   // decrement: (state, payload) => {
  //   //   state.counter -= payload;
  //   // },
  //   updateValue: (state, payload) => {
  //     state.value = payload;
  //   }
  // },
  // actions: {
  //   // increment: (context, payload) => {
  //   //   context.commit('increment', payload)
  //   // },
  //   // decrement: ({commit}, payload) => {
  //   //   commit('decrement', payload)
  //   // },
  //   // asyncIncrement: (context, payload) => {
  //   //   setTimeout(() => {
  //   //     context.commit('increment', payload.by);
  //   //   }, payload.duration);
  //   // },
  //   // asyncDecrement: (context, payload) => {
  //   //   setTimeout(() => {
  //   //     context.commit('decrement', payload.by);
  //   //   }, payload.duration);
  //   // },
  //   // incrementI: (context, payload) => {
  //   //   let counter = 0;
  //   //   const intervalId = setInterval(() => {
  //   //     if(counter < payload.rounds) {
  //   //       context.commit('increment', payload.by);
  //   //       ++counter;
  //   //     }
  //   //     else {
  //   //       clearInterval(intervalId);
  //   //     }
  //   //   }, payload.duration)
  //   // },
  //   // decrementI: (context, payload) => {
  //   //   let counter = 0;
  //   //   const intervalId = setInterval(() => {
  //   //     if(counter < payload.rounds) {
  //   //       context.commit('decrement', payload.by);
  //   //       ++counter;
  //   //     }
  //   //     else {
  //   //       clearInterval(intervalId);
  //   //     }
  //   //   }, payload.duration)
  //   // },
  //   updateValue: (context, payload) => {
  //     context.commit('updateValue', payload);
  //   }
  // },
  actions,
  modules: {
    counter
  }
});

