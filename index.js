// Import a module
const http = require('http')
const serverHandle = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(content);
    res.end();
}
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'       <p>Hello World!</p>' +
'    </body>' +
'</html>'
const server = http.createServer(serverHandle);
server.listen(8080)  
