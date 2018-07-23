
import * as types from '../types'

const state = {
  counter: 0
};

const getters = {
  [types.DOUBLE_COUNTER]: state => {
    return state.counter * 2;
  },
  [types.STRING_COUNTER]: state => {
    return state.counter + ' clicks';
  }
  // doubleCounter: state => {
  //   return state.counter * 2;
  // },
  // stringCounter: state => {
  //   return state.counter + ' clicks';
  // }
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  },
};

const actions = {
  increment: (context, payload) => {
    context.commit('increment', payload)
  },
  decrement: ({commit}, payload) => {
    commit('decrement', payload)
  },
  asyncIncrement: (context, payload) => {
    setTimeout(() => {
      context.commit('increment', payload.by);
    }, payload.duration);
  },
  asyncDecrement: (context, payload) => {
    setTimeout(() => {
      context.commit('decrement', payload.by);
    }, payload.duration);
  },
  incrementI: (context, payload) => {
    let counter = 0;
    const intervalId = setInterval(() => {
      if(counter < payload.rounds) {
        context.commit('increment', payload.by);
        ++counter;
      }
      else {
        clearInterval(intervalId);
      }
    }, payload.duration)
  },
  decrementI: (context, payload) => {
    let counter = 0;
    const intervalId = setInterval(() => {
      if(counter < payload.rounds) {
        context.commit('decrement', payload.by);
        ++counter;
      }
      else {
        clearInterval(intervalId);
      }
    }, payload.duration)
  },
};

export default {
  state,
  getters,
  mutations,
  actions
};
