// require('through2-map')
// req.pipe(req.body)

var http = require("http");
var through2Map = require("through2-map");

var server = http.createServer(function(req, res) {
	if(req.method === 'POST') {
		req.pipe(through2Map(function(chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(res);
	}
});

server.listen(process.argv[2]);