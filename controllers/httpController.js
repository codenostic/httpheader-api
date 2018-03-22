exports.parse = function(req, res){
  var response = {};
  response.language = req.headers["accept-language"].split(",")[0];
  var agent = req.headers["user-agent"];
  response.software = agent.substring(agent.lastIndexOf("(") + 1, agent.lastIndexOf(")"));
  res.json(response);
}