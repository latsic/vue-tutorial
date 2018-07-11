<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn">Reset Name Fn</button>
    </div>
</template>

<script>

    import { eventBus } from '../main';

    export default {
        props: {
            myName: {
                type: [String, Array],
                required: true,
                //default: "SomeDefaultString"
            },
            resetFn: {
                type: Function
            },
            userAge: Number
            
        },
        methods: {
            switchName() {
                return this.myName.split('').reverse().join('');
            },
            resetName() {
                //this.myName = 'Max';
                this.$emit('nameWasReset', 'Max');
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
