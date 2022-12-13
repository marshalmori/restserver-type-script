import express, { Application } from 'express';
import userRoutes from '../routes/usuario'
import cors from 'cors';
import db from '../db/connection';



class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.dbConnection();
        this.middlewares();

        // Definir as rotas
        this.routes();
    }

    async dbConnection() {
     

        try {
            await db.authenticate();
            console.log('Database online');
            
        } catch (error) {
            throw new Error("Erro de conexão com o DB.");
        }
    }

    middlewares() {
        // CORS 
        this.app.use(cors());

        // Leitura do body
        this.app.use(express.json())

        // Diretório público
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on http://localhost:${this.port}`);
        })
    }
}

export default Server;