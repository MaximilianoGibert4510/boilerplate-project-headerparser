// index.js
// where your node app starts
console.log("connected2");
// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/whoami', (req, res) => {
  // Obtener la dirección IP (usando la IP remota del cliente)
  const ipAddress = req.ip;

  // Obtener el idioma y el software del navegador
  const language = req.acceptsLanguages()[0];  // El primer idioma preferido
  const software = req.headers['user-agent'];  // Información del navegador y sistema operativo

  // Responder con el objeto en formato JSON
  res.json({
    ipaddress: ipAddress,
    language: language,
    software: software
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
