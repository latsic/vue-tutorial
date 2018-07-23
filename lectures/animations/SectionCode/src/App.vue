<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>

                <select v-model="alertAnimation" name="" id="">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>

                </select>
                
                <hr>
                <button class="btn btn-primary" @click="show=!show">Show Alert</button>
                <br><br>
                <!-- <transition name="fade">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition> -->
                <!-- <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">Animation with v-if</div>
                </transition>
                <transition name="slide">
                    <div class="alert alert-info" v-show="show">Animation with v-show</div>
                </transition>

                <transition name="slide" appear>
                    <div class="alert alert-info" v-if="show">Animation with v-if</div>
                </transition>

                <transition
                    appear
                    enter-active="animated swing"
                    leave-active-class="animated shake"
                    >
                    <div class="alert alert-info" v-if="show">Animation with animate.css</div>
                </transition>
                
                <div class="animatedAdd alert alert-info animated fadeInDownBig infinite" v-if="show">Animate.css</div> -->

                <!-- <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">Some Info Div1</div>
                    <div class="alert alert-warning" v-else key="warning" >Some Warning Div2</div>
                </transition> -->

                <hr>

                <button
                    class="btn btn-primary"
                    @click="load = !load"
                    >
                    Load/Remove Element
                </button>
                <br><br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false"
                    >
                    <div
                        style="width: 100px; height: 100px; background-color: lightgreen"
                        v-if="load"
                        >
                    </div>
                </transition>
                <hr>
                <button
                    class="btn btn-primary"
                    @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'"
                    >
                    Toggle Alert
                </button>
                <transition
                    mode="out-in"
                    name="fade"
                    >
                    <component
                        :is="selectedComponent"
                        >
                    </component>
                </transition>
                <hr>
                <hr>
                <button class="btn btn-primary"
                    @click="addItem"
                    >
                    Add Item
                </button>
                <hr>
                <ul class="list-group">
                    <transition-group
                        name="slide"
                        >
                        <li
                            class="list-group-item"
                            v-for="(number, index) of numbers"
                            @click="removeItem(index)"
                            v-bind:key="number"
                            style="cursor: pointer"
                            >
                            {{ number }}
                        </li>
                        <!-- <li
                            class="list-group-item"
                            v-for="(number, index) of numbers"
                            @click="removeItem(index)"
                            v-bind:key="index * Math.floor(Math.random() * 10000)"
                            style="cursor: pointer"
                            >
                            {{ number }}
                        </li> -->
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue'

    export default {
        data: () => ({
            show: true,
            alertAnimation: 'fade',
            load: false,
            elementWidth: 100,
            selectedComponent: 'app-success-alert',
            numbers: [1, 2, 3, 4, 5]
        }),
        methods: {
            beforeEnter(el) {
                console.log('beforeEnter', this.load);    
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';            
            },
            enter(el, done) {
                console.log('enter', this.load);
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    console.log('el.style.width', el.style.width);
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        done(); // tell vue that the  animation is done!
                    }
                }, 20);
                // done(); // tell vue that the  animation is done!
            },
            afterEnter() {
                console.log('afterEnter', this.load);            
            },
            enterCancelled(el) {
                console.log('enterCancelle§d', this.load);                
            },
            beforeLeave(el) {
                console.log('beforeLeave', this.load);
                el.style.width = '300px';
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';           
            },
            leave(el, done) {
                console.log('leave', this.load);
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    console.log('leave', el.style.width);
                    
                    if(round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);           
            },
            afterLeave() {
                console.log('afterLeave', this.load);                
            },
            leaveCancelled() {
                console.log('leaveCancelled', this.load);                
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, Math.floor(Math.random() * 10000));
            },
            removeItem(index) {
                this.numbers.splice(index, 1)
            }
        },
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
        }
    }
</script>

<style scoped>
    .fade-enter {
        opacity: 0;
        /* transform: translate(0, -200px); */
    }
    .fade-enter-active {
        transition: opacity 1s;
        /* transition: transform 2s; */
    }
    .fade-leave {
        
    }
    .fade-leave-active {
        transition: opacity 1s;
        /* transition: transform 1s; */
        opacity: 0;
        /* transform: translate(0, -200px); */
        position: absolute;
    }
    .fade-move {
        transition: transform 1s;
    }

    .slide-enter {
        /* transform: translateY(20px); */
        opacity: 0;
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 0.5s;
    }
    .slide-leave {

    }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 3s;
        opacity: 0;
        position: absolute;
    }
    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }

    .animatedAdd {
        animation-duration: 6s;
    }
    
</style>
