<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <router-view name="header-top"></router-view>
        <h1>Routing</h1>
        <hr>
        <app-header>        
        </app-header>
        <hr>
        <router-view name="header-top"></router-view>
        <hr>
        <transition
          
          mode="out-in"
          enter-active-class="animated slideInRight"
          leave-active-class="animated slideOutLeft"
          >
          <router-view id="aha">          
          </router-view>
        </transition>
        <hr>
        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import Header from './components/Header';

export default {
  components: {
    appHeader: Header
  }
}
</script>

<style scoped>

  #aha {
    animation-duration: 0.3s;
  }

  .slide-leave-active {
    transition: opacity 1s ease;
    opacity: 0;
    animation: slide-out 1s ease-out forwards;
  }

  .slide-leave {
    opacity: 1;
    transform: translateX(0);
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 3s ease-out forwards;
  }

  .empty-enter-active {
    animation: empty 0.3s;
  }

  .empty-leave-active {
    animation: empty 5s;
  }

  @keyframes empty {
    0% {
     
    }
    100% {
     
    }
  }
  

  @keyframes slide-out {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-30px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

</style>
