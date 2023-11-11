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
          <span class="text-h5">Novo Produto</span>
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
            @click="dialog = false; gravarProduto();"
          >
            Gravar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Prod from './Produtos.vue'
import axios from 'axios';

export default {
  name: 'novoProduto',

  data: () => ({
      dialog: false,
      produto:{
          id: '',
          nome: '',
          valor: 0,
          quantidadeEstoque: 0,
          observacao: '',
          dataCadastro: new Date().toISOString(),
        },
      return: {
        produto:{
          id: '',
          nome: '',
          valor: 0,
          quantidadeEstoque: 0,
          observacao: '',
          dataCadastro: Date.now(),
        }
      }
  }),

  methods:{
    
    async gravarProduto(){

      let token = this.$cookies.get("framework");
      
      await axios.post('http://localhost:3400/produtos', this.produto, {
        headers:{
          Authorization: token
        }
      })
      .then((res) => {
        console.log ("Produto cadastrado!", res.data)
      })
      .then(
        window.location.reload()
      )
      .catch((error) => {
        console.log(error.data)
      })

    }

  },

  props:{
    Prod  
  }

}

</script>