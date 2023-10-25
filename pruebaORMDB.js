//Como utilizar la herramienta ORM Sequielize
const { error } = require('console');
const Sequielize = require('sequelize');

//Configurar la conexion
//mysql -u admin -h -P3306 -p
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

//Prueba de conexion
sequelize.sync()
    .then(result => {
        console.log(result);
    })
    .catch(error => console.log(error));


const Ejemplo = sequelize.define('ejemplo', {
    idTrabajo:{
        type: Sequielize.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull: false
    },

    descripcion:{
        type: Sequielize.STRING,
        allowNull: true
    }
})
