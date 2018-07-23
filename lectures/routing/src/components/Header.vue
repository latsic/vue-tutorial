<template>
  <ul class="nav nav-pills">
   
      <router-link
        to="/"
        tag="li"
        role="presentation"
        active-class="active"
        exact
        >
        <a>
          Home
        </a>
      </router-link>
    
    
      <router-link
        to="/user/1"
        tag="li"
        role="presentation"
        active-class="active"
        >
        <a>
          User 1
        </a>
      </router-link>
      <router-link
        to="/user/2"
        tag="li"
        role="presentation"
        active-class="active"
        >
        <a>
          User 2
        </a>
      </router-link>
      <router-link
        to="/user/props/7"
        tag="li"
        role="presentation"
        active-class="active"
        >
        <a>
          User Props 7
        </a>
      </router-link>

      <router-link
        to="/user/subroutes"
        tag="li"
        role="presentation"
        active-class="active"
        >
        <a>
          User SubRoutes
        </a>
      </router-link>



    
    <!-- <li role="presentation">
      <router-link
        to="/"
        >
        Home
      </router-link>
    </li>
    <li role="presentation">
      <router-link
        to="/user"
        >
        User
      </router-link>
    </li> -->
  </ul>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
