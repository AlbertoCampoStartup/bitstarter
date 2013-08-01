var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var text = fs.readFileSync('index.html','utf8');
  var buffer = new Buffer(text);
  response.send(buffer.toString('utf8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
