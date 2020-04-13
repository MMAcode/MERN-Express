const express = require("express");
const app = express();
const cors = require("cors");
// const bodyParser = require("body-parser");
// Also, use body-parser to handle HTTP POST requests.
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
const logger = require("morgan");

const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(cors()); //to enable Cross-Origin Resource Sharing

 // NOT working - from React
// app.use(express.static("build-copy"));
// app.get('/', (req, res) => res.sendFile(__dirname + '/build-copy/index.html')); 


// app.use(express.static("test"));    //works locally, NOT online
// app.get('/', (req, res) => res.sendFile(__dirname + '/html/index.html'));   //works
// app.get('/', (req, res) => res.sendFile(__dirname + '/test/index.html'));   //works

var path = require('path');

/* GET home page. */
app.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET React App */
app.get('/app', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'test', 'index.html'));
});



app.listen(port, () => console.log(`Miro's server-express listening at http://localhost:${port}.`))