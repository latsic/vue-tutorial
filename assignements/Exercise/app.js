new Vue({
  el: '#exercise',
  data: {
    array: ['Max', 'Anna', 'Chris', 'Manu'],
    myObject: {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkiens',
      books: '3'
    },
    testData: {
      name: 'TESTOBJECT', 
      id: 10,
      data: [1.67, 1.33, 0.98, 2.21],
      data2: ['aha1', 'aha2', 'aha3']
    },
    show: true
  },
  methods: {
    showAttributes() {
      console.log("r", document.getElementById("h11").attributes);

      for(let key in document.getElementById("h11").attributes) {
        console.log('attr', document.getElementById("h11").attributes[key]);
        
      }

    }
  }
  
});
