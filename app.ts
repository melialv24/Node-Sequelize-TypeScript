import dotenv from 'dotenv'
import Server from './models/server'
//para llamar la configuracion por defecto que va a llamar a las variables de entorno 

dotenv.config()

const server = new Server()

server.listen()