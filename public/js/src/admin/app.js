var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter();

var App = require('./app.vue');

var dashboard = require('./components/pages/dashboard.vue');
var upload = require('./components/pages/upload.vue');
var brand = require('./components/pages/brand/brand.vue');
var vehicle_list = require('./components/pages/vehicle/list.vue');
var vehicle_add = require('./components/pages/vehicle/add.vue');
var vehicle_import = require('./components/pages/vehicle/import.vue');
var reserve_list = require('./components/pages/reserve/list.vue');

router.redirect({
	'/': '/dashboard'
});

router.map({
	'/dashboard': {
		name: 'dashboard',
		component: Vue.extend(dashboard)
	},
	'/upload': {
		name: 'upload',
		component: Vue.extend(upload)
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
	'/vehicle/import': {
		name: 'vehicles_import',
		component: Vue.extend(vehicle_import)
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

router.start(App, '#app');
