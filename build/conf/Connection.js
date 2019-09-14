"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const conn = promise_mysql_1.default.createPool(keys_1.default.config);
conn.then(connection => {
    console.log('Connection successfull');
    connection.end;
});
exports.default = conn;
