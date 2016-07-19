'use strict';

var express = require('express');
var router = express.Router();

var controller = require('./controller');
var upload = require('./upload');

router.post('/reserve/delete', controller.reserve_delete);
router.post('/reserve/update', controller.reserve_update);
router.post('/reserve/list', controller.reserve_list);

router.post('/verify/code', controller.verify_code);
router.post('/verify/reserve', controller.verify_reserve);

router.post('/menu/list', controller.menu_list);
router.post('/user/info', controller.user_info);

router.post('/upload/file', upload.upload_file);
router.post('/upload/images', upload.upload_images);
router.post('/upload/brand', upload.upload_brand);
router.post('/upload/vehicle', upload.upload_vehicle);

router.post('/brand/get', controller.brand_get);
router.post('/brand/update', controller.brand_update);
router.post('/brand/add', controller.brand_add);
router.post('/brand/list', controller.brand_list);

router.post('/vehicle/get', controller.vehicle_get);
router.post('/vehicle/add', controller.vehicle_add);
router.post('/vehicle/import', controller.vehicle_import);
router.post('/vehicle/list', controller.vehicle_list);

module.exports = router;
