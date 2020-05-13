const express = require('express');
const path = require('path');
const os = require('os');

// Server express
var app = express();

/*
es6Renderer = require('express-es6-template-engine'),
  app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.get('/', function(req, res) {
  res.render('index', {locals: {title: 'Welcome!'}});
});*/


app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/welcome', function (req, res) {
    res.send('');  });

app.use(function(req, res, next) {
    res.status(404).send("");  });


// Port and try on retriveing Port nummber
app.listen(3000), function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
};
// retriving PIadress
var ipadress = os.networkInterfaces( );
console.log( ipadress );


//https://stackoverflow.com/questions/15152250/node-js-server-using-express-js-uploaded-file-name

//https://stackoverflow.com/questions/18386361/read-a-file-in-node-js

// http://localhost:3000
