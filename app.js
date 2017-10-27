// var express = require("express");
// var http = require('http');
// var path = require('path');
//
// //const api = require('./server/routes/api');
//
// var app = express();
// var bodyParser = require('body-parser')
//
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
//
// // parse application/json
// app.use(bodyParser.json())
//
//
// //serve static file (index.html, images, css)
// app.use(express.static(path.join(__dirname + 'dist')));
//
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
//
// var port = process.env.PORT || 3000
// const server = http.createServer(app);
//
// server.listen(port, () => console.log("To view your app, open this link in your browser: http://localhost:" + port));
//
// // app.listen(port, function() {
// //     console.log("To view your app, open this link in your browser: http://localhost:" + port);
// // });
const express = require('express')
const app = express()
var path = require('path');

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.use(express.static(__dirname + '/dist'));

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
