var express = require('express');
var app = express();
var config = require('./config')

var ejs = require('ejs')
app.engine('.html', ejs.__express)
app.set('view engine', 'html')

var path = require('path');
app.set('views', path.join(__dirname, 'views'));

var favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

var morgan = require('morgan')
if ('development' === config.nodeEnv) {
    app.use(morgan('dev'))
} else {
    app.use(morgan('common'))
}

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

var cookieParser = require('cookie-parser');
app.use(cookieParser(config.cookie.secret))

app.use('/static', express.static(path.join(__dirname, 'public')));

var session = require('express-session')
var RedisStore = require('connect-redis')(session)
app.use(session({
    store: new RedisStore({
        host: config.db.redis.host,
        port: config.db.redis.port,
        db: config.db.redis.seesion,
        ttl: config.db.redis.ttl
    }),
    secret: config.db.redis.secret,
    resave: true,
    saveUninitialized: true,
    name: config.cookie.name,
    // cookie: { domain: config.host }
}))

var flash = require('connect-flash')
app.use(flash())

app.use(function(req, res, next) {
    var info = req.flash('info');
    res.locals.info = info.length ? info : null;

    var error = req.flash('error');
    res.locals.error = error.length ? error : null;

    var success = req.flash('success');
    res.locals.success = success.length ? success : null;
    next();
});

var routes = require('./routes/index');
routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            title: config.name,
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        title: config.name,
        message: err.message,
        error: {}
    });
});


module.exports = app;
