'use strict';

var express = require('express');
var router = express.Router();

var controller = require('./controller');

router.get('/', controller.index);

router.all('/login', controller.login);
router.get('/logout', controller.logout);
router.all('/register', controller.register);
router.post('/password', controller.password);

module.exports = router;
