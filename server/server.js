// TODO: make this work.
// if yuo go to localhost:3000 the app
// there is expected crud to be working here
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'
app.use(express.static('../client'));

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var lions = [];
var id = 0;

// TODO: make the REST routes to perform CRUD on lions

app.get('/lions', (req, res) => {
  res.json(lions);
})

app.get('/lions/:id', (req, res) => {
  var lion = _.find(lions, {id: req.params.id});
  console.log(req.params);
  res.json(lion || {});
})

app.post('/lions', (req, res) => {
  // var lion1 = req.body;
  // lion1 = JSON.stringify(lion1);
  // console.log(lion1)
  // var lion2 = JSON.parse(lion1);
  // console.log(lion2)

  var lion = req.body;
  id++;
  console.log(lion);
  console.log(lion.name)
  lion.id = id + '';
  lions.push(lion);
  console.log(lions)
  res.json(lion);
})

app.put('/lions/:id', (req, res) => {
  var update = req.body;
  if(update.id) {
    // case try to update id
    delete update.id
  }

  var lion = _.findIndex(lions, {id: req.params.id});
  console.log(lion)
  if(!lions[lion]) {
    res.send();
  } else {
    var updatedLion = _.assign(lions[lion], update)
    res.json(updatedLion)
  }
})

app.delete('/lions/:id', (req, res) => {
  var update = req.body;
  if(update.id) {
    // case try to update id
    delete update.id
  }
  var lion = _.findIndex(lions, {id: req.params.id});
  console.log(lion)
  if(!lions[lion]) {
    res.send();
  } else {
    var deleteLion = lions[lion];
    console.log(deleteLion)
    lions.splice(lion, 1)
    res.json(deleteLion)
  }
})

app.listen(3000);
console.log('on port 3000');
