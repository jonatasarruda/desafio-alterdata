<template> 
    <v-row justify="center">
   <v-dialog
       v-model="dialog"
       persistent
       width="1024"
       >
   <template v-slot:activator="{ props }">
   <v-btn
     @click="dialog=true; getProdutos()"
     color="primary"
     v-bind="props"
   >
     Editar
   </v-btn>
 </template>
<v-card>
   <v-card-title>
     <span class="text-h5">Editar Produto</span>
     <!-- <span class="text-h5">{{produtoSelecionado}}</span> -->
   </v-card-title>
   <v-card-text>
     <v-container>
       <v-row>
         <v-col
           cols="12"
           sm="6"
           md="4"
         >
           <v-text-field
             label="Código do produto"
             required
             v-model="produto.id"
           ></v-text-field>
         </v-col>
         <v-col
           cols="12"
           sm="6"
           md="4"
         >
           <v-text-field
             label="Nome do produto"
             hint="descrição do produto"
             required
             v-model="produto.nome"
           ></v-text-field>
         </v-col>
         <v-col
           cols="12"
           sm="6"
           md="4"
         >
           <v-text-field
             label="Valor"
             hint="valor de venda do produto"
             persistent-hint
             required
             v-model="produto.valor"
           ></v-text-field>
         </v-col>
         <v-col cols="12">
           <v-text-field
             label="Quantidade em estoque"
             required
             v-model="produto.quantidadeEstoque"
           ></v-text-field>
         </v-col>
         <v-col cols="12">
           <v-text-field
             label="Observação"
             type="Observação sobre o produto"
             v-model="produto.observacao"
           ></v-text-field>
         </v-col>
         <v-col
           cols="12"
           sm="6"
         >
         </v-col>
       </v-row>
     </v-container>
   </v-card-text>
   <v-card-actions>
     <v-spacer></v-spacer>
     <v-btn
       color="blue-darken-1"
       variant="text"
       @click="dialog = false"
     >
       Fechar
     </v-btn>
     <v-btn
       color="blue-darken-1"
       variant="text"
       @click="dialog = false; gravarProduto(produto);"
     >
       Gravar
     </v-btn>
   </v-card-actions>
 </v-card>
</v-dialog>
</v-row>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  data: () => ({
      dialog: false,
      produto: self.produto
  }),

  methods: {
     async getProdutos(){

    let produtoSelecionado = this.$cookies.get("produtoSelecionado");
    let token = this.$cookies.get("framework");
    let self = this;

    await axios.get(`http://localhost:3400/produtos/${produtoSelecionado}`,{
        headers:{
        Authorization: token
        }
    }
    )
    .then(function(response){

            console.log(JSON.stringify(response.data))
            self.produto = response.data
            console.log(produtoSelecionado)
            return self.produto
        })
    .catch(function(error){
            console.log(error)
    })
    },

    async gravarProduto(produtoEditado){

      let produto = produtoEditado
      let produtoSelecionado = this.$cookies.get("produtoSelecionado");
      let token = this.$cookies.get("framework");

      console.log(produto)
      let edicao = {...produto}
      console.log(edicao)

      await axios.put(`http://localhost:3400/produtos/${produtoSelecionado}`,
        edicao,{
        headers:{
        Authorization: token
        },
      })
    },



  },
  mounted: function(){
   this.getProdutos() 
  }
}

</script>