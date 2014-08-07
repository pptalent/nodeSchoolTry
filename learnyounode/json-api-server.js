var http=require('http');
var url=require('url');
var server=http.createServer(function(request,response){
  if(request.method==="GET"){
    var urlDic=url.parse(request.url,true),
        date=new Date(urlDic.query.iso);
    response.writeHead('200',{"Content-Type":"application/json"});
    if(urlDic.pathname==="/api/parsetime"){
      var json={
        "hour":date.getHours(),
        "minute":date.getMinutes(),
        "second":date.getSeconds()
      };
      response.end(JSON.stringify(json));
    }
    else if(urlDic.pathname==="/api/unixtime"){
      var json={
        "unixtime":date.getTime()
      };
      response.end(JSON.stringify(json));
    }
  }
});
server.listen(process.argv[2]);
