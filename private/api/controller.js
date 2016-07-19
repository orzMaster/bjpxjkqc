'use strict'

var manager = require('./manager');
var model = require('./model')
var moment = require('moment')
var multiparty = require('multiparty')
var util = require('util')
var fs = require('fs')

module.exports = {
	menu_list: function(req, res, next) {
		manager.menu_list(req.body, function(error, data) {
			res.send(data)
		})
	},
	user_info: function(req, res, next) {
		res.send(req.session.user)
	},
	verify_code: function(req, res, next) {
		manager.verify_code(req.body, function(error, data) {
			res.send({
				error: error,
				code: data.code,
				datatime: data.datatime
			})
		})
	},
	verify_reserve: function(req, res, next) {
		manager.verify_reserve(req.body, function(error, reserve) {
			var code = 1
			if (error && reserve) {
				code = 2
			}
			res.send({
				code: code,
				datetime: reserve.reserveDatetime
			})
		})
	},
	reserve_delete: function(req, res, next) {
		manager.reserve_delete(req.body, function(error, data) {
			res.send(data)
		})
	},
	reserve_update: function(req, res, next) {
		manager.reserve_update(req.body, function(error, data) {
			res.send(data)
		})
	},
	reserve_list: function(req, res, next) {
		manager.reserve_list(req.body, function(error, data) {
			res.send(data)
		})
	},
	brand_get: function(req, res, next) {
		manager.brand_get(req.body, function(error, data) {
			res.send(data)
		})
	},
	brand_update: function(req, res, next) {
		manager.brand_update(req.body, function(error, data) {
			res.send(data)
		})
	},
	brand_add: function(req, res, next) {
		manager.brand_add(req.body, function(error, data) {
			res.send(data)
		})
	},
	brand_list: function(req, res, next) {
		manager.brand_list(req.body, function(error, data) {
			res.send(data)
		})
	},
	vehicle_add: function(req, res, next) {
		manager.vehicle_add(req.body, function(error, data) {
			res.send(data)
		})
	},
	vehicle_import: function(req, res, next) {
		manager.vehicle_import(req.body, function(error, data) {
			res.send(data)
		})
	},
	vehicle_get: function(req, res, next) {
		manager.vehicle_get(req.body, function(error, data) {
			res.send(data)
		})
	},
	vehicle_list: function(req, res, next) {
		manager.vehicle_list(req.body, function(error, data) {
			res.send(data)
		})
	}
}
