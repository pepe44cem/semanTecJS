//Importar bibliotecas
const express = require("express");
const app = express()
const personaRoutes = require('./routes/persona')
const proyectoRoutes = require('./routes/proyecto')

//Traer el objeto de conexion
const sequelize = require('./util/database');

//Middleware 
app.use(express.json());
app.use('/persona', personaRoutes);
app.use('/proyecto', proyectoRoutes);

//Levantar el server
sequelize.sync(/*{force:true}*/)
    .then(result => {
        app.listen(8080, () => {
            console.log("Servidor escuchando");
        })
    })
    .catch(error => console.log(error));
