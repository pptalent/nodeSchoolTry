var concat=require('concat-stream');
String.prototype.reverse=String.reverse || function(){
  var array=this.split(""),
      newArray=[];
  for(var i=0;i<array.length;i++){
    newArray.unshift(array[i]);
  }
  return newArray.join("");
}
process.stdin
  .pipe(concat(function(content){
     var array=content.toString().reverse().split("\n");
     for(var i=0;i<array.length;i++){
       console.log(array[i]);
     }
  }))
