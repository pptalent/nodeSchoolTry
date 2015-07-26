var fs = require("fs");
var path = require("path");

module.exports = function(dir, ext, cb) {
	fs.readdir(dir, function(err, data) {
		if(err) {
			cb(err);
			return;
		}
		var result = [];
		for(var i = 0; i < data.length ; i++) {
			if(path.extname(data[i]).indexOf(ext) !== -1 && path.extname(data).length > 0) {
				result.push(data[i]);
			}
		}
		cb(null, result);
	})
}