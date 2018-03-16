//-------------required frameworks and middlewares and use them\\
var express= require("express");
var app= express();

var morgan= require("morgan");
app.use(morgan('dev'));

var bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//require the database module
var db= require('./database');

//--------------------------headers----------------------\\
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
 
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');
 
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
 
    // Pass to next layer of middleware
    next();
 });

 //---------------use static files-----------------------\\

 app.use(express.static(__dirname +'/./'))

//------------------------routers-----------------------\\

app.get('/favicon.ico', function(req, res) {
    res.status(204);
});

var paitesJSON=[
    {
        "name": "Jack sparrow",
        "age":32,
    "isCaptured": true
    },
    {
       "name": "Black beard",
       "age":45,
    "isCaptured": false
    },
    
    {
       "name": "William Kidd",
       "age":56,
    "isCaptured": true
    },
    {
       "name": "Anne Bonny",
       "age":28,
    "isCaptured": false
    },
    {
       "name": "Ching Shih",
       "age":69,
    "isCaptured": false
    }
    ];

//first route
app.get('/', (request,response)=>{
    // db.update({},{
    //     $push:{
    //         piratesArr:paitesJSON[0]
    //     }
    // },(err,newdata)=>{
    //     if(err) console.log(err)
    //     console.log("------------------>",newdata);
    // })
    response.redirect('./index.html');
});

app.get('/pirates', (req,res) => {
    db.find({}, (err, data) => {
        if (err) console.log(err);
        // console.log('------------> all users', data);
        data = paitesJSON;
        res.send(data);
    });
});

//-----------------------------listening part----------------\\

var port= process.env.PORT || 3000;

app.listen(port, () =>{
    console.log("app is listening on port ",port);
})