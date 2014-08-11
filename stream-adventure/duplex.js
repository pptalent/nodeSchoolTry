var spawn=require('child_process').spawn,
    duplexer=require('duplexer');
module.exports=function(cmd,args){
  var singleStream=spawn(cmd,args);
  return duplexer(singleStream.stdin,singleStream.stdout);
}
