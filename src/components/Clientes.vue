<template>
    <v-container>
        <h1 class="display-1 mx-auto">Clientes</h1>
        <v-data-table
            v-model="selected"
            :headers="headers"
            :items="clientes"
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
        <NovoCliente/>
    </div>
    <div class="d-flex pa-3 ma-3">
        <EditarCliente/>
    </div>
    <div class="d-flex pa-3">
        <v-btn
            @click="dialog=true; excluirCliente()"
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
import NovoCliente from './NovoCliente.vue';
import EditarCliente from './EditarCliente.vue';

export default {
name: 'Produtos',

data: () => ({
    dialog: false,
    headers: [
          { text: 'Id', align: 'end', value: 'id' },
          { text: 'Nome', align: 'end', value: 'nome' },
          { text: 'CPF/CNPJ', align: 'end', value: 'cpfOuCnpj' },
          { text: 'Email',align: 'end', value: 'email' },
          { text: 'Telefone', align: 'end', value: 'telefone' }
        ],
        clientes: [],
        selected: [],
        
    return:{
        selected: [],
    }
}),
components: {
    NovoCliente,
    EditarCliente,
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

            console.log(JSON.stringify(response.data))
            self.clientes = response.data   
        })
    .catch(function(error){
            console.log(error)
    })
    },
    mostraSelecionado() {
        let clienteSelecionado = this.selected.map(value => value.id)
        console.log(clienteSelecionado) 
        this.$cookies.set("clienteSelecionado", clienteSelecionado)
        return clienteSelecionado
    },
    async excluirCliente (){

        let token = this.$cookies.get("framework");
        let clienteSelecionado = this.$cookies.get("clienteSelecionado");
        
        console.log("deletando...", clienteSelecionado)
        await axios.delete(`http://localhost:3400/clientes/${clienteSelecionado}`,{
        headers:{
        Authorization: token
        }
    })
    }

},
mounted: function () {
    this.getClientes()
},
}


</script>
  