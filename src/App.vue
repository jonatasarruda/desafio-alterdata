<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
        v-show="exibirNav"
        >
      <div class=".d-inline-flex pa-3 align-center">
          <router-link
          to="/principal"
          custom
          v-slot="{ navigate }"
          >
          <button
              @click="navigate"
              role="link"
              >
              Dashboard
          </button>

          </router-link> 
        </div>
        <div class=".d-inline-flex pa-3 align-center">
          <router-link
              to="/produtos"
              custom
              v-slot="{ navigate }"
              >
          <button
              @click="navigate"
              role="link"
              >
              Produtos
          </button>
          </router-link>
        </div>
          <div class=".d-inline-flex pa-3 align-center">
          <router-link
              to="/clientes"
              custom
              v-slot="{ navigate }"
              >
          <button
              @click="navigate"
              role="link"
              >
              Clientes
          </button>
          </router-link>
          <v-spacer></v-spacer>
      </div>
      <v-spacer></v-spacer>
      <v-switch
              v-model="$vuetify.theme.dark"
              label="Modo Escuro"
              color="indigo"
              inset
              >
      </v-switch>
    </v-app-bar>
    
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { RouterView } from 'vue-router';


export default {
  name: 'App',

  components: {
    RouterView,
},

  data: () => ({

  }),

  computed:{
    exibirNav(){
      if(this.$route.path === '/'){
        return false 
      } else {
        return true
      }
    }
  },
}

</script>
