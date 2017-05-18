var express = require("express");
var app = express();
var route = require(process.cwd()+"/app/routes/routes.js");

route(app);

app.listen(process.env.PORT || 8080, function(err){
    if(err) throw err;
    console.log('node connected to port'+process.env.PORT+"...");
});