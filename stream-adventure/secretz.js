// var tar=require('tar'),
//     crypto=require('crypto'),
//     zlib=require('zlib'),
//     through=require('through');

// var stream=crypto.createDecipher(process.argv[2],process.argv[3]);
// var parser=tar.Parse();
// parser.on('entry',function(entry){
//   if(entry.type!=='File') return;
//   var hasher=crypto.createHash('md5',{encoding:'hex'});
//     entry.pipe(hasher).pipe(through(null,function(){
//         this.queue(" "+entry.path+"\n");
//     })).pipe(process.stdout);
// });
// process.stdin
//   .pipe(stream)
//   .pipe(zlib.createGunzip())
//   .pipe(parser)
//   ;

var through = require("through");
var crypto = require("crypto");
var tar = require("tar");
var zlib = require("zlib");

var parser = tar.Parse();
parser.on('entry', function(entry) {
  if(entry.type!=='File') return;
  var hasher=crypto.createHash('md5',{encoding:'hex'});
  entry.pipe(hasher)
    .pipe(through(function(data) {
      this.queue(data+" "+entry.path+"\n");
    },function(){
      this.queue(null);
    }))
    .pipe(process.stdout);
})

var deCrypto = crypto.createDecipher(process.argv[2], process.argv[3]);

process.stdin
  .pipe(deCrypto)
  .pipe(zlib.createGunzip())
  .pipe(parser)
