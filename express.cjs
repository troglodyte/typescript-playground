"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// npx tsc --esModuleInterop express.ts && mv express.js express.cjs && node express.cjs
var express_1 = __importDefault(require("express"));
var pets_js_1 = require("./data/pets.js");
var PORT = 8000;
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.json(pets_js_1.pets);
});
app.listen(PORT, function () {
    console.log("Listening on port: ", PORT);
});
