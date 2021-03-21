var router = require('express').Router();
var logger = require('../../util/logger');

// setup boilerplate route jsut to satisfy a request
// for building
var controller = require('./postController');
var createRoutes = require('../../util/createRoutes');
createRoutes(controller, router);

// router.param('id', function(){});

// router.route('/')

// router.route('/:id')


module.exports = router;
