const { exec, spawn, stdout, stderr } = require('child_process');

/* exec('node modules/console.js', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return false;
    };

    console.log(stdout);
}); */

let proceso = spawn('ls', ['-la']);

console.log(process.pid);
console.log(process.connected);

proceso.stdout.on('data', function (dato) {
    console.log(process.killed);
    console.log(dato.toString());
});

proceso.on('exit', function () {
    console.log('The process ended!!');
    console.log(proceso.killed);
});