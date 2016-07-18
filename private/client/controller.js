'use strict';

var config = require('../../config')

module.exports = {
    index: function(req, res, next) {
        res.render('client/index', {
            title: config.title
        });
    }
}
