require('dotenv').config();
const express= require('express');
const app= express();
const PORT =  process.env.PORT   ;
// http://localhost:4500/api/products
const products_routes= require('./routes/products');
const connectDB = require('./db/connect');

app.use('/api/products',products_routes);


app.get('/',(req,res)=>{
    res.json({msg:"hi i am live"});
})



const start = async ()=>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
        console.log(`we are listening at ${PORT}`);
    });
       
    }
    catch(err){
        console.log(err);
    }
}

start();