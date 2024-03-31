require('dotenv').config();
const ProductJson = require('./product.json');
const connectDB = require('./db/connect');
const Product= require('./models/product');

const start=async()=>{
    try{
         await connectDB(process.env.SERV_URL);
         await Product.deleteMany();
         await Product.create(ProductJson);
         console.log('created db');
         
    }
    catch(er){
        console.log(er);
    }
}

start();
