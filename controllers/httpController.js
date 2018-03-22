exports.parse = function(req, res){
  var response = {};
  response.ipaddress = req.headers["x-forwarded-for"].split(",")[0];
  response.language = req.headers["accept-language"].split(",")[0];
  var agent = req.headers['user-agent'];
  response.software = agent.substring(agent.indexOf("(")+1, agent.indexOf(")"));
  res.json(response);
}