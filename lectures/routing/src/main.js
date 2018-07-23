import Vue from 'vue';
import App from './App.vue';
import MyVueRouter from 'vue-router';
import { routes } from './routes';

Vue.config.productionTip = false

Vue.use(MyVueRouter);
const router = new MyVueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {

    if(savedPosition) {
      return savedPosition;
    }

    if(to.hash) {
      return {
        selector: to.hash
      };
    }
    // return  {
    //   x: 0, y: 700
    // }
  }
});

router.beforeEach((to, from, next) => {
  console.log('global before each');
  next(); // control where to go next
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
