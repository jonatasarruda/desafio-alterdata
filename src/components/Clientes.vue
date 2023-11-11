<template>
    <v-container>
        <h1 class="display-1 mx-auto">Clientes</h1>
        <v-data-table
                :headers="headers"
                :items="produtos"
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
            <li v-for="cliente in clientes" v-bind:key="cliente">
                {{ cliente }}
            </li>
    </v-container>
    
</template>
  
  <script>
  import axios from 'axios'

  
  export default {
    name: 'Clientes',

    data: () => ({
        
            clientes: []
        
    }),

    components: {

    },
    methods: {

    async getClientes(){


    let token = this.$cookies.get("framework");
    let self = this;

    await axios.get('http://localhost:3400/clientes',{
        headers:{
        Authorization: token
        }
    }
    )
    .then(function(response){

            self.clientes = response.data   
            console.log(self.clientes)
        })
    .catch(function(error){
            console.log(error)
    })
    },

    },
    mounted: function () {
      this.getClientes()
    },
    
    }


  </script>
  