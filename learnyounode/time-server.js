// net creat tcp server
// http create web server
// server = net.createServer(function(socket) {})
// socket.write() socket.end()
// server.listen() 

var net = require("net");

var server = net.createServer(function(socket) {
	var d  = new Date();
	socket.end(d.getFullYear()+"-"+dealTime(d.getMonth()+1)+"-"+dealTime(d.getDate())+" "+dealTime(d.getHours())+":"+dealTime(d.getMinutes()));
})

server.listen(process.argv[2]);

function dealTime(d) {
	return d<10?"0"+d:d;
}