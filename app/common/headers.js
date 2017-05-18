
module.exports = function(reqObj){
  var requestHeaders = {"ipaddress":null, "language":null, "software":null};
  
  var languageStr = reqObj.headers["accept-language"];
  var indexComma = languageStr.indexOf(",");
  languageStr = languageStr.slice(0,indexComma);
  
  var softwareStr = reqObj.headers["user-agent"];
  var startBracket = softwareStr.indexOf("(");
  var endBracket = softwareStr.indexOf(")");
  
  softwareStr = softwareStr.slice(startBracket+1, endBracket);
  
  
  
  requestHeaders.ipaddress = reqObj.headers["x-forwarded-for"];
  requestHeaders.language = languageStr;
  requestHeaders.software = softwareStr;
  
  return requestHeaders;
  
};