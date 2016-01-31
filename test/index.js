var mod = require('../');
var http = require('http');
var test = require('tape');
var stream = require('stream');

test('Server', function(t) {
	var port;
	var server;
	
	// Run
	server = mod('test/test.htm').listen(0, function() {
		port = server.address().port;

		http.get('http://127.0.0.1:' + port + '/', function(res) {
			var body = '';

			t.equal(res.statusCode, 200);
			t.equal(res.headers['content-type'], 'text/html');

			res.on('data', function(chunk) {
				body += chunk;
			});
			res.on('end', function() {
				t.equal(body, '<test></test>\n');
				t.end();
				server.close();
			});
		});



	});
});
