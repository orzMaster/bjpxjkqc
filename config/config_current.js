module.exports = {
    name: 'bjpxjkqc',
    title: '北京平行进口汽车',
    express: {
        host: '127.0.0.1',
        port: 2222
    },
    db: {
        mongo: {
            host: '127.0.0.1',
            port: 27017,
            db: 'bjpxjkqc'
        },
        redis: {
            host: '127.0.0.1',
            port: 6379,
            seesion: 2,
            cache: 5,
            ttl: 3600 * 24, // one year (session TTL)
            secret: 'DE236320BAD4E4A9E6225633FBB6A852'
        },
    },
    cookie: {
        secret: 'B88DE5436EE95004794418102FCF94F8',
        name: 'bjpxjkqc',
        domain: ''
    },
    custom: {
        phone: '',
        email: ''
    }
};
