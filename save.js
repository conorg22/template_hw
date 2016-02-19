var fs = require("fs");

module.exports = {
    save: function (filename, data) {
        fs.writeFile(filename, data, function (err) {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Saved file: ", filename)
        });
    },
    load: function (filename, callback) {
        fs.readFile(filename, function (err, data) {
            if (err) {
                console.log(err);
                return;
            }
            callback(data);
        });
    }
};