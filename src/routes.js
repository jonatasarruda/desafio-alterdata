import login from './components/Login.vue'
import principal from './components/Principal.vue'
import produtos from './components/Produtos.vue'
import clientes from './components/Clientes.vue'

export default [
    {path: '/', component: login},
    {path: '/principal', component: principal},
    {path: '/produtos', component: produtos},
    {path: '/clientes', component: clientes}
]