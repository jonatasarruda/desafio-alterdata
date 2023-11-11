<template>
<v-container>
<v-card width="400" class="mx-auto mt-10">
    <v-card-title>
        <h1 class="display-1 mx-auto">Acesso</h1>
        <!-- <h1 class="display-1 mx-auto">{{token}}</h1> -->
    </v-card-title>
    <v-card-text>
        <v-form @submit.prevent="fazLogin">
            <v-text-field 
                v-model="email"
                label="Email" 
                />
            <v-text-field 
                type="password" 
                label="Senha" 
                v-model="senha"
            />
            
            <v-card-actions>
                <v-btn
                type="submit">
                <span class="mx-200">Entrar</span>
                <v-icon>mdi-open-in-new</v-icon>
                </v-btn>
            </v-card-actions>
        </v-form>
    </v-card-text>
</v-card>
</v-container>

</template>

<script>
import axios from 'axios'
// import VueCookies from 'vue-cookies'

// let token = this.token
// export {token}


export default {
    name: 'Login',

components: {
    
},
methods: {

    async fazLogin(e){
    
    let self = this
    e.preventDefault();


    await axios.post ('http://localhost:3400/login', {
        email: this.email,
        senha: this.senha
    })
    .then(response => {

            let token = response.data.token
            console.log(token)
            self.$router.push('/principal')
            return token
    })
    .then(token => {
        this.$cookies.set("framework", token)
    })
    .catch(e => {
            console.log(e)
    })
},
},
mounted() {

    this.$cookies.set("framework","vuejs")
    this.$cookies.set("framework",this.token)
},

data: () => ({
    email: '',
    senha: '',
    // token: this.token,
    
    return: {
        // token: this.token
    }
}),
}
</script>
