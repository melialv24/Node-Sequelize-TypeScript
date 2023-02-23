import express, {Application} from "express";
import userRoutes from '../routes/usuario'
import cors from 'cors'
import db from "../db/connection";

class Server {

    private app: Application;
    private port: string
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express()
        this.port = process.env.PORT || '8000'

        this.dbConnection()
        this.middlewares()
        //definir mis rutas
        this.routes()
    }

    async dbConnection() {
        try {
            await db.authenticate()
            console.log('Database online')
        } catch (error) {
            console.log(error)
            if(typeof error === 'string') throw new Error(error)
        }
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto' + this.port)
        })
    }

    middlewares(){

        // Cada vez que el servidor recibe una solicitud se ejecutan estos middlewares

        //CORS
        this.app.use(cors())

        //Lectura del body
        //express parsea por mi el body que mandemos a las peticiones
        this.app.use(express.json())

        //Carpeta pública su objetivo es que pueda servir contenido estático
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }

}

export default Server