"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HomeRouter_1 = __importDefault(require("./routers/HomeRouter"));
const ConceptRouter_1 = __importDefault(require("./routers/ConceptRouter"));
const cors_1 = __importDefault(require("cors"));
//
class Server {
    constructor() {
        this.app = express_1.default();
        this.setParams();
        this.setRouter();
    }
    setParams() {
        this.port = process.env.PORT || 3000;
        this.app.set('port', this.port);
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    setRouter() {
        this.app.use('/', HomeRouter_1.default);
        this.app.use('/api/concept', ConceptRouter_1.default);
    }
    start() {
        this.app.listen(this.port, '0.0.0.0', () => {
            console.log('Running on port: ', this.port);
        });
    }
}
const server = new Server();
exports.default = server.start();
