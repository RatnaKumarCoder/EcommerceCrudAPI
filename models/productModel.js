//importing mongoose library
const mongoose=require('mongoose');

//creating a schema for our product
const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    quantity: {
        type: Number
    }
},
{
    timestamps:true
}
);

//creating a model using the schema we described above
const Product=mongoose.model('Product',productSchema);

//exporting the Product model
module.exports=Product;
