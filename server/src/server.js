// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();
var server = require('./util.js');
var reverseString = server.reverseString;
var bodyParser = require('body-parser');

// Defines what happens when it receives the `GET /` request
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Starts the server on port 3000!
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use(bodyParser.text());

// Handle POST /reverse [data]
app.post('/reverse', function (req, res) {
  // How do we get the input text?
  // How do we send the output text?
  if (typeof(req.body) === 'string') {
    var reversed = reverseString(req.body);
    res.send(reversed);
  } else {
    res.status(400).end()
    // POST did not contain a string. Send an error code back!
  }
});
