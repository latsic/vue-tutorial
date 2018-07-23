import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

// all requests will now use the root url for every request
//Vue.http.options.root = 'https://react-burger-builder-acce2.firebaseio.com/vuedata.json';

Vue.http.interceptors.push((request, next) => {
  console.log('intercepted request');
  next(response => {
    console.log('intercepting response');
  });
})

new Vue({
  el: '#app',
  render: h => h(App)
})


//https://react-burger-builder-acce2.firebaseio.com/