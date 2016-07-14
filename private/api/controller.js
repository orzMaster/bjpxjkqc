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
        manager.user_info(req.body, function(error, data) {
            res.send(data)
        })
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
    reserve_list: function(req, res, next) {
        manager.reserve_list(req.body, function(error, data) {
            res.send(data)
        })
    }
}
