// TODO: make a new router for the tigers resource
// and make some REST routes for it, exactly like for lions
// make a middleware that just logs the word 'tiger' to the console
// when a request comes in to the server


var _ = require('lodash');
var tigerRouter = require('express').Router();
var tigers = [];
var id = 0;
// global.config = {}
// console.log(config)
var updateId = function(req, res, next) {
  if (!req.body.id) {
    id++;
    req.body.id = id + '';
  }
  next();
};

tigerRouter.param('id', function(req, res, next, id) {
  var lion = _.find(tigers, {id: id});

  if (lion) {
    req.lion = lion;
    next();
  } else {
    res.send();
  }
});

tigerRouter.get('/', function(req, res){
  res.json(tigers);
});

tigerRouter.get('/:id', function(req, res){
  var lion = req.lion;
  res.json(lion || {});
});

tigerRouter.post('/', updateId, function(req, res) {
  var lion = req.body;

  tigers.push(lion);

  res.json(lion);
});


tigerRouter.put('/:id', function(req, res) {
  var update = req.body;
  if (update.id) {
    delete update.id
  }

  var lion = _.findIndex(tigers, {id: req.params.id});
  if (!tigers[lion]) {
    res.send();
  } else {
    var updatedLion = _.assign(tigers[lion], update);
    res.json(updatedLion);
  }
});

module.exports = tigerRouter;
