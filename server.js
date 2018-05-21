/*
 * Write your server code in this file.
 */


var http = require('http');
var fs = require('fs');
var cache = {};

var html = fs.readFileSync('./public/index.html');
var css = fs.readFileSync('./public/style.css');
var js = fs.readFileSync('./public/index.js');
var Page404 = fs.readFileSync('./public/404.html');

console.log("testes");

var server = http.createServer(function(req,resp){
    if(req.url == '/index.html' || req.url == '/' || req.url == '/public/index.html'){
        resp.writeHead(200, {'Content-Type': 'text/html'});
        resp.write(html);
    }
    else if(req.url == '/404.html' || req.url == '/public/404.html'){
        resp.writeHead(404, {'Content-Type': 'text/html'});
        resp.write(Page404);
    }
    else if(req.url == '/style.css' || req.url == '/public/style.css'){
        resp.writeHead(200, {'Content-Type': 'text/css'});
        resp.write(css);
    }
    else if(req.url == '/index.js' || req.url == '/public/index.js'){
        resp.writeHead(200, {'Content-Type': 'application/javascript'});
        resp.write(js);
    }
    else{
        resp.writeHead(404, {'Content-Type': 'text/html'});
        resp.write(Page404);
    }

    resp.end();

});

//var ip = process.env.IP || "192.168.100.4";
var port = 3000;
server.listen(port);

//It didn't like it when I tried to specify an IP address.