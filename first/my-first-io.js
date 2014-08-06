var fs=require('fs');
var file=fs.readFileSync(process.argv[2]).toString();
var splitArray=file.split("\n");
// console.log("origin file>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+file);
// console.log("last paragraph>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+splitArray[splitArray.length-1]);
console.log(splitArray.length-1);
