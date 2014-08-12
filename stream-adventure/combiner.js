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
var item;
function writeThrough(data){
  //要自己判断数据传过来还有没有了
  if(data.length===0){
    return ;
  };
  var data=JSON.parse(data.toString());
  if(data.type==="genre"){
    if(typeof item !=="undefined"){
       this.queue(JSON.stringify(item)+"\n");
    }
    item={name:data.name,books:[]};
  }
  else if(data.type==="book"){
    item.books.push(data.name);
  }
}
function endThrough(){
  this.queue( JSON.stringify(item)+"\n");
  this.queue(null);
}
