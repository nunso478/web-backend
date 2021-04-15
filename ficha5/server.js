//importar o express
const { json, response } = require('express');
const e = require('express');
const express = require('express');
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
app.get('/', (req, res) => {
  res.send('Hello Post!');
});
 
// list all persons endpoint
app.get('/users', (req, res) => {
  var persons = readfileSync('./person.json');
    res.send(JSON.parse(persons));
});

app.post('/users',function(req,res){
  
  var persons = JSON.parse(readfileSync('./person.json'));
  var length = Object.keys(persons).length;
  var id = ++length;

  var age = persons.person1.age;
  //var age1 = persons["person1"].age;

  var newperson = req.body;
  newperson.id = id;


  persons["person" + id] = newperson;

  writefileSync('./person.json',JSON.stringify(persons));

  res.send(persons);
});

app.delete('/users',function(req,res){
  var persons = JSON.parse(readfileSync('./person.json'));
  var id = req.body.id;

  var person = persons["person" + id];
  if(person != undefined){
    delete persons["person" + id];
    res.send(persons);
    writefileSync('./person.json', JSON.stringify(persons));

  }
  else{
    res.send("id inxistente")
  }
  

});
app.delete('/users/:id',function(req,res){
  var persons = JSON.parse(readfileSync('./person.json'));
  var id = req.params.id;

  var person = persons["person" + id];
  if(person != undefined){
    delete persons["person" + id];
    res.send(persons);
    writefileSync('./person.json', JSON.stringify(persons));

  }
  else{
    res.send("id inxistente")
  }
  

});

app.get('/users/:id', (req, res) => {
  var persons = JSON.parse(readfileSync('./person.json'));
  var id = req.params.id;
  
  var person = persons["person" + id];
  if(person != undefined){
    res.send(person);
  }
  else{
    res.send("id inxistente");
  }


});

app.put('/users/:id', (req, res) => {
  var persons = JSON.parse(readfileSync('./person.json'));
  var id = req.params.id;
  var person = persons["person" + id];
  if(person != undefined){
     persons["person" + id] = res.body;
     persons["person" + id].id = id;
     writefileSync('./person.json', JSON.stringify(persons));
     res.send(persons);
  }
  else{
    res.send("id inxistente");
  }

})



// alt + shift + F por direito

// metodo que arranca o servidor http e fica a escuta.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});