function hi(name, callback) {
    setTimeout( () => {
        console.log(`Hi, ${name}`);
        callback(name);
    }, 1500);
};

function goodBye(name, callback) {
    setTimeout( () => {
        console.log(`Goodbye ${name}`);
        callback();
    }, 1000)
}

console.log('Starting process');

hi('Megan' ,function (name) {
    goodBye(name, function () {
        console.log('Ending process');
    });
});

// hi('Megan E.', function () {});
// goodBye('Megan E.', function () {});