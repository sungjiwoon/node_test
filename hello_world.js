var http = require('http');

http.createServer(function handler(req, res) {
    res.writeHead (200, {'Content-type': 'text/plain'});
    res.end('Hello world!\n'); //응답으로 해 웹브라우저로 전송 

}).listen(1337, '127.0.0.1'); //1337 포트 번호를 요청 
console.log('Server running at http://127.0.0.1:1337');