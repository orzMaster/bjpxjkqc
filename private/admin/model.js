'use strict'

var config = require('../../config')

var db = require('../util/db')(config.db.mongo.db),
    Account = db.getCollection('account'),
    Trademark = db.getCollection('trademark'),
    Commodity = db.getCollection('commodity'),
    Reservation = db.getCollection('reservation'),
    Users = db.getCollection('users')

module.exports = {
    account_add: function(account, callback) {
        Account.insert(account, function(error) {
            callback(error, account)
        })
    },
    account_get: function(username, callback) {
        Account.findOne({
            username: username
        }, function(error, account) {
            callback(error, account)
        })
    }
}
