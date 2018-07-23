<template>
  <div>
    <h3>Some User Details with ID {{ id }}</h3>
    <h3>Some User Details with ID via $route {{ $route.params.id }}</h3>
    <hr>
    <router-link tag="button" class="btn button-info"
      :to="link"
      >
      Edit
    </router-link>
    <!-- <router-link tag="button" class="btn button-info"
      :to="'/user/subroutes/'+id+'/edit'"
      >
      Edit
    </router-link> -->
  </div>
</template>

<script>
export default {
  created(){
    console.log('UserDetail created');    
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      link: {
        name: 'userEdit',
        param: { id: this.id },
        query: { locale: 'en', q: 100 },
        hash: '#data'
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    // Route Guard
    // This Vue instance can not be accessed
    // The instance has not fully been initialized
    console.log('[UserDetail] beforeRouteEnter');
    
    if(true) { // for example if user is authenticated
      next();
    }
    else {
      next(false);
    }
    

    // if access is needed to this instance:
    // use callback
    // next(vm => {...})
  }
}
</script>

<style scoped>

</style>
