//Importar bibliotecas
const express = require("express");
const app = express()
//Traer el objeto de conexion
const sequelize = require('./util/database')

//Middleware 
app.use(express.json());

//Muy mala practica
app.get('/test', (req, res) => {
    console.log("Esto no se debe de hacer, pero funciona.")
    res.send('<h1> Servidor funcionando </h1>');
})

//Levantar el server
sequelize.sync()
    .then(result => {
        app.listen(8080, () => {
            console.log("Servidor escuchando");
        })
    })
    .catch(error => console.log(error));
