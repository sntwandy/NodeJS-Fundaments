const http = require('http');

http.createServer(router).listen(3000);

function router(request, response) {
    console.log('New request');
    console.log(request.url);

    switch(request.url) {
        case '/hola':
        response.write('Hello, how are you?');
        response.end();
        break;
    default:
        response.write('Error: 404');
        response.end();
    }
    response.writeHead(201, {'Content-Type': 'text/plain'});
    response.write('Hello, I know to use http from NodeJS');

    response.end();
}

console.log('Listening http: 3000 port')