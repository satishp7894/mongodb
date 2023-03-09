const express = require("express");
const User = require("../models/user");
const Product = require("../models/product");
const route = new express.Router();
const multer  = require('multer')
const path = require('path');

route.post("/register",(req,res) => {

    const userReq = User(req.body);

    User.findOne({
        email: req.body.email,
      }).then((user) => {

        if (!user) {
            userReq.save().then(() => {
                return res.status(201).send({ message: "Register Successfully",status : 201 });
            }).catch((e) => {
                return  res.status(400).send({ message: e,status : 200 });
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


// product 

const upload = multer({
    storage: multer.diskStorage ({
    destination: function (req, file, cb) {
    cb(null, "../uploads/product")
    },
    filename: function (req, file, cb) {
    cb(null, file.originalname)
    }
    })
    }).single("product_file");

route.post("/createProduct",upload,(req,res) => {

    var productReq = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        sell_prise: req.body.sell_prise,
        discount: req.body.discount,
        image: req.body.image,
        imageUrl: "http://localhost:4000/uploads/product/"+req.body.image,
      })

    // const productReq = Product(title:req.body.title);

    productReq.save().then(() => {
        return res.status(201).send({ message: "Product created Successfully",status : 201 });
    }).catch((e) => {
        return  res.status(404).send({ message: e,status : 404 });
    });

});

    // route.get('/uploads/product/:filename',(req,res) => {
    // res.sendFile("http://localhost:4000/uploads/product/"+req.param('filename'));
    // });
    route.use('/uploads', express.static('../uploads'));


route.post("/getProduct",(req,res) => {


    Product.find().then((product) => {
        return res.status(201).send({ message: "Product fetch Successfully",status : 201, date :  product});
    }).catch((e) => {
        return  res.status(404).send({ message: e,status : 404 });
    });

    

});


module.exports = route;