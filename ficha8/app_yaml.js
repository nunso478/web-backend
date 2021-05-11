//importar o express
const { json, response } = require('express');
const express = require('express');
const fs = require("fs");
const mysql = require('mysql');
//importar swagger
const swaggerJSDoc = require('./swagger.json');
const swaggerUi = require('swagger-ui-express');
//
 

// instanciar o express
const app = express()
// definir a porta do servidor http
const port = 3000

//funçoes midleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerJSDoc));


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
    response.send(results);

  });

});
 
app.post('/persons',(request,response)=>{
  var details = request.body;
  connection.query('INSERT INTO persons set ?',[details],function(error,results,fields) {
    if (error){
      response.status(404);
      response.end(error.message);
    }
    response.send("Inserted ID is: ",results);
    

  });

});


// 1º no body
   //{"id":0}
// 2ºParams
  //'/person/:id'
  //localhost:3000/persons/1
  //request.params.id
// 3ºQuery
   //'persons'
   //localhost:3000/personssons?id=1
   // request.query.id





 
app.delete('/persons',(request,response)=>{
  var id = request.body.id
  connection.query('DELETE  FROM persons WHERE ID = ?', id,function(error,results,fields) {
    if (error){
      response.status(404);
      response.end(error.message);
    }
    response.send("DELETED: " + results.affectedRows + " entry(s)");
    

  });
});




 
app.delete('/persons/:id',(request,response)=>{
 var id = request.params.id
  connection.query('DELETE FROM persons WHERE ID = ?', id,function(error,results,fields) {
    if (error){
     response.status(404);
      response.end(error.message);
    }
    response.send("DELETED: " + results.affectedRows + " entry(s)");
    

});
});


 
app.get('/persons/:id',(request,response)=>{
  var id = request.params.id
  connection.query('SELECT * FROM persons WHERE ID = ' + id,function(error,results,fields) {
   if (error){
      response.status(404);
      response.end(error.message);
    }
    
    if(results.length == 0){
      response.status(404);
      response.end('id not found ');
    }
    else
    {
       response.send(results);
    }
});
});

 
app.get('/persons/:age/:profession',(request,response)=>{
  var age = request.params.age
  var profession = request.params.profession
  connection.query('SELECT * FROM persons WHERE age =? AND profession =?',[age,profession] ,function(error,results,fields) {
   if (error){
      response.status(404);
      response.end(error.message);
    }
    
    if(results.length == 0){
      response.status(404);
      response.end('id not found ');
    }
    else
    {
       response.send(results);
    }
});
});

 
app.put('/persons/:id',(request,response)=>{
  var id = request.params.id
  var details = request.body;
  connection.query('UPDATE persons set ? WHERE ID = ?' ,[details,id],
  function(error,results,fields) {
   if (error){
      response.status(404);
      response.end(error.message);
    }
    
    if(results.length == 0){
      response.status(404);
      response.end('id not found ');
    }
    else
    {
      details.id = id
       response.send(details);
    }
});
});
// metodo que arranca o servidor http e fica a escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);

});