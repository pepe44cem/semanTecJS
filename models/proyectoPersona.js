const Sequielize = require('sequelize');

const ProyectoPersona = (sequelize) => {
    sequelize.define('proyectopersona', {
            estado: Sequielize.STRING(20)
        }) 
    };
module.exports = ProyectoPersona