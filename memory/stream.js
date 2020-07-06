const fs = require('fs');
const stream = require('stream');
const util = require('util');
const server = require('http').createServer();

server.on('request', (req, res) => {
    const src = fs.createReadStream(__dirname + '/input.txt');
    src.pipe(res);
});

server.listen(3000);


let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

// readableStream.setEncoding('UTF-8');

// readableStream.on('data', (chunk) => data += chunk);

// readableStream.on('end', () => console.log(data));

// process.stdout.write('Hi');
// process.stdout.write('How are you?');
// process.stdout.write('Yes');

const transform = stream.Transform;

function Mayus() {
    transform.call(this);
};

util.inherits(Mayus, transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
};

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);