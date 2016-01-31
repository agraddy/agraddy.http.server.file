var fs = require('fs');

module.exports = function(path_to_file, type) {
	return function(req, res) {
		var file = fs.createReadStream(path_to_file);

		if(type) {
			res.writeHead(200, {'Content-type': type});
		} else {
			res.writeHead(200, {'Content-type': 'text/html'});
		}
		file.pipe(res);
	}
};
