var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.sendFile(process.cwd()+'/public/index.html');
});

app.listen(process.env.PORT || 8080, function(err){
    if(err) throw err;
    console.log('node connected to port'+process.env.PORT+"...");
});