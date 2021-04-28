//importar o express
const { json, response } = require('express');
const express = require('express');
const fs = require("fs");
const mysql = require('mysql');

// instanciar o express
const app = express()
// definir a porta do servidor http
const port = 3000
//require para o file system
//const fs = require("fs");
const { request } = require('http');
//funçoes midleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'ficha7'

});


app.get('/persons',(request,response)=>{
 
  connection.query("SELECT * FROM persons",function(error,results,fields){
    if(error){
      response.status(404);
      response.end(error.message);
    }
    console.log(results);

  });

});

app.post('/persons',(request,response)=>{
  var details = request.body;
  connection.query('INSERT INTO persons set ?',[details],function(error,results,fields) {
    if (error){
      response.status(404);
      response.end(error.message);
    }
    response.send(results);
    

  });



});


// metodo que arranca o servidor http e fica a escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
 

});