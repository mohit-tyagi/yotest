
var fs=require('fs');
var data=fs.readFileSync("/home/intelligrape/Desktop/Banjaara.mp3");

var buf = new Buffer(data);
//console.log(data);

fs.writeFile("demo.b64",buf.toString('base64'), function (err) {
    if(err) console.log('unable to write');
});


fs.writeFile("demo.hex",buf.toString('hex'), function (err) {
    if(err) console.log('unable to write');
});
fs.writeFile("demo.txt",buf, function (err) {
    if(err) console.log('unable to write');
});

console.log('done');