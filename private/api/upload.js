var fs = require('fs');
var moment = require('moment');
var multiparty = require('multiparty');
var path = require('path');
var model = require('./model');

module.exports = {
	upload_file: function(req, res, next) {
		//生成multiparty对象，并配置上传目标路径
		var form = new multiparty.Form({
			uploadDir: './public/upload/files/'
		});
		//上传完成后处理
		form.parse(req, function(err, fields, files) {
			var filesTmp = JSON.stringify(files, null, 2);

			if (err) {
				console.log('parse error: ' + err);
			} else {
				var inputFile = files.file[0];
				var uploadedPath = inputFile.path;
				var filename = moment().format('YYYYMMDDHHmmsssss_') + inputFile.originalFilename;
				var dstPath = './public/upload/files/' + filename;
				var staticPath = '/static/upload/files/' + filename;
				//重命名为真实文件名
				fs.rename(uploadedPath, dstPath, function(err) {
					if (err) {
						console.log('rename error: ' + err);
					} else {
						res.send({
							src: staticPath
						})
					}
				});
			}
		});
	},
	upload_images: function(req, res, next) {
		//生成multiparty对象，并配置上传目标路径
		var form = new multiparty.Form({
			uploadDir: './public/upload/images/'
		});
		//上传完成后处理
		form.parse(req, function(err, fields, files) {
			var filesTmp = JSON.stringify(files, null, 2);

			if (err) {
				console.log('parse error: ' + err);
			} else {
				var inputFile = files.file[0];
				var uploadedPath = inputFile.path;
				var filename = moment().format('YYYYMMDDHHmmsssss_') + inputFile.originalFilename;
				var dstPath = './public/upload/images/' + filename;
				var staticPath = '/static/upload/images/' + filename;

				//重命名为真实文件名
				fs.rename(uploadedPath, dstPath, function(err) {
					if (err) {
						console.log('rename error: ' + err);
					} else {
						res.send({
							src: staticPath
						})
					}
				});
			}
		});
	},
	upload_brand: function(req, res, next) {
		//生成multiparty对象，并配置上传目标路径
		var form = new multiparty.Form({
			uploadDir: './public/upload/brands/'
		});
		//上传完成后处理
		form.parse(req, function(err, fields, files) {
			var filesTmp = JSON.stringify(files, null, 2);

			if (err) {
				console.log('parse error: ' + err);
			} else {
				var inputFile = files.file[0];
				var uploadedPath = inputFile.path;
				var filename = moment().format('YYYYMMDDHHmmsssss_') + inputFile.originalFilename;
				var dstPath = './public/upload/brands/' + filename;
				var staticPath = '/static/upload/brands/' + filename;

				//重命名为真实文件名
				fs.rename(uploadedPath, dstPath, function(err) {
					if (err) {
						console.log('rename error: ' + err);
					} else {
						res.send({
							src: staticPath
						})
					}
				});
			}
		});
	},
	upload_vehicle: function(req, res, next) {
		//生成multiparty对象，并配置上传目标路径
		var form = new multiparty.Form({
			uploadDir: './public/upload/vehicles/'
		});
		//上传完成后处理
		form.parse(req, function(err, fields, files) {
			var filesTmp = JSON.stringify(files, null, 2);

			if (err) {
				console.log('parse error: ' + err);
			} else {
				var inputFile = files.file_data[0];
				var uploadedPath = inputFile.path;
				var filename = moment().format('YYYYMMDDHHmmsssss_') + inputFile.originalFilename;
				var dstPath = './public/upload/vehicles/' + filename;
				var staticPath = '/static/upload/vehicles/' + filename;

				//重命名为真实文件名
				fs.rename(uploadedPath, dstPath, function(err) {
					if (err) {
						console.log('rename error: ' + err);
					} else {
						var json = require(path.join(__dirname, '../../') + dstPath)
						res.send({
							length: json.length,
							path: dstPath,
							list: json
						})
					}
				});
			}
		});
	},
}
