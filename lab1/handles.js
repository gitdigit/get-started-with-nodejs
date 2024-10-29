const url = require('url');
const qs = require('querystring');

module.exports = {
    serverHandle: function (req, res) {
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
      

        if (path === '/'){
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('The Hello page takes your name in parameter and tells you hello');
            res.end();
        }
      
        if (path === '/hello'){
            if('name' in params) {
                const name = params['name'];
                if (name.toLowerCase() === 'jennifer'){
                    res.write('Hello, Jennifer ! You are great');}
                else{
                    res.write(`Hello ${name}`); 
                }
            }   
            else{
                res.write('Hello anonymous');
            }
        res.end();
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found');
        res.end();
    }
  }
}; 