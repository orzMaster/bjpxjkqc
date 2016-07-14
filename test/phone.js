var cache = require('../private/util/cache')

cache.setCodeByPhone('18610283694', '131420', function(error, code) {
    console.log(code)
})

cache.getCodeByPhone('18610283694', function(error, code) {
    console.log(code)
})
