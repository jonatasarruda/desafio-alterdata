<template>
    <v-container>
        <h1 class="display-1 mx-auto">Produtos</h1>
        <v-data-table
                :headers="headers"
                :items="desserts"
                item-value="name"
                class="elevation-1"
            >
                <template v-slot:item="{ item }">
                <tr>
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                    <td>{{ item.fat }}</td>
                    <td>{{ item.carbs }}</td>
                    <td>{{ item.protein }}</td>
                    <td>{{ item.iron }}</td>
                </tr>
                </template>
            </v-data-table>
            <li v-for="produto in produtos" v-bind:key="produto.nome">
                {{ produto.nome }}
            </li>
    </v-container>
    
</template>
  
  <script>
  import axios from 'axios'

  
  export default {
    name: 'App',

    data: () => ({
        return: {
            produtos: []
        }
    }),

    components: {

    },
    methods: {

    async getProdutos(){
    
    let self = this;

    await axios.get('http://localhost:3400/produtos',{
        headers:{
        Authorization: '69820f612f45ed9f9248f4bd2fc2421d'
        }
    }
    )
    .then(function(response){

            console.log(JSON.stringify(response.data))
            // self.produtos.push = JSON.stringify(response.data)
        })
    .then(response => response.json())
    .then(json => self.produtos.push(json))
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
  