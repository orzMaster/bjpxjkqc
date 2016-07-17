var fs = require('fs');
var moment = require('moment');
var multiparty = require('multiparty');

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
				console.log('parse files: ' + filesTmp);
				var inputFile = files.file[0];
				var uploadedPath = inputFile.path;
				var dstPath = './public/upload/files/' + moment().format('YYYYMMDDHHmmsssss_') + inputFile.originalFilename;
				//重命名为真实文件名
				fs.rename(uploadedPath, dstPath, function(err) {
					if (err) {
						console.log('rename error: ' + err);
					} else {
						console.log('rename ok');
					}
				});
			}
			ß
			res.writeHead(200, {
				'content-type': 'text/plain;charset=utf-8'
			});
			res.write('received upload:\n\n');
			res.end(util.inspect({
				fields: fields,
				files: filesTmp
			}));
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
				console.log('parse files: ' + filesTmp);
				var inputFile = files.file[0];
				var uploadedPath = inputFile.path;
				var dstPath = './public/upload/images/' + moment().format('YYYYMMDDHHmmsssss_') + inputFile.originalFilename;

				//重命名为真实文件名
				fs.rename(uploadedPath, dstPath, function(err) {
					if (err) {
						console.log('rename error: ' + err);
					} else {
						console.log('rename ok');
					}
				});
			}

			res.writeHead(200, {
				'content-type': 'text/plain;charset=utf-8'
			});
			res.write('received upload:\n\n');
			res.end(util.inspect({
				fields: fields,
				files: filesTmp
			}));
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
				console.log('parse files: ' + filesTmp);
				var inputFile = files.file[0];
				var uploadedPath = inputFile.path;
				var dstPath = './public/upload/brands/' + moment().format('YYYYMMDDHHmmsssss_') + inputFile.originalFilename;
				var staticPath = '/static/upload/brands/' + moment().format('YYYYMMDDHHmmsssss_') + inputFile.originalFilename;

				//重命名为真实文件名
				fs.rename(uploadedPath, dstPath, function(err) {
					if (err) {
						console.log('rename error: ' + err);
					} else {
						console.log('rename ok');
						res.send({
							src: staticPath
						})
					}
				});
			}
		});
	}
}
