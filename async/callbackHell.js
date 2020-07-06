function hi(name, callback) {
    setTimeout( () => {
        console.log(`Hi, ${name}`);
        callback(name);
    }, 1500);
};

function talk(callback) {
    setTimeout( () => {
        console.log(`Te amo mi vida...`);
        callback();
    }, 1000);
};

function goodBye(name, callback) {
    setTimeout( () => {
        console.log(`Goodbye ${name}`);
        callback();
    }, 1000)
};

function conversation (name, times, callback) {
    if ( times > 0 ) {
        talk(function () {
            conversation(name, --times, callback);
        });
    } else {
        goodBye(name,callback);
    }
}

console.log('Starting process');
hi('Megan E.', function (name) {
    conversation(name, 3, function () {
        console.log('Process ended!!');
    });
})

/* hi('Megan E.', function (name) {
    goodBye(name, function () {
        console.log('We finished')
    })
});*/

// callback hell
/* hi('Megan' ,function (name) {
    talk(function () {
        talk(function () {
            talk(function () {
                goodBye(name, function () {
                    console.log('Ending process');
                });
            })
        });
    });
});*/