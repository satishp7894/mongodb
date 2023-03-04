
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017/reactecomapi", { useNewUrlParser: true, useUnifiedTopology: true })
    .then((r) => console.log("connection successfull...."))
    .catch((err) => console.log("error " + err));