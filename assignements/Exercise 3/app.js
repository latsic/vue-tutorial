
let timeoutId = null;

new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result() {
                return this.value >= 37 ? 'done' : 'not there yet';
            }
        },
        watch: {
            result(value) {
                if(timeoutId) return;
                timeoutId = setTimeout(() => {
                    this.value = 0;
                    timeoutId = null;
                }, 5000);
            }
        }
    });