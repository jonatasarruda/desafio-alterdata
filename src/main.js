import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Routes from './routes/routes'
import VueCookies from 'vue-cookies'

Vue.use(VueRouter)
Vue.use(VueCookies)

const router = new VueRouter ({
    routes: Routes
})


new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app')
