/*
* testess
* Example Express app.
* Made by Moricz Gergo/reVVdeveloper
* Licensed under the MIT license
*/
const express = require('express');                                             //Get express module into express variable.
var app = express();                                                            //Clone express variable.
const port = 8080;                                                              //Specify the listening port

app.get('*', function(req, res) {                                               //Listen to every GET request.
  res.send('Hello World!');                                                     //Send 'Hello World!' as a response to the browser.
});

app.listen(port, function() {                                                   //Listen on specified port.
  console.log('Example app listening on port ', port, '!');                     //Log the message 'Example app listening on port 8080!'.
});
//If you didn't modify anything, start this with 'npm start'.
//Then, if you run this on your computer, type localhost:8080 into your browser.
