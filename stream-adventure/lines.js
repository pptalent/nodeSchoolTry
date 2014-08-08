var split=require('split');
var through=require('through');
process.stdin
  .pipe(split())
  .pipe(through(throughWrite))
  .pipe(process.stdout);
var count=0;
function throughWrite(buffer){
    count++;
      var result=count % 2 ===0?true:false;

      if(result){
          this.queue(buffer.toString().toUpperCase()+"\n");

      }
      else{
          this.queue(buffer.toString().toLowerCase()+"\n");
      }
}
