const express=require('express');

const route=express.Router();

//sub-routing to the ecomRouter path
route.use('/v1',require('./ecomRouter'));

module.exports=route;


