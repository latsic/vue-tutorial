<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                
                <p>{{ 'Reverse this text' | reverse }}</p>
                <p>{{ 'appendLength' | appendLength }}</p>
                <p>{{ reverse }}</p>
                <p>{{ appendLength1 }}</p>
                <p>{{ reverseMixin }}</p>
                
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>

    import { dataMixin } from './DataMixin';

    export default {

        mixins: [dataMixin],
        data: () => ({
            text: 'Reverse this text'
        }),
        filters: {
            reverse(value) {
                return value.split('').reverse().join('');
            }
        },
        computed: {
            reverse() {
                return this.text.split('').reverse().join('');
            },
            appendLength1() {
                return `${this.text} (${this.text.length})`
            }
        }
    }
</script>

<style>
</style>
