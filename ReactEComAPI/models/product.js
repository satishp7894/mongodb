
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: String,
    sell_prise: String,
    discount: String,
    image: String,
    imageUrl: String,
});


// collection creation
const Product = new mongoose.model("product", productSchema);

module.exports = Product;

