<template>
  <div class="formularioUsuario">
    <h2>CREAR NUEVO USUARIO</h2>
    <form @submit.prevent="crearUsuario">
      <div class="part">
        <label for="nombre">Nombre: </label>
        <input type="text" id="nombre" v-model="nuevoUsuario.nombre" required>
      </div>
      <div class="part">
        <label for="apellido">Apellido: </label>
        <input type="text" id="apellido" v-model="nuevoUsuario.apellido" required>
      </div>
      <div class="part">
        <label for="fechaNacimiento">Fecha de nacimiento: </label>
        <input type="date" id="fechaNacimiento" v-model="nuevoUsuario.fechaNacimiento" required>
      </div>
      <div class="separador">
        <hr>
      </div>
      <div class="part">
        <button type="submit">Crear Usuario</button>
      </div>
      <router-link to="/lista-usuarios">Ver Lista de Usuarios</router-link>
    </form>
  </div>

</template>

<style>
  .formularioUsuario {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .part {
    margin-bottom: 15px;
  }

  .separador {
    text-align: center;
    margin: 20px 0;
  }
</style>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      nuevoUsuario: {
        nombre: '',
        apellido: '',
        fechaNacimiento: ''
      }
    };
  },
  methods: {
    async crearUsuario() {
      try {
        const response = await axios.post('http://localhost:3000/api/usuarios/1/usuarios', this.nuevoUsuario);
        console.log('Usuario generado correctamente', response.data);
      } catch (error) {
        console.error('Error al generar usuario', error);
      }
    }
  }
};
</script>
