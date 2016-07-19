'use strict'

var menus = [{
	menu_id: 1,
	sub_id: 1,
	title: '系统信息',
	category: 'dashboard',
	class: 'zmdi zmdi-home',
	url: '/dashboard',
	active: false,
	sub: false,
	open: false,
	menus: []
}, {
	menu_id: 2,
	sub_id: 0,
	title: '品牌管理',
	category: 'vehicles',
	class: 'zmdi zmdi-assignment',
	url: '/brand',
	active: false,
	sub: false,
	open: false,
	menus: []
}, {
	menu_id: 3,
	sub_id: 0,
	title: '车辆管理',
	category: 'vehicles',
	class: 'zmdi zmdi-assignment',
	url: '/vehicle',
	active: false,
	sub: true,
	open: false,
	menus: [{
		menu_id: 7,
		sub_id: 3,
		title: '车辆列表',
		category: 'list',
		class: '',
		url: '/list',
		active: false
	}, {
		menu_id: 9,
		sub_id: 3,
		title: '导入车辆',
		category: 'import',
		class: '',
		url: '/import',
		active: false
	}]
}, {
	menu_id: 4,
	sub_id: 0,
	title: '预约管理',
	category: 'notepad',
	class: 'zmdi zmdi-assignment',
	url: '/reserve',
	active: false,
	sub: true,
	open: false,
	menus: [{
		menu_id: 6,
		sub_id: 3,
		title: '预约列表',
		category: 'list',
		class: '',
		url: '/list',
		active: false,
		sub: false,
		open: false,
		menus: []
	}]
}]

module.exports.menus = menus
