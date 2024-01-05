import { createRouter, createWebHistory } from 'vue-router';
import ListaUsuarios from '@/views/ListaUsuarios.vue';
import CrearUsuario from '@/views/CrearUsuarios.vue';

const routes = [
  { path: '/', component: ListaUsuarios },
  { path: '/lista-usuarios', component: ListaUsuarios },
  { path: '/crear-usuario', component: CrearUsuario }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
