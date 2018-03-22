exports.parse = function(req, res){
  var response = {};
  response.language = req.headers["accept-language"].split(",")[0];
  response.ipaddress = req.headers["x-forwarded-for"].split(",")[0];
  res.json(response);
}