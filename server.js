// -------------Dependencies----------------
var express = require('express');
var expressHandle = require ('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require('mysql');

//---------Instance of express app stored in 'app' variable-----
var app = express ();

// ------------------Set port-------------------
var PORT = process.env.PORT || 8080;

// -----------------Set Handlebatrs as default templating engine --------------
app.engine('handlebars', expressHandle({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//----------Import routes---------------------------
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


