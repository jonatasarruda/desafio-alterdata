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
            @input="mostraSelecionado"
        >
        <template v-slot:top>
        </template>
    </v-data-table>
<div class="d-flex">
    <div class="d-flex pa-3 ma-3">
        <NovoProduto/>
    </div>
    <div class="d-flex pa-3 ma-3">
        <EditarProduto/>
    </div>
    <div class="d-flex pa-3">
        <v-btn
            @click="dialog=true; excluirProduto()"
            color="red"
        >
        Exluir
        </v-btn>
    </div>
</div>  
</v-container>
</template>
  
<script>
import axios from 'axios'
import NovoProduto from './NovoProduto.vue'
import EditarProduto from './EditarProduto.vue';
// import DeletarProduto from './DeletarProduto.vue';

export default {
name: 'Produtos',

data: () => ({
    dialog: false,
    headers: [
          { text: 'Id', align: 'end', value: 'id' },
          { text: 'Nome', align: 'end', value: 'nome' },
          { text: 'Valor', align: 'end', value: 'valor' },
          { text: 'Quantidade em estoque',align: 'end', value: 'quantidadeEstoque' },
          { text: 'Observação', align: 'end', value: 'observacao' }
        ],
        produtos: [],
        selected: [],
        
    return:{
        selected: [],
    }
}),
components: {
    NovoProduto,
    EditarProduto,
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
    mostraSelecionado() {
        let produtoSelecionado = this.selected.map(value => value.id)
        console.log(produtoSelecionado) 
        this.$cookies.set("produtoSelecionado", produtoSelecionado)
        return produtoSelecionado
    },
    async excluirProduto (){

        let token = this.$cookies.get("framework");
        let produtoSelecionado = this.$cookies.get("produtoSelecionado");
        
        console.log("deletando...", produtoSelecionado)
        await axios.delete(`http://localhost:3400/produtos/${produtoSelecionado}`,{
        headers:{
        Authorization: token
        }
    })
    }

},
mounted: function () {
    this.getProdutos()
},
}


</script>
  