'use strict'

var async = require('async')
var redisFactory = require('./base_redis')
var config = require('../../config')
var helper = require('./helper')
var redisClient

var options = {
    host: config.db.redis.host,
    port: config.db.redis.port,
    db: config.db.redis.cache,
}

var phonecache = 60 * 10

function Cache(callback) {
    redisFactory.createClient(options, function(error, client) {
        if (error) {
            console.error('error', error)
            process.exit(1)
        }

        callback(error, client)
    })
}

module.exports = {
    setCodeByPhone: function(phone, code, callback) {
        Cache(function(error, client) {
            client.setex(
                'phone-date:' + phone,
                phonecache,
                JSON.stringify(code),
                function(error, status) {
                    if (error)
                        return callback(error, null)
                    else if (!code)
                        return callback(null, null)

                    callback(null, status)
                })
        })
    },
    getCodeByPhone: function(phone, callback) {
        Cache(function(error, client) {
            client.get(
                'phone-date:' + phone,
                function(error, code) {
                    if (error)
                        return callback(error, null)
                    else if (!code)
                        return callback(null, null)

                    callback(null, JSON.parse(code))
                })
        })
    }
}
