var duplexer=require('duplexer'),
    through=require('through');
module.exports=function(counter){
  var countries={};
  var input=through(write,end);
  return duplexer(input,counter);
  function write(data){
      countries[data.country]=(countries[data.country] || 0)+1;
  }
  function end(){
      counter.setCounts(countries);
  }
}
//experiment21
