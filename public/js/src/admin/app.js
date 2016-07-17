var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter();

var App = require('./app.vue');

var dashboard = require('./components/pages/dashboard.vue');
var brand = require('./components/pages/brand/brand.vue');
var vehicle_list = require('./components/pages/vehicle/list.vue');
var vehicle_add = require('./components/pages/vehicle/add.vue');
var reserve_list = require('./components/pages/reserve/list.vue');

router.redirect({
	'/': '/dashboard'
});

router.map({
	'/dashboard': {
		name: 'dashboard',
		component: Vue.extend(dashboard)
	},
	'/brand': {
		name: 'brand',
		component: Vue.extend(brand)
	},
	'/vehicle': {
		name: 'vehicles',
		component: Vue.extend(vehicle_list)
	},
	'/vehicle/list': {
		name: 'vehicles_list',
		component: Vue.extend(vehicle_list)
	},
	'/vehicle/add': {
		name: 'vehicles_add',
		component: Vue.extend(vehicle_add)
	},
	'/reserve': {
		name: 'reserve',
		component: Vue.extend(reserve_list)
	},
	'/reserve/list': {
		name: 'reserve_list',
		component: Vue.extend(reserve_list)
	}
});

router.beforeEach(function(transition) {
	try {
		console.log('即将浏览到: ' + transition.to.path);
		transition.next();
	} catch (e) {
		transition.abort()
		console.log('route caught', e)
	}
});

router.afterEach(function(transition) {
	console.log('成功浏览到: ' + transition.to.path);
});

router.start(App, '#app');
