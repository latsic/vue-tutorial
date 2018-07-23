<template>
    
  <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Filters & Mixins</h1>
          <input type="text" v-model="filterText">
          <ul>
            <li v-for="fruit of filteredFruits" :key="fruit">
              {{ fruit }}
            </li>
          </ul>
      </div>
  </div>

</template>

<script>

import { fruitMixin } from './../fruitMixin';

export default {

  mixins: [fruitMixin],
  created() {
    console.log('List.vue Created');
    
  }

  // data: () => {
  //   return ({
  //     fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
  //     filterText: ''
  //   })
  // },
  // computed: {
  //   filteredFruits() {
  //     return this.fruits.filter(fruit => fruit.startsWith(this.filterText))
  //   }
  // }
}
</script>

<style scoped>


</style>
