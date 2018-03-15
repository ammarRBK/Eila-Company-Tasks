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

//------------------------routers-----------------------\\
//first route
app.get('/', (request,response)=>{
    response.redirect('index.html');
});

app.get('/pirates', (req,res) => {
    res.send('waite the database');
});

//-----------------------------listening part----------------\\

var port= process.env.PORT || 3000;

app.listen(port, () =>{
    console.log("app is listening on port ",port);
})