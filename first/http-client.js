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
var lineString='',
    stringArray={},
    count=0;
for(var i=0;i<3;i++){
  var key=process.argv[i+2];
  http.get(process.argv[i+2],function(response){
    response.pipe(bl(function(err,data){
        
        console.log(key);
        stringArray[key]=data.toString();
        count++;
        finalLoop(stringArray);
    }));
  })
}
function finalLoop(stringArray){

  if(count>=3){
    var key='';
    for(var i=0;i<3;i++){
      key=process.argv[i+2].toString();
      console.log(stringArray[key]);
    }
  }
}
