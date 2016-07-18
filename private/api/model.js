var config = require('../../config')

var db = require('../util/db')(config.db.mongo.db),
    Brand = db.getCollection('brand'),
    Reservation = db.getCollection('reservation')

module.exports = {
    reserve_add: function(reserve, callback) {
        Reservation.insert(reserve, function(error) {
            callback(error, reserve)
        })
    },
    reserve_get: function(phone, callback) {
        Reservation.findOne({
            phone: phone
        }, callback)
    },
    reserve_delete: function(reserve, callback) {
        Reservation.remove({
            _id: reserve.id
        }, callback);
    },
    reserve_update: function(reserve, callback) {
        Reservation.updateById(reserve.id, {
            $set: {
                status: reserve.status
            }
        }, {
            new: true,
            upsert: true
        }, callback)
    },
    reserve_list: function(current, rowCount, callback) {
        Reservation.find({

        }, {

        }).toArray(function(error, reserves) {
            if (error) {
                callback(error)
            } else {
                Reservation.find({

                }, {
                    sort: [
                        ['reserveDatetime', -1],
                        ['status', -1]
                    ],
                    skip: rowCount * (current - 1),
                    limit: rowCount
                }).toArray(function(error, result) {
                    if (error) {
                        callback(error)
                    } else {
                        var data = {
                            current: current,
                            rowCount: rowCount,
                            rows: result,
                            total: reserves.length
                        }
                        callback(null, data)
                    }
                })
            }
        })
    },
    brand_add: function(brand, callback) {
        Brand.insert(brand, function(error) {
            callback(error, brand)
        })
    },
    brand_list: function(brand, callback) {
        Brand.find({

        }, {

        }).toArray(function(error, result) {
            if (error) {
                callback(error)
            } else {
                callback(null, result)
            }
        })
    }
}
