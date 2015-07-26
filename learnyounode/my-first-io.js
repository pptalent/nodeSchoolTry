// fs.readFileSync;

var fs = require("fs");
var filePath = process.argv[2];
// console.log(process.argv[2]);	
var result = fs.readFileSync(filePath);
console.log(result.toString().split("\n").length - 1);