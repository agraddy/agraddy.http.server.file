var handler = require('agraddy.http.server.file.handler');
var fs = require('fs');
var http = require('http');

module.exports = function(file, type) {
	return http.createServer(handler(file, type));
}
