// const p = require('precess');

process.on('beforeExit', () => {
    console.log('The process will to end');
});

process.on('exit', () => {
    console.log('The process is ended');
    setTimeout(() => {
        console.log('Never look!');
    }, 0)
});

process.on('uncaughtException', (error, origin) => {
    console.error('Hey, we forgot the handler the error');
    console.error(error.message);
});

// process.on('uncaughtRejection');