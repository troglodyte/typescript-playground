"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// npx tsc --esModuleInterop express.ts && mv express.js express.cjs && node express.cjs
const express_1 = __importDefault(require("express"));
const pets_1 = require("./data/pets");
const cors_1 = __importDefault(require("cors"));
const PORT = 8000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});
app.get('/', (req, res) => {
    const { species } = req.query;
    let filteredPets = pets_1.pets;
    if (species) {
        filteredPets = filteredPets
            .filter((p) => p.species.toLowerCase() === species.toLowerCase());
    }
    res.json(filteredPets);
});
app.get('/:id', (req, res) => {
    const { id } = req.params;
    //const targetPet = pets.find(p => p.id === parseInt(`${id}`))
    const targetPet = pets_1.pets.find((p) => p.id.toString() == id);
    targetPet ? res.json(targetPet) : res.status(400).json({ message: "Not found" });
});
app.use((req, res) => {
    res.status(404).json({ message: "Endpoint not found " + req.url });
});
app.listen(PORT, () => {
    console.log("Listening on port: ", PORT);
});
