<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link
                to="/user/subroutes/1"
                tag="li" class="list-group-item" style="cursor: pointer">User 1</router-link>
            <router-link
                to="/user/subroutes/2"
                
                tag="li" class="list-group-item" style="cursor: pointer">User 2</router-link>
            <router-link
                to="/user/subroutes/3"
                tag="li" class="list-group-item" style="cursor: pointer">User 3</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    created(){
        console.log('UserStart component created');
        
    }
}
</script>

<style scoped>

</style>
