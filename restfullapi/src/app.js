const express = require("express");
require("../db/conn")

const studentRouter = require("../routers/router");

const app = express();
const port = process.env.Port || 8000;

app.use(express.json());
app.use(studentRouter);


app.listen(port,'192.168.0.114',() =>{
    console.log("connection i setup");
})