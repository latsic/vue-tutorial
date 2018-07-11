new Vue({
  el: '#app',
  data: {
    ingredients: ['meat', 'fruit', 'cookies'],
    persons: [
      {name: 'Max', age: 27, color: 'red'},
      {name: 'Anna', age: 'unknown', color: 'blue'}
    ]
  },
  methods: {
    getRandom() {
      return Math.random();
    },
    changeOne() {
      //this.ingredients[1] = 'chillipowder';
      console.log("ingredients", this.ingredients);
      this.ingredients = this.ingredients.map((ingredient, i) => {
        if(i == 1) {
          return 'chillipowder';
        }
        return ingredient;
      })
    }
  }
});