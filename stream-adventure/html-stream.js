//trumpet
// pipe(stream) again in the end of stream because through is a transform stream, readable writeable but never saveing
// data, check through2 readme on github

var trumpet = require("trumpet");
var through = require("through2");

var tr = trumpet();

var stream = tr.select(".loud").createStream();

stream.pipe(through(function(buffer, encode, next) {
	this.push(buffer.toString().toUpperCase());
	next();
})).pipe(stream)

process.stdin.pipe(tr).pipe(process.stdout)
