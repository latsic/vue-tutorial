

new Vue({
  el: '#exercise',
  data: {
    effectClass: 'shrink',
    divClassName: '',
    divClassName4: '',
    useClass: 'false',
    styleName5: '',
    width: 0,
    effectClasses: {
      highlight: false,
      shrink: true
    }
  },
  methods: {
    startEffect() {
      setInterval(() => {
        //console.log('setinterval', this.effectClass);
        //this.effectClass = this.effectClass == 'shrink' ? 'highlight' : 'shrink';
        this.effectClasses.highlight = !this.effectClasses.highlight;
        this.effectClasses.shrink = !this.effectClasses.shrink;
      }, 1000)
    },
    startProgress() {
      console.log('this.width', this.width);
      
      if(this.width < 300 && this.width > 0) return;
      this.width = 0;

      let intervalId = setInterval(() => {
        this.width += 3;
        console.log('ksks', this.width);
        if(this.width >= 300) {
         
          console.log('width', this.width);
          
          clearInterval(intervalId);
          intervalId = null;
        }
      }, 30);
    }
  },
  computed: {
   widthPx() {
     return this.width + 'px';
   }
  }
});
