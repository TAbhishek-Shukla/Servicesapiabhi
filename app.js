require('dotenv').config();
const express= require('express');
const app= express();
const cors = require('cors');

const PORT =  process.env.PORT   ;
// http://localhost:4500/api/products
const products_routes= require('./routes/products');
const connectDB = require('./db/connect');
const corsOptions={
        origin: '*',
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
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