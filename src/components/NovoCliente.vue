<template> 
    <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        width="1024"
        >
    <template v-slot:activator="{ props }">
    <v-btn
      @click="dialog=true"
      color="primary"
      v-bind="props"
    >
      Novo
    </v-btn>
  </template>
<v-card>
    <v-card-title>
      <span class="text-h5">Novo Cliente</span>
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
              label="Código do cliebte"
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
              label="Nome do cliente"
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
              label="CPF/CNPJ"
              hint="CPF ou CNPJ do cliente"
              persistent-hint
              required
              v-model="cliente.cpfOuCnpj"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Email"
              required
              v-model="cliente.email"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="Telefone"
              type="Telefone"
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
        @click="dialog = false; gravarCliente();"
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
name: 'novoProduto',

data: () => ({
  dialog: false,
  cliente:{
      id: '',
      nome: '',
      cpfOuCnpj: '',
      email: '',
      telefone: '',
      dataCadastro: new Date().toISOString(),
    },
  return: {
    cliente:{
      id: '',
      nome: '',
      cpfOuCnpj: '',
      email: '',
      telefone: '',
      dataCadastro: new Date().toISOString(),
    }
  }
}),

methods:{

async gravarCliente(){

  let token = this.$cookies.get("framework");
  
  await axios.post('http://localhost:3400/clientes', this.cliente, {
    headers:{
      Authorization: token
    }
  })
  .then((res) => {
    console.log ("Cliente cadastrado!", res.data)
  })
  .then(
        window.location.reload()
    )
  .catch((error) => {
    console.log(error.data)
  })

}

},

}

</script>