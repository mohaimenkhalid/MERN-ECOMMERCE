const Product = require('../models/ProductModel')

//get all product
exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        status: true,
        products
    })
}

//create product
exports.createProduct = async (req, res, next) => {
    try{
        const product = await Product.create(req.body)
        res.status(201).json(
            {
                status: true,
                message: 'product created successfully',
                product
            }
        )
    } catch (e) {
        res.status(400).json({
            status: false,
            errors: e.errors
        })
    }
}

//update product
exports.updateProduct = async (req, res) => {
    let product = await Product.findById(req.params.id);
    if(!product) {
        return res.status(400).json({
            success: false,
            message: "Product not found"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify:false
    })
    res.status(200).json({
        success: true,
        product
    })
}
