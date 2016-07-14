'use strict'

var redis = require('redis')

module.exports = {
    createClient: function(options, callback) {
        var redisClient = redis.createClient(options.port, options.host)
        redisClient.select(options.db)
        redisClient.ready = false
        console.log("REDIS connection started:", options.host, options.port, options.db)

        var onErrorListener = function(error) {
            redisClient.ready = false
            console.log('%s - ERROR: Redis connection to %s:%s lost!', new Date, options.host, options.port)
            console.dir(error)
        }

        var onReadyListener = function() {
            redisClient.ready = true
            console.log('%s - Redis connection to %s:%s restaured', new Date, options.host, options.port)
        }

        var retryLeft = 3
        var onErrorCallback = function(error) {
            if (!--retryLeft) {
                return callback(error, null)
            }
        }

        var onReadyCallback = function() {

            redisClient.removeListener('error', onErrorCallback)
            redisClient.removeListener('ready', onReadyCallback)

            redisClient.ready = true

            redisClient.on('error', onErrorListener)
            redisClient.on('ready', onReadyListener)

            callback(null, redisClient)
        }

        redisClient.on('error', onErrorCallback)
        redisClient.on('ready', onReadyCallback)
    }
}
