//importar o express
const { error } = require('console');
const { json, response } = require('express');
const fs = require("fs");
const { request } = require('http');
const express = require('express');
var app = express();
var dotenv = require("dotenv");
dotenv.config();
// definir a porta do servidor http
const port = 3000
app.use(express.json()); // get information from html forms
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // set up ejs for templating
//require('./routes/product.js')(app);
var productRouter = require('./routes/product.js');
const router = require('./routes/product.js');
app.use('/product',productRouter);
//app.use('/test',userRouter);
// metodo que arranca o servidor http e fica a escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);

});