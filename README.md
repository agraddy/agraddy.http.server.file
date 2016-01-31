# agraddy.http.server.file

A simple file server.

MIT License

## Install

```npm install agraddy.http.server.file```

## Use

```
var file = require('agraddy.http.server.file');
var http = require('http');
var server;

server = http.createServer(file('location_of_file/example.htm'));

server.listen(8080);
```

## Todo

* Create an example directory with the above example (include step-by-step instructions from scratch and include assumptions).
* Explain how the test is setup

## Future Ideas (not implemented)
```
var file = require('agraddy.http.server.file');
var server;

server = file('location_of_file/example.htm');

server.listen(8080);
```

