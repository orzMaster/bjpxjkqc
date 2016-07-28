var config = require('../../config')
var path = require('path');
var MessageXSend = require('../service/submail/messageXSend')

var db = require('../util/db')(config.db.mongo.db),
    Brand = db.getCollection('brand'),
    Reservation = db.getCollection('reservation'),
    Vehicle = db.getCollection('vehicle')

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
                contact: reserve.contact,
                status: reserve.status,
                phone: reserve.phone
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
    brand_get_id: function(brand_name, callback) {
        Brand.findOne({
            name: brand_name
        }, callback)
    },
    brand_get: function(brand_id, callback) {
        Brand.findById(brand_id, callback)
    },
    brand_update: function(brand, callback) {
        Brand.updateById(brand.id, {
            $set: {
                name: brand.name,
                url: brand.url
            }
        }, {
            new: true,
            upsert: true
        }, callback)
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
    },
    vehicle_add: function(vehicle, callback) {
        Vehicle.insert(vehicle, function(error) {
            if (!error) {
                messageXSend.add_to(config.custom.phone);
                messageXSend.set_project('4Rfvk1');
                messageXSend.add_var('name', vehicle.contact);
                messageXSend.add_var('phone', vehicle.phone);
                messageXSend.add_var('datetime', vehicle.datetime);

                messageXSend.xsend(function(err, httpResponse, body) {
                    if (err) {
                        return console.error('upload failed:', err);
                    }

                    callback(error, vehicle)
                });
            }
            callback(error, vehicle)
        })
    },
    vehicle_import: function(vehicles, callback) {
        var index = 0
        for (var i in vehicles) {
            var vehicle = vehicles[i]
            this.brand_get_id(vehicle.brand, function(error, brand) {
                vehicle.brand = brand._id.toString()
                vehicle.type = vehicle.type == '期车' ? 'period' : 'present'
                vehicle.type = vehicle.type == '现车' ? 'present' : 'period'
                Vehicle.insert(vehicle, function(error) {
                    index += 1
                    if (index == vehicles.length) {
                        callback(null)
                    }
                })
            })
        }
    },
    vehicle_get: function(vehicle_id, callback) {
        Vehicle.findById(vehicle_id, callback)
    },
    vehicle_list: function(type, brand, current, rowCount, callback) {
        Vehicle.find({

        }, {

        }).toArray(function(error, vehicles) {
            if (error) {
                callback(error)
            } else {
                var query = {}
                if (type) {
                    query.type = type
                }
                if (brand) {
                    query.brand = brand
                }
                Vehicle.find(query, {
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
                            total: vehicles.length
                        }
                        callback(null, data)
                    }
                })
            }
        })
    }
}
