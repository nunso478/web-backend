var fs = require('fs');
var zlib = require('zlib');


function readfile(path) {
    var file = fs.readFile(path, (err,data)=> {
        console.log(data.toString());
        console.log("file read");
    });
    
}
function readFileStream(path)
{

    var readerStream = fs.createReadStream(path);
    var writerStream = fs.createWriteStream('copy.txt');
    readerStream.setEncoding('utf-8');
    readerStream.on('data', function(chunk) {
        //data += chunk;
        writerStream.write(chunk,'utf-8');
    });
    readerStream.on('end', function(){      
        console.log("file read");
        writerStream.end();
    });
    readerStream.on('error', function(err){
        console.log(err,stack);
    });
}

//readFile("text.txt");
//readFileStream("text.txt");

var readerStream = fs.createReadStream('text.txt');
var writerStream = fs.createWriteStream('copy.txt.gz');
readerStream.pipe(writerStream);



readerStream.pipe(zlib.createGzip()).pipe(writerStream);


var x = 0;