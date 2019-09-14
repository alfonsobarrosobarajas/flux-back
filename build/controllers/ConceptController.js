"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Messages_1 = __importDefault(require("../util/Messages"));
const Connection_1 = __importDefault(require("../conf/Connection"));
class ConceptController {
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield Connection_1.default.then(connection => {
                return connection.query('select * from concept');
            }).then(list => {
                if (list.length > 0) {
                    resp.json(list);
                }
                else {
                    resp.json({ text: Messages_1.default.NO_DATA_LIST });
                }
            }).catch(() => {
                resp.json({ text: Messages_1.default.CNN_FAIL });
            });
        });
    }
    /*
        public async get(req: Request, resp: Response): Promise<any> {
    
            const { id } = req.params;
            const concept = await cnn.then(
    
                connection => {
                    return connection.query('select * from concept where id = ?', [id]);
                }
    
            ).then(
                concept => {
                    if (concept.length > 0) {
                        resp.json(concept);
                    } else {
                        resp.status(404).json({ text: Messages.NO_DATA_LIST });
                    }
                }
            ).catch(() => {
                resp.json({ text: Messages.CNN_FAIL });
            });
    
        }
    */
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Connection_1.default.then(connection => {
                connection.query('insert into concept set ?', [req.body]);
                resp.json({ text: Messages_1.default.CONCEPT_CREATED });
            }).catch(() => {
                resp.json({ text: Messages_1.default.CNN_FAIL });
            });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Connection_1.default.then(connection => {
                connection.query('update concept set ? where id = ?', [req.body, id]);
                resp.json({ text: Messages_1.default.CONCEPT_UPDATED });
            }).catch(() => {
                resp.json({ text: Messages_1.default.CNN_FAIL });
            });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Connection_1.default.then(connection => {
                connection.query('delete from contact where id = ?', [id]);
                resp.json({ text: Messages_1.default.CONCEPT_UPDATED });
            }).catch(() => {
                resp.json({ text: Messages_1.default.CNN_FAIL });
            });
        });
    }
}
const conceptController = new ConceptController();
exports.default = conceptController;
