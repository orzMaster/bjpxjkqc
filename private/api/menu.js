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
		menu_id: 8,
		sub_id: 3,
		title: '添加车辆',
		category: 'add',
		class: '',
		url: '/add',
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

var user_info = {
	email: "admin@admin.com",
	full_name: "admin",
	password: "",
	gender: "",
	birthday: "",
	picture: "/static/images/admin/profile-pics/1.jpg",
	groups: [],
	status: "",
	contact: {
		address: "",
		mobile_phone: "",
		email_address: "",
		twitter: "",
		skype: "",
		facebook: "",
		QQ: "",
		sina: "",
		weixin: ""
	}
}

module.exports.user_info = user_info

var group = {
	name: "",
	description: "",
	group_type: "",
	level: 0,
	score: 0,
	team: {
		leader: [],
		members: []
	}
}

module.exports.group = group

var messages = {
	title: 'Messages',
	count: 3,
	data: [{
		title: 'David Belle',
		picture: '/static/images/admin/profile-pics/1.jpg',
		conent: 'Cum sociis natoque penatibus et magnis dis parturient montes'
	}, {
		title: 'Jonathan Morris',
		picture: '/static/images/admin/profile-pics/2.jpg',
		conent: 'Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel'
	}, {
		title: 'Fredric Mitchell Jr.',
		picture: '/static/images/admin/profile-pics/3.jpg',
		conent: 'Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies'
	}]
}

module.exports.messages = messages

var notifications = {
	title: 'Notification',
	count: 2,
	data: [{
		title: 'David Belle',
		picture: '/static/images/admin/profile-pics/1.jpg',
		conent: 'Cum sociis natoque penatibus et magnis dis parturient montes'
	}, {
		title: 'Jonathan Morris',
		picture: '/static/images/admin/profile-pics/2.jpg',
		conent: 'Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel'
	}]
}

module.exports.notifications = notifications

var tasks = {
	title: 'Tasks',
	count: 5,
	data: [{
		task_id: 1,
		task_title: 'HTML5 Validation Report',
		progress: {
			type: '',
			now: 95,
			min: 0,
			max: 100
		}
	}, {
		task_id: 2,
		task_title: 'Google Chrome Extension',
		progress: {
			type: 'success',
			now: 80,
			min: 0,
			max: 100
		}
	}, {
		task_id: 3,
		task_title: 'Social Intranet Projects',
		progress: {
			type: 'info',
			now: 20,
			min: 0,
			max: 100
		}
	}, {
		task_id: 4,
		task_title: 'Bootstrap Admin Template',
		progress: {
			type: 'warning',
			now: 60,
			min: 0,
			max: 100
		}
	}, {
		task_id: 5,
		task_title: 'Youtube Client App',
		progress: {
			type: 'danger',
			now: 80,
			min: 0,
			max: 100
		}
	}]
}

module.exports.tasks = tasks

var setting = {

}

module.exports.setting = setting
