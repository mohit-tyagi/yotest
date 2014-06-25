var fs= require('fs');
var data=fs.readFileSync("/home/intelligrape/Desktop/abc.txt");
console.log(data);

console.log(data.toString());
console.log(data.toString('utf8'));
console.log(data.toString('hex'));

var str=data.toString('hex');
var buf =new Buffer(str,'utf8');
var buf1=new Buffer(str.toString('utf8'),'hex')
console.log(buf1.toString());
