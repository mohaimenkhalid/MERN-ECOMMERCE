const Product = require('../models/ProductModel')

//get all product
exports.getAllProducts = (req, res) => {
    res.status(200).json({message: "Product successfully"})
}

//create product

exports.createProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    console.log(product)
    res.status(201).json(
        {
            message: 'product created successfully'
        }
    )
}
