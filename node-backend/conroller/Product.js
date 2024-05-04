// import { Product } = require("../model/Product");
import { Product } from "../model/Product";

exports.createProduct = async (req, res)=> {
    const Product = new Product(req.body)
    try {
        const doc =  await Product.save();
        res.status(201),json(doc)
    }catch(err) {
            res.status(400).json(err);
    }
}

exports.fetchAllProducts = async (req, res)=> {
    let query = Product.find({});
    if(req.query.category ){
        query = query.find({"category": [req.query.category]});
    }
    if(req.query.brand ){
        query = query.find({"brand": [req.query.brand]});
    }
    if(req.query._sort && req.quer._order){
        query = query.sort({[req.query._sort]: [req.query._order]});
    }
    if(req.query._page && req.quer._limit){
        const pageSize =req.query._limit;
        const page = req.query._page
        query = query.skip(pageSize*(page-1)).limit(pageSize);
    }
    
    try {
        const doc =  await query.exec();
        res.status(200),json(doc)
    }catch(err) {
            res.status(400).json(err);
    }
};

