'use strict'

var config = require('../../config')

var errorHandler
if ('development' === config.nodeEnv) {
    errorHandler = devErrorHandler
} else {
    errorHandler = prodErrorHandler
}
module.exports.errorHandler = errorHandler

function devErrorHandler(error, req, res, next) {
    res.status(error.status)
    res.render('error', {
        title: '错误页',
        error: error
    })
}

function prodErrorHandler(error, req, res, next) {
    res.status(error.status)
    res.render('error', {
        title: '错误页',
        error: error
    })
}

// catch 404 and forward to error handler
module.exports.handler404 = function(req, res, next) {
    var error = new Error('Not Found: "' + req.originalUrl + '"')
    error.status = 404
    error.code = 404
    error.referer = req.headers['referer']

    next(error)
}

process.on('uncaughtException', function(error) {
    console.error('uncaughtException ERROR')
})
