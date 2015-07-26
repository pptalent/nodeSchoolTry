// split
// through2


var split = require("split");
var through = require("through2");
var count = 0, str, tmp;

process.stdin
  .pipe(split())
  .pipe(through(function(buffer, env, next) {
    if(count % 2 !== 0) {
      this.push(buffer.toString().toUpperCase()+"\n");
    }
    else {
      this.push(buffer.toString().toLowerCase()+"\n");
    }
    count ++;
    next();
  }))
  .pipe(process.stdout)