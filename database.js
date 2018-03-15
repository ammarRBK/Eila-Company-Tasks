var mongoose= require('mongoose');
//define schema variable
var Schema= mongoose.Schema;
//connect with the database middleware
mongoose.connect('mongodb://eila123:eila123@ds115579.mlab.com:15579/pirates',(err,data)=>{
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