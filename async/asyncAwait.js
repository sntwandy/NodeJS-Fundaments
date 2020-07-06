async function hi(name) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log(`Hi, ${name}`);
            resolve(name);
        }, 1500);
    } );
};

async function talk(name) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log(`Te amo mi vida...`);
            resolve(name);
            // reject('Error')
        }, 1000);
    } );
};

async function goodBye(name) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log(`Goodbye ${name}`);
            resolve();
        }, 1000)
    });
};

async function main() {
    let name = await hi('Megan E.');
    await talk();
    await talk();
    await talk();
    await goodBye(name);
    console.log('The process is ended');
};

console.log('Starting the process..');
main();