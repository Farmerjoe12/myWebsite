var express = require("express");
var handlebars = require("express-handlebars");
var path = require("path");

const PORT = 8080;

let baseRouter = require('./routes/base.router');

// set up the engine
var app = express();
app.set("views", path.join(__dirname, "views/"));
app.engine(
  "hbs",
  handlebars({
    defaultLayout: "main",
    extname: ".hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials"
  })
);
app.set("view engine", "hbs");

// styling
app.use(express.static(path.join(__dirname, '/public')));

// middleware
app.use(express.json());
app.use(express.urlencoded());

// routing
app.use('/', baseRouter);

// start the server
app.listen(PORT, () => console.log(`Express server running on ${PORT}`));
