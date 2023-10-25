const Sequielize = require('sequelize');

const Persona = (sequelize) => {
    sequelize.define('persona', {
        idPersona:{
            type: Sequielize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull: false
        }, 
        nombre: Sequielize.STRING(50)
    })
};
module.exports = Persona