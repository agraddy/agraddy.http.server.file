# agraddy.http.server.file

A simple file server.

MIT License

## Install

```npm install agraddy.http.server.file```

Or the shortcut version:

```npm install ag-file-server```

## Use

```
var file = require('agraddy.http.server.file');
// Or the shortcut version
//var file = require('ag-file-server');
var server;

server = file('location_of_file/example.htm');

server.listen(8080);
```

## Todo

* Create an example directory with the above example (include step-by-step instructions from scratch and include assumptions).
* Explain how the test is setup

## FAQ

Why dot notation instead of using scope or dashes?

It is just a personal preference. In my opinion, dots look clean and simple.
