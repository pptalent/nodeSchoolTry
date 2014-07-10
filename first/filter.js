var myModule=require('./modular.js');

myModule(process.argv[2],process.argv[3],function(err,newList){
  if(err){
    console.log(err);
    return;
  }
  else{
    newList.forEach(function(value){
      console.log(value);
    })
  }
});
