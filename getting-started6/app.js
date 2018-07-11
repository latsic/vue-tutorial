
Vue.component('hello5', {
  template:`
    <h1>Hello from 5</h1>
  `
});

let vm1 = new Vue({
  data: {
    title: 'The VueJs Instance',
    showParagraph: false
  },
  methods: {
    show() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log('myButton ref', this.$refs);
      this.$refs.myButton.innerText = 'Text';
    },
    updateTitle(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1');

// setTimeout(() => {
//   vm1.title = 'Changed by Timer';
//   vm1.show();
// }, 3000);

console.log('vm1.$data.title', vm1.$data.title);


let vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance'
  },
  methods: {
    onChange() {
      vm1.title = 'Changed!'
    }
  }
});

let vm3_1 = new Vue({
  template:`
    <h1>Hello!</h1>
  `
});

let vm3_2 = new Vue({
  template:`
    <h1>Hello again!</h1>
  `
});

let vm4 = new Vue({
  el: 'hello4',
  template:`
    <h1>Hello From 4</h1>
  `
})

vm3_1.$mount('#app3_1');
vm3_2.$mount();
document.getElementById('app3_2').appendChild(vm3_2.$el);


let vm6 = new Vue({
  el: '#app6',
  data: {
    title: 'The VuewJs Instance'
  }
});