// require("child_process").spawn
// duplexer

var spawn = require("child_process").spawn;
var duplexer = require("duplexer");

module.exports = function(cmd, args) {
 var pro = spawn(cmd, args);
 return duplexer(pro.stdin, pro.stdout);
}