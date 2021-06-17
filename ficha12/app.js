var fs = require('fs');

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
        writerStream.end();
    });
    readerStream.on('error', function(err){
        console.log(err.stack);
    })
}

//readFile("text.txt");
readFileStream("text.txt");
var x = 0;