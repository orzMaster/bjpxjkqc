'use strict';

var express = require('express');
var router = express.Router();

var controller = require('./controller');
var upload = require('./upload');

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

router.post('/reserve/list', controller.reserve_list);

router.post('/verify/code', controller.verify_code);
router.post('/verify/reserve', controller.verify_reserve);

router.post('/menu/list', controller.menu_list);
router.post('/user/info', controller.user_info);

router.post('/upload/file', upload.upload_file);
router.post('/upload/images', upload.upload_images);

module.exports = router;
