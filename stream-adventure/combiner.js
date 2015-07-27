// var combine=require('stream-combiner');
// var split=require('split');
// var through=require('through');
// var zlib=require('zlib');
// module.exports=function(){
//   return combine(
//       split('\n'), //数据可以一行一行的传过来
//       through(writeThrough,endThrough),//把数据一行行读过来，然后执行我的function再写进去
//       zlib.createGzip()
//   )
// }
// var item;
// function writeThrough(data){
//   //要自己判断数据传过来还有没有了
//   console.log(data.length)
//   if(data.length===0){
//     return ;
//   };
//   var data=JSON.parse(data.toString());
//   if(data.type==="genre"){
//     if(typeof item !=="undefined"){
//        this.queue(JSON.stringify(item)+"\n");
//     }
//     item={name:data.name,books:[]};
//   }
//   else if(data.type==="book"){
//     item.books.push(data.name);
//   }
// }
// function endThrough(){
//   console.log("end")
//   this.queue( JSON.stringify(item)+"\n");
//   this.queue(null);
// }


var combine=require('stream-combiner');
var split=require('split');
var through=require('through');
var zlib=require('zlib');
module.exports=function(){
  return combine(
      split(), //数据可以一行一行的传过来
      through(writeThrough,endThrough),//把数据一行行读过来，然后执行我的function再写进去
      zlib.createGzip()
  )
}
var result = "" , cwd = null;

function writeThrough(chunk){
  if(chunk.length === 0) {
    return;
  }
  var data = JSON.parse(chunk);
  console.log(data);
  if(data.type==="genre"){
    if(cwd){
       result += JSON.stringify(cwd)+"\n";
    }
    cwd = {name:data.name, books:[]};
  }
  else if(data.type==="book"){
    cwd.books.push(data.name);
  }
}
function endThrough(){
  this.queue(result);
  this.queue(null);
}


