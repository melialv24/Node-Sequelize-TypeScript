import {Sequelize} from 'sequelize'

/* dentro de Sequelize('Nombre de la db, 'nombre de usuario', 'contraseña, {
    host: 'donde se encuentra mi base de datos',
    dialect: 'Que base de datos estoy utilizando'
})*/
const db = new Sequelize('node', 'root', 'meli', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
})

export default db


