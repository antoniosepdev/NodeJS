var http = require('http');
var dt= require('./miprimermodulo')


http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hola mundo! La fecha y hora actual: " + dt.myDateTime());
    res.end();
}).listen(8080);