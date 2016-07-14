var MessageXSend = require('./messageXSend.js');

var messageXSend = new MessageXSend();

messageXSend.add_to('18610283694');
messageXSend.set_project('lrs5I4');
messageXSend.add_var('type', '预约');

messageXSend.xsend();
