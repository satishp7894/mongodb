const express = require("express");
const User = require("../models/user");
const route = new express.Router();

route.post("/user",(req,res) => {

    const userReq = User(req.body);

    User.findOne({
        email: req.body.email,
      }).then((user) => {

        if (!user) {
            userReq.save().then(() => {
                return res.status(201).send({ message: "Register Successfully",status : 201 });
            }).catch((e) => {
                return  res.status(400).send({ message: e.message,status : 200 });
            });
          }else{
           return res.status(200).send({ message: "This email address is "+req.body.email+" all ready exits",status : 404 });
          }

       
    }).catch((e) => {
        return  res.status(400).send({ message: e,status : 200 });
    });

    
   

});

route.post("/login",(req,res) => {
    

    console.log(req.body.email);

    // User.find();

    // const userReq = User(req.body);
    User.findOne({
        email: req.body.email,
        password: req.body.password,
      }).then((user) => {

        if (!user) {
            return res.status(404).send({ message: "Invalid Login Credentials",status : 404 });
          }

        res.status(201).send({ message: "Login Successfully",status : 200 ,data : [user]});
    }).catch((e) => {
        res.status(400).send(e);
    });

});

module.exports = route;