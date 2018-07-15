<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 id="11" v-my-on:click="(el) => switchColor1(el, 'red')">Directives Exercise</h1>
                <h1 id="21" v-my-on:click="(el) => switchColor1(el, 'green')">Directives Exercise</h1>
                <h1 id="31" v-my-on:mouseenter="(el) => switchColor1(el, 'blue')">Directives Exercise</h1>
                <!-- Exercise
                Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>

    const colors = [];
    const color2 = 'red';

    // const switchColor1 = el => {

    //     let stdColor = colors.find(item => item.id === el.id);
    //     if(stdColor) stdColor = stdColor.color;
    //     if(!stdColor) {

    //         stdColor = el.style.backgroundColor;
    //         console.log('stdColor1', stdColor);
            
    //         if(stdColor == '') {
    //             stdColor = 'white';
    //             el.style.backgroundColor = 'white';
    //         }
            
    //         colors.push({id: el.id, color: stdColor});
    //     }

    //     console.log('stdColor bgColor', stdColor, el.style.backgroundColor);
        

    //     if(stdColor === String(el.style.backgroundColor)) {
    //         el.style.backgroundColor = color2;
    //         console.log('color2 el.style.backgroundColor', color2);
            
    //     }
    //     else {
    //         el.style.backgroundColor = stdColor;
    //         console.log('stdcolor el.style.backgroundColor', stdColor);
    //     }
    // };


    export default {
        directives: {
            'my-on': {
                bind(el, binding, vnode) {

                    console.log('binding.value', binding.value);
                    

                    el.addEventListener(binding.arg, () => {
                        binding.value(el);
                    });
                },
                unbind(el, binding, vnode) {
                    el.removeEventListener(binding.arg);
                }
            }
        },
        methods: {
            switchColor1: (el, c) => {
                    console.log('switchColor1');
                    
                let stdColor = colors.find(item => item.id === el.id);
                if(stdColor) stdColor = stdColor.color;
                if(!stdColor) {

                    stdColor = el.style.backgroundColor;
                    console.log('stdColor1', stdColor);
                    
                    if(stdColor == '') {
                        stdColor = 'white';
                        el.style.backgroundColor = 'white';
                    }
                    
                    colors.push({id: el.id, color: stdColor});
                }

                console.log('stdColor bgColor', stdColor, el.style.backgroundColor);
                

                if(stdColor === String(el.style.backgroundColor)) {
                    el.style.backgroundColor = c;
                    console.log('color2 el.style.backgroundColor', c);
                    
                }
                else {
                    el.style.backgroundColor = stdColor;
                    console.log('stdcolor el.style.backgroundColor', stdColor);
                }
            }
        }
    }
</script>

<style>
</style>
