require('dotenv-safe').config();
const express = require('express');

const cors = require('cors');

const db = require('./database/mongoConfig');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send({
        title: "Reprograma - Familiaridade -> Projeto Final",
        version: "1.0.0",
        mensagem: " Seja bem vindo ao Familiaridade - Caridade em família, venha fazer parte você Também!"
    })
})

db.connect();

const familyRoute = require("./routes/familyRoute")
const parentsRoute = require("./routes/parentsRoute")


app.use("/family", familyRoute);
app.use("/parents", parentsRoute);

module.exports = app;