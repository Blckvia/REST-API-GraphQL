const path = require('path');
const fs = require('fs');

// I want to trigger that clearImage func when ever
// I uploaded a new image
const clearImage = (filePath) => {
    filePath = path.join(__dirname, '..', filePath);
    // unlink func created to delete file
    fs.unlink(filePath, (err) => console.log(err));
};

exports.clearImage = clearImage;
