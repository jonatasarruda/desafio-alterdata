<template>
    <v-container>

    <v-card width="400" class="mx-auto mt-10">
        <v-card-title>
            <h1 class="display-1 mx-auto">Dashboard</h1>
        </v-card-title>
        <v-card-text>    
        <v-form>        
                <v-card-actions>
           
                </v-card-actions>
            </v-form>
        </v-card-text>
        <v-spacer></v-spacer>
        
    </v-card>
</v-container>
    
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'App',

    data: () => ({
        return: {
            login: {
                email: '',
                senha: ''
            }
            } 
        }),

    components: {
        
    },
    methods: {

        async fazLogin(e){
        e.preventDefault();

        await axios.post ('http://localhost:3400/login', {
            email: this.email,
            senha: this.senha
        })
        .then(function(response){
                let token = response.data.token
                console.log(token) 
            })
        .catch(function(error){
                console.log(error.response.data.mensagem)
        })
        },
    },
    mounted() {

        this.$cookies.set("framework","vuejs")
        this.$cookies.set("framework",this.token)
        },
    }
  </script>
  