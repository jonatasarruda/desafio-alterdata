<template> 
    <v-row justify="center">
   <v-dialog
       v-model="dialog"
       persistent
       w  th="1024"
       >
   <template v-slot:activator="{ props }">
   <v-btn
     @click="dialog=true; getCliente()"
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
             v-model="cliente.id"
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
             v-model="cliente.nome"
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
             v-model="cliente.cpfOuCnpj"
           ></v-text-field>
         </v-col>
         <v-col cols="12">
           <v-text-field
             label="Quantidade em estoque"
             required
             v-model="cliente.email"
           ></v-text-field>
         </v-col>
         <v-col cols="12">
           <v-text-field
             label="Observação"
             type="Observação sobre o produto"
             v-model="cliente.telefone"
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
       @click="dialog = false; gravarCliente(cliente);"
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
  name: 'edicaoProduto',

  data: () => ({
      dialog: false,
      cliente: self.cliente
  }),

  methods: {
     async getCliente(){

    let clienteSelecionado = this.$cookies.get("clienteSelecionado");
    let token = this.$cookies.get("framework");
    let self = this;

    await axios.get(`http://localhost:3400/clientes/${clienteSelecionado}`,{
        headers:{
        Authorization: token
        }
    }
    )
    .then(function(response){

            console.log(JSON.stringify(response.data))
            self.cliente = response.data
            console.log(clienteSelecionado)
            return self.cliente
        })
    .catch(function(error){
            console.log(error)
    })
    },

    async gravarCliente(clienteEditado){

      let cliente = clienteEditado
      let clienteSelecionado = this.$cookies.get("clienteSelecionado");
      let token = this.$cookies.get("framework");

      console.log(cliente)
      let edicao = {...cliente}
      console.log(edicao)

      await axios.put(`http://localhost:3400/clientes/${clienteSelecionado}`,
        edicao,{
        headers:{
        Authorization: token
        },
      })
      .then(
        window.location.reload()
      )
    },



  },
  mounted: function(){
   this.getCliente() 
  }
}

</script>