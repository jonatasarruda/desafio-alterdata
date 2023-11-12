<template>
<v-container class="flex-row mb-6" align="center">
        <h1 class="display-1 mx-auto" align="center">Dashboard</h1>
        <v-card class="d-flex flex-row ma-6" >
        <v-card width="1000" class="ma-50">
            <v-card-title>
                <h4 class="mx-50">Top 10 estoque de produtos</h4>
            </v-card-title>
            <v-card-text>    
                <v-sparkline
                :labels="top.labels"
                :value="top.value"
                :padding="top.padding"
                :line-width="top.width"
                :stroke-linecap="top.lineCap"
                :fill="top.fill"
                :type="top.type"
                :auto-line-width="top.autoLineWidth"
                auto-draw
            >
            <template v-slot:label="produto">
              {{ produto.value }}
            </template>
            </v-sparkline>
            </v-card-text>
            
        </v-card>
        <v-card width="1000">
            <v-card-title>
                <h4 class="mx-50">Produtos com estoque igual ou menor que zero</h4>
            </v-card-title>
            <v-card-text>
                <v-card-text>    
                <v-sparkline
                :labels="zeradoOuMenor.labels"
                :value="zeradoOuMenor.value"
                :height="zeradoOuMenor.height"
                :padding="zeradoOuMenor.padding"
                :line-width="zeradoOuMenor.width"
                :stroke-linecap="zeradoOuMenor.lineCap"
                :fill="zeradoOuMenor.fill"
                :type="zeradoOuMenor.type"
                :auto-line-width="zeradoOuMenor.autoLineWidth"
                auto-draw
            >
            <template v-slot:label="produto">
              {{ produto.value }}
            </template>
            </v-sparkline>
            </v-card-text>
        </v-card-text>

        </v-card>
    </v-card>
    <v-card width="1000" class="d-flex flex-row mb-6">
        <v-card width="1000"  class="ma-10">
            <v-card-title>
                <h4 class="mx-50">Quantidade total de produto cadastrados</h4>
            </v-card-title>
            <v-card-text v-model="totalProdutos">   
                <h2 class="mx-50">{{ totalProdutos }}</h2>
            </v-card-text>
            
        </v-card>
        <v-card width="1000" class=" ma-10">
            <v-card-title>
                <h4 class="mx-50">Quantidade total de clientes cadastrados</h4>
            </v-card-title>
            <v-card-text v-model="totalClientes">    
                <h2 class="mx-50">{{ totalClientes }}</h2>
            </v-card-text>
        </v-card>
    </v-card>
</v-container>
 </template>
  
  <script>
import axios from 'axios';

//   import axios from 'axios'

  
  export default {
    name: 'Principal',

    data: () => ({
        top:{
            labels: [],
            width: 20,
            padding: 8,
            lineCap: 'round',
            value: [],
            fill: false,
            type: 'bar',
            autoLineWidth: false,
            topProduto:[],
            },
        zeradoOuMenor:{
            labels: [],
            height: 75,
            width: 20,
            padding: 8,
            lineCap: 'round',
            value: [],
            fill: false,
            type: 'bar',
            autoLineWidth: false,
            topProduto:[],
        },
        totalProdutos: 0,
        totalClientes: 0,
        }),


    components: {
        
    },
    methods: {


        ordenarProdutos(a,b ){
            // this.labels.push(this.produtos.nome)
            return b-a;

        },



        async topProdutos(){

            let token = this.$cookies.get("framework");
            
            await axios.get('http://localhost:3400/produtos',{
                headers:{
                Authorization: token
            }
        })
        .then ( res => {
                this.listaProdutos = res.data
                let produtos = [...this.listaProdutos]

                produtos.forEach(produtos => {

                    this.top.topProduto.push({
                        nome: produtos.nome, 
                        quantidade: produtos.quantidadeEstoque
                    })
                       
                });

                this.top.topProduto.sort(this.ordenarProdutos)

                if (this.top.topProduto.length >= 10){
                    for (let i = 0; i < 10; i++) {
                        let produto = this.top.topProduto[i];
                        this.top.value.push(produto.quantidade)
                    }
                } else {
                    for (let i = 0; i < this.top.topProduto.length; i++) {
                        let produto = this.top.topProduto[i];
                        this.top.value.push(produto.quantidade)
                    }
                }
                this.top.value.sort(this.ordenarProdutos)

            })
        },

        async produtoZeradoOuNegativo(){

        let token = this.$cookies.get("framework");

        await axios.get('http://localhost:3400/produtos',{
            headers:{
            Authorization: token
        }
        })
        .then ( res => {
            this.listaProdutos = res.data
            let produtos = [...this.listaProdutos]

            produtos.forEach(produtos => {

                
                this.zeradoOuMenor.topProduto.push({
                    nome: produtos.nome, 
                    quantidade: produtos.quantidadeEstoque
                })

                if (produtos.quantidadeEstoque <= 0){
                    this.zeradoOuMenor.value.push(produtos.quantidadeEstoque)
                }
                
            });

            this.zeradoOuMenor.value.sort(this.ordenarProdutos)

        })
        },

        async getTotalProduto(){

            let token = this.$cookies.get("framework");

            await axios.get('http://localhost:3400/produtos',{
            headers:{
            Authorization: token
             }
            })
            .then(res => {
            
                this.totalProdutos = res.data.length
                return this.totalProdutos.length

             })
        },

        async getTotalCliente(){

            let token = this.$cookies.get("framework");

            await axios.get('http://localhost:3400/clientes',{
            headers:{
            Authorization: token
            }
            })
            .then(res => {

                this.totalClientes = res.data.length
                return this.totalClientes.length

            })
            }
        

        },

    mounted: function() {
        this.topProdutos(),
        this.produtoZeradoOuNegativo(),
        this.getTotalProduto(),
        this.getTotalCliente()
        },
    }
  </script>
  