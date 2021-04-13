//importar o express
const express = require('express');
const fs = require("fs");

// funçao para ler um ficheiro com caminho passado como argumnto
function readfileSync( path) {
    var content = fs.readFileSync(path);
    return content;
}
// instanciar o express
const app = express()
// definir a porta do servidor http
const port = 3000

// default get endpoint
app.get('/', (req, res) => {
  res.send('Hello Post!');
});
// list all persons endpoint
app.get('/test', (req, res) => {
    res.send("ENDPOINT DE TESTE");
});
// list all persons endpoint
app.get('/users', (req, res) => {
  var persons = readfileSync('./person.json');
    res.send(JSON.parse(persons));
});



// metodo que arranca o servidor http e fica a escuta.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});