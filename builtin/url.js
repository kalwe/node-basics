const http = require('http')
const url = require('url')
const fs = require('fs')

console.log(url.parse('https://google.com.br'))
console.log(url.resolve('https://medium.com/', '/@kalwe'))

// file server
http.createServer(function (req, res) {
	var q = url.parser(req.url, true)
	var filename = '.' + q.pathname
	fs.readFile(filename, function(err, data) {
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'})
			return res.end('404 Not Found')
		}
		res.writeHead(200, {'Content-Type': 'text/html'})
		res.write(data)
		return res.end()
	})
}).listen(3030)
