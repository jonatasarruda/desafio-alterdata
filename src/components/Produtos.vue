<template>
    <v-container>
        <h1 class="display-1 mx-auto">Produtos</h1>
        <span>{{ token }}</span>
        <v-data-table
                :headers="headers"
                :items="prod"
                item-value="name"
                class="elevation-1"
            >
                <template v-slot:item="{ produto }">
                <tr>
                    <td>{{ produto.nome }}</td>
                    <td>{{ produto.valor }}</td>
                    <td>{{ produto.quantidadeEstoque }}</td>
                    <td>{{ produto.observacao }}</td>
                    <td>{{ produto.dataCadastro }}</td>
                </tr>
                </template>
            </v-data-table>
            <li v-for="produto in produtos" v-bind:key="produto">
                {{ produto }}
            </li>
    </v-container>
    
</template>
  
<script>
import axios from 'axios'
// import { token } from './Login.vue';

export default {
name: 'App',

data: () => ({
    
        produtos: []
    
}),


components: {

},
methods: {

async getProdutos(){

let token = this.$cookies.get("framework");
let self = this;

await axios.get('http://localhost:3400/produtos',{
    headers:{
    Authorization: token
    }
}
)
.then(function(response){

        console.log(JSON.stringify(response.data))
        self.produtos = response.data   
        console.log(self.produtos)
    })
.catch(function(error){
        console.log(error)
})
},

},
mounted: function () {
    this.getProdutos()
},

}


</script>
  