// new Vue({
// 	el: '#app',
//   data: {
//     title: 'Hello World',
//     link: 'https://google.com',
//     finishedLink: '<a href="https:/google.com">Google</a>'
//   },
//   methods: {
//   	changeTitle: function(event) {
//     	this.title = event.target.value;
//     },
//     sayHello: function() {

//       //this.title = 'Hello'

//       return this.title;
//     }
//   }
// });

new Vue({
  el: '#app',
  data: {
    counter: 1,
    x: 0,
    y: 0,
    name: 'Max',
    counterA: 0,
    counterB: 0
  },
  computed: {
    output: function() {
      console.log('Computed Output');
      
      return this.counterA > 5 ? 'Greater 5' : 'Smaller 5';
    }
  },
  watch: {
    counterA: function(value) {
      setTimeout(() => {
        this.counterA = 0;
      }, 2000);
    }
  },
  methods: {
    increase: function(event, step) {
      this.counter += step;
      console.log('inc');
      
    },
    updateCoordinates: function(event) {
      console.log('event', event);
      
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function(event) {
      alert('Alert!');
    },
    result() {
      console.log('Computed Result');
      
      return this.counterA > 5 ? 'Greater 5' : 'Smaller 5';
    } 
  }
});