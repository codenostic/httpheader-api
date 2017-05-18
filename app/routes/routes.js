var getHeaders = require("../common/headers.js");

module.exports = function (app) {
    
    app.get('/', function (req, res) {
        res.sendFile(process.cwd()+'/public/index.html');
    });
    
    app.get('/api/whoami/', function(req, res){
        var requestHeaders = getHeaders(req);
        res.send(JSON.stringify(requestHeaders));
    });    
};