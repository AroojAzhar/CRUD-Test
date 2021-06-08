const mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
    image : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    heading : {
        type : String,
        required : true
    },
    created : {
        type : Date,
        default : Date.now
    }
});

let Product = mongoose.model('product' , ProductSchema);
module.exports = Product;
