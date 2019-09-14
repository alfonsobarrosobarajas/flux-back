"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ConceptController_1 = __importDefault(require("../controllers/ConceptController"));
class ConceptRouter {
    constructor() {
        this.router = express_1.Router();
        this.setRouter();
    }
    setRouter() {
        this.router.get('/', ConceptController_1.default.list);
        this.router.get('/:id', ConceptController_1.default.get);
        this.router.post('/', ConceptController_1.default.create);
        this.router.put('/:id', ConceptController_1.default.update);
        this.router.delete('/:id', ConceptController_1.default.delete);
    }
}
const homeRouter = new ConceptRouter();
exports.default = homeRouter.router;
