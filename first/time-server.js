var net=require('net');
var strftime=require('strftime');


var server=net.createServer(function(socket){
  var date=strftime('%F %R',new Date());
  console.log(date);
  // socket.write(date);
  socket.end(date);
});
var port=process.argv[2];
server.listen(port);
