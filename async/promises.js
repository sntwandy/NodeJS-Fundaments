function hi(name) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log(`Hi, ${name}`);
            resolve(name);
        }, 1500);
    } );
};

function talk(name) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log(`Te amo mi vida...`);
            // resolve(name);
            reject('Error')
        }, 1000);
    } );
};

function goodBye(name) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log(`Goodbye ${name}`);
            resolve();
        }, 1000)
    });
};

console.log('Initializing the process...');

hi('Megan E.')
    .then( talk )
    .then( goodBye )
    .then( (name) => console.log('Process ended'))
    .catch(err => console.error(`There is an Error: ${err}`));