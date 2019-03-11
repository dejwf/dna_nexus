const fs = require("fs"), readline = require('readline'), stream = require("stream");
var content = [];
const fileName = process.argv[2];
const position = process.argv[3];
// console.log(process.argv);

const instream = fs.createReadStream(fileName);

let outstream = new stream;
outstream.readable = true;
outstream.writable = true;

let rl = readline.createInterface({
    input: instream,
    output: outstream,
});


rl.on('line', function(line) {
    // console.log(line);
    content.push(line);
    //Do your stuff ...
    //Then write to outstream
});

rl.on("close",function () {
    //closed stream, file read?
    console.log(content[position]);
});

rl.on("error", function () {
    console.log(content[content.length+1])
})




