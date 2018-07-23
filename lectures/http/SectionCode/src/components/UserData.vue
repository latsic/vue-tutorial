<template>
  <div>
    <div class="row">
      <div class="col-xs-6">
        <div class="cell title-cell">USERNAME</div> 
      </div>
      <div class="col-xs-6 title-col">
        <div class="cell title-cell">EMAIL</div>
      </div>
    </div>
    <div
      class="row onerow" 
      v-for="user of userData"
      :key="user.username + user.email"
      @click="() => deleteUser(user.username + user.email)"
      >
      <div class="col-xs-6">
          <div class="cell">{{ user.username }}</div>
      </div>
      <div class="col-xs-6">
        <div class="cell">{{ user.email }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userData: {
      type: Array,
      required: true
    },
    deleteUser: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
  .onerow {
    border: 1px solid red;
  }
  .title-cell {
    border: 1px solid green;
  }
  .cell {
    margin: 0.5rem;
    border: 1px solid black;
    text-align: center;
  }
</style>
