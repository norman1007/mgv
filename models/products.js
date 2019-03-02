const mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    title: {
        type: String,
        default: 'Tiada rekod'
    },
    slug: {
        type: String
    },
    description: {
        type: String,
        default: 'Tiada rekod'
    },
    remark: {
        type: String,
        default: 'Tiada rekod'
    },
    quantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    amount: {
        type: Number,
        default: 0
    }
});

productsSchema.plugin(URLSlugs('title', {field: 'slug'}));
module.exports = mongoose.model('products', productsSchema);