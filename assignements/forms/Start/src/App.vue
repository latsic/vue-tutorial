<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    
                    <app-fullname v-model="fullname"></app-fullname>
                    
                    
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input class="form-control" type="email" id="email" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input class="form-control" type="password" id="password" v-model="password">
                    </div>
                    <div class="form-group">
                        <div>
                            <label for="storedatayes">
                                <input class="form-control" type="radio" id="storedatayes" value="Yes" v-model="storeData">
                                Store Data
                            </label>
                            <label for="storedatano">
                                <input class="form-control" type="radio" id="storedatano" value="No" v-model="storeData">
                                Do not store Data
                            </label>
                        </div>
                    </div>
                    <p>{{ fullname }}</p>
                    
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <button
                                class="btn btn-primary"
                                @click.prevent="isSubmitted = true"
                                >
                                Submit!
                            </button>
                        </div>
                    </div>

                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullname }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Fullname from './Fullname.vue';

    export default {
        data: () => ({
            fullname: '',
            email: '',
            password: '',
            storeData: 'Yes',
            isSubmitted: false
        }),
        components: {
            appFullname: Fullname
        }
    }
</script>

<style>
</style>
