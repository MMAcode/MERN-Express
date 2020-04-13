const express = require("express");
const app = express();
const cors = require("cors");
// const bodyParser = require("body-parser");
// Also, use body-parser to handle HTTP POST requests.
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
const logger = require("morgan");

const port = process.env.PORT || 3001;

// app.use(logger('dev'));
// app.use(cors()); //to enable Cross-Origin Resource Sharing


// NOT working - from React
// app.use(express.static("build-copy"));
// app.get('/', (req, res) => res.sendFile(__dirname + '/build-copy/index.html')); 


//NOT working ONLY online
app.use(express.static(__dirname +"/test"));    //works locally, NOT online
// app.get('/app', function (req, res, next) {  res.sendFile(path.join(__dirname, 'test', 'index.html')); });
app.get('/appReact', function (req, res, next) { res.sendFile(__dirname + '/build-copy/index.html'); });


//OK
app.get('/', (req, res) => {  res.sendFile(__dirname + '/html/index.html');});   
app.get('/a', (req, res) => {  res.sendFile(__dirname + '/test/index.html');});


var path = require('path');

/* GET home page. */

/* GET React App */




app.listen(port, () => console.log(`Miro's server-express listening at http://localhost:${port}.`))