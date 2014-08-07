var fs=require('fs');
var path=process.argv[2];
var file=fs.readFileSync(path).toString().split("\n");
console.log(file.length-1);
