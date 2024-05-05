const { Product } = require("../model/Product");
// import { Product } from "../model/Product";

exports.createProduct = async (req, res)=> {
    const product = new Product(req.body)
    try {
        const doc =  await product.save();
        res.status(201),json(doc)
    }catch(err) {
            res.status(400).json(err);
    }
}

exports.fetchAllProducts = async (req, res)=> {
    let condition = {}
    if(!req.query.admin){
        condition.deleted = {$ne:true}
    }

    let query = Product.find(condition);
    let totalProductsQuery = Product.find(condition);
    if(req.query.category ){
        query = query.find({category: req.query.category});
        totalProdutsQuery = totalProductsQuery.find({"category": [req.query.category]});
    }
    if(req.query.brand ){
        query = query.find({"brand": [req.query.brand]});
        totalProdutsQuery = totalProdutsQuery.find({"brand": [req.query.brand]});
    }
    if(req.query._sort && req.quer._order){
        query = query.sort({[req.query._sort]: [req.query._order]});
    }
    const totalDocs = await totalProductsQuery.count().exec();

    if(req.query._page && req.quer._limit){
        const pageSize =req.query._limit;
        const page = req.query._page
        query = query.skip(pageSize*(page-1)).limit(pageSize);
    }
    
    try {
        const doc =  await query.exec();
        res.set('X-Total-count',totalDocs);
        res.status(200),json(doc);
    }catch(err) {
            res.status(400).json(err);
    }
};

exports.fetchProductById = async (req, res)=> {
    const {id} = req.params;
    try {
        const product = await Product.findById(id);
        res.status(200),json(product);
    }catch(err) {
            res.status(400).json(err);
    }
};
//set this route in frontend 7:57:50 and 8:58:00

exports.updateProduct = async (req, res)=> {
    const {id} = req.params;
    try {
        const product = await Product.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200),json(product);
    }catch(err) {
            res.status(400).json(err);
    }
};


