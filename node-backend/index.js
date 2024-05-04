const express = require('express');
const mongoose  = require('mongoose');
const server = express();
// import { createProduct } from "..//node-backend/conroller/Product"
const { createProduct } = require('./conroller/Product');
const productRouter = require('./routes/Products');
const categoriesRouter = require('./routes/Category');
const brandsRouter = require('./routes/Brands');
const cors = require('cors');
// main.catch(err=> console.log(err));
//middleware
server.use(cors{
    exposeHeaders:['X-Total-Count'],
})
server.use(express.json());
server.use('/products',productRouter.router);
server.use('/categories',categoriesRouter.router);
server.use('/brands',brandsRouter.router);




try {
    main();
} catch (err) {
    console.log(err);
}

async function main(){
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('database connected');
}

server.get('/',(req,res)=>{
    res.json({status: 'success'})
})

server.post('/products',createProduct);


server.listen(8080,()=>{
    console.log('server started')
})