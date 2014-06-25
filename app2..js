var fs = require('fs');
var path = require('path');
var colors = require('colors');
var async =require("async");
var dash = 1;
var d = "";
var task=[];

(function dirTree(filename) {
    d = "";
    for (var i = 0; i < dash; i++) {
        d += " ";
    }

    fs.lstat(filename, function(err, stats) {
        if(err) return; //console.log("ERROR WHILE READING".red);
        else {
            info = {
                path: filename,
                name: path.basename(filename)
            };

            if (stats.isDirectory()) {

                console.log(d + "|-->" + info.name.yellow);
                dash++;

                fs.readdir(filename, function (err, list) {
                    if (err) console.log("error again ".red);

                    else {


                       dirTree(filename + '/' + list[1]);
                        for(var i=0;i<list.length ;i++)

                        var lst=[list[i]];
                        if(!!list[0])
                            list.map(function (all) {

                            //console.log(all);
                            return dirTree(filename + '/' + all);


                        })
                    }

                })


            }
            else {
                if (info.name.split(".")[1] == "sh")
                    console.log(d + "|-->" + info.name.green);
                else
                    console.log(d + "|-->" + info.name.magenta);
            }
        }
    });



})("/home/intelligrape/Desktop/session/jquery");
