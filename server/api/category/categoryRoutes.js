var router = require('express').Router();
var logger = require('../../util/logger');
// setup boilerplate route jsut to satisfy a request
// for building

var controller = require('./categoryController');

router.param('id', function(){});

router.route('/')
  .get(controller.get)
  .post(controller.post)


router.route('/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete)


module.exports = router;
