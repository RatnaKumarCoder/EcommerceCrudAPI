//importing the express library
const express=require('express');

//accessing the express instance
const app=express();

//specifying the port
const port=8000;

//specifyin the relative path to our db connection so that it can load when the server starts
const db=require('./config/mongoose');

//seeting up middlie ware to parse the data we get from front end actions
app.use(express.urlencoded());

//routing the api calls to relevant routing path
app.use('/',require('./route/index'));

//staring our server on port 8000
app.listen(port,function(err){
    if(err){
        console.log('error connecting to the databse');
    }
    console.log('connected to the server on ',port);
});