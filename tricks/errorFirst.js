const { Z_ASCII } = require("zlib");
const { callbackify } = require("util");

function asyncFn(callback) {
    setTimeout( () => {
        try {
            let a = 3 + Z;
            callback(null, a);
        } catch(error) {
            callback(error);
        }
    }, 1000);
}


asyncFn(function (err, data) {
    if (err) {
        console.error(`We got an error: ${err}`);
        return false;
    }

    console.log(`My data was sucessfull: ${data}`);
});

console.log('Continues working');