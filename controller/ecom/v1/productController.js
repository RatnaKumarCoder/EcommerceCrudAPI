//importing the product model
const Product=require('../../../models/productModel');



//controller function to create a product
module.exports.create=async function(req,res){
    try{
        console.log(req.body);
        const newProd= await Product.create({
            name: req.body.name,
            quantity: req.body.quantity
        });

        
         return res.json(200,{
                data: {
                    paroducts: newProd,
                    message: "Product created"
                }
            });
    }
    catch(err){
        if(err){
            console.log("error creating the product....",err)
        }
    }

}

//controller function to return all the products in the DB
module.exports.getAllProducts=async function(req,res){
    try{
        const allProducts= await Product.find();
        return res.json(200,{
            data: {
                paroducts: allProducts,
                message: "All Products retrieved"
            }
        });
    }
    catch(err){
        if(err){
            console.log('error retrieving all the products....',err)
        }
    }
}

//controller function to deleting the product by ID
module.exports.deleteById=async function(req,res){
    try{
        await Product.findByIdAndDelete(req.params.id);
        return res.json(200,{
            message: 'product delete successfull'
        });
    }
    catch(err){
        if(err){
            console.log("error deleting the product by Id...",err);
        }
    }
}

//controller function to update the product quantity which we get as parameter
module.exports.updateProduct=async function(req,res){
    try{
        const getProd=await Product.findById(req.params.id);
        getProd.quantity=req.params.quantity;
        getProd.save();
        const updatedProd=await Product.findById(req.params.id);
        return res.json(200,{
            data:{
                Product: updatedProd,
                message: "Product updated"
            }
        });
    }
    catch(err){
        if(err){
            console.log('error updating the product',err);
        }
    }
}