var exec=require('child_process').exec;
var querystring=require("querystring");
var fs=require('fs');
var formidable=require("formidable");

function start(response,request){
  // exec("ls -lah",
  // {timeout:10000,maxBuffer:20000*1024},
  // function(error,stdout,stderr){
    response.writeHead(200,{"Content-Type":"text/html"});
     var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="file" name="upload" multiple="multiple" />'+
    '<input type="submit" value="Upload file" />'+
    // '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
    response.write(body);
    response.end();
  // });
}

function upload(response,request){
  // response.writeHead(200,{"Content-Type":"text/plain"
  //               });
  // response.write(querystring.parse(postData).text);
  // response.end();
  var form=new formidable.IncomingForm();
  form.parse(request,function(error,fields,files){
        try{
            fs.renameSync(files.upload.path,'tmp/test.png');
        }
        catch(e){
            console.log(e);
        }
      response.writeHead(200,{"Content-Type":"text/html"});
      response.write("receive image:<br />");
      response.write("<a href='/show'><img src='/show' /></a>");
      response.end();
  });
}

function show(response,request){
  fs.readFile('tmp/test.png','binary',function(error,file){
    if(error){
      response.writeHead(500,{"Content-Type":"text/plain"});
      response.write(error+"\n");
      response.end();
    }
    else{
      response.writeHead(200,{'Content-Type':"image/png"});
      response.write(file,'binary');
      response.end();
    }
  });
}


exports.start=start;
exports.upload=upload;
exports.show=show;
