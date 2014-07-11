var server=require('./server.js');
var route=require('./route.js');
var handler=require('./requestHandlers.js');


var handle={
  '/':handler.start,
  '/start':handler.start,
  '/upload':handler.upload,
  '/show':handler.show
};
server.requestStart(route,handle);
