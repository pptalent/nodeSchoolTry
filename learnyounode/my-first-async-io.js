//fs.readFile

var fs = require("fs");
var filePath = process.argv[2];

fs.readFile(filePath, {encoding: 'utf-8'}, function(err, string) {
	console.log(string.split("\n").length-1);
})