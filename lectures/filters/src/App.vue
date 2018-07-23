<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text }}</p>
                <p>{{ text | toUpperCase }}</p>
                <p>{{ text | toUpperCase | toLowerCase }}</p>
                <hr>
                <button @click="fruits.push('Berries')">Add New Item</button>
                <button @click="fruits2.push('Berries')">2 Add New Item</button>
                <input type="text" v-model="filterText">
                <ul>
                  <li v-for="fruit of filteredFruits" :key="fruit">
                    {{ fruit }}
                  </li>
                </ul>
                <hr>
            </div>
        </div>
        <app-list>

        </app-list>
    </div>
</template>

<script>

import List from './components/List';
import { fruitMixin } from './fruitMixin';

export default {
  
  mixins: [fruitMixin],
  data: () => {
    return ({
      text: 'Hello There',
      // fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      // filterText: ''
    })
  },
  filters: {
    toUpperCase(value){
      return value.toUpperCase();
    }
  },
  // computed: {
  //   filteredFruits() {
  //     return this.fruits.filter(fruit => fruit.startsWith(this.filterText))
  //   }
  // },
  components: {
    appList: List
  }
}
</script>

<style scoped>


</style>
