const Product = require('../models/product');

const getAllProducts= async (req,res)=>{
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
const getAllProductsTesting= async (req,res)=>{
    res.status(200).json({msg:"hi from all products testing."})

}

module.exports= {getAllProducts,getAllProductsTesting}