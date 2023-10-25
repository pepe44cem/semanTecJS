//Importar bibliotecas
const express = require("express");
const app = express()

//Middleware 
app.use(express.json());

//Mala practica
app.get('/test', (req, res) => {
    console.log("Esto no se debe de hacer, pero funciona.")
    res.send('<h1> Servidor funcionando </h1>');
})

//Levantar el server
app.listen(8080, () => {
    console.log("Servidor escuchando");
})

