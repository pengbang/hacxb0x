var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	response.send('FUCK YOU WORLD F.U.C.K Y.O.U W.o.r.l.d.');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});
