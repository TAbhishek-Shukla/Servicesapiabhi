require('dotenv').config()
const mongoose= require('mongoose');

const url=process.env.SERV_URL;

const connectDB= ()=>{
   try{
   mongoose.connect(`${url}`);
    console.log('connected');
   }
   catch(er){
    console.log(er);
   }
}

module.exports= connectDB;