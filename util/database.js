const Sequielize = require('sequelize');
const {applyRelations} = require('./relations');

//
const sequelize = new Sequielize('semanatec', 'admin', 'Password', {
    dialect:'mysql', 
    host: 'database-1.cjxr7amue5wx.us-east-1.rds.amazonaws.com',
    define:{
        //Evitar que nos ponga createAt y updateAt
        timesstamp:false,
        //Pluralizar
        freezeTableName:true
    }
});

const modelDefiners = [
    require('../models/persona'),
    require('../models/proyecto'),
    require('../models/proyectoPersona')
]

//Vincular el modelo con el objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

//Construir las relaciones
applyRelations(sequelize);

//exportar el elemento de conexion
module.exports = sequelize;