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
     Novo produto
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
           ></v-text-field>
         </v-col>
         <v-col cols="12">
           <v-text-field
             label="Quantidade em estoque"
             required
           ></v-text-field>
         </v-col>
         <v-col cols="12">
           <v-text-field
             label="Observação"
             type="Observação sobre o produto"
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
       @click="dialog = false"
     >
       Gravar
     </v-btn>
   </v-card-actions>
 </v-card>
</v-dialog>
</v-row>
</template>

<script>

export default {
name: 'App',

data: () => ({
dialog: false,
}),

}

</script>