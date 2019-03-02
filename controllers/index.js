const Product = require('../models/products');

exports.postAProduct = (req, res, next) => {
    const title = req.body.title;
    const desc = req.body.description;
    const remark = req.body.remark;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const amount = req.body.amount;

    const newProduct = new Product({
        title: title,
        desc: desc,
        remark: remark,
        quantity: quantity,
        price: price,
        amount: amount
    });

    newProduct.save().then(data => {
        res.redirect('/');
        console.log(`Data product telah disave dalam db: ${data}`);
    })
    .catch(err => console.log(err));

};

exports.getAllProducts = (req, res, next) => {
    let product = {
        title: 'Item 1',
        description: 'fhewfiusdhfiudsfhdsiufhsud',
        remark: 'skfodsnfsdngsdijndsjvndfjdfn',
        quantity: 30,
        price: 'RM 5000.00',
        amount: 'RM 15,000.00'
    }

    res.render('main/index', { product });
};