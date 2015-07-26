// http.get(funciton(res){})
// on("data") error end

var http = require("http");

http.get(process.argv[2], function(res) {
  var stringArray = [];

  res.on("data", function(data) {
    stringArray.push(data.toString());
  })

  res.on("end", function(data) {
    console.log(stringArray.join("\n"));
  })

  // Official
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)

})