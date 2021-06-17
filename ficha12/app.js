var fs = require('fs');

function readfile(path) {
    var file = fs.readFile(path, (err,data)=> {
        console.log(data.toString());
        console.log("file read");
    });
    
}
function readFilestream(path)
{
    var readerStream = fs.createReadStream(path);
    readFilestream.setEncoding('UTF8');
    readerStream.on('data', function(chunk) {
        data += chunk;
    });
    readFilestream.on('end', function(){
        console.log(data);
    });
    readFilestream.on('error', function(err){
        console.log(err.stack);
    })
}


readfile("text.txt");