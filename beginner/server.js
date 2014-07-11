var http=require("http");
var url=require("url");


function requestStart(route,handle){
  function onRequest(request,response){

    var pathName=url.parse(request.url).pathname;
    // var postData='';
    //
    // request.setEncoding('utf8');
    // request.addListener('data',function(chunk){
    //   console.log(chunk);
    //   postData+=chunk;
    // });
    // request.addListener('end',function(){
    //   route.route(pathName,handle,response,postData);
    //   postData="";
    // })
    route.route(pathName,handle,response,request);

  }
  http.createServer(onRequest).listen(8000);

};
exports.requestStart=requestStart;
