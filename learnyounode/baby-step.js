// process.argv can get the args come from command line

var args = process.argv, i, sum =0;

for(i =2; i< args.length; i++) {
	sum += Number(args[i]);
}

console.log(sum);