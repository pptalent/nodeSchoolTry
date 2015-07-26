// url.parse(url, boolen)
// always return back json, only difference of setting the second params is how to treat host,true
// will set //host to host: host, but false will set //host to host:null

// res.writeHead(200, {'Content-Type': "application/json"});
// res.writeHead(404);

var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res) {
  if(req.method === 'GET') {
    var parseObject = url.parse(req.url, true);
    res.writeHead(200, {'Content-Type': "application/json"});

    if(parseObject.pathname === "/api/parsetime" ) {
      var date = new Date(parseObject.query.iso);
      res.end( JSON.stringify({
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
      }))
    }
    else if(parseObject.pathname === "/api/unixtime") {
      res.end(JSON.stringify({ "unixtime": new Date(parseObject.query.iso).getTime()  }))
    }
  }
})  

server.listen(process.argv[2]);