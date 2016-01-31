var mod = require('../');
var test = require('tape');
var stream = require('stream');

test('Serve file', function(t) {
	var data;
	var req;
	// Create a write stream
	// From: http://stackoverflow.com/a/21583831
	var res = new stream.Writable();
	res._write = function(chunk, encoding, cb) {
		data = chunk.toString();
		cb();
	};

	// Setup
	t.plan(3);

	res.writeHead = function(code, headers) {
		t.equal(code, 200);
		t.equal(headers['Content-type'], 'text/html');
	}

	res.on('finish', function() {
		t.equal(data, '<test></test>\n');
	});

	// Run
	mod('test.htm')(req, res);
});
