//importar o express
const { json, response } = require('express');
const e = require('express');
const express = require('express');
//require para o file system
const fs = require("fs");

//const bodyPlaser = require("body-parser")
// funçao para ler um ficheiro com caminho passado como argumnto
function readfileSync( path) {
    var content = fs.readFileSync(path);
    return content;
}
function writefileSync(path,data) {
  fs.writeFileSync(path,data);
 
}
// instanciar o express
const app = express()
// definir a porta do servidor http
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// default get endpoint
app.get('/', (request, response) => {
    //var body = "<!DOCTYPE html><html> <head><title>Page Title</title></head><body><h1>This is a Heading</h1><p>This is a paragraph.</p></body></html>";
    var file = fs.readFileSync("./index.html",'utf-8');
    var date = new Date();
    file = file.replace('{date}',date.toLocaleDateString());

    response.writeHead(200, {
        'content-Lenght':Buffer.byteLength(file),
        'content-Type':'text/html'
    });
    response.end(file);
    //4.C as diferenca do text ou html é alterar content-Type quando é usamos html põe "text/html" e se for txt põe "text/plain".
});
// metodo que arranca o servidor http e fica a escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    //se por dentro da pasta tenho fazer ./file/log.text
    fs.open('log.text','a',function(err,fd){
        console.log("File was created " + fd);
    });


  });