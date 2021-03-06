var mongoose= require('mongoose');
var dbConfig= require('./config/config').mongoDb;
//define schema variable
var Schema= mongoose.Schema;
//connect with the database middleware
mongoose.connect(dbConfig, (err,data)=>{
    if(err){
        console.log(err);
    }
    console.log("-----------------> connected to the database");
})

//create schema
var piratesSchema= new Schema({
    piratesArr:{
        type: Array,
        required: true
    }
});

//define pirates model to export it

var pirates= mongoose.model('pirates',piratesSchema);

module.exports= pirates;