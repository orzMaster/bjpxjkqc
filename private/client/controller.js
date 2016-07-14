'use strict';

module.exports = {
    index: function(req, res, next) {
        res.render('client/index', {
            title: ''
        });
    }
}
