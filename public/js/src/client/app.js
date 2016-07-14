var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter();

var App = require('./app.vue');

var home = require('./components/pages/home.vue');
var vehicles = require('./components/pages/vehicles.vue');
var info = require('./components/pages/info.vue');
var reserve = require('./components/pages/reserve.vue');
var buy = require('./components/pages/buy.vue');
var contact = require('./components/pages/contact.vue');

router.redirect({
    '/': '/home'
});

router.map({
    '/home': {
        name: 'home',
        component: Vue.extend(home)
    },
    '/info': {
        name: 'info',
        component: Vue.extend(info)
    },
    '/vehicles': {
        name: 'vehicles',
        component: Vue.extend(vehicles)
    },
    '/reserve': {
        name: 'reserve',
        component: Vue.extend(reserve)
    },
    '/buy': {
        name: 'buy',
        component: Vue.extend(buy)
    },
    '/contact': {
        name: 'contact',
        component: Vue.extend(contact)
    }
});

router.beforeEach(function(transition) {
    console.log('即将浏览到: ' + transition.to.path);
    transition.next();
});

router.afterEach(function(transition) {
    console.log('成功浏览到: ' + transition.to.path);
});

router.start(App, '#app');
