const express=require('express');
const route=express.Router();

//import product model
const Product=require('../../controller/ecom/v1/productController');

//post route to create a product
route.post('/ecom/products/create',Product.create);

//route to return all the products
route.get('/ecom/products',Product.getAllProducts);

//route to delete the product by ID
route.get('/ecom/products/:id',Product.deleteById);

//route to update product by specifying the product ID and the quantity to update
route.get('/ecom/products/:id/updateQuantity/:quantity',Product.updateProduct);

//modularizing the route
module.exports=route;
