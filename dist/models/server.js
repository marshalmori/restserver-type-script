"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        // Definir as rotas
        this.routes();
    }
    //TODO: Conectar base de dados
    middlewares() {
        // CORS 
        this.app.use((0, cors_1.default)());
        // Leitura do body
        this.app.use(express_1.default.json());
        // Diretório público
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on http://localhost:${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map