<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>

                <div class="form-group">
                    <label for="">Username</label>
                    <input class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="">Mail</label>
                    <input class="form-control" type="text" v-model="user.email">
                </div>
                <button
                    class="btn btn-primary"
                    @click="submit"
                    >
                    Submit
                </button>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <button
                    class="btn btn-primary"
                    @click="fetchData"
                    >
                    Fetch Data
                </button>
            </div>
        </div>
        <hr>
        <app-user-data
            :userData="userData"
            :deleteUser="deleteUser"
            >
        </app-user-data>
    </div>
</template>

<script>

    import UserData from './components/UserData.vue';

    export default {
        data: () => ({
            user: {
                username: '',
                email: ''
            },
            userLoading: {
                username: 'loading',
                email: 'loading'
            },
            userData: [],
            resource: {}
        }),
        methods: {
            submit() {
                console.log('user', this.user);
                
                this.userData.push({
                    username: this.user.username,
                    email: this.user.email
                });

                this.$http.post(
                    'https://react-burger-builder-acce2.firebaseio.com/vuedata.json',
                    this.user)
                .then(response => {
                    console.log('response', response);
                    // throw(new Error('Just some test error!'));
                })
                .catch(error => {
                    console.log('error', error);
                })  
            },
            fetchData() {
                this.userData = [this.userLoading];
                setTimeout(() => {
                    this.$http.get(
                        'https://react-burger-builder-acce2.firebaseio.com/vuedata.json')
                    .then(response => {
                        
                        response.json()
                        .then(data => {
                            console.log('response.json', data);
                        });


                        this.userData = [];
                        for(let key of Object.keys(response.body)) {
                            console.log('key of response', key);
                            
                            this.userData.push({
                                username: response.body[key].username,
                                email: response.body[key].email
                            });
                        }
                    })
                    .catch(error => {
                        console.log('get error', error);
                    });    
                }, 0);
            },
            deleteUser(userNameEmail) {

                console.log('trying to delete a user');
                

                this.$http.get('https://react-burger-builder-acce2.firebaseio.com/vuedata.json')
                .then(response => {
                    
                    console.log('deleteUser getting response');
                    
                    
                    for(let key of Object.keys(response.body)) {

                        console.log('userNameEmail', userNameEmail);
                        console.log('+++', response.body[key].username + response.body[key].email);
                        
                        

                        if(response.body[key].username + response.body[key].email == userNameEmail) {
                            console.log('trying to delete elem with key', key);
                            
                            this.$http.delete(
                                `https://react-burger-builder-acce2.firebaseio.com/vuedata/${key}.json`)
                            .then(response => {
                                console.log(`deletion of ${userNameEmail} succes                                                                                sfull!`);

                                this.fetchData();

                            })
                        }
                    }
                })
                .catch(error => {
                    console.log('error deleteUser', error);
                });
            }
        },
        mounted() {
            this.fetchData();
        },
        created() {
            this.userData = [this.userLoading];

            const customActions = {
                saveAlt: {
                    method: 'POST',
                    url: 'alternative.json'
                }
            };

            this.resource = this.$resource('vuedata.json', {}, customActions);
            console.log('this.$resource', this.resource);
            
        },
        components: {
            appUserData: UserData
        }
    }
</script>

<style>
</style>
