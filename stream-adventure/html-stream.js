var trumpt=require('trumpet'),
    through=require('through');
var tr=trumpt();
var stream=tr.select('.loud').createStream();
stream.pipe(through(function(buffer){
    this.queue(buffer.toString().toUpperCase());
})).pipe(stream);
process.stdin.pipe(tr).pipe(process.stdout);
