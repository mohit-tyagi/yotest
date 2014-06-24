/**
 * Created by intelligrape on 23/6/14.
 */


var fs=require("fs");
var arr= [];
var data=new Object();
var temp;
var file_data=fs.readFileSync("/home/intelligrape/.bash_history","utf8");
arr=file_data.split("\n");

for (var i = 0; i < arr.length; i++) {
   var arr1=arr[i].split(" ");
   temp=arr1[0];
     //console.log(temp);
    if(temp in data)
        data[temp] = ++data[temp];
    else
    data[temp]=1;
   }

var record=" ";
for(var i in data)
    record += i + " , "+data[i]+"\n";


console.log(record);

fs.writeFile("./reportfinal.csv" ,record,function(){ console.log("Data enter properly")})


/*

console.log(data);
var str=JSON.stringify(data);
console.log(str);
*/



/*
if(file_data)
console.log(file_data);
*/
