// -------------Dependencies----------------
const express = require('express');
const expressHandle = require ('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');

//---------Instance of express app stored in 'app' variable-----
const app = express ();

// ------------------Set port-------------------
const PORT = process.env.PORT || 8080;

// -----------------Set Handlebatrs as default templating engine --------------
app.engine('handlebars', expressHandle({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//-----------grabe data from mysql


