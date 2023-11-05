<template>
    <v-card width="400" class="mx-auto mt-10">
        <v-card-title>
            <h1 class="display-1 mx-auto">Acesso</h1>
        </v-card-title>
        <v-card-text>
            <v-form @submit.prevent="fazLogin">
                <v-text-field 
                label="Email" 
                v-model="email"/>
                <v-text-field 
                type="password" 
                label="Senha" 
                v-model="senha"
                />
                
                <v-card-actions>
                    <v-btn
                    type="submit">
                    <span class="mx-200">Entrar</span>
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card-text>
        <v-spacer></v-spacer>
        
    </v-card>
    
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'App',

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

    data: () => ({
        return: {
            login: {
                email: '',
                senha: ''
            }
            } 
        })
    }
  </script>
  