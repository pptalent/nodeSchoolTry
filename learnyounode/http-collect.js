

var http = require("http");

http.get(process.argv[2], function(res) {
	res.setEncoding("utf8");
	var count = 0, string = "";
	res.on("data", function(data) {
		count += data.length;
		string += data;
	})
	res.on("end", function() {
		console.log(count+"\n"+string);
	})
})