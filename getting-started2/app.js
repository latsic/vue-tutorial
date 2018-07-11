new Vue({
  el: '#app',
  data: {
    attachRed: false,
    attachGreen: false,
    attachBlue: false,
    color: 'red'
  },
  computed: {
    // divClasses() {
    //   return {
    //     red: this.attachRed,
    //     green: this.attachGreen,
    //     blue: this.attachBlue
    //   };
    // }
  }
});