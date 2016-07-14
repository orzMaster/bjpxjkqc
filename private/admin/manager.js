'use strict'

var model = require('./model')

var helper = require('../util/helper')

module.exports = {
    account_add: function(account, callback) {
        account.password = helper.sha(account.password)
        model.account_add(account, function(error, account) {
            if (error) return callback(error)

            callback(null, account)
        })
    },
    account_get: function(account, callback) {
        var username = account.username
        var password = helper.sha(account.password)
        model.account_get(username, function(error, account) {
            if (error) return callback(error)

            callback(null, account)
        })
    }
}
