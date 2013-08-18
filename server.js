var express = require("express");
var http = require("http");

var port = process.env.PORT || 5000;

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("hacxb0x|peng");
  response.end();	
}).listen(port);
