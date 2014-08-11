var http=require("http"),
    through=require('through');
var server=http.createServer(function(request,response){
  if(request.method==="POST"){
    request
      .pipe(
        through(function(buffer){
            this.queue(buffer.toString().toUpperCase());
        })
      )
      .pipe(response)
  }
});
server.listen(process.argv[2]);
