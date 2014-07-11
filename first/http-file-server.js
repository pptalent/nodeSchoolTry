var http=require('http');
var fs=require('fs');
fs.creatReadStream()
var server=http.createServer(function(request,response){
    fs.createReadStream(process.argv[3]);
});
server.listen(process.argv[2]);
