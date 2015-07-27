// official answer

//  var duplexer = require('duplexer2');
// var through = require('through2').obj;

// module.exports = function (counter) {
//     var counts = {};
//     var input = through(write, end);
//     return duplexer(input, counter);

//     function write (row, _, next) {
//         counts[row.country] = (counts[row.country] || 0) + 1;
//         next();
//     }
//     function end (done) {
//         counter.setCounts(counts);
//         done();
//     }
// };
//experiment212


var stream = require("stream");
var duplex = require("duplexer2");

module.exports = function(counter) {
  var write = stream.Writable({objectMode: true});
  var countries = {};
  write._write = function(data, enc, next) {
    countries[data.country] = (countries[data.country] || 0)+1;
    next();
  }
  write.on("finish", function() {
    counter.setCounts(countries);
  })

  return duplex(write, counter);
}