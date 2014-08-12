var tar=require('tar'),
    crypto=require('crypto'),
    zlib=require('zlib'),
    through=require('through');

var stream=crypto.createDecipher(process.argv[2],process.argv[3]);
var parser=tar.Parse();
parser.on('entry',function(entry){
  if(entry.type!=='File') return;
  var hasher=crypto.createHash('md5',{encoding:'hex'});
    entry.pipe(hasher).pipe(through(null,function(){
        this.queue(" "+entry.path+"\n");
    })).pipe(process.stdout);
});
process.stdin
  .pipe(stream)
  .pipe(zlib.createGunzip())
  .pipe(parser)
  ;
// var crypto = require('crypto');
// var decipher = crypto.createDecipher(process.argv[2], process.argv[3]);
// var gunzip = require('zlib').createGunzip();
// var parser = require('tar').Parse();
// var through = require('through');
//
// parser.on('entry', function (e) {
// if (e.type !== 'File') {
// return ;
// }
// var hasher = crypto.createHash('md5', {encoding : 'hex'});
// e.pipe(hasher).pipe(through(null, function () {
// this.queue(' ' + e.path + '\n');
// })).pipe(process.stdout);
// });
//
// process.stdin.pipe(decipher).pipe(gunzip).pipe(parser);
