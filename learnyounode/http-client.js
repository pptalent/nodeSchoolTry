var bl=require('bl');
var http=require('http');
// http.get(process.argv[2],function(response){
  //7.
  // response.on('data',function(data){
  //   //并发获取
  //   console.log(data)
  // });
  // response.setEncoding('utf8')

  //8.
  // response.pipe(bl(function(err,data){
  //   console.log(data.length);
  //   console.log(data.toString());
  // }))

// });

//9.
var lineString='',
    result=[],
    count=0;
for(var i=0;i<3;i++){
  httpGet(i);
}
function print(){
  for(var i=0;i<3;i++){
    console.log(result[i]);
  }
}
function httpGet(i){
  var key=process.argv[i+2];
  http.get(key,function(response){
    response.pipe(bl(function(err,data){
      result[i]=data.toString();
      count++;
      if(count>=3){
        print();
      }
    }));
  })
}
