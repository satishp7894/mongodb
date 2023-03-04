const express = require("express");
const Student = require("../models/student");
const route = new express.Router();

route.post("/student",(req,res) => {

    const user = Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });

});

route.get("/student",(req,res) => {

    Student.find().then((std) => {
        res.send(std);
    }).catch((e) => {
        res.send(e);

    });

});

module.exports = route;
