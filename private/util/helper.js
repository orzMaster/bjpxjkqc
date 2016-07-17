'use strict';

var crypto = require('crypto');

module.exports = {
	sha: function(s) {
		var shasum = crypto.createHash('sha1');
		shasum.update(s);
		return shasum.digest('hex');
	},
	md5: function(s) {
		var md5 = crypto.createHash('md5');
		md5.update(s);
		return md5.digest('hex');
	},
	ran: function(n, m) {
		return Math.round(Math.random() * (m - n) + n);
	},
	rid: function(length, type) {
		var obj = {
			n: '1234567890',
			a: 'abcdefghizklmnopqrstuvwsyz',
			A: 'ABCDEFGHIZKLMNOPQRSTUVWSYZ',
			s: '~!@#$%^&*()_+;,./?<>'
		};
		var arr = [];
		var pw = '';
		if (type.indexOf('n') !== -1) arr.push(obj.n);
		if (type.indexOf('a') !== -1) arr.push(obj.a);
		if (type.indexOf('A') !== -1) arr.push(obj.A);
		if (type.indexOf('s') !== -1) arr.push(obj.s);
		for (var i = 0; i < length; i++) {
			var j = this.ran(0, arr.length - 1);
			var k = this.ran(0, arr[j].length - 1);
			pw += arr[j].charAt(k);
		}
		return pw;
	},

	// 扩展Objects属性
	// example: srcObj = {a: 1, b:2}; destObj = {c: 3}
	// objectExtend(srcObj, destObj) == {a: 1, b: 2, c: 3}
	objectExtend: function(srcObj, destObj) {
		srcObj = srcObj || {};
		for (var key in destObj) {
			if (!srcObj[key]) {
				srcObj[key] = destObj[key];
			}
		}
		return srcObj;
	}
};
