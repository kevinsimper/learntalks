var http = require('http')

var server = http.createServer(function (req, res) {
  res.end('Hello Learn talks!')
})

var port = 9000
server.listen(port, function () {
  console.log('Listening on ' + port)
})
