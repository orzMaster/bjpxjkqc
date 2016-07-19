'use strict'

var moment = require('moment')

var model = require('./model')
var menu = require('./menu')
var MessageXSend = require('../service/submail/messageXSend')
var helper = require('../util/helper')
var cache = require('../util/cache')

module.exports = {
	menu_list: function(body, callback) {
		callback(null, menu.menus)
	},
	verify_code: function(body, callback) {
		var phone = body.phone
		var code = helper.rid(6, 'n')
		var messageXSend = new MessageXSend();

		model.reserve_get(phone, function(error, reserve) {
			if (reserve) {
				if (moment(moment(reserve.createDatetime).format('YYYY-MM-DD')).isSame(moment().format('YYYY-MM-DD'))) {
					callback(null, {
						code: -1,
						datetime: reserve.reserveDatetime
					})
				}
			}
		})

		cache.setCodeByPhone(phone, code, function(error, status) {
			messageXSend.add_to(phone);
			messageXSend.set_project('lrs5I4');
			messageXSend.add_var('type', '预约');
			messageXSend.add_var('code', code);

			messageXSend.xsend(function(err, httpResponse, body) {
				if (err) {
					return console.error('upload failed:', err);
				}

				var data = JSON.parse(body)
				if (data.status == "error") {
					callback(body, null)
				}

				callback(null, {
					code: code
				})
			});
		})
	},
	verify_reserve: function(body, callback) {
		body.status = "reserve"
		body.createDatetime = moment().format('YYYY-MM-DD HH:mm:ss')

		model.reserve_get(body.phone, function(error, reserve) {
			if (reserve) {
				if (moment(moment().format('YYYY-MM-DD')).isAfter(moment(reserve.createDatetime).format('YYYY-MM-DD'))) {
					model.reserve_add(body, callback)
				} else {
					callback(true, reserve)
				}
			} else {
				model.reserve_add(body, callback)
			}
		})
	},
	reserve_delete: function(body, callback) {
		model.reserve_delete(body, callback)
	},
	reserve_update: function(body, callback) {
		model.reserve_update(body, callback)
	},
	reserve_list: function(body, callback) {
		var id = body.id
		var current = parseInt(body.current)
		var rowCount = parseInt(body.rowCount)
		var searchPhrase = body.searchPhrase

		model.reserve_list(current, rowCount, callback)
	},
	brand_get: function(body, callback) {
		model.brand_get(body.brand_id, callback)
	},
	brand_update: function(body, callback) {
		model.brand_update(body, callback)
	},
	brand_add: function(body, callback) {
		model.brand_add(body, callback)
	},
	brand_list: function(body, callback) {
		model.brand_list(body, callback)
	},
	vehicle_add: function(body, callback) {
		model.vehicle_add(body, callback)
	},
	vehicle_import: function(body, callback) {
		var vehicles = require('../.' + body.path)
		model.vehicle_import(vehicles, callback)
	},
	vehicle_get: function(body, callback) {
		model.vehicle_get(body.vehicle_id, callback)
	},
	vehicle_list: function(body, callback) {
		var id = body.id
		var type = body.type
		var brand = body.brand
		var current = parseInt(body.current)
		var rowCount = parseInt(body.rowCount)
		var searchPhrase = body.searchPhrase

		model.vehicle_list(type, brand, current, rowCount, callback)
	}
}
