// fs.readdir to read file list in a direction
// path.extname to read extname of a file

var fs = require("fs"),
		path = require("path");
		dirPath = process.argv[2],
		filterName = process.argv[3],
		result="";

fs.readdir(dirPath, function(err, list) {
	for(var i = 0; i < list.length; i++) {
		if(path.extname(list[i]).indexOf(filterName) !== -1) {
			if(i === list.length - 1) {
				result += list[i];
				break ;
			}
			result += list[i] + "\n"
		}
	}
	console.log(result);
})