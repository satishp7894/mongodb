const express = require("express");
require("../database/conn")

const reactecomAPIRouter = require("../routes/route");
// s

const app = express();
const port = process.env.Port || 8000;

app.use(express.json());
app.use(reactecomAPIRouter);


app.listen(port,'192.168.0.114',() =>{
    console.log("connection i setup");
})