var fs=require('fs');
fs.readFile(process.argv[2],function(err,data){
  if(!err){
    var file=data.toString();
    console.log(file.split("\n").length-1);
  }
})
