module.exports=readDictionary;

function readDictionary(dir,suffix,callback){
  var fs=require('fs');
  fs.readdir(dir,function(err,list){
    if(err){
      callback(err);
    }
    else{
      var new_suffix="."+suffix;
      var new_dir=list.filter(function(string){
          return string.indexOf(new_suffix)>-1
      })
      callback(null,new_dir);
    }
  })
}
