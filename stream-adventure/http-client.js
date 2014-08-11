var request=require('request');
var result=request.post('http://localhost:8000');
process.stdin.pipe(result).pipe(process.stdout);
