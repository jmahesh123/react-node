var express = require('express');
var app = express();
var routes = express.Router();
const mySql = require('mysql');
const cors = require('cors');

const connection = mySql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin',
  database: 'sys'
});

connection.connect(err => {
  if (err) {
    return err;
  }
})

app.use(cors());
/*
  Routings
*/
app.get('/api/todoList', function (req, res) {
  let todoList = [{
      id: 1,
      name: "Milk"
    },
    {
      id: 2,
      name: "Learn Course"
    },
    {
      id: 3,
      name: "Pay Bill"
    }
  ];
  connection.query('select * from todo_list', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});


app.use(routes);
app.listen(8081);
console.log("App listening on port " + 8081);