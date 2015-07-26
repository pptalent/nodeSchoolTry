var program = require("./asynchronous-i-o");

program(process.argv[2], process.argv[3], function(err, data) {
	if(err) {
		console.log(err);
		return;
	}
	console.log(data.join("\n"));
})