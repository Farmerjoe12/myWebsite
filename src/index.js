var express = require("express");
var handlebars = require("express-handlebars");
var path = require("path");

let baseRouter = require('./routes/base.router');
const config = require('./config/config');

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
app.listen(global.gConfig.node_port, () => console.log(`Express server running on ${global.gConfig.node_port}`));
