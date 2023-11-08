<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
        >
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
      <div class="d-flex align-center">
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
    RouterView
},

  data: () => ({
    items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
  }),
}
</script>
