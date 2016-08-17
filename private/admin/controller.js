'use strict';

var config = require('../../config');
var manager = require('./manager');
var helper = require('../util/helper');
var chineseDays = {
	0: '日',
	1: '一',
	2: '二',
	3: '三',
	4: '四',
	5: '五',
	6: '六',
};

module.exports = {
	index: function(req, res, next) {
		if (!req.session.user) {
			return res.render(
				'admin/login', {
					title: config.title
				}
			)
		}

		res.render(
			'admin/index', {
				title: config.title
			}
		)
	},
	login: function(req, res, next) {
		switch (req.method) {
			case 'GET':
				{
					if (!req.session.user) {
						return res.render(
							'admin/login', {
								title: config.title
							}
						)
					}

					res.render(
						'admin/index', {
							title: config.title
						}
					)
					break
				}
			case 'POST':
				{
					manager.account_get(req.body, function(error, account) {
						if (error) {
							req.flash('error', '帐号不存在!')
							return res.render(
								'admin/login', {
									title: config.title
								}
							)
						}

						if (account) {
							var password = helper.sha(req.body.password)
							if (password != account.password) {
								req.flash('error', '密码不正确!')
								return res.render(
									'admin/login', {
										title: config.title
									}
								)
							} else {
								req.session.user = account
								return res.render(
									'admin/index', {
										title: config.title
									}
								)
							}
						} else {
							req.flash('error', '帐号不存在!')
							return res.render(
								'admin/login', {
									title: config.title
								}
							)
						}
					})
					break
				}
		}
	},
	logout: function(req, res, next) {
		req.session.user = null
		req.flash('info', '已退出当前用户')
		res.redirect('login')
	},
	register: function(req, res, next) {
		switch (req.method) {
			case 'POST':
				{
					manager.account_add(req.body, function(error, account) {
						req.session.user = account
						res.render(
							'admin/index', {
								title: config.title
							}
						)
					})
					break
				}
		}
	},
	password: function(req, res, next) {
		switch (req.method) {
			case 'POST':
				{
					console.log(req.body)
					break
				}
		}
	}
}
