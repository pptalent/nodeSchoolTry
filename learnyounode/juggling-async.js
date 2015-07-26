

var http = require("http");

var stringArray = [],
		argv = process.argv,
		count = 0;

for(var i = 2; i < argv.length; i++) {
	(function(index) {
			http.get(argv[index], function(res) {
			var innerString = "";
			res.setEncoding("utf8");
			res.on("data", function(data) {	
				innerString += data;
			})
			res.on("end", function() {
				count ++;
				stringArray[index-2] = innerString;
				if(count === argv.length - 2) {
					console.log(stringArray.join("\n"));
				}
			})
		})
	})(i)
}