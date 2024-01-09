<template>
    <div class="lista-usuarios">
      <h2>LISTA USUARIOS</h2>
      <ul>
        <li v-for="usuario in usuariosConNombreCompleto" :key="usuario.id" class="usuario-item">
          {{ usuario.nombreCompleto }} - Edad: {{ calcularEdad(usuario.fechaNacimiento) }}
        </li>
      </ul>
      <router-link to="/crear-usuario">Crear Usuario</router-link>

    </div>
  </template>
  
  <style>
    .lista-usuarios {
      max-width: 400px;
      margin: auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  
    .usuario-item {
      margin-bottom: 10px;
      padding: 8px;
      background-color: #f9f9f9;
      border-radius: 4px;
    }
  </style>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        usuarios: []
      };
    },
    async mounted() {
      try {
        const response = await axios.get('http://localhost:3000/api/usuarios/1/usuarios');
        this.usuarios = response.data;
        console.log('Se han obtenido los usuarios correctamente');

      } catch (error) {
        console.error('Error en la obtención de la lista de los usuarios', error);
      }
    },
    methods: {
      calcularEdad(fechaNacimiento) {
        const fechaNac = new Date(fechaNacimiento);
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNac.getFullYear();
        const mes = hoy.getMonth() - fechaNac.getMonth();
  
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
          edad--;
        }
  
        return edad;
      }
    },
    computed: {
      usuariosConNombreCompleto() {
        return this.usuarios.map(({ nombre, apellido, ...resto }) => ({
          ...resto,
          nombreCompleto: `${nombre} ${apellido}`
        }));
      }
    }
  };
  </script>
  
