console.time('All code');

let sum = 0;

console.time('Bucle');

for (let i = 0; i < 100000000; i++) {
    sum += 1;
};

console.timeEnd('Bucle');

let sum2 = 0;
console.time('Bucle 2');
for (let i = 0; i < 100000000; i++) {
    sum2 += 1;
};
console.timeEnd('Bucle 2');

console.time('Async');
asyncFn()
    .then( () => {
        console.timeEnd('Async')
    })

console.timeEnd('All code');

function asyncFn() {
    return new Promise( (res) => {
        setTimeout( () => {
            console.log('Async fn end');
            res();
        }, 1000)
    });
}