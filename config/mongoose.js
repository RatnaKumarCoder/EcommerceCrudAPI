//importing mongoose
const mongoose=require('mongoose');

//setting up connection to our mongoDb at local on port 27017
mongoose.connect('mongodb://127.0.0.1:27017/Ecom');

//assigning the mongoose.connection object to db
const db=mongoose.connection;

//specifying error event listener 
db.on('error',console.error.bind(console, 'error connecting to mongodb'));

//specifying the one time event listener to log once the connection is opened 
db.once('open',function(){
    console.log('connected to data base');
});

module.exports=db;