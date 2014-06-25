var fs=require('fs');
var data=fs.readFileSync("demo.b64");
var newbuff=new Buffer(data.toString('utf8'),'base64');



fs.writeFile("mysong1.mp3",newbuff, function (err) {
    if(err) console.log('unable to write');
})

data=fs.readFileSync("demo.hex");
newbuff=new Buffer(data.toString('utf8'),'hex');


fs.writeFile("mysong2.mp3",newbuff, function (err) {
    if(err) console.log('unable to write');
})

data=fs.readFileSync("demo.txt");
//newbuff=new Buffer(data);


fs.writeFile("mysong3.mp3",data, function (err) {
    if(err) console.log('unable to write');
})


console.log('conversion complite');