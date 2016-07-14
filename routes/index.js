'use strict'

module.exports = function(app) {
    app.get('/ping', function(req, res) {
        res.end('OK')
    })

    app.post('/ping', function(req, res) {
        res.end('OK')
    })

    app.use('/', require('../private/client/router'))

    app.use('/admin/', require('../private/admin/router'))

    app.use('/api/', require('../private/api/router'))

    var errorHandler = require('../private/util/error_handler')
    app.use(errorHandler.handler404)
    app.use(errorHandler.errorHandler)
}
