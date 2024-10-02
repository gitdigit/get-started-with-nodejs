// Import a module
const http = require('http')
const serverHandle = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello WorldE\n');
}
const server = http.createServer(serverHandle);
server.listen(8080)  
