import express, { Application } from 'express';
import userRoutes from '../routes/usuario'


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Definir as rotas
        this.routes();
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