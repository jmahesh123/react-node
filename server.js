var express = require('express');
var app = express();
var routes = express.Router();

/*
  Routings
*/
app.get('/', function (req, res) {
    res.send('home');
});


app.use(routes);
app.listen(8081);
console.log("App listening on port " + 8081);