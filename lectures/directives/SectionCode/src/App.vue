<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some strong Text</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight="'red'">Color this</p>
                <p v-highlight:background="'red'">Color this</p>
                <p v-highlight:background.delayed="'red'">Color this</p>
                <hr>
                <p v-local-highlight="'red'">Color this</p>
                <p v-local-highlight:background="'red'">Color this</p>
                <p v-local-highlight:background.delayed="'red'">Color this</p>
                <p v-local-highlight:background.delayed.blink="'red'">Color this</p>
                <p v-local-highlight.delayed.blink="'red'">Color this</p>
                <hr>
                <p v-local-highlight2:background.blink="{color: 'orange', delay: 2000, interval: 200}">Color This</p>

            </div>
        </div>
    </div>
</template>

<script>

    switchValue: (el, arg, val1, val2) => {
        
    };

    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {

                    let delay = 0;
                    if(binding.modifiers['delayed']) {
                        delay = 2000;
                    }
                    if(binding.modifiers['blink']) {
                        
                        let elemToChange = {val: null};
                        let elemName = null;
                        if(binding.arg == 'background') {
                            elemName = 'backgroundColor';
                        }
                        else {
                            elemName = 'color';
                        }
                
                        const stdColor = el.style[elemName];
                        const secondColor = binding.value;
                        let currentColor = stdColor;

                        setTimeout(() => {
                            
                            el.style[elemName] = secondColor;
                            currentColor = el.style[elemName];

                            setInterval(() => {
                                el.style[elemName] = currentColor == stdColor
                                    ? secondColor
                                    : stdColor;
                                currentColor = el.style[elemName];
                            }, 500);
                        }, delay);
                       
                    }
                    else{                    
                        setTimeout(() => {
                            if(binding.arg == 'background') {
                                el.style.backgroundColor = binding.value;
                            }
                            else {
                                el.style.color = binding.value;
                            }
                        }, delay);
                    }
                }
            },
            'local-highlight2': {
                bind(el, binding, vnode) {

                    let delay = 0;
                    if(binding.modifiers['delayed']) {
                        delay = binding.value.delay;
                    }
                    if(binding.modifiers['blink']) {
                        
                        let elemToChange = {val: null};
                        let elemName = null;
                        if(binding.arg == 'background') {
                            elemName = 'backgroundColor';
                        }
                        else {
                            elemName = 'color';
                        }
                
                        const stdColor = el.style[elemName];
                        const secondColor = binding.value.color;
                        let currentColor = stdColor;

                        setTimeout(() => {
                            
                            el.style[elemName] = secondColor;
                            currentColor = el.style[elemName];

                            setInterval(() => {
                                el.style[elemName] = currentColor == stdColor
                                    ? secondColor
                                    : stdColor;
                                currentColor = el.style[elemName];
                            }, binding.value.interval);
                        }, delay);
                       
                    }
                    else{                    
                        setTimeout(() => {
                            if(binding.arg == 'background') {
                                el.style.backgroundColor = binding.value;
                            }
                            else {
                                el.style.color = binding.value;
                            }
                        }, delay);
                    }
                }
            }
        }
    }
</script>

<style>

</style>
