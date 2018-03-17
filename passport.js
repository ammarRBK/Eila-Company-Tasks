var jwtStrategy= require('passport-jwt').Strategy;
var extractJwt= require('passport-jwt').ExtractJwt;
var jwtConfig= require('./config/config').secret;


module.exports= function(passport){
    var options= {};
    options.jwtFromRequest= extractJwt.fromAuthHeader();
    options.secretOrKey= jwtConfig;

    passport.use(new jwtStrategy(options,(JWT_payload,done) => {
        console.log("these are the options------------>",options,"\n","these are tht JWT_payload",JWT_payload);
    }))
}