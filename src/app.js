require('dotenv-safe').config();
const express = require("express");

const cors = require('cors');

const db = require('./database/mongoConfig');

const app = express();

db.connect();

app.use(express.json());
app.use(cors());

const familyRoute = require("./routes/familyRoute")
const parentsRoute = require("./routes/parentsRoute")


app.use("/family", familyRoute);
app.use("/parents", parentsRoute);
module.exports = app;