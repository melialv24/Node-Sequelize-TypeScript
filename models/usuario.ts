import {DataTypes} from 'sequelize'
//Referencia a la base de datos para poder definir mi modelo 
import db from '../db/connection'


//Definir mi modelo
/**
 * const Usuario = db.define('Usuario', {
        Aqui defino como quiero que luzca mi modelo
    })
 */
const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.TINYINT
    },
})

export default Usuario