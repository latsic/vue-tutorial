
import { fruits2 } from './sharedData';


export const fruitMixin = {
  data: () => {
    return ({
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      fruits2: fruits2,
      filterText: ''
    });
  },
  computed: {
    // filteredFruits() {
    //   return this.fruits.filter(fruit => fruit.toLowerCase().startsWith(this.filterText.toLowerCase()));
    // },
    filteredFruits() {
      return this.fruits2.filter(fruit => fruit.toLowerCase().startsWith(this.filterText.toLowerCase()));
    }
  },
  created: function() {
    console.log('FruitMixin Created');
  }  
};