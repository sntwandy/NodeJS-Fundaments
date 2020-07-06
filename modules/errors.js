function otherFunction() {
    broke();
}

function broke() {
    return 3 + z;
};

function brokeAsync(callback) {
    setTimeout( () => {
        try {
            return 3 + z;
        } catch(err) {
            console.error('Error async function');
            callback(err);
        }
    });
}

try {
    brokeAsync(function (err) {
        console.log('There is an error: ' + err)
    });
} catch(err) {
    console.error('Something is bad...');
    console.error(err.message);
};

console.log('This is in the End!!');