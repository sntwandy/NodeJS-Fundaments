let i = 0;
let interval = setInterval( () => {
    console.log('Hey!');
    if (i === 3) {
        clearInterval(interval);
    };
    i++;
}, 1000);

setImmediate( () => {
    console.log('Here!');
})