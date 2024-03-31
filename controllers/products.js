const Product = require('../models/product');

const getAllProducts= async (req,res)=>{
  try{
    const {company,name,sort,select}=req.query;
    const queryobj= {};
    if(company){
      queryobj.company= {$regex:company,$options:'i'};
    }
    if(name){
      queryobj.name= {$regex:name,$options:'i'};
    }
    let Apidata= Product.find(queryobj);

    if(select){
      let selectFix = select.split(',').join(' ');
      Apidata= Apidata.select(selectFix);
    }
    if(sort){
      let sortFix = sort.split(',').join(' ');
      Apidata= Apidata.sort(sortFix);
    }
    
   let page= Number(req.query.page) || 1;
   let limit= Number(req.query.limit) || 5;

    let skip= (page-1) * limit;
    Apidata= Apidata.skip(skip).limit(limit);
    Apidata.nbHits= Apidata.length;
    const Data= await Apidata;
    res.status(200).json({Data,nbHits:Data.length});
  }
  catch(err){
    console.log(err);
  }

}

const getProduct= async(req,res,next)=>{
  try{
     const productId = req.params.id;
    //  console.log('id we got :',productId);
     const productData = await Product.find({id:productId});
    //  console.log('product data:',productData);
     res.status(200).json({message:productData})
  }
  catch(err){
    console.log(err);
  }
}

const getAllProductsTesting= async (req,res)=>{
    res.status(200).json({msg:"hi from all products testing."})

}

module.exports= {getAllProducts,getAllProductsTesting,getProduct}