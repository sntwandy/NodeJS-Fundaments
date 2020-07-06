const fs = require('fs');

function read(path, callback) {
    fs.readFile(path, (err, data) => {
        // Readed
        callback(data.toString());
    });
};

function write(path, content, cb) {
    fs.writeFile(path, content, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Everything is okay');
        }
    });
};

function remove(path, callback) {
    fs.unlink(path, callback);
}

// remove(__dirname + '/file1.txt', console.log);
//read(__dirname + '/file.txt', console.log);
// write(__dirname + '/file1.txt', 'Im a new file!!', console.log);