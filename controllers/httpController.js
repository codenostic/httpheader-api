exports.parse = function(req, res){
  var response = {};
  response.language = req.headers["accept-language"].split(",")[0];
  response.software = req.headers["user-agent"].split(" ")[1];
  res.json(response);
}