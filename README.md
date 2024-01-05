# pytovue

This project uses Mockoon for the API. You have to import the mockoon.json file and in the GET 200 you can add users with this code:

[
  {
    "nombre": "",
    "apellido": "",
    "fechaNacimiento": ""
  },
  {
    "nombre": "",
    "apellido": "",
    "fechaNacimiento": ""
  }
]

Application will caculate the age based on the year of birth.

![vue](https://adrianalonso.es/wp-content/uploads/2018/01/vue.jpg)


![createusers](https://iili.io/J79a6Lx.jpg)




## Project setup
```
npm install
install vue
install axios
install vue-router
```

### Compiles and hot-reloads for development
```
npm run serve
```
Server will run usually in http://localhost:8080/
Data is get from http://localhost:3000/api/usuarios/1/usuarios
