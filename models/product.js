const mongoose= require('mongoose');

const ProductSchema= new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:[true,'price must be provided!']
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.9,
    },
    createdAt:{
        type:Date,
        default: Date.now(),
    },
    company:{
        type: String,
        enum:{
            values:['dell','apple','mi','samsung','nokia','asus','lenovo','rolex'],
            message:`{VALUE} is not supported`
        },
    },
    colors:[{
        type: String,
        enum:["#ff0000",
            "#000000",
            "#CDD0D0","#000",
            "#22D3EF"],
    }],
    image:{
     type:String,
     required:true,
    },
    description:{
     type:String,
     required:true,
    },
    category:{
        type:String,
        required:true
    },
    shipping:{
        type:Boolean,
    },
});

module.exports = new mongoose.model('Product',ProductSchema);

