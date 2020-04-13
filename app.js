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



// const playersRouter = require("./routes/players");
// app.use("/players", playersRouter);




// module.exports = app;

// app.get('/', (req, res) => res.sendFile(__dirname+'/html/serverHtmlTest.html'));

// app.use(express.static("build-copy"));
app.use(express.static("test"));

// app.get('/', (req, res) => res.sendFile(__dirname + '/html/index.html'));


app.listen(port, () => console.log(`Miro's server-express listening at http://localhost:${port}.`))