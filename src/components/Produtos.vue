<template>
    <v-container>
        <h1 class="display-1 mx-auto">Produtos</h1>
        <v-data-table
            v-model="selected"
            :headers="headers"
            :items="produtos"
            item-key="id"
            :single-select=true
            show-select
            @click="mostraSelecionado"
        >
        <template v-slot:top>
        </template>
    </v-data-table>
<NovoProduto/>
</v-container>
</template>
  
<script>
import axios from 'axios'
import NovoProduto from './NovoProduto.vue'
// import { token } from './Login.vue';

export default {
name: 'App',

data: () => ({
    dialog: false,
    headers: [
        //   { title: 'Produtos', align: 'start', value: 'nome'},
          { text: 'Id', align: 'end', value: 'id' },
          { text: 'Nome', align: 'end', value: 'nome' },
          { text: 'Valor', align: 'end', value: 'valor' },
          { text: 'Quantidade em estoque',align: 'end', value: 'quantidadeEstoque' },
          { text: 'Observação', align: 'end', value: 'observacao' }
        ],
        produtos: [],
    return:{
        selected: []
    }
}),
components: {
    NovoProduto
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
  