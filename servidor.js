var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "usuario.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var server = app.listen(7777, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("O exemplo está rodando em http://%s:%s", host, port)

})
