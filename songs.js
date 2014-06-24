
var fs=require('fs');
var data=fs.readFileSync("/home/intelligrape/Desktop/Banjaara.mp3");

var buf = new Buffer(data);
console.log(data);

fs.writeFile("demo.b64",buf.toString('base64'), function (err) {
    if(err) console.log('unable to write');
});


fs.writeFile("demo.hex",buf.toString('hex'), function (err) {
    if(err) console.log('unable to write');
});
fs.writeFile("demo.txt",buf, function (err) {
    if(err) console.log('unable to write');
});
fs.writeFile("mysong.mp3",buf, function (err) {
    if(err) console.log('unable to write');
})

/*

var databk=fs.readFileSync("/home/intelligrape/WebstormProjects/yoTestFile2/demo.b64");

console.log(databk);
var buf = new Buffer(databk);
console.log(buf.to);


fs.writeFile("mysong.mp3",buf.toString('binary'), function (err) {
    if(err) console.log('unable to write');
})
*/
