var fs = require('fs');
var path = require('path');
var colors = require('colors');
var dash = 1;
var d = "";

(function dirTree(filename) {
        d = "";
        for (var i = 0; i < dash; i++) {
            d += "  ";
        }

    var stats = fs.lstatSync(filename),
        info = {
            path: filename,
            name: path.basename(filename)
        };

    if (stats.isDirectory()) {
        console.log(d + "|-->" + info.name.yellow);
        dash++;
        fs.readdirSync(filename).map(function (all) {
            return dirTree(filename + '/' + all);
        });
        dash--;
    }
    else {
        //console.log(stats.mode & parseInt('777',8));
        //console.log((stats.mode & parseInt('777',8)).toString(8));
        if(info.name.split(".")[1]=="sh")
        console.log(d + "|-->" + info.name.green);
        else
        console.log(d + "|-->" + info.name.magenta);
    }
    return info;
})("/opt");
