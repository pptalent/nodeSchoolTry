var arguments=process.argv,
    sum=0;
for(var i=2;i<arguments.length;i++){
  sum+=parseInt(arguments[i]);
}
console.log(sum);
