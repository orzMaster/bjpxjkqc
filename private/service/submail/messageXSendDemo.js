var MessageXSend = require('./messageXSend.js');

var messageXSend = new MessageXSend();

messageXSend.add_to('18610283694');
messageXSend.set_project('lrs5I4');
messageXSend.add_var('type', '预约');
messageXSend.add_var('code', '123456');

messageXSend.xsend(function(err, httpResponse, body) {
	if (err) {
		return console.error('upload failed:', err);
	}

	var data = JSON.parse(body)
	console.log(data)
})
