var express = require('express');
var app = express();
var fs = require('fs');
var request = require('request');


app.get('/listar', function (req, res) {
   fs.readFile( __dirname + "/" + "usuario.json", 'utf8', function (err, data) {
       //console.log( data );
       res.end( data );//envia o resultado final do chamado
   });
})

app.post('/adicionar', function (req, res) {
  console.log(req.body);

   const nomeUsu = req.body.nome;
   let usu = [];
   usu.nome = req.body.nome;
   usu.senha = req.body.senha;
   usu.cargo = req.body.cargo;
   usu.id = req.body.id;

   fs.readFile( __dirname + "/" + "usuario.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data[nomeUsu] = usu;
       console.log( data );
       res.end( JSON.stringify(data));
   });
})
app.get('/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "usuario.json", 'utf8', function (err, data) {
       usuarios = JSON.parse( data );
       var usu = usuarios["usu"+req.params.id]
       console.log( usu );
       res.end( JSON.stringify(usu));
   });
})
app.delete('/delete/:id', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "usuario.json", 'utf8', function (err, data) {
       usuarios = JSON.parse( data );
       delete usuarios["usu" + req.params.id];

       console.log( data );
       res.end( JSON.stringify(data));
   });
})
var server = app.listen(7777, function (req, res) {

  var host = server.address().address
  var port = server.address().port

  console.log("O exemplo está rodando em http://%s:%s", host, port)

})
