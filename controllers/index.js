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

exports.getAllProducts = async (req, res, next) => {
    
    let product = await Product.find().exec();

    res.render('main/index', { product });
};

exports.getOneProduct = async (req, res, next) => {

    let p = await Product.findOne({slug: req.params.slug}).exec();

    res.render('main/productData', { p });

};