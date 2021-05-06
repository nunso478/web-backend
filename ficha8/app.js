//importar o express
const { json, response } = require('express');
const express = require('express');
const fs = require("fs");
const mysql = require('mysql');
//importar swagger
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
//
const swaggerOptions ={
  swaggerDefinition:{
    info:{
      version:"1.0.0",
      title:"ficha8 API",
      description:"Ficha 8 API information",
      contact:{
        name:"TPSI-DWB"
      },
      servers:["http://localhost:3000"],
    },
    //definiçao de  
    definitions:{
      "Person":{
        "type":"object",
        "properties": {
          "id":{
            "type":"integer",
            "x-primery-key":true
          },
          "firstname":{
            "type":"string"
          },
          "lastname":{
            "type":"string"
          },
          "profession":{
            "type":"string"
          },
          "age":{
            "type":"integer",
            "format":"int64"
          },
        }
      }
    }
  },
  apis:["app.js"]
};

// instanciar o express
const app = express()
// definir a porta do servidor http
const port = 3000

const swaggerDocs = swaggerJSDoc(swaggerOptions);
//funçoes midleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));


var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'ficha7'

});

/**
 *  @swagger
 *  /persons:
 *    get:
 *      tags:
 *        - Persons
 *      summary: Gets a list of persons
 *      description: Returns a list of persons
 *      produces:
 *           - application/json
 *      responses:
 *          200:
 *              descrition: An array of persons
 *              schema:
 *                $ref: '#/definitions/Person'
 */
app.get('/persons',(request,response)=>{
 
  connection.query("SELECT * FROM persons",function(error,results,fields){
    if(error){
      response.status(404);
      response.end(error.message);
    }
    response.send(results);

  });

});
/**
 *  @swagger
 *  /persons:
 *    post:
 *      tags:
 *        - Persons
 *      summary: Gets a list of persons
 *      description: Returns a list of persons
 *      produces:
 *           - application/json
 *      parameters:
 *           - name: Model
 *             description: Sample person
 *             in: body
 *             required: true
 *             schema:
 *                $ref: '#/definitions/Person'
 *      responses:
 *          200:
 *              descrition: Sucessfully created
 *              
 */
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





/**
 *  @swagger
 *  /persons:
 *    delete:
 *      tags:
 *        - Persons
 *      summary: Delete a list of persons
 *      description: Returns a list of persons
 *      produces:
 *           - application/json
 *      parameters:
 *           - name: id
 *             description: Delete person
 *             in: path
 *             required: true
 *             
 *      responses:
 *          200:
 *              descrition: Sucessfully Operation
 *              schema:
 *                $ref: '#/definitions/Person'
 * 
 *              
 */
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





//app.delete('/persons/:id',(request,response)=>{
//  var id = request.params.id
//  connection.query('DELETE FROM persons WHERE ID = ?', id,function(error,results,fields) {
//    if (error){
//      response.status(404);
//      response.end(error.message);
//    }
//    response.send("DELETED: " + results.affectedRows + " entry(s)");
    

//});
//});


/**
 *  @swagger
 *  /persons/{id}:
 *    get:
 *      tags:
 *        - Persons
 *      summary: Gets a list of persons
 *      description: Returns a list of persons
 *      produces:
 *           - application/json
 *      parameters:
 *           - name: id
 *             description: insert ID 
 *             in: path
 *             required: true
 *             schema:
 *                $ref: '#/definitions/Person'
 *      responses:
 *          200:
 *              in: Find id the person
 *    
 *              
 */
app.get('/persons/:id',(request,response)=>{
  var id = request.params.id
  connection.query('SELECT * FROM persons WHERE ID = ' + id,function(error,results,fields) {
   if (error){
      response.status(404);
      response.end(error.message);
    }
    
    if(results.lenght == 0){
      response.status(404);
      response.end('id not found ');
    }
    else
    {
       response.send(results);
    }
});
});

/**
 *  @swagger
 *  /persons/{age}/{profession}:
 *    get:
 *      tags:
 *        - Persons
 *      summary: Gets a list of persons
 *      description: Returns a list of persons
 *      produces:
 *           - application/json
 *      parameters:
 *           - name: age
 *             description: age
 *             in: path
 *             required: true
 *           - name: profession
 *             description: profession
 *             in: path
 *             required: true
 *             schema:
 *                $ref: '#/definitions/Person'
 *      responses:
 *          200:
 *              in: Find age and profession the person
 *    
 *              
 */
app.get('/persons/:age/:profession',(request,response)=>{
  var age = request.params.age
  var profession = request.params.profession
  connection.query('SELECT * FROM persons WHERE age =? AND profession =?',[age,profession] ,function(error,results,fields) {
   if (error){
      response.status(404);
      response.end(error.message);
    }
    
    if(results.lenght == 0){
      response.status(404);
      response.end('id not found ');
    }
    else
    {
       response.send(results);
    }
});
});

/**
 *  @swagger
 *  /persons/{id}:
 *    put:
 *      tags:
 *        - Persons
 *      summary: Update a list of persons
 *      description: Returns a list of persons
 *      produces:
 *           - application/json
 *      parameters:
 *           - name: id
 *             description: User ID
 *             in: path
 *             required: true
 *           - name: Model
 *             description: alter column
 *             in: body
 *             required: true
 *             schema:
 *                $ref: '#/definitions/Person'
 *      responses:
 *          200:
 *              descrition: Sucessfully  Update
 *              
 */
app.put('/persons/:id',(request,response)=>{
  var id = request.params.id
  var details = request.body;
  connection.query('UPDATE persons set ? WHERE ID = ?' ,[details,id],
  function(error,results,fields) {
   if (error){
      response.status(404);
      response.end(error.message);
    }
    
    if(results.lenght == 0){
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