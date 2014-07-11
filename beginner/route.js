function route(pathname,handle,response,request){
  console.log('to route a request for '+pathname);
  if(typeof handle[pathname]==='function'){
    handle[pathname](response,request);
  }
  else{
    console.log('no such route found');
    response.writeHead(404,{"Content-Type":"text/plain"});
    response.write("404 not found");
    response.end();
  }
}
exports.route=route;
