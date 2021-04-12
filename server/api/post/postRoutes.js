var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./postController');
var auth = require('../../auth/auth');


var checkUser = [auth.decodeToken(), auth.getFreshUser()];
// setup boilerplate route jsut to satisfy a request
// for building

// lock down the right routes :)
router.param('id', controller.params);

router.route('/')
  .get(
  (req, res, next)=>{
    logger.log('HEEY in middleware');
    next()
  },
  controller.get)
  .post(checkUser, controller.post)

router.route('/:id')
  .get(controller.getOne)
  .put(checkUser, controller.put)
  .delete(checkUser, controller.delete)

module.exports = router;
