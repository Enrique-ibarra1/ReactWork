const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true, 
            "Title is required"
        ]
    },
    price: {
        type: Number,
        required: [
            true,
            "Please provide a price"
        ]
    },
    description: {
        type: String,
        required: [
            true,
            "Description is required"
        ]
    }
}, {timestamps: true});

module.exports.Product = mongoose.model("Product", ProductSchema);