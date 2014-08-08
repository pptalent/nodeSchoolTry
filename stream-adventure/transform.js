var through=require('through');
var tr=through(throughWrite);
function throughWrite(buffer){
    this.queue(buffer.toString().toUpperCase());
}
function throughEnd(){
  // this.queue(null);
}
process.stdin.pipe(tr).pipe(process.stdout);
