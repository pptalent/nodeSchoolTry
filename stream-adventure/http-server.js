// pipe(res)

// through(function(buffer, encode, next) {
//   this.push()
//   next()
// })

var http = require("http");
var through = require("through2");

var server = http.createServer(function(req, res) {
  if(req.method === "POST") {
    req
      .pipe(through(function(buffer, encode, next) {
        this.push(buffer.toString().toUpperCase());
        next();
      }))
      .pipe(res)
  }
})

server.listen(process.argv[2]);