var websocket=require('websocket-stream');
var stream=websocket('websocket://localhost:8000');
stream.end('hello\n');
